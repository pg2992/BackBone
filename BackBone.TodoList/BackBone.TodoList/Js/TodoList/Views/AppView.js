var app = app || {};

app.AppView = Backbone.View.extend({

    //holds the holder of the view
    el: ".jappHolder",

    statsTemplate: Handlebars.compile($("#todo-footer-stats")),

    initialize: function () {
        this.allCheckbox = this.$('#toggle-all')[0];
        this.$input = this.$('#new-todo');
        this.$footer = this.$('#footer');
        this.$main = this.$('#main');
        this.listenTo(app.Todos, 'add', this.addOne);
        this.listenTo(app.Todos, 'reset', this.addAll);
    }

});