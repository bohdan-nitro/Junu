$(document).ready(function () {


    //Cursor
    let mouseCursor = document.querySelector(".cursor");
    let navLinks = document.querySelectorAll("a");
    let navSocial = document.querySelector(".nav__social-active");

    window.addEventListener("mousemove", cursor);

    function cursor(e) {
        mouseCursor.style.top = e.pageY + "px";
        mouseCursor.style.left = e.pageX + "px";
    }

    navLinks.forEach(link => {
        link.addEventListener("mouseleave", () => {
            mouseCursor.classList.remove("link-grow");
            link.classList.remove("hovered-link");
        });
        link.addEventListener("mouseover", () => {
            mouseCursor.classList.add("link-grow");
            link.classList.add("hovered-link");
        });
    });


    let bearWrapper = $(".bear");
    let imageWrapper = $(".mind-wrapper");

    bearWrapper.mouseenter(function () {
        $(imageWrapper).addClass("active");

    });

    bearWrapper.mouseleave(function () {
        $(imageWrapper).removeClass("active");

    });

    let btn = $('.scroll-to-top');
    $(window).scroll(function () {
        if ($(window).scrollTop() > 330) {
            $(".scroll-to-top").toggleClass("show");
        } else {
            $(".scroll-to-top").removeClass("show");
        }
    });
    btn.on("click", function (e) {
        e.preventDefault();
        $('body, html').animate({scrollTop: 0}, '400');
    });



});