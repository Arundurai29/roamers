// *****Sidebar tab content start*****
$('.tabgroup > div').hide();
$('.tabgroup > div:first-of-type').show();
$('.tabs a').click(function(e){
  e.preventDefault();
    var $this = $(this),
        tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
        others = $this.closest('li').siblings().children('a'),
        target = $this.attr('href');
    others.removeClass('active');
    $this.addClass('active');
    $(tabgroup).children('div').hide();
    $(target).show();
  
})
$('.tabgroup1 > div').hide();
$('.tabgroup1 > div:first-of-type').show();
$('.tabs1 a').click(function(e){
  e.preventDefault();
    var $this = $(this),
        tabgroup1 = '#'+$this.parents('.tabs1').data('tabgroup1'),
        others1 = $this.closest('li').siblings().children('a'),
        target1 = $this.attr('href');
    others1.removeClass('active');
    $this.addClass('active');
    $(tabgroup1).children('div').hide();
    $(target1).show();
  
})

// *****Sidebar tab content end*****    

// *****Sidebar tab radio content start*****

var sliders = document.querySelectorAll(".slider");
sliders.forEach(function (slider) {
  var sliderContainer = slider.querySelector(".slider-container");
  var prevBtn = slider.querySelector(".prev-btn");
  var nextBtn = slider.querySelector(".next-btn");

  var slideWidth = slider.offsetWidth / 4;
  var currentSlide = 0;
  var totalSlides = sliderContainer.childElementCount;

  prevBtn.addEventListener("click", showPrevSlides);
  nextBtn.addEventListener("click", showNextSlides);

  updateButtonVisibility();

  var initialX = null;
  var currentX = null;

  slider.addEventListener("touchstart", swipeStart);
  slider.addEventListener("touchmove", swipeMove);
  slider.addEventListener("touchend", swipeEnd);

  function swipeStart(event) {
    initialX = event.touches[0].clientX;
    currentX = initialX;
  }

  function swipeMove(event) {
    if (initialX === null) {
      return;
    }

    currentX = event.touches[0].clientX;

    var diffX = currentX - initialX;
    sliderContainer.style.transform = `translateX(${diffX}px)`;
  }

  function swipeEnd() {
    if (initialX === null || currentX === null) {
      return;
    }

    var diffX = currentX - initialX;

    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        // Swipe right
        showPrevSlide();
      } else {
        // Swipe left
        showNextSlide();
      }
    } else {
      // Reset slider position
      sliderContainer.style.transform = "translateX(0)";
    }

    initialX = null;
    currentX = null;
  }

  function showPrevSlide() {
    sliderContainer.style.transform = "translateX(0)";
  }

  function showNextSlide() {
    sliderContainer.style.transform = "translateX(-100%)";
  }

  function showPrevSlides() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    sliderContainer.style.transform = `translateX(${-currentSlide * slideWidth}px)`;
    updateButtonVisibility();
  }

  function showNextSlides() {
    currentSlide = (currentSlide + 1) % totalSlides;
    sliderContainer.style.transform = `translateX(${-currentSlide * slideWidth}px)`;
    updateButtonVisibility();
  }
  function updateSliderPosition() {
    sliderContainer.classList.add("slider-transition");
    var position = -currentSlide * slideWidth;
    sliderContainer.style.transform = `translateX(${position}px)`;

    // Reset transition class after the transition is complete
    setTimeout(function () {
      sliderContainer.classList.remove("slider-transition");
    }, 300);
  }
  function updateButtonVisibility() {
    if (currentSlide === 0) {
      prevBtn.style.display = "block";
      nextBtn.style.display = "block";
    } else if (currentSlide >= totalSlides - 4) {
      prevBtn.style.display = "block";
      nextBtn.style.display = "none";
    } else {
      prevBtn.style.display = "block";
      nextBtn.style.display = "block";
    }
  }
});

// *****Sidebar tab radio content end*****

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    // autoplay:true,
    // autoplayTimeout:3000,
    // autoplayHoverPause:true,
    center: true,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
    ],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 6
      }
    }
  });
});




const sliderElm = document.querySelector(".slider-containe .sliders");
const btnLeft = document.querySelector(".slider-containe .btn-left");
const btnRight = document.querySelector(".slider-containe .btn-right");

const numberSliderBoxs = sliderElm.children.length;
let idxCurrentSlide = 0;

// Functions:
function moveSlider() {
  let leftMargin = (sliderElm.clientWidth / numberSliderBoxs) * idxCurrentSlide;
  sliderElm.style.marginLeft = -leftMargin + "px";
  console.log(sliderElm.clientWidth, leftMargin);
}
function moveLeft() {
  if (idxCurrentSlide === 0) idxCurrentSlide = numberSliderBoxs - 1;
  else idxCurrentSlide--;

  moveSlider();
}
function moveRight() {
  if (idxCurrentSlide === numberSliderBoxs - 1) idxCurrentSlide = 0;
  else idxCurrentSlide++;

  moveSlider();
}

// Event Listeners:
btnLeft.addEventListener("click", moveLeft);
btnRight.addEventListener("click", moveRight);
window.addEventListener("resize", moveSlider);

