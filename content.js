var FAVICON = "https://www.notion.so/images/favicon.ico"

const setFavicon = () => {
  var link = document.querySelector("link[rel~='icon']");
  link.href = FAVICON;
}

// const checkFavicon = () => {
//   if (document.querySelector("link[rel~='icon']").href !== FAVICON) {
//     setFavicon()
//   }
//   setTimeout(checkFavicon, 500)
// }

// setTimeout(checkFavicon, 500)


let options = {
  attributeFilter: ['href'],
};

const observer = new MutationObserver((mutationList, observer) => {
  mutationList.forEach((mutation) => {
    if (mutation.target.href !== FAVICON) {
      setFavicon()
    }
  })
})
    
// function callback (mutations) {
//   // do something here
// }

observer.observe(document.querySelector("link[rel~='icon']"), options);
