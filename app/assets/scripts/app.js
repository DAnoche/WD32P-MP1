// Import our custom CSS
import "../styles/styles.scss";
import "../styles/styles.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

import Alert from "bootstrap/js/dist/alert";

// or, specify which plugins you need:
import { Tooltip, Toast, Popover } from "bootstrap";

//Tooltip script
const tooltips = document.querySelectorAll(".ttips");
tooltips.forEach((t) => {
  new bootstrap.Tooltip(t);
});

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
