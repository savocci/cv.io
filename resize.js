var contentSection = document.getElementsByClassName("content-section")[0];

var updateMarginBottom = function () {
  var contentHeight = contentSection.clientHeight;
  var windowHeight = window.innerHeight;
  var footerHeight = 60;
  var minMargin = 20;

  var remainingSpace = windowHeight - contentHeight - footerHeight;

  contentSection.style.marginBottom = Math.max(remainingSpace, minMargin) + "px";
};

window.addEventListener("resize", updateMarginBottom);
window.addEventListener("load", updateMarginBottom);
