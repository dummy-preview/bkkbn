$(document).ready(function() {

    // Toggle menu on click
    $("#menu-toggler").click(function() {
        toggleBodyClass("menu-active");
    });
    $(".menu-item").click(function() {
        toggleBodyClass("menu-active");
    });

    $(".nav__link").click(function() {
        $("body.menu-active").removeClass("menu-active");
    });
    $("#close1").click(function() {
        $("body.menu-active").removeClass("menu-active");
    });
    $("#close2").click(function() {
        $("body.menu-active").removeClass("menu-active");
    });
    $("#close3").click(function() {
        $("body.menu-active").removeClass("menu-active");
    });
    $("#close4").click(function() {
        $("body.menu-active").removeClass("menu-active");
    });
    $("#close5").click(function() {
        $("body.menu-active").removeClass("menu-active");
    });


    function toggleBodyClass(className) {
        document.body.classList.toggle(className);
    }

    // nav fixed
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 150) {
            $(".header").addClass("fixshow");
            $(".about").addClass("spacetop");
        } else {
            $(".header").removeClass("fixshow");
            $(".about").removeClass("spacetop");
        }
    });

    $('.icon-sosmed').click(function() {
        if ($('.social').hasClass('social-show')) {
            $('.social').removeClass('social-show');
        } else {
            $('.social').addClass('social-show');
        }
    });

    // s backtotop
    var toggleHeight = $(window).outerHeight() * 0.5;

    $(window).scroll(function() {
        if ($(window).scrollTop() > toggleHeight) {
            $(".m-backtotop").addClass("active");
        } else {
            $(".m-backtotop").removeClass("active");
        }
    });

    $(".m-backtotop").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });

});


// s parallax
$.fn.moveIt = function() {
    var $window = $(window);
    var instances = [];

    $(this).each(function() {
        instances.push(new moveItItem($(this)));
    });

    window.addEventListener('scroll', function() {
        var scrollTop = $window.scrollTop();
        instances.forEach(function(inst) {
            inst.update(scrollTop);
        });
    }, { passive: true });
}

var moveItItem = function(el) {
    this.el = $(el);
    this.speed = parseInt(this.el.attr('data-scroll-speed'));
};

moveItItem.prototype.update = function(scrollTop) {
    this.el.css('transform', 'translateY(' + (scrollTop / this.speed) + 'px)');
};

$(function() {
    $('[data-scroll-speed]').moveIt();
});

$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    console.log("scrollTop>>>" + scrollTop);
    if (scrollTop == 0) {
        $("#scrollFx").css({ "bottom": "-1000px" });
    } else {
        $("#scrollFx").css({ "bottom": ($(window).scrollTop()) + "px" });
    }
});

// modal
$('.modal-toggle').on('click', function(e) {
    e.preventDefault();
    $('.modal').toggleClass('is-visible');
});

(function($) {
    var customSelect = $('select.custom-select');
    customSelect.each(function() {
        var that = $(this);
        var listID = that.attr('id'),
            groups = that.children('optgroup'),
            theOptions = "",
            startingOption = "",
            customSelect = "";
        if (groups.length) {
            groups.each(function() {
                var curGroup = $(this);
                var curName = curGroup.attr('label');
                theOptions += '<li class="optgroup">' + curName + '</li>';
                curGroup.children('option').each(function() {
                    var curOpt = $(this);
                    var curVal = curOpt.attr('value'),
                        curHtml = curOpt.html(),
                        isSelected = curOpt.attr('selected');
                    if (isSelected === 'selected') {
                        startingOption = curHtml;
                        theOptions += '<li class="selected" data-value="' + curVal + '">' + curHtml + '</li>';
                    } else {
                        theOptions += '<li data-value="' + curVal + '">' + curHtml + '</li>';
                    }
                });
            });
            that.children('option').each(function() {
                var curOpt = $(this);
                var curVal = curOpt.attr('value'),
                    curHtml = curOpt.html(),
                    isSelected = curOpt.attr('selected');
                if (isSelected === 'selected') {
                    startingOption = curHtml;
                    theOptions = '<li class="selected" data-value="' + curVal + '">' + curHtml + '</li>' + theOptions;
                } else {
                    theOptions = '<li data-value="' + curVal + '">' + curHtml + '</li>' + theOptions;
                }
            });
        } else {
            that.children('option').each(function() {
                var curOpt = $(this);
                var curVal = curOpt.attr('value'),
                    curHtml = curOpt.html(),
                    isSelected = curOpt.attr('selected');
                if (isSelected === 'selected') {
                    startingOption = curHtml;
                    theOptions += '<li class="selected" data-value="' + curVal + '">' + curHtml + '</li>';
                } else {
                    theOptions += '<li data-value="' + curVal + '">' + curHtml + '</li>';
                }
            });
        }
        customSelect = '<div class="dropdown-container"><div class="dropdown-select entypo-down-open-big"><span>' + startingOption + '</span></div><ul class="dropdown-select-ul" data-role="' + listID + '">' + theOptions + '</ul></div> <!-- .custom-select-wrapper -->';
        $(customSelect).insertAfter(that);
    });

    var selectdd = $('.dropdown-select'),
        selectul = $('.dropdown-select-ul'),
        selectli = $('.dropdown-select-ul li');

    selectdd.on('click', function() {
        $(this).parent('.dropdown-container').toggleClass('active');
    });
    selectul.on('mouseleave', function() {
        $(this).parent('.dropdown-container').removeClass('active');
    });
    selectli.on('click', function() {
        var that = $(this);
        if (!that.hasClass('optgroup')) {
            var parentUl = that.parent('ul'),
                thisdd = parentUl.siblings('.dropdown-select'),
                lihtml = that.html(),
                livalue = that.attr('data-value'),
                originalSelect = '#' + parentUl.attr('data-role');
            parentUl.parent('.dropdown-container').toggleClass('active');
            that.siblings('li').removeClass('selected');
            that.addClass('selected');
            $(originalSelect).val(livalue);
            thisdd.children('span').html(lihtml);
        }
    });
})(jQuery);