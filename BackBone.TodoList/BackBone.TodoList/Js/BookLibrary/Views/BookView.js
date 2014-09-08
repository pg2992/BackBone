var BookLibrary = BookLibrary || {};

(function ($) {

    'use strict';
    BookLibrary.BookView = Backbone.View.extend({

        tagName: 'div',

        className: 'bookContainer',

        bookTemplate:Handlebars.compile($('#bookTemplate').html()),

        events: {
            'click .delete': 'removeBook'
        },

        initialize: function () {
            this.listenTo(this.model,'destroy',this.remove)
        },

        render: function () {
            this.$el.html(this.bookTemplate(this.model.toJSON()));
            return this;
        },

        removeBook: function () {
            this.model.destroy();
        }


    });


}(jQuery));