

// const STORAGE_KEY = "disableOpenInNewTab";

// const setIcon = isDisabled => {
//   const imgPath = isDisabled ? "images/chain-no.png" : "images/chain-yes.png";
//   chrome.browserAction.setIcon({ path: imgPath }, () => {
//     // console.log(`icon ${isDisabled ? "no" : "yes"} set`);
//   });
// };

// const getCurrVal = cb => {
//   chrome.storage.local.get([STORAGE_KEY], result => {
//     cb(!!result[STORAGE_KEY]);
//   });
// };
// const setCurrVal = (newVal, cb) => {
//   chrome.storage.local.set({ [STORAGE_KEY]: newVal }, () => {
//     cb(newVal);
//   });
// };


// const broadcast = (isDisabled) => {
//   // Send a message to all tabs
//   chrome.tabs.query({}, tabs => {
//     tabs.forEach(tab => {
//       chrome.tabs.sendMessage(tab.id, { isDisabled });
//     });
//   });
// };

// //set icon/link state initially

// getCurrVal(isDisabled => {
//     setIcon(isDisabled);
// });

// // Called when the user clicks on the browser action.
// chrome.browserAction.onClicked.addListener(tab => {
//   getCurrVal(isDisabled => {
//     const newVal = !isDisabled;
//     setCurrVal(newVal, updatedVal => {
//       //update icon
//         setIcon(updatedVal);
        
//         broadcast(updatedVal);
//     });
//   });
// });
