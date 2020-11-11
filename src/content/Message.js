import Emotes from './Emotes';
import PersistentSyncStorage from 'src/helpers/PersistentSyncStorage';

class Message {
  constructor(messageNode) {
    this.node = messageNode;
    this.id = this.node.id; // this.id should not be used to reference the node, dom id changes due to optimisitc updates
    this.hasEmotes = null;
    this.observer = null;
    this.parsedText = ''; // This should be fine since you can't edit/change messages
    
    this.parseText();
    this.setDefaultSelections();
  
    if(this.hasEmotes) {
      this.node.setAttribute('message-id', this.id);
      this.setHtml();
      this.watch();
    }
  }

  get textNode() {
    const node = this.node.querySelector('#message');
    return {
      node,
      text: node.innerText
    };
  }

  parseText() {
    const rawWords = this.textNode.text.split(' ');

    for(let i = 0, length = rawWords.length; i < length; i++) {
      const word = this.parseIllegalCharcters(rawWords[i]);
      const emote = Emotes.get(word);

      //console.log(Emotes.get(word));

      
      if(typeof emote === 'undefined') {
        this.parsedText += word + ' ';
      } else {
        this.hasEmotes = true;
        this.parsedText += emote.html + ' ';
      }
    }
  }

  watch() {
    this.observer = new MutationObserver(mutations => {
      let emoteRemoved = false;

      mutations.forEach(mutation => {
        if(typeof mutation.removedNodes === 'undefined') return;
        if(mutation.removedNodes.length <= 0) return; // This must be after undefined check

        for(let i = 0, length = mutation.removedNodes.length; i < length; i++) {
          const removedNode = mutation.removedNodes[i];
          if(typeof removedNode.className === 'string' && // check if className exists, is 'SVGAnimatedString' when window resized and removed 
              ~removedNode.className.indexOf('Emote') !== 0) {
            emoteRemoved = true;
          }
        }

      });

      if(emoteRemoved && document.body.contains(this.node)) {
        this.setHtml();
      }
    });

    this.observer.observe(this.node, {
      childList: true,
      attributes: false,
      characterData: false,
      subtree: true
    });
  }

  setHtml() {
    this.textNode.node.innerHTML = this.parsedText;
  }

  parseIllegalCharcters(word) {
    // ﻿ === 'ZERO WIDTH NO-BREAK SPACE'
    return word.replace('﻿', '').trim();
  }
  
  destroy() {
    if(this.observer !== null) {
      this.observer.disconnect();
      this.observer = null;
    }
  }

  ///////////////////////////////////////////////////////////////////

  // Setting Options for Each Message
  setDefaultSelections(){

    ///////////////////////////////////////////////////////////////////

    //  Checks for kappa and replaces emoji element with kappa
    if(PersistentSyncStorage.data.options.kappaFix) {

      var stupidKappa = document.querySelectorAll('#message.yt-live-chat-text-message-renderer .emoji.yt-live-chat-text-message-renderer');
      
      for (let index = 0; index < stupidKappa.length; index++) {
        const stupidElement = stupidKappa[index];
        var stupidToolTip = stupidElement.getAttribute('shared-tooltip-text');

        if(stupidToolTip == ':full_moon_face:'){
          const newSpan = document.createElement('span');
          newSpan.classList.add('Emote');
          newSpan.innerHTML = '<img src="https://static-cdn.jtvnw.net/emoticons/v1/25/3.0" alt="kappa">';

          stupidElement.parentNode.replaceChild(newSpan, stupidElement);
        }
      }   
    }
    ///////////////////////////////////////////////////////////////////

    //Set Author Colors
    if(PersistentSyncStorage.data.options.setAuthorColor && this.node.getAttribute('author-type') !== 'owner') {
      this.setAuthorColor();
    }

    ///////////////////////////////////////////////////////////////////

    // Author Icons
    var author_photo = this.node.querySelector('#author-photo');

    // Set Hide Author Icons
    if (PersistentSyncStorage.data.options.hideAuthorIcons) {
      author_photo.classList.add("hideElement");
    }

    // TimeStamp
    var timestamp = this.node.querySelector('#timestamp');

    // Set Show TimeStamp
    if (PersistentSyncStorage.data.options.showTimeStamp) {
      this.node.classList.add("showTimeStamp");
    }

    
    ///////////////////////////////////////////////////////////////////
    
    // Author Name @ auto paste in text area
    this.node.querySelector('#author-name').addEventListener("click", function(){
      var inputArea = document.querySelector('#input.yt-live-chat-text-input-field-renderer');
      var inputAreaLabel = document.querySelector('#label.yt-live-chat-text-input-field-renderer');
      inputArea.innerText = "@" + this.innerText;
      const textLength = inputArea.innerText.length;
      inputArea.focus();
      inputAreaLabel.innerText = "";
    });
  
    ///////////////////////////////////////////////////////////////////
  
    // Set Font Size
    var textSizeSlider = PersistentSyncStorage.data.options.textSizeSlider;  

    if (PersistentSyncStorage.data.options.allowTextSlider) {
      this.node.setAttribute('style', 'font-size:' + textSizeSlider + 'px' + '!important');
      this.node.classList.add("AuthorFix");
    }
  
    ///////////////////////////////////////////////////////////////////
  
    //  Set Twitch Styling
    if (PersistentSyncStorage.data.options.setTwitchColors) {
      this.node.classList.add("setTwitchColors");
      author_photo.classList.add("hideElement");
    }
      
    ///////////////////////////////////////////////////////////////////
  
  }// end setDefaultSelections

  setAuthorColor() {
    
    let imageSrc = null;
    
    if(this.node.hasChildNodes && this.node.contains(this.node.querySelector('#author-photo'))){

      if(this.node.querySelector('#author-photo').querySelector('img').src != null){
        imageSrc = this.node.querySelector('#author-photo').querySelector('img').src;     

        const idRegexp = /\/-([A-Za-z-_\d])/;

        try {
          if(idRegexp.exec(imageSrc) !== null){
            const parsedSRC = idRegexp.exec(imageSrc)[1];
            this.node.classList.add(`chat-color-${parsedSRC}`);
          }         
        } catch (error) {
          // for some reason nodes from user img.src are getting weird link on occasion
          console.log(error);
          console.log(imageSrc);
        }
      }
    }    
  }

  ///////////////////////////////////////////////////////////////////

  //  removes color attr
  removelternateLineColor(){
    this.node.classList.remove("set-background-color-one");
    this.node.classList.remove("set-background-color-two");
  }

}// end Message

export default Message;