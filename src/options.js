
import './stylus/options.styl';
import { debounce } from 'lodash';
import PersistentSyncStorage from './helpers/PersistentSyncStorage';

//  hides element after short timeout
const hideDebounce = debounce(ele => {
  ele.classList.remove('show');
}, 1000);

// little popup/fade save status message
const setSavingStatus = (status) => {
const SaveStatusEle = document.getElementById('save-status');

  switch(status) {
    case 'saving':
      SaveStatusEle.innerHTML = 'Saving ...';
    break;
    case 'saved':
      SaveStatusEle.innerHTML = 'Saved';
      hideDebounce(SaveStatusEle);
    break;
    default:
      SaveStatusEle.innerHTML = '&nbsp;';
  }

  SaveStatusEle.classList.add('show');
};

///////////////////////////////////////////////////////////////////////////////

var textSizeSlider = document.getElementById("textSizeSlider");
var allowTextSlider = document.getElementById("allowTextSlider");

var sliderValue;
textSizeSlider.oninput = function(){
  sliderValue = textSizeSlider.value;
};

allowTextSlider.oninput = function(){

  if(allowTextSlider.checked == true){
    textSizeSlider.disabled = false;
  }else {
    textSizeSlider.disabled = true;
  }
  
};

const optionOnChange = (input) => {
  
  var inputValueKey;

  if(input.id === 'textSizeSlider'){
    inputValueKey = input.value;
    if(PersistentSyncStorage.data.options.hasOwnProperty(input.id)) {
      inputValueKey = PersistentSyncStorage.data.options[input.id];
      textSizeSlider.value = inputValueKey;
    }
  }else{
    inputValueKey = 'checked';
    if(PersistentSyncStorage.data.options.hasOwnProperty(input.id)) {
      input[inputValueKey] = PersistentSyncStorage.data.options[input.id];
    }
  }

  const eventType = 'change';

  const onChange = (() => {
    const saveOption = () =>  {

      setSavingStatus('saving');

      // [input.id]: inputValueKey | number vs true or false statement| [input.id]: input[inputValueKey]
      if(input.id === 'textSizeSlider'){

        inputValueKey = sliderValue;

        const updatedOptions = Object.assign({}, PersistentSyncStorage.data.options, {
          [input.id]: inputValueKey
        });

        PersistentSyncStorage.set({ options: updatedOptions })
        .then(() => {
          setSavingStatus('saved');    
        });

      }else{
        const updatedOptions = Object.assign({}, PersistentSyncStorage.data.options, {
          [input.id]: input[inputValueKey]
        });

        PersistentSyncStorage.set({ options: updatedOptions })
        .then(() => {
          setSavingStatus('saved');  
        });
      }      
    };

    return saveOption;
  })();

  return onChange;
};

// Executed code
const OptionInputs = document.querySelectorAll('.option-input');

PersistentSyncStorage.on('ready', () => {
  
  OptionInputs.forEach((input) => {
    const inputOnChange = optionOnChange(input);
    input.addEventListener('change', inputOnChange);

    switch (input.id) {
      case 'enableBTTVEmotes':
        input.removeAttribute('disabled');
        break;

      case 'enableFrankerEmotes':
        input.removeAttribute('disabled');
        break;

      case 'enableTwitchEmotes':
        input.removeAttribute('disabled');
        break;

      case 'kappaFix':
        input.removeAttribute('disabled');
        break;

      case 'theaterModeFix':
        input.removeAttribute('disabled');
        break;

      case 'setAuthorColor':
        input.removeAttribute('disabled');
        break;

      case 'showTimeStamp':
        input.removeAttribute('disabled');
        break;
      
      case 'alternateLineColor' :
        input.removeAttribute('disabled');
      break;

      case 'hideAuthorIcons' :
        input.removeAttribute('disabled');
        break;
      
      case 'hideWelcomBanner' :
        input.removeAttribute('disabled');
        break;
      
      case 'setTwitchColors' :
        input.removeAttribute('disabled');
        break;

      case 'setLiveChat' :
        input.removeAttribute('disabled');
        break;

      case 'allowTextSlider':
        input.removeAttribute('disabled');
        if(PersistentSyncStorage.data.options.allowTextSlider == true){
          textSizeSlider.disabled = false;
        }else if(PersistentSyncStorage.data.options.allowTextSlider == false){
          textSizeSlider.disabled = true;
        }
        break;

      case 'setGreenScreen':
        input.removeAttribute('disabled');
        break;

      default:
        // shouldn't get hete if handled
        break;
    }
  });
});

var infoButton = document.getElementById('infoButton');
infoButton.addEventListener('click', function(){
  chrome.tabs.create({ url: 'https://wompmacho.com/wompchat' });
});

// var chat_overlay = document.getElementById('chat_overlay');
// chat_overlay.addEventListener('click', function(){
//   chrome.tabs.create({ url: 'html/chat_overlay.html' });
// });