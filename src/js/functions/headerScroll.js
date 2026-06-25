export default function headerScroll() {
  const header = document.querySelector(".header");

  if (header && window.matchMedia("(min-width: 992px)").matches) {
    let lastScrollTop = 0;

    window.addEventListener("scroll", () => {
      if (window.matchMedia("(min-width: 992px)").matches) {
        let scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > header.clientHeight) {
          header.classList.add("_scroll");
        } else {
          header.classList.remove("_scroll");
        }

        lastScrollTop = scrollTop;
      }
    });
  }
}
