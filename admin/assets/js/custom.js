$(document).ready(function () {
    $(".inputMaterial").blur(function () {
        if($(this).val() !="") {
            $(this).addClass("valid");
        } else {
            $(this).removeClass("valid");
        }
    })
    /*----------- Start datepicker -----------*/
    
    $('#MyDate').datepicker({
        language: 'en',
        multipleDatesSeparator: " - ",
        autoClose: true
    });
    /*----------- End datepicker -----------*/
    /*----------- Start tiny toggle -----------*/
    $(".tiny-toggle").tinyToggle();

    /*----------- End tiny toggle -----------*/
    /*----------- Start Datatable ----------------*/
    if ($(window).width() >= 1365) {
        datatableX(false);
    } else {
        datatableX(true);
    }
    $(window).resize(function () {
        if ($(window).width() >= 768) {
        } else if ($(window).width() <= 768) {
        }
    });
    $(window).scroll(function () {
        $(".fixedHeader-floating").css("top", $(".navbar").innerHeight());
    })
    function datatableX(responsiveX) {
        var table = $('#requestTable').DataTable({
            "ordering": false,
            fixedHeader: true,
            responsive: responsiveX,
            "autoWidth": true,
            "language": {
                "sZeroRecords": "لم يعثر على أية سجلات",
                "loadingRecords": "جارٍ التحميل...",
                "info": "عرض _START_ الي _END_ من اجمالي _TOTAL_ ",
                "sInfoEmpty": "يعرض 0 إلى 0 من أصل 0 سجل",
                "sInfoFiltered": "(مصفي من اجمالي _TOTAL_ مدخلات)",
                "sInfoPostFix": "",
                "sSearch": "ابحث:",
                "sUrl": "",
                "paginate": {
                    "previous": "<i class='material-icons'>keyboard_arrow_left</i>",
                    "next": "<i class='material-icons'>keyboard_arrow_right</i>",
                    "first": "الاول",
                    "last": "الاخير"
                },
                "lengthMenu": '<select>' +
                    '<option value="10">10</option>' +
                    '<option value="20">20</option>' +
                    '<option value="30">30</option>' +
                    '<option value="-1">All</option>' +
                    '</select> :الصفوف بالصفحه',
            },
            "pagingType": "simple"
        });
        // table filter 
        $('.field-search-user-name').on('keyup', function () {
            table.columns(1).search(this.value).draw();
        });
        $('.field-search-email').on('keyup', function () {
            table.columns(2).search(this.value).draw();
        });
        $('.field-search-job-title').on('keyup', function () {
            table.columns(7).search(this.value).draw();
        });
        $('.select-search-User-role').on('change', function () {
            table.columns(6).search(this.value).draw();
        });
        $(".select-search-user-status").on('change', function () {
            table.columns(10).search(this.value).draw();
        });
        $(".select-search-Facilities").on('change', function () {
            table.columns(8).search(this.value).draw();
        });
        $(".select-search-Projects").on('change', function () {
            table.columns(9).search(this.value).draw();
        });


    }

    $('#field-search-memo-index2').keyup(function () {
        table.search($(this).val()).draw();

    });

    /*----------- End Datatable ----------------*/
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