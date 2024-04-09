let FAVICON_URL = "https://www.notion.so/images/favicon.ico"; // Default favicon URL

console.log(`Initial FAVICON_URL: ${FAVICON_URL}`);

// Function to get the favicon DOM element
const getFaviconDomEl = () => document.querySelector("link[rel~='icon']");

// Function to set the favicon
const setFavicon = () => {
  const linkEl = getFaviconDomEl();
  if (linkEl) {
    linkEl.href = FAVICON_URL;
    console.log(`Favicon set to: ${FAVICON_URL}`);
  } else {
    console.log('Favicon DOM element not found');
  }
}

// Create a MutationObserver instance
const observer = new MutationObserver((mutationList) => {
  mutationList.forEach((mutation) => {
    if (mutation.target.href !== FAVICON_URL) {
      console.log('Favicon changed, resetting...');
      setFavicon();
    }
  })
})

// Options for the observer
const options = {
  attributeFilter: ['href'],
};

// Start observing the favicon DOM element
const faviconEl = getFaviconDomEl();
if (faviconEl) {
  observer.observe(faviconEl, options);
  console.log('Started observing favicon');
} else {
  console.log('Favicon DOM element not found, cannot start observing');
}

// Get the user-uploaded favicon URL from storage
chrome.storage.local.get('faviconUrl').then((result) => {
  if (result.faviconUrl) {
    FAVICON_URL = result.faviconUrl;
    console.log(`User-uploaded favicon URL found: ${FAVICON_URL}`);
    setFavicon();
  } else {
    console.log('No user-uploaded favicon URL found');
  }
});