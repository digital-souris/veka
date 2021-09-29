
$(document).ready(function () {
    getTopLineMenuAdaptive()
    $(document).on('click','.topline__drop', function () {
        $('.topline__dropdown').slideToggle()
    })
    $('.js-select').styler()
    $('.nav__category').click(function () {
        $('.nav__drop').slideToggle()
    })
})
$(window).resize(function () {
    getTopLineMenuAdaptive()
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