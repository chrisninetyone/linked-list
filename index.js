
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
};

// function disable() {
//     if ($('.website-title').val() ==== "" || ($('.website-url').val() === "")) {
//         $('.enter-guess').prop('disabled', true);
//     }
// }

$('.enter-guess').on('click', function() {
        createBookmark();
});

//Add a counter

// $(".enter-guess").click(function() {
//     count++;
//     $("#counter").html("My current count is: "+count);
// });


// you have to select the parent of the HTML element that is being selected for jQuery to recognize it


