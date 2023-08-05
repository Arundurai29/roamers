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
sliders.forEach(function(slider) {
  var sliderContainer = slider.querySelector(".slider-container");
  var prevBtn = slider.querySelector(".prev-btn");
  var nextBtn = slider.querySelector(".next-btn");

  var slideWidth = slider.offsetWidth / 4; // Default slide width for desktop
  var slidesToShow = 4; // Number of slides to show at a time on desktop
  var currentSlide = 0;
  var totalSlides = sliderContainer.childElementCount;
  var touchStartX = 0;
  var touchEndX = 0;
  var isDesktop = window.innerWidth >= 768; // Adjust the breakpoint as needed

  if (!isDesktop) {
    slideWidth = slider.offsetWidth / 1; // Slide width for mobile
    slidesToShow = 1; // Number of slides to show at a time on mobile
  }

  prevBtn.addEventListener("click", handlePrevClick);
  nextBtn.addEventListener("click", handleNextClick);
  sliderContainer.addEventListener("touchstart", handleTouchStart);
  sliderContainer.addEventListener("touchmove", handleTouchMove);
  sliderContainer.addEventListener("touchend", handleTouchEnd);

  updateButtonVisibility();

  function handlePrevClick() {
    if (isDesktop) {
      currentSlide = Math.max(currentSlide - 1, 0);
    } else {
      currentSlide = Math.max(currentSlide - 1, 0);
      currentSlide = Math.min(currentSlide, totalSlides - 1);
    }
    sliderContainer.style.transform = `translateX(${-currentSlide * slideWidth}px)`;
    updateButtonVisibility();
  }

  function handleNextClick() {
    if (isDesktop) {
      currentSlide = Math.min(currentSlide + 1, totalSlides - slidesToShow);
    } else {
      currentSlide = Math.min(currentSlide + 1, totalSlides - 1);
    }
    sliderContainer.style.transform = `translateX(${-currentSlide * slideWidth}px)`;
    updateButtonVisibility();
  }

  function handleTouchStart(e) {
    touchStartX = e.touches[0].clientX;
  }

  function handleTouchMove(e) {
    touchEndX = e.touches[0].clientX;
    var touchDistance = touchStartX - touchEndX;

    // Smooth scrolling by adjusting the transform value based on touch distance
    sliderContainer.style.transform = `translateX(${-currentSlide * slideWidth - touchDistance}px)`;
  }

  function handleTouchEnd() {
    var touchDistance = touchStartX - touchEndX;

    if (touchDistance > slideWidth / 2) {
      handleNextClick();
    } else if (touchDistance < -slideWidth / 2) {
      handlePrevClick();
    } else {
      // Reset the transform value if swipe distance is not significant
      sliderContainer.style.transform = `translateX(${-currentSlide * slideWidth}px)`;
    }
  }

  function updateButtonVisibility() {
    if (currentSlide === 0) {
      prevBtn.style.display = "block";
      nextBtn.style.display = "block";
    } else if (currentSlide >= totalSlides - slidesToShow) {
      prevBtn.style.display = "block";
      nextBtn.style.display = "none";
    } else {
      prevBtn.style.display = "block";
      nextBtn.style.display = "block";
    }
  }
});

// Detect screen size changes

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





window.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1300: {
        slidesPerView: 4,
      },
      640: {
        slidesPerView: 3,
      },
      240: {
        slidesPerView: 1.1,
      },
    },
  });


});


window.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.swiper-container1', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
     
      640: {
        slidesPerView: 3,
      },
      240: {
        slidesPerView: 1.1,
      },
    },
  });

});

// Wrap every letter in a span
// var textWrapper = document.querySelector('.ml11 .letters');
// textWrapper.innerHTML = textWrapper.textContent.replace(/([^]|\w)/g, "<span class='letter'>$&</span>");

// anime.timeline({loop: true})
//   .add({
//     targets: '.ml11 .line',
//     scaleY: [0,1],
//     opacity: [0.5,1],
//     easing: "easeOutExpo",
//     duration: 1200
//   })
//   .add({
//     targets: '.ml11 .line',
//     translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 20],
//     easing: "easeOutExpo",
//     duration: 700,
//     delay: 100
//   }).add({
//     targets: '.ml11 .letter',
//     opacity: [0,1],
//     easing: "easeOutExpo",
//     duration: 600,
//     offset: '-=775',
//     delay: (el, i) => 34 * (i+1)
//   }).add({
//     targets: '.ml11',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });


    // :: 1.0 PRELOADER ACTIVE CODE
    $(window).on("load", function () {
      $(".loader").addClass("loader");
  
      if ($(".loader").hasClass("loader")) {
        $("#preloader")
          .delay(900)
          .queue(function () {
            $(this).remove();
          });
      }
    });
