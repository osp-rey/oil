import burger from "./functions/burger.js";
import buttonsNote from "./functions/buttonsNote.js";
import inputmask from "./functions/inputmask.js";
import handlerSelect from "./functions/select.js";
import sliders from "./functions/sliders.js";
import widgetCalc from "./functions/widgetCalc.js";

document.addEventListener("DOMContentLoaded", () => {
  burger();
  buttonsNote();
  sliders();
  handlerSelect()
  inputmask()
  widgetCalc();

  Fancybox.bind("[data-fancybox]", { closeButton: false });

  // Fancybox.show([{src: "#modal-feedback", type: "inline"}], {closeButton: false})
});
