

    createBookmark = () =>{
        var readBtn = $(".read-btn");
        var websiteTitle = $("#website-title-input").val();
        var websiteUrl = $('#website-url-input').val();
        $('.bookmarks').append(`<div>${websiteTitle}${websiteUrl}<button id="read-btn">Read</button><button id="delete-btn">Delete</button></div>`);
    };

removeBookmark = () => {
    $(this).parent().remove();
};

$('.enter-guess').on('click', () => {
    createBookmark();

});

$('#delete-btn').on('click', () => {
    removeBookmark();
});