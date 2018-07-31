


//defining the button object for enter button
const enterButton = document.getElementById("enter-guess");

//defining the website title input as a string to display
const websiteTitle = document.getElementById("website-title-input");

//defining the url input as a string to display (link?)
const websiteUrl = document.getElementById('website-url-input');

//declaring variables of bookmark section 1
const website1 = document.getElementById('website-1');
const url1 = document.getElementById("url-1");

const bookmark = document.getElementById("bookmarks");

markAsRead = () => {

}
//create function which creates a bookmark section using innerHTML and .createElement .createTextNode .appendChild()
createBookmark = () => {
    console.log('boom')
   $('#website-1').text('boom')
}

//add click event to add url to bookmarks div
$('.enter-guess').on('click', () => {
    $('.website-1').text('boom')
})
