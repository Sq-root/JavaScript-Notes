const accordion = document.querySelector(".accordion");

accordion.addEventListener("click", function (e) {
  console.log("Clicked on accord", e);
  if (e.target.tagName === "DIV" && e.target.classList.contains("acc-title")) {
    const content = e.target.nextElementSibling;
    content.classList.toggle("active");
    e.target.classList.toggle("toggle");
  }
});
