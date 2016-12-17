$(document).ready(function () {
    $('.modalthumb').click(function () {
        $('.modal-body').empty();
        var title = $(this).parent('a').attr("title");
        $('.modal-title').html(title);
        $($(this).parents('div').html()).appendTo('.modal-body');
        $('#myModal').modal({
            show: true
        });
    });
});

$(function () {
    $('#show').click(function (e) {
        str = $(this).text();
        if (str == 'show') {
            $('#work').show();
            $(this).text('hidden');
        } else {
            $('#work').hide();
            $(this).text('show');
        }
        e.preventDefault();
    });
    $('a.pull-left').tooltip();
});