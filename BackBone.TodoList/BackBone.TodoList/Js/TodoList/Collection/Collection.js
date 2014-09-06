var app = app || {};

(function () {

    app.TodoCollection = Backbone.Collection.extend({

        //reference to of the todo-model
        model: app.Todo,

        localStorage: new Backbone.LocalStorage("todos-storage"),

        completed: function () {
            return this.where({ completed: true });
        },

        remaining: function () {
            return this.without.apply(this, this.completed());
        },

        nextOrder: function () {
            if (!this.length)
                return 1;
            return this.last().get('order') + 1;
        },

        comparator: 'order'
    });

    app.Todos = new app.TodoCollection();

})();