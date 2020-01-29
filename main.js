// data structure called books
var books = [];

// renderBooks function
var renderBooks = function () {
    $('.books').empty();
    var source = $('#book-template').html();
    var template = Handlebars.compile(source);

    for (var i = 0; i < books.length; i++) {
        var newHTML = template(books[i]);
        $('.books').append(newHTML);
    }
};
//When the window load the renderbooks function is loaded to the page
$(window).on('load', function () {
    renderBooks();
});

// Handle User Input

//1) TODO: When a user clicks the search button, grab their input
$('.search').on('click', function () {
    var userText = $('#search-query').val();
    fetch(userText);
});
//2) TODO: Use their input to make a GET request from the Google Books API
var fetch = function (query) {
    $.ajax({
        method: "GET",
        url: "https://www.googleapis.com/books/v1/volumes?q=hunger+games",
        dataType: "json",
        success: function (data) {
            addBooks(data);

        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus);
        }
    });
}

//3) TODO: Take the data from the Google Books API and put it inside the books array
var addBooks = function (data) {
    for (var j = 0; j < data.items.length; j++) {
        var apiBook = data.items[j].volumeInfo;
        var bookToAdd = {
            title: apiBook.title,
            author: apiBook.authors,
            imageURL: apiBook.imageLinks.thumbnail,
            isbn: apiBook.industryIdentifiers[0].identifier,
            pageCount: apiBook.pageCount
        };
        books.push(bookToAdd);
    }
    renderBooks();
};
//4) TODO: Invoke renderBooks so that it renders all of our new books from the API
// data.items[0].volumeInfo.title;