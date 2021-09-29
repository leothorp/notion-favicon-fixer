var FAVICON = "https://www.notion.so/images/favicon.ico"

const setFavicon = () => {
  var link = document.querySelector("link[rel~='icon']");
  link.href = FAVICON;
}

let options = {
  attributeFilter: ['href'],
};

const observer = new MutationObserver((mutationList) => {
  mutationList.forEach((mutation) => {
    if (mutation.target.href !== FAVICON) {
      setFavicon()
    }
  })
})

observer.observe(document.querySelector("link[rel~='icon']"), options);
