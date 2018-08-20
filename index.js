
createBookmark = function() {
    'use strict';
	const websiteTitle = $('#website-title-input').val();
    const websiteUrl = $('#website-url-input').val();

	$('.bookmarks').append(
        `<div class="outer-bookmark-box">
            <h3 class="website-title">${websiteTitle}</h3>
            <h4 class="website-url">${websiteUrl}</h4>
                <button class="read-btn">Read</button>
                <button class="delete-btn">Delete</button>
        </div>`
    );
    $('.bookmarks').on('click', '.delete-btn', function() {
        $(this).parent().remove();
    });

    $('.bookmarks').on('click', '.read-btn', function() {
        if ($(this).parent().hasClass('read')) {
            $(this).parent().removeClass('read');
        } else {
            $(this).parent().addClass('read');
        }
    });

    // const count = 0;
    // $(".enter-guess").click(function() {
    //     count++;
    //     $("#counter").html("My current count is: "+count);
    // });
    // $('.bookmarks').append(
    //     `<h5>"The current count is "`
    // )
};



$('.inputs').on('keyup', function() {
    if ($('#website-title-input').val() === '' || ($('#website-url-input').val() === '')) {
        $('.enter-guess').prop('disabled', true);
        } else {
            $(".enter-guess").prop('disabled', false);
        }
})

$('.enter-guess').on('click', function() {
    createBookmark();
});

$(document).keypress(function(e) {
    if(e.which == 13) {
        createBookmark();
    }
});
//must disable when inputs empty



// you have to select the parent of the HTML element that is being selected for jQuery to recognize it


