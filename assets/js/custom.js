$(document).ready(function() {
    // start glabel
    $('.modal').modal();
    $('.dropdown-trigger').dropdown();
    $('.datepicker').datepicker();
    $('select').formSelect();


    $('.progress .progress-bar').each(function() {
        $(this).animate({ width: $(this).attr('aria-valuenow') }, 50);
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