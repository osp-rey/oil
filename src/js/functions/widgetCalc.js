class WidgetCalc {
  constructor(selector) {
    this.widget =
      typeof selector === "string"
        ? document.querySelector(selector)
        : selector;

    if (!this.widget) {
      throw Error("widget not found");
      return;
    }

    this.windows = this.widget.querySelectorAll(".widget-calc-window");
    this.navItems = this.widget.querySelectorAll(".widget-calc-nav-item");
    this.form = this.widget.querySelector(".widget-calc-form");
    this.formNote = null;
    this.currentIndex = 0;

    this.init();

    if (this.form) {
      this.formNote = this.form.querySelector(".input-note");
    }
  }

  init() {
    this.windows.forEach((window) => {
      const btnNext = window.querySelector(".widget-calc-next");

      if (!btnNext) return;

      btnNext.addEventListener("click", () => {
        this.changeWindow();
      });
    });
  }
  changeWindow() {
    const currentWindow = this.windows[this.currentIndex];
    const currentItem = this.navItems[this.currentIndex];
    const nextWindow = this.windows[this.currentIndex + 1];
    const nextItem = this.navItems[this.currentIndex + 1];

    if (nextWindow) {
      const input = currentWindow.querySelector(".input");
      const isValid = this.isValid(input);

      if (!isValid) {
        return;
      }

      currentItem.classList.remove("_active");
      nextItem.classList.add("_active");

      currentWindow.classList.remove("_show");
      setTimeout(() => {
        currentWindow.classList.remove("_active");
        nextWindow.classList.add("_active");
        setTimeout(() => {
          nextWindow.classList.add("_show");
        }, 150);
      }, 150);

      if (this.formNote) {
        this.formNote.value += `${currentItem.textContent.trim()}: ${input.value.trim()}\n`;
      }
      console.log(this.formNote.value);

      this.currentIndex++;
    }
  }
  isValid(input) {
    let valid = true;

    if (!input) {
      return valid;
    }

    if (!input.value) {
      input.classList.add("_not-valid");
      valid = false;
    } else {
      input.classList.remove("_not-valid");
    }

    return valid;
  }
}

export default function widgetCalc() {
  const widget = document.querySelector("#widget-calc");

  if (widget) {
    const widgetCalc = new WidgetCalc(widget);
  }
}
