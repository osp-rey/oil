export default function brandsChange() {
  const buttons = document.querySelectorAll("[data-brand]");

  if (buttons.length) {
    const title = document.querySelector("#modal-offer .modal-b__title");
    const titleBrand = title.querySelector("._brand");
    const titlePrice = title.querySelector("._price");

    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        titleBrand.textContent = btn.dataset.brand;
        titlePrice.textContent = btn.dataset.price;
      })
    })
  }
}