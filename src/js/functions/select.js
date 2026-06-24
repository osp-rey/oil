export default function handlerSelect() {
  const selects = document.querySelectorAll(".select");

  if (selects.length) {
    document.body.addEventListener("click", handlerCloseAll);

    selects.forEach((select) => {
      const btn = select.querySelector(".select-btn");
      const input = btn.querySelector(".input");
      const items = select.querySelectorAll(".select-item");
      const body = select.querySelector(".select-body");

      select.addEventListener("click", (e) => e.stopPropagation());

      btn.addEventListener("click", () => {
        if (select.classList.contains("_open")) handlerClose(select);
        else handlerOpen(select);
      });

      items.forEach((item) => {
        item.addEventListener("click", () => {
          input.value = item.textContent;
          select.classList.remove("_open");
        });
      });

      input.addEventListener("input", (e) => {
        const value = e.target.value.toLowerCase();
        let hideCount = 0;

        items.forEach((item) => {
          const valueItem = item.textContent.toLowerCase();

          if (valueItem.includes(value)) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
            hideCount++;
          }
        });

        if (hideCount === items.length) {
          select.classList.remove("_open");
        } else {
          select.classList.add("_open");
        }
      });
    });

    function handlerOpen(select) {
      handlerCloseAll();
      select.classList.add("_open");
    }
    function handlerClose(select) {
      select.classList.remove("_open");
    }
    function handlerCloseAll() {
      const openSelects = document.querySelectorAll(".select._open");
      if (openSelects.length)
        openSelects.forEach((s) => s.classList.remove("_open"));
    }
  }
}
