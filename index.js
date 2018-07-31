



//defining the website title input as a string to display
var websiteTitle = $("#website-title-input").val();

//defining the url input as a string to display (link?)
var websiteUrl = $('#website-url-input').val();

// //Make a function to create a bookmark
// createBookmark () => {

// }


$('.enter-guess').on('click', () => {
    var websiteTitle = $("#website-title-input").val();
    var websiteUrl = $('#website-url-input').val();
    $('.website-title').text(websiteTitle);
    $('.website-url').text(websiteUrl);

})
