var BookLibrary = BookLibrary || {};

(function ($) {

    BookLibrary.Book = Backbone.Model.extend({
        defaults:{
            coverImage: '',
            author: '',
            title: '',
            releaseDate: '',
            keywords: '',
            stock:''
        }
    });

}(jQuery))
