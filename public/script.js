const buttonM = document.getElementById("M")
const buttonAZ = document.getElementById("A-Z")

buttonM.addEventListener('click', () => {
    
const url = new URL(window.location);
  url.search = '';
  url.searchParams.set('filter[name][_starts_with]', 'M');
  window.location = url.toString();
})

// https://www.yellowduck.be/posts/how-to-update-a-query-string-parameter-without-reloading-the-page-in-javascript
buttonAZ.addEventListener('click', () => {
    
const url = new URL(window.location);
  url.search = '';
  window.location = url.toString();
})

// https://www.yellowduck.be/posts/how-to-update-a-query-string-parameter-without-reloading-the-page-in-javascript
