let totalCounter = 0;
let readCounter = 0;
let unreadCounter = 0;

createBookmark = function() {
    'use strict';
	const websiteTitle = $('#website-title-input').val();
    const websiteUrl = $('#website-url-input').val();

	$('.bookmarks').append(
        `<div class="outer-bookmark-box">
            <h3 class="website-title">${websiteTitle}</h3>
            <hr>
            <h4 class="website-url">${websiteUrl}</h4>
            <hr>
                <button class="read-btn">Read</button>
                <button class="delete-btn">Delete</button>
        </div>`
    );
    $('.bookmarks').on('click', '.delete-btn', function() {
        $(this).parent().remove();
    });
    //increment 'counter' variable
    totalCounter++;
    //set 'counter' variable in html (append)
    $('.total').html(`Total Bookmarks: ${totalCounter}`);
        unreadCounter++;
    $('.unread-counter').html(`Unread Bookmarks: ${unreadCounter}`);
};

$('.bookmarks').on('click', '.read-btn', function() {
    if ($(this).parent().hasClass('read')) {
        $(this).parent().removeClass('read');
        readCounter--;
        $('.read-counter').html(`Read Bookmarks: ${readCounter}`);
        unreadCounter++;
        $('.unread-counter').html(`Unread Bookmarks: ${unreadCounter}`);
    } else {
        $(this).parent().addClass('read');
        readCounter++;
        $('.read-counter').html(`Read Bookmarks: ${readCounter}`);
        unreadCounter--;
        $('.unread-counter').html(`Unread Bookmarks: ${unreadCounter}`);
    }
});

//decrement counter when a bookmark is deleted
$('.bookmarks').on('click', '.delete-btn', function() {
    totalCounter--;
    $('.total').html(`Total Bookmarks: ${totalCounter}`);
    unreadCounter > 0 ? unreadCounter-- : unreadCounter;
    $('.unread-counter').html(`Unread Bookmarks: ${unreadCounter}`);
    if ($(this).parent().hasClass('read')) {
        readCounter--;
        $('.read-counter').html(`Read Bookmarks: ${readCounter}`);
    }
});

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