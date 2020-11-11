import PersistentSyncStorage from './helpers/PersistentSyncStorage';

const setupComplete = () => {

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