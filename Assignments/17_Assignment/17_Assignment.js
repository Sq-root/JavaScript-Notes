const accordionCheckBox = document.querySelectorAll(".accordion-checkbox");

// accordion.addEventListener("click", function (e) {
//   console.log("Clicked on accord", e);
//   if (e.target.tagName === "DIV" && e.target.classList.contains("acc-title")) {
//     const content = e.target.nextElementSibling;
//     content.classList.toggle("active");
//     e.target.classList.toggle("toggle");
//   }
// });

accordionCheckBox.forEach((checkbox) => {
  checkbox.addEventListener("change", (event) => {
    const currChekBox = event.target;

    // Close all panels first
    accordionCheckBox.forEach((item) => {
      if (currChekBox != item) {
        item.checked = false;
        const content = item.closest(".acc-header").nextElementSibling;
        if (content) {
          content.classList.remove("active");
        }
      }
    });

    // Open the selected panel if the checkbox is checked
    if (currChekBox.checked) {
      currChekBox.checked = true; // Keep the current checkbox checked
      const currentContent =
        currChekBox.closest(".acc-header").nextElementSibling;
      if (currentContent) {
        currentContent.classList.add("active");
      }
    }
  });
});
