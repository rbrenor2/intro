jQuery(document).ready(function ($) {
  if ($(".ds-testimonials-section").length) {
    $(".ds-testimonials-slider").slick({
      infinite: true,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 4000,
      prevArrow:
        "<button type='button' class='slick-prev slick-arrow'><i class='ri-arrow-left-line'></i></button>",
      nextArrow:
        "<button type='button' class='slick-next slick-arrow'><i class='ri-arrow-right-line'></i></button>",
    });
  }
});

function expand(expandable, button) {
  console.log(expandable);
  var moreText = document.getElementById(expandable);
  var btnText = document.getElementById(button);
  console.log(moreText);
  if (moreText.style.display === "none") {
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  } else {
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  }
}
