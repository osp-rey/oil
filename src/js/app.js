import brandsChange from "./functions/brandsChange.js";
import burger from "./functions/burger.js";
import buttonsNote from "./functions/buttonsNote.js";
import headerScroll from "./functions/headerScroll.js";
import inputmask from "./functions/inputmask.js";
import map from "./functions/maps.js";
import more from "./functions/more.js";
import handlerSelect from "./functions/select.js";
import sliders from "./functions/sliders.js";
import spoller from "./functions/spoller.js";
import widgetCalc from "./functions/widgetCalc.js";

document.addEventListener("DOMContentLoaded", () => {
  burger();
  buttonsNote();
  sliders();
  handlerSelect();
  inputmask();
  widgetCalc();
  brandsChange();
  more();
  spoller();
  map();
  headerScroll();

  Fancybox.bind("[data-fancybox]", {
    closeButton: false,
    on: {
      destroy: (instance) => {
        const id = instance.getSlide().src;

        if (id.includes("#modal")) {
          const inputNote = document
            .querySelector(id)
            .querySelector(".input-note");

          if (inputNote) inputNote.value = "";
        }
      },
    },
  });

  // Fancybox.show([{src: "#modal-offer", type: "inline"}], {closeButton: false})
});
