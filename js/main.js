const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute("aria-expanded", "false");
  }

  if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  }
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));

// accordion

const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accord) => {
  accord.addEventListener("click", () => {
    accordions.forEach((sub) => {
      sub.classList.remove("active");
    });
    accord.classList.add("active");
    });
});
