$(document).ready(function(){
    // declare variable to hold the value from input field

    var tag_input_field = $('#tags');

    var tags_array = [];

    tag_input_field.keyup(function (e) {
        var get_new_tag = tag_input_field.val();

        if (e.keyCode == 13) {
            if (get_new_tag.trim() == "") {
                alert("please enter a tag");
            } else {
                tags_array.push(get_new_tag);

                $('.tags-container').append("<span>" + get_new_tag + "<i class=' las la-times-circle '></i> </span>");

                tag_input_field.val("");
            }

            // console.log(tags_array);
        }

    });

    $('.tags-container').on('click', 'span', function() {
        var k = $(this).text();
        tags_array.splice(tags_array.indexOf(k), 1);
        $(this).remove();
    });

});