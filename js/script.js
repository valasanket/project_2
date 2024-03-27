

// ----------------------Header Section ------------------------------------------------------------------

$(document).ready(function(){

  $(".menu_header").slideUp("");
    $(".icon_header").click(function(){
      $(".menu_header").slideToggle("slow");
      $(this).find('i').toggleClass('fa-bars fa-times',);
    });
  



  // ------------------------owl carosul-----------------------------------------------

  $('#top_slider').owlCarousel({
    loop:true,
   // margin:10,
    // nav:true,
    items:1,
})


//-------------------------------wow Animate -------------------------------------------



//-----------------------------our card slider------------------------------------------------

$("#services_slider").owlCarousel({
  loop:true,
  margin:30,
  // nav:true,
  items:2,
  responsive: {
    0:{
        items:1,
    },
 
   768: {
        items: 2,
    },
 
  }

})

//----------------------------------------company_partner_slider-----------------------------------






$('#company_partner_slider').owlCarousel({
    loop:true,
    margin:30,
    // nav:true,
    responsive: {
      0:{
        items:1,
      },
      768:{
        items:2,
      },
      992:{
        items:3,
      }
    }
})


new WOW().init();

// ___________________________________Counter Box_____________________________________________________________________

const counters = document.querySelectorAll('.value');
const speed = 200;

counters.forEach( counter => {
   const animate = () => {
      const value = +counter.getAttribute('akhi');
      const data = +counter.innerText;
     
      const time = value / speed;
     if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 15);
        }else{
          counter.innerText = value;
        }
     
   }
   
   animate();
});


$(window).scroll(function () {
  var sticky = $('.sticky'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) {
      sticky.addClass('fixed');
  }
  else {
      sticky.removeClass('fixed');
  }
});


         //  -----------------------end to top move-------------------------

          var btn = $('.to_top');

          $(window).scroll(function () {
              if ($(window).scrollTop() > 300) {
                  btn.addClass('show');
              } else {
                  btn.removeClass('show');
              }
          });

          btn.on('click', function (e) {
              e.preventDefault();
              $('html, body').animate({ scrollTop: 0 }, '300');
          });

          //  -----------------------end to top move-------------------------




});