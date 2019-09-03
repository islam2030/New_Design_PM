$(document).ready(function() {
    // start glabel
    $('.modal').modal();
    $('.dropdown-trigger').dropdown();
    $('.datepicker').datepicker();
    $('select').formSelect();

    // start progress bar
    $('.progress .progress-bar').each(function() {
        $(this).animate({ width: $(this).attr('aria-valuenow') }, 50);
    });

    // start collapse with arrow icons
    $(".panel-heading").click(function() {
        $('.panel-collapse').on('show.bs.collapse', function() {
            $(this).siblings('.panel-heading').addClass('active');
        });
        $('.panel-collapse').on('hide.bs.collapse', function() {
            $(this).siblings('.panel-heading').removeClass('active');
        });
    });




    // start datepicker arabic
    $('.datepicker').datepicker({
        firstDay: true,
        autoClose: true,
        format: 'yyyy-mm-dd',
        i18n: {
            months: ["كانون الثاني", "شباط", "آذار", "نيسان", "أيار", "حزيران", "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول"],
            monthsShort: ["كانون الثاني", "شباط", "آذار", "نيسان", "أيار", "حزيران", "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول"],
            weekdays: ["الجمعه", "الخميس", "الاربعاء", "الثلاثاء", "الاثنين", "حد", "سبت"],
            weekdaysShort: ["الجمعه", "الخميس", "الاربعاء", "الثلاثاء", "الاثنين", "حد", "سبت"],
            weekdaysAbbrev: ["ج", "خ", "ر", "ث", "ت", "ح", "س"]
        }
    });

});

// start skills code 
(function() {
    $(document).ready(function() {
        $('.skill-box').find('b').each(function(i) {
            return $(this).prop('Counter', 0).animate({
                Counter: $(this).parent().data('percent')
            }, {
                duration: 1000,
                easing: 'swing',
                step: function(now) {
                    return $(this).text(Math.ceil(now) + '%');
                }
            });

        });
        return $('.skill-box .skills-circle li').each(function(i) {
            var _left, _percent, _right, deg, full_deg, run_duration;
            _right = $(this).find('.bar-circle-right');
            _left = $(this).find('.bar-circle-left');
            _percent = $(this).attr('data-percent');
            deg = 3.6 * _percent;
            if (_percent <= 50) {
                return _right.animate({
                    circle_rotate: deg
                }, {
                    step: function(deg) {
                        $(this).css('transform', 'rotate(' + deg + 'deg)');
                    },
                    duration: 1000
                });

            } else {
                full_deg = 180;
                deg -= full_deg;
                run_duration = 1000 * (50 / _percent);
                return _right.animate({
                    circle_rotate: full_deg
                }, {
                    step: function(full_deg) {
                        $(this).css('transform', 'rotate(' + full_deg + 'deg)');
                    },
                    duration: run_duration,
                    easing: 'linear',
                    complete: function() {
                        run_duration -= 1000;
                        _left.css({
                            'clip': 'rect(0, 150px, 150px, 75px)',
                            'background': 'rgba(58, 114, 0, 1)'
                        });

                        return _left.animate({
                            circle_rotate: deg
                        }, {
                            step: function(deg) {
                                $(this).css('transform', 'rotate(' + deg + 'deg)');
                            },
                            duration: Math.abs(run_duration),
                            easing: 'linear'
                        });

                    }
                });

            }
        });
    });

}).call(this);

// start show password and hide
function showPassword() {
    var prev = document.getElementById("password");
    if (prev.type === "password") {
        prev.type = "text";
        $(".view").removeClass().addClass("eye-slash");
    } else {
        prev.type = "password";
        $(".eye-slash").removeClass().addClass("view");
    }
}
// start remove or reset data input
function removeData() {
    document.getElementById("myForm").reset();
}