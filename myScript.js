


type =
  "text/javascript" >
  $(document).ready(function () {
    $(window).scroll(function () {
      // checks if window is scrolled more than 500px, adds/removes solid class
      if ($(this).scrollTop() > 550) {
        $(".navbar1").addClass("solid");
        $(".back-to-top").addClass("visible");
      } else {
        $(".navbar1").removeClass("solid");
        $(".back-to-top").removeClass("visible");
      }
    });
  });

src = "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";

$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});

function showDiv() {
  document.querySelector(".more-skills").style.cssText +=
    "transform: translateX(-40%);";
}

function moveDiv() {
  console.log("hello");
  document.querySelector(".more-skills").style.cssText +=
    "transform: translateX(-150%);";
}
src = "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js";
const swiper = new Swiper(".swiper", {
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // }
  // Optional parameters

  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});


let output = document.getElementById('output');
  function clearText(event) {
  // access input field
         let fname = document.getElementById('fname');
         let lname = document.getElementById('lname');
         let subject = document.getElementById('subject');

         // clear the input field.
         input1.value = "";
         output.innerHTML += "Form submitted successfully! <br>";
      }


