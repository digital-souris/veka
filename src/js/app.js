
$(document).ready(function () {
    getTopLineMenuAdaptive()
    startPopularSlider()
    startNewsSlider()
    $(document).on('click','.topline__drop', function () {
        $('.topline__dropdown').slideToggle()
    })
    $(document).on('click', '.filter__arrow, .filter__name', function () {
        if (!$(this).closest('.filter__item').hasClass('active')) {
            $('.filter__item').removeClass('active')
            $('.filter__dropdown').slideUp()
            $(this).closest('.filter__item').toggleClass('active')
            $(this).closest('.filter__item').find('.filter__dropdown').slideToggle()
        }
    })
    $(document).on('click', '.mobile-filter__cross', function () {
        $('.mobile-filter').slideUp()
    })
    $('.js-market-subslider').slick({
        vertical: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        verticalSwiping: true,
        asNavFor: '.js-market-main',
        prevArrow: $('.market__arrow_prev'),
        nextArrow: $('.market__arrow_next'),
        focusOnSelect: true
    })
    $('.js-lk-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        variableWidth: true,
        prevArrow: '<button class="slick-prev slick-arrow" aria-label="Prev" type="button" style=""><svg width="18" height="8" style="transform: rotate(180deg)" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M17.0962 4.29984C17.2915 4.10458 17.2915 3.788 17.0962 3.59274L13.9142 0.410755C13.719 0.215493 13.4024 0.215493 13.2071 0.410755C13.0119 0.606017 13.0119 0.9226 13.2071 1.11786L16.0356 3.94629L13.2071 6.77472C13.0119 6.96998 13.0119 7.28656 13.2071 7.48182C13.4024 7.67709 13.719 7.67709 13.9142 7.48182L17.0962 4.29984ZM0.433594 4.44629H16.7427V3.44629H0.433594V4.44629Z" fill="#0069B4"/>\n' +
            '</svg></button>',
        nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><svg width="18" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M17.0962 4.29984C17.2915 4.10458 17.2915 3.788 17.0962 3.59274L13.9142 0.410755C13.719 0.215493 13.4024 0.215493 13.2071 0.410755C13.0119 0.606017 13.0119 0.9226 13.2071 1.11786L16.0356 3.94629L13.2071 6.77472C13.0119 6.96998 13.0119 7.28656 13.2071 7.48182C13.4024 7.67709 13.719 7.67709 13.9142 7.48182L17.0962 4.29984ZM0.433594 4.44629H16.7427V3.44629H0.433594V4.44629Z" fill="#0069B4"/>\n' +
            '</svg></button>'
    })
    $('.js-market-main').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        asNavFor: '.js-market-subslider',
        customPaging: function() {
            return '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path d="M6 1L11 6L6 11L1 6L6 1Z" stroke="#0B1742"/>' +
                '</svg>'
        },
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    //dots: true,
                    arrows: false
                }
            }
        ]
    })
    $('.market__head a').click(function (e) {
        e.preventDefault()
        if (!$(this).parent().hasClass('active')) {
            $('.market__head li').removeClass('active')
            $(this).parent().addClass('active')
            $('.market__item').removeClass('active')
            $($(this).attr('href')).addClass('active')
        }
        return false
    })
    $(document).on('click', '.filter__mobile', function (e) {
        e.preventDefault()
        $('.mobile-filter').slideDown()
        return false
    })
    $('.js-select, .js-check, .js-file, .js-radio, .js-date').styler()
    $('.market__header').click(function () {
        $(this).toggleClass('active')
        $(this).parent().find('.market__item').slideToggle()
    })
    if ($('.comparison__wrapper').length) {
        if ($(document).width() > 992) {
            $('.comparison__wrapper').css('width',($('.comparison__wrap').length + 1) * 356)
        }
        else {
            $('.comparison__wrapper').css('width',($('.comparison__wrap').length + 1) * 200)
        }
    }
    $('.nav__category').click(function () {
        $('.nav__drop').slideToggle()
    })
    $('.js-slide').slick({
        dots: true,
        arrows: false
    })
    $('.index-catalog__title svg').click(function () {
        $(this).parent().toggleClass('active')
        $(this).closest('.index-catalog__wrap').find('.index-catalog__list').slideToggle()
    })

})
$(function () {
    $('.js-first-slider').not('.slick-initialized').slick({
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: $('.slider__arrow_prev'),
        nextArrow: $('.slider__arrow_next'),
        customPaging: function() {
            return '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">' +
            '<path d="M6 1L11 6L6 11L1 6L6 1Z" stroke="#0B1742"/>' +
            '</svg>'
        },
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    })
    if($('.basket').length) {
        const top = $('.basket__wrap').position().top
        const bottom = $('.basket__wrap').height()
        $(document).scroll(function (e) {
            const s = $(window).scrollTop()
            console.log(s)
            if (s > top && s < bottom) {
                $('.basket__order').css('top', s - top + 10)
            }
        })
    }
    if($('.sidebar_catalog').length) {
        const top = $('.catalog').position().top
        const bottom = $('.catalog').height()
        $(document).scroll(function (e) {
            const s = $(window).scrollTop()
            console.log(s)
            if (s > top && s < bottom) {
                $('.sidebar_catalog').css('top', s - top - 60)
            }
        })
    }
})
$(window).resize(function () {
    getTopLineMenuAdaptive()
    startPopularSlider()
})

function getTopLineMenuAdaptive() {
    if ($(window).width() > 768) {
        const el = $('.topline__menu')
        if (el.width() <= 325) {
            if (!$('.topline__menu').find('.topline__drop').length)
                $('.topline__menu').append('<li class="topline__drop">' +
                    '<span>Еще</span><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                    '<path d="M4 6L0.535898 0L7.4641 0L4 6Z" fill="#828282"/>\n' +
                    '</svg><ul class="topline__dropdown">' +
                    '</ul></li>')
            replaceMenuToTopLine()
        }
    }
}

function replaceMenuToTopLine() {
    let arr = $(".topline__menu > li").get().reverse()
    arr.splice(0, 1)
    $(arr).each(function (index) {
        if (index < 2 && $(this).is(':visible')) {
            $(this).clone().appendTo('.topline__dropdown')
            $(this).hide()
        }

    })
}

function startPopularSlider() {
    if($('.js-populars').length) {
        if ($(document).width() > 992 && $('.js-populars').hasClass('slick-initialized')) {
            $('.js-populars').slick('unslick')
        }
        else if($(document).width() <= 992 && $('.js-populars').not('.slick-initialized')) {
            $('.js-populars').slick({
                dots: false,
                centerMode: true,
                variableWidth: true,
                infinite: true,
                customPaging: function() {
                    return '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                        '<path d="M6 1L11 6L6 11L1 6L6 1Z" stroke="#0B1742"/>' +
                        '</svg>'
                },
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            dots: true,
                            centerMode: false,
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            centerMode: false,
                            dots: true
                        }
                    }
                ]
            })
        }
    }

}

function startNewsSlider() {
    if($('.js-news').length) {
        if ($(document).width() > 992 && $('.js-news').hasClass('slick-initialized')) {
            $('.js-news').slick('unslick')
        }
        else if($(document).width() <= 992 && $('.js-news').not('.slick-initialized')) {
            $('.js-news').slick({
                dots: false,
                slidesToShow: 3,
                centerMode: false,
                slidesToScroll: 1,
                infinite: true,
                customPaging: function() {
                    return '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                        '<path d="M6 1L11 6L6 11L1 6L6 1Z" stroke="#0B1742"/>' +
                        '</svg>'
                },
                responsive: [
                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 2,
                            dots: true,
                            centerMode: false,
                        }
                    },
                    {
                        breakpoint: 481,
                        settings: {
                            slidesToShow: 1,
                            centerMode: false,
                            dots: true
                        }
                    }
                ]
            })
        }
    }

}