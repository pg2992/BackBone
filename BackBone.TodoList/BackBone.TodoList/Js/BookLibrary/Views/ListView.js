var BookLibrary = BookLibrary || {};

$(function () {
    'use strict';

    BookLibrary.ListView = Backbone.View.extend({
        el: '#listView',

        //listTempalte: Handlebars.compile($('#listTemplate').html()),

        events: {
        },

        initialize: function () {

            this.listenTo(BookLibrary.books, 'add', this.addBook);
        },

        //render: function () {

        //},

        addBook: function (todo) {
            var view = new BookLibrary.BookView({ model: todo });
            this.$el.append(view.render().el);  //see what el does in render().el
        }

    });
}());
