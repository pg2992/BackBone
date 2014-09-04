var app = app || {};

app.TodoCollection = Backbone.Collection.extend({

    //reference to of the todo-model
    model: app.Model,

    localStorage: new Backbone.LocalStorage("todos-storage"),

    completed: function () {
        return this.filter(function (todo) {
            return todo.get('completed');
        })
    },

    remaining: function () {
        return this.without.apply(this,this.completed());
    },

    nextOrder: function () {
        if (!this.length)
            return 1;
        return this.last().get('order') + 1;
    },

    comparator: function (todo) {
        return todo.get('order');
    }
});