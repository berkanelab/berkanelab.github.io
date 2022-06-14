(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    document.addEventListener("DOMContentLoaded", function(){
        /////// Prevent closing from click inside dropdown
        document.querySelectorAll('.dropdown-menu').forEach(function(element){
            element.addEventListener('click', function (e) {
                e.stopPropagation();
            });
        })
    }); 
    // DOMContentLoaded  end


    // LABS LIVING LAB BUTTON - READ MORE


    // faire un don
    document.getElementById("btn-faire-don").addEventListener("click",function(){
        window.location.replace("http://cloudlibrary.me/morocco-living-labs/donation.html");
    })


    // Carousel switch data 

    document.getElementById("btn-carousel-1").addEventListener("click",function(){
        console.log("eeee")
        document.getElementById("text-carousel-1").style.display= "block";
        document.getElementById("text-carousel-2").style.display= "none";
        document.getElementById("text-carousel-3").style.display= "none";
        document.getElementById("text-carousel-4").style.display= "none";
        document.getElementById("text-carousel-5").style.display= "none";
    })
    document.getElementById("btn-carousel-2").addEventListener("click",function(){
        document.getElementById("text-carousel-1").style.display= "none";
        document.getElementById("text-carousel-2").style.display= "block";
        document.getElementById("text-carousel-3").style.display= "none";
        document.getElementById("text-carousel-4").style.display= "none";
        document.getElementById("text-carousel-5").style.display= "none";

    })
    document.getElementById("btn-carousel-3").addEventListener("click",function(){
        document.getElementById("text-carousel-1").style.display= "none";
        document.getElementById("text-carousel-2").style.display= "none";
        document.getElementById("text-carousel-3").style.display= "block";
        document.getElementById("text-carousel-4").style.display= "none";
        document.getElementById("text-carousel-5").style.display= "none";
    })
    document.getElementById("btn-carousel-4").addEventListener("click",function(){
        document.getElementById("text-carousel-1").style.display= "none";
        document.getElementById("text-carousel-2").style.display= "none";
        document.getElementById("text-carousel-3").style.display= "none";
        document.getElementById("text-carousel-4").style.display= "block";
        document.getElementById("text-carousel-5").style.display= "none";
    })
    document.getElementById("btn-carousel-5").addEventListener("click",function(){
        document.getElementById("text-carousel-1").style.display= "none";
        document.getElementById("text-carousel-2").style.display= "none";
        document.getElementById("text-carousel-3").style.display= "none";
        document.getElementById("text-carousel-4").style.display= "none";
        document.getElementById("text-carousel-5").style.display= "block";
    })

    //** Video controle */
  
    document.getElementById("video-play-container").addEventListener("mouseover",function(){
        console.log("hello");
        document.getElementById('video-play').play();
       
    })
    document.getElementById("video-play-container").addEventListener("mouseout",function(){
        console.log("hello 2");
        document.getElementById('video-play').play();
    })
  
    
})(jQuery);

