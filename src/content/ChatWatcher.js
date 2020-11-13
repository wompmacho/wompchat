import Emotes from './Emotes';
import Message from './Message';
import PersistentSyncStorage from 'src/helpers/PersistentSyncStorage';

class ChatWatcher {

  constructor() {
    this.watchChat = this.watchChat.bind(this);
    this._chatContainer = null;
    this._observer = null;
    this.messages = new Map();
  }

  init() {
    return new Promise((res, rej) => {
      this.getChatContainer().then(Emotes.init).then(() => {
        this.addEmotePopup();
        this.watchChat();
        this.parsePreloadedMessages();
      });
    });
  }

  getChatContainer() {
    // Parent of actual chat (children are messages)
    const checkForContainer = (res, rej) => {
      this._chatContainer = document.querySelector('#items.style-scope.yt-live-chat-item-list-renderer');
      if(this._chatContainer !== null) {
        res();
      } else {
        setTimeout(checkForContainer.bind(this, res, rej), 250);
      }
    };
    return new Promise(checkForContainer);
  }

  parsePreloadedMessages() {
    const messages = this._chatContainer.children;

    for(let i = messages.length-1; i >= 0; i--) {
      const node = messages[i];
      if(this.isMessageNode(node)) {
        const message = new Message(node);
     
        // chrome.runtime.sendMessage({message: "preloadMessages", node: node.outerHTML}, function(response) {
        //   // dont need to do anything
        // });
      }
    }
  }

  watchChat() {
    console.log('Chat observer started');
    this._observer = new MutationObserver(mutations => {

      mutations.forEach(mutation => {

        const { addedNodes, removedNodes } = mutation;
        
        // Added nodes
        if(typeof addedNodes !== 'undefined' && addedNodes.length > 0) {
          for(let i = 0, length = addedNodes.length-1; i <= length; i++) {
            const node = addedNodes[i];
            if(this.isMessageNode(node)) {
              this.onNewMessage(node);
       
              // send message
              // chrome.runtime.sendMessage({message: "newMessage", node: node.outerHTML}, function(response) {
              //   // dont need to do anything
              // });
            }
          }
        }

        // Removed nodes
        if(typeof removedNodes !== 'undefined' && removedNodes.length > 0) {
          for(let i = 0, length = removedNodes.length-1; i <= length; i++) {
            const node = removedNodes[i];
            if(this.isMessageNode(node) && this.isObservedMessage(node)) {
              this.onObservedMessageRemoved(node);
            }
          }
        }
      });
    });

    this._observer.observe(this._chatContainer, {
      childList: true,
      attributes: false,
      characterData: false,
      subtree: false
    });
  }
  
  onNewMessage(node) {
    const message = new Message(node);

    // Don't store message if has 0 emotes
    if(message.hasEmotes) {
      this.messages.set(message.id, message);
    }
  }

  onObservedMessageRemoved(node) {
    const messageId = node.getAttribute('message-id');
    const message = this.messages.get(messageId);
    if(message != undefined){
      message.destroy();
    }

    this.messages.delete(messageId);
  }

  isMessageNode(node) {
    return node.tagName === 'YT-LIVE-CHAT-TEXT-MESSAGE-RENDERER';
  }

  isObservedMessage(node) {
    return node.getAttribute('message-id') !== null;
  }


  ///////////////////////////////////////////////////////////////////

  addEmotePopup(){

    //  create emote button
    const emoteButton = document.createElement('button');
    emoteButton.classList.add('emoteButton');
    emoteButton.textContent = '';

    //  append button to action-buttons list
    const chatButtonSelectionList = document.getElementById('action-buttons');
    chatButtonSelectionList.parentNode.insertBefore(emoteButton, chatButtonSelectionList);

    // create popupDiv
    const popUpDiv = document.createElement('div');
    popUpDiv.classList.add('popup');
    popUpDiv.classList.add('hideElement');

    function emoteAppend(keysITer){

      //  create divider
      var hr = document.createElement('hr');
      hr.classList.add('emoteDivider');
      
      for (let index = 0; index < keysITer.length; index++) {
        const element = keysITer[index];
        var emote_div = document.createElement('emote_div'); 
        emote_div.innerHTML = (Emotes.get(element).html);
        popUpDiv.appendChild(emote_div);
      }
      popUpDiv.appendChild(hr);
    }

    //  create text
    var bttv_text = document.createElement('h2');
    bttv_text.textContent = "BTTV";
    bttv_text.classList.add('emotePopUpText');
    var franker_text = document.createElement('h2');
    franker_text.textContent = "FrankerFacez";
    franker_text.classList.add('emotePopUpText');
    var twitch_text = document.createElement('h2');
    twitch_text.textContent = "Twitch";
    twitch_text.classList.add('emotePopUpText');
    
    

    //  need ittr to search each dict and append to dom
    let keysITer = null;

    keysITer = Array.from(Emotes.specialEmotesDictionary.keys());
    emoteAppend(keysITer);

    if(PersistentSyncStorage.data.options.enableBTTVEmotes){
      popUpDiv.appendChild(bttv_text);
      keysITer = Array.from(Emotes.bttv_Dictionary.keys());
      emoteAppend(keysITer);
    }

    if(PersistentSyncStorage.data.options.enableFrankerEmotes){
      popUpDiv.appendChild(franker_text);
      keysITer = Array.from(Emotes.franker_Dictionary.keys());
      emoteAppend(keysITer);
    }

    if(PersistentSyncStorage.data.options.enableTwitchEmotes){
      popUpDiv.appendChild(twitch_text);
      keysITer = Array.from(Emotes.twitch_Dictionary.keys());
      emoteAppend(keysITer);
    }

    //  add div to doc
    chatButtonSelectionList.appendChild(popUpDiv);

    // listen for popup button
    emoteButton.addEventListener('click', function(){
      popUpDiv.classList.toggle('hideElement');
      console.log('emote popup button clicked');
    });

    // escape for popup div
    document.onkeydown = function(evt) {
      if (evt.key === "Escape" && !popUpDiv.classList.contains('hideElement')) {
        popUpDiv.classList.toggle('hideElement');
        return;
      }
  };

    //  get input area
    var inputArea = document.querySelector('#input.yt-live-chat-text-input-field-renderer');
    var inputAreaLabel = document.querySelector('#label.yt-live-chat-text-input-field-renderer');

    //  add alt tag to chat
    function emoteToTextArea(){
      inputArea.textContent += this.alt + " ";
      inputArea.focus();
      inputAreaLabel.textContent = "";
      popUpDiv.classList.toggle('hideElement');
      console.log(this.alt + " emote button selected");
    }

    //  listener button for emotes
    var EMOTICONS = document.getElementsByTagName('img');
    for (let index = 0; index < EMOTICONS.length; index++) {
      const element = EMOTICONS[index];
      element.addEventListener('click', emoteToTextArea, false); 
    }

    console.log((keysITer.length+1) + " Emotes Added");

  }// end addEmotePopup

  ///////////////////////////////////////////////////////////////////

}// end chat watcher

export default ChatWatcher;
