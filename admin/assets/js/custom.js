$(document).ready(function() {

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
};
});