
import './stylus/setupPage.styl';
import PersistentSyncStorage from './helpers/PersistentSyncStorage';


// THIS IS A JS PAGE FOR SETUP.HTML


// --- Definitions ---
const completeButton = document.querySelector('.complete-setup-button');
const successOverlay = document.querySelector('.success-overlay');
const successIcon = successOverlay.querySelector('.material-icons');
const successCloseMessageCountdown = successOverlay.querySelector('.countdown');

const setupComplete = () => {

  // successOverlay.classList.add('show');

  // setTimeout(() => {
  //   successIcon.classList.add('show');
  // }, 100);


  //////////////////////////////////// Neat if I ever want to close a window
  // let closeCountdown = 5; // seconds
  // const closeTimeout = () => {
  //   successCloseMessageCountdown.innerHTML = closeCountdown;
  //   setTimeout(() => {
  //     if(closeCountdown > 1) {
  //       closeCountdown -= 1;
  //       closeTimeout();
  //     } else {
  //       chrome.tabs.getCurrent((tab) => {
  //         chrome.tabs.remove(tab.id);
  //       });
  //     }
  //   }, 1000);
  // }

  // successCloseMessageCountdown.innerHTML = closeCountdown;
  // closeTimeout();
};

// --- Main ---

const main = () => {

  PersistentSyncStorage.on('ready', () => {
    if(!!PersistentSyncStorage.data.setupComplete === true) {
      console.log('Setup is already complete, Should not be here');
      return true;
    }

    let setupOutput = {};
    chrome.runtime.sendMessage({
      name: 'setupComplete',
      data: setupOutput
    }, setupComplete);

    console.log('Competed setup, sent message');

  });

  
};

// --- Executed ---

main();


