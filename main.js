// data structure called books
var books = [{
    title: 'Harry Potter',
    author: 'J.K. Rowling',
    imageURL: 'https://books.google.com/books/content?id=WV8pZj_oNBwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    isbn: '9781921479311',
    pageCount: 268
}];

// renderBooks function
var renderBooks = function () {
    $('.books').empty();
    var source = $('#book-template').html();
    var template = Handlebars.compile(source);
   
    for(var i = 0; i < books.length; i++) {
        var newHTML = template(books[i]);
        $('.books').append(newHTML);
    }
};
//When the window load the renderbooks function is loaded to the page
$(window).on('load', function() {
    renderBooks();
});

// Handle User Input

//1) TODO: When a user clicks the search button, grab their input
//2) TODO: Use their input to make a GET request from the Google Books API
//3) TODO: Take the data from the Google Books API and put it inside the books array
//4) TODO: Invoke renderBooks so that it renders all of our new books from the API