//Mobile nav trigger
var navTrigger = document.getElementsByClassName("nav-trigger")[0],
  body = document.getElementsByTagName("body")[0];

navTrigger.addEventListener("click", toggleNavigation);

function toggleNavigation(event) {
  event.preventDefault();
  body.classList.toggle("nav-open");
}
//scroll to top function
//Get the button:
const gototopButton = document.getElementById("gototop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    gototopButton.style.display = "block";
  } else {
    gototopButton.style.display = "none";
  }
};

// When the user clicks on the button, scroll to the top of the document
function goToTop() {
  //document.body.scrollTo({ top: 0, behavior: "smooth" }); // For Safari
  document.documentElement.scrollTo({ top: 0, behavior: "smooth" }); // For Chrome, Firefox, IE and Opera
}
