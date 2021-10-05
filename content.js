const FAVICON_URL = "https://www.notion.so/images/favicon.ico";

const getFaviconDomEl = () => document.querySelector("link[rel~='icon']");

const setFavicon = () => {
  const linkEl = getFaviconDomEl();
  linkEl.href = FAVICON_URL;
}

const observer = new MutationObserver((mutationList) => {
  mutationList.forEach((mutation) => {
    if (mutation.target.href !== FAVICON_URL) {
      setFavicon();
    }
  })
})

const options = {
  attributeFilter: ['href'],
};

observer.observe(getFaviconDomEl(), options);
