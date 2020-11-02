
import './stylus/options.styl';
import dateFormat from 'date-fns/format';
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
      case 'allowTextSlider':
        input.removeAttribute('disabled');


        if(PersistentSyncStorage.data.options.allowTextSlider == true){
          textSizeSlider.disabled = false;
        }else{
          textSizeSlider.disabled = true;
        }
        break;

      case 'theaterModeFix':
        // do nothing, stay disabled
        input.removeAttribute('disabled');
        break;

      case 'textSizeSlider' :
        //  do nothing
        break;

      default:
        input.removeAttribute('disabled');
        break;
    }
  });
});

var infoButton = document.getElementById('infoButton');
infoButton.addEventListener('click', function(){
  chrome.tabs.create({ url: './html/welcome.html' });
});


