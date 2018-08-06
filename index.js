
createBookmark = () => {
    'use strict';
	const websiteTitle = $('#website-title-input').val();
    const websiteUrl = $('#website-url-input').val();


	$('.bookmarks').append(
        `<div class="outer-bookmark-box">
            <div class="inner-bookmark-box">
                <h3 class="user-input">${websiteTitle}</h3>
                <h4 class="user-input" id="website-url">${websiteUrl}</h4>
                    <button class="read-btn">Read</button>
                        <button class="delete-btn">Delete</button>
            </div>
        </div>`
    );
    $('.bookmarks').on('click', '.delete-btn', () => {
        console.log('boom');
        $('.outer-bookmark-box').children().remove();
    });
        // this is delteting ALL children/bookmarks
    $('.bookmarks').on('click', '.read-btn', () => {
        console.log('boom');
        $('.inner-bookmark-box').css('background-color', '#F2F4F4');
        $('#website-url').css('text-decoration', 'underline');
        $('.read-btn').css('color', 'red').css('text-decoration', 'none');
        $
    });
    //Ideas: Add a class, toggle class, do .css() and .text
};


$('.enter-guess').on('click', () => {
	createBookmark();
});


// you have to select the parent of the HTML element that is being selected for jQuery to recognize it


