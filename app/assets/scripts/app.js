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
