
$(document).ready(function () {
    getTopLineMenuAdaptive()
    startPopularSlider()
    startNewsSlider()
    $(document).on('click','.topline__drop', function () {
        $('.topline__dropdown').slideToggle()
    })
    $(document).on('click', '.filter__arrow, .filter__name', function () {
        $(this).closest('.filter__item').toggleClass('active')
        $(this).closest('.filter__item').find('.filter__dropdown').slideToggle()
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
                    dots: true,
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
        infinite: false,
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
                slidesToShow: 2.7,
                centerMode: true,
                slidesToScroll: 1,
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
                            slidesToShow: 1.7,
                            dots: true,
                            centerMode: false,
                        }
                    },
                    {
                        breakpoint: 480,
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