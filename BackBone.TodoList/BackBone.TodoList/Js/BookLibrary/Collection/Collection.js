var BookLibrary = BookLibrary || {};

(function ($) {
    'use strict';

    BookLibrary.Books = Backbone.Collection.extend({
        model: BookLibrary.Book,
        
        localStorage: new Backbone.LocalStorage('books-backbone')

        //comparator:'name'
    });

    BookLibrary.books = new BookLibrary.Books();

}(jQuery));
