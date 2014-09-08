var BookLibrary = BookLibrary || {};

(function ($) {
    'use strict';

    BookLibrary.CreateView = Backbone.View.extend({

        el: '#addBook',

        events: {
            'click #add': 'addBook'
        },
        initialize: function () {
            this.$title = this.$('#title');
            this.$author = this.$('#author');
            this.$releaseDate = this.$('#releaseDate');
            this.$keywords = this.$('#keywords');
            this.$stock = this.$('#stock');
            this.$all = this.$('input');
            this.coverImage = 'dist/imgs/book.png';
            this.listenTo(BookLibrary.books, 'add', this.clearFields);
        },

        addBook: function () {
            BookLibrary.books.create(this.newAttributes());
        },

        clearFields: function () {
            this.$all.val('');
        },
        newAttributes: function () {
            return {
                title: this.$title.val(),
                coverImage: this.coverImage,
                author: this.$author.val(),
                releaseDate: this.$releaseDate.val(),
                keywords: this.$keywords.val(),
                stock:this.$stock.val()
            }
        }
    });


}(jQuery))