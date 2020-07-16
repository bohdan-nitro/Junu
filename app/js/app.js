$(document).ready(function () {

    let btn = $('.scroll-to-top');
    $(window).scroll(function () {
        if ($(window).scrollTop() > 500) {
            $(".scroll-to-top").toggleClass("show");
        } else {
            $(".scroll-to-top").removeClass("show");
        }
    });
    btn.on("click", function (e) {
        e.preventDefault();
        $('body, html').animate({scrollTop: 0}, '400');
    });


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



    //Parallax Scroll
    let controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave',
            duration: "300%"
        }
    });

// get all slides
    let scenes;
    let slides = document.querySelectorAll("section");

// create scene for every slide
    for (let i = 0; i < slides.length; i++) {

        let currentMask = $(slides[i]).find('.scroll__mask');

        var maskTween = new TimelineMax();
        maskTween.fromTo(currentMask, 1, {opacity:0}, {opacity:2});

        scenes = new ScrollMagic.Scene({
            triggerElement: slides[i],
        }).setTween(maskTween)
            // .addIndicators()
            .setPin(slides[i], {pushFollowers: false})
            .addTo(controller);
    }

    let slideOffsets = [];

    for (let i = 0; i < scenes.length; i++) {
        scenes[i].removePin(true);
        scenes[i].setPin(slides[i]);
        scenes[i].refresh();
        slideOffsets.push(Math.ceil(scenes[i].scrollOffset()));
    }


    //Macro Section

    $(".macro-title").click(function (e) {
        if ($(".macro-wrapper").hasClass("one")) {
            $(".macro-title").not($(this)).removeClass("active");
            $(".macro-text").not($(this).next()).slideUp(200);

        }
        $(this).toggleClass("active").next().slideToggle(200);


    });

    const configOptionElemSelector = '.talents .macro-title';
    const configImgWrapperSelector = '.talents .wrapper';

    $(document).on('click', configOptionElemSelector, function (e) {

        e.preventDefault();
        const thisId = $(this).data('id');
        $(configImgWrapperSelector).removeClass('active');
        $(configImgWrapperSelector + '[data-id="' + thisId + '"]').addClass('active');

    });

    //Combo Section

    $(".combo-title").click(function (e) {
        if ($(".combo-wrapper").hasClass("one")) {
            $(".combo-title").not($(this)).removeClass("active");
            $(".combo-text").not($(this).next()).slideUp(200);

        }
        $(this).toggleClass("active").next().slideToggle(200);


    });

    let talentsOptionBtn = '.talents .combo-title';
    let talentVideoWrapper = '.talents .wrap-content';

    $(document).on('click', talentsOptionBtn, function (e) {

        e.preventDefault();
        const thisId = $(this).data('id');
        $(talentVideoWrapper).removeClass('active');
        $(talentVideoWrapper + '[data-id="' + thisId + '"]').addClass('active');

    });






});