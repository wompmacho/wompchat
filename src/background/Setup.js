import PersistentSyncStorage from '../helpers/PersistentSyncStorage';
import CONFIG from '../config';

const ensure = () => {
  return new Promise((res, rej) => {

    // Resolves if setup is complete
    if(PersistentSyncStorage.data.setupComplete) {
      // Ensure new options (on extension update) are added to options object
      PersistentSyncStorage.set({
        options: Object.assign({}, CONFIG.defaultOptions, PersistentSyncStorage.data.options)
      });

      return res();
    }
      
    // Otherwise inits setup
    const onSetupComplete = (request, sender, sendResponse) => {
      if(request.name === 'setupComplete') {
        chrome.runtime.onMessage.removeListener(onSetupComplete);
     
        PersistentSyncStorage.set({
          setupComplete: true
        });
        
        res();
      }

      return true;
    };

    chrome.tabs.create({ url: 'html/welcome.html' });
    chrome.runtime.onMessage.addListener(onSetupComplete);
    console.log('Setup Complete');
  });
};

export default {ensure};