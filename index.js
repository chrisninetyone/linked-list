// removeBookmark = () => {
// 	console.log('boom');
// 	$(this)
// 		.parent()
// 		.remove();
// };


createBookmark = () => {
	var websiteTitle = $('#website-title-input').val();
    var websiteUrl = $('#website-url-input').val();






	$('.bookmarks').append(
        `<div class="outer-bookmark-box">
            <div class="inner-bookmark-box">
                <h3 class="user-input">${websiteTitle}</h3>
                <h4 class="user-input">${websiteUrl}</h4>
                    <button class="read-btn">Read</button>
                        <button class="delete-btn">Delete</button>
            </div>
        </div>`
    );
    $('.bookmarks').on('click', '.delete-btn', () => {
        console.log('boom')
        $('.outer-bookmark-box').children().remove();
    });
        // this is delteting ALL children/bookmarks
};


$('.enter-guess').on('click', () => {
	createBookmark();
});


// you have to select the parent of the HTML element that is being selected for jQuery to recognize it


