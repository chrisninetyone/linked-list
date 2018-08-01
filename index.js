createBookmark = () => {
	var readBtn = $('.read-btn');
	var websiteTitle = $('#website-title-input').val();
	var websiteUrl = $('#website-url-input').val();
	$('.bookmarks').append(
        `<div>
            <h3>${websiteTitle}${websiteUrl}</h3>
            <button class="read-btn">Read</button>
            <button class="delete-btn">Delete</button>
        </div>`
	);
};

removeBookmark = () => {
	console.log('boom');
	$(this)
		.parent()
		.remove();
};

$('.enter-guess').on('click', () => {
	createBookmark();
});

$('#delete-btn').on('click', () => {
	removeBookmark();
});

// you have to select the parent of the HTML element that is being selected for jQuery to recognize it

$('.bookmarks').on('click', '.delete-btn', () => {
    console.log('boom')
	$(this)
		.parent('div')
		.remove();
});
