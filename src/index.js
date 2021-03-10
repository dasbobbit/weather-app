import { getData } from "./getData.js";

// Event Listeners
document.getElementById("search-button").addEventListener("click", getData);
window.addEventListener("keyup", (e) => {
  if(e.key === 'Enter') {
    getData()
  }
})