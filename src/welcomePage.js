<<<<<<< Updated upstream
import PersistentSyncStorage from './helpers/PersistentSyncStorage';

const setupComplete = () => {

=======
import './stylus/setupPage.styl';
import PersistentSyncStorage from './helpers/PersistentSyncStorage';

// --- Definitions ---
const completeButton = document.querySelector('.complete-setup-button');
const successOverlay = document.querySelector('.success-overlay');
const successIcon = successOverlay.querySelector('.material-icons');
const successCloseMessageCountdown = successOverlay.querySelector('.countdown');

const setupComplete = () => {
  // do nuffin
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======
  
>>>>>>> Stashed changes
};

// --- Executed ---
main();