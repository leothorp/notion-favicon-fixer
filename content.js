const INCLUDED_FAVICON_URL = chrome.runtime.getURL("base-favicon.ico");

const KNOWN_FAVICON_URLS = [
  INCLUDED_FAVICON_URL,
  "https://www.notion.so/images/favicon.ico",
  "https://www.notion.so/front-static/favicon.ico",
];

const getFaviconDomEl = () => document.querySelector("link[rel~='icon']");

const setFavicon = () => {
  const linkEl = getFaviconDomEl();
  if (linkEl) {
    linkEl.href = INCLUDED_FAVICON_URL;
  }
};

let currentLink = null;

const attrObserver = new MutationObserver((mutationList) => {
  mutationList.forEach((mutation) => {
    if (!KNOWN_FAVICON_URLS.includes(mutation.target.href)) {
      setFavicon();
    }
  });
});

const attachAttrObserver = () => {
  const link = getFaviconDomEl();
  if (link && link !== currentLink) {
    attrObserver.disconnect();
    attrObserver.observe(link, { attributeFilter: ["href"] });
    currentLink = link;
    if (!KNOWN_FAVICON_URLS.includes(link.href)) {
      setFavicon();
    }
  }
};

new MutationObserver((mutations) => {
  for (const m of mutations) {
    // track additions of new link elements
    for (const node of m.addedNodes) {
      if (node.nodeName === "LINK" && node.rel?.includes("icon")) {
        attachAttrObserver();
        return;
      }
    }
  }
}).observe(document.head, { childList: true });

attachAttrObserver();
