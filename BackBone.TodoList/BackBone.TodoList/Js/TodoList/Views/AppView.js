var app = app || {};

(function () {

    app.AppView = Backbone.View.extend({

        //holds the holder of the view
        el: "#jappHolder",

        statsTemplate: Handlebars.compile($("#todo-footer-stats").html()),

        events: {
            "keypress #new-todo": 'createOnEnter',
            "click #clear-completed": 'clearCompleted',
            "click #toggle-all": 'toggleAllCompleted'
        },

        initialize: function () {
            this.allCheckbox = this.$('#toggle-all')[0];
            this.$input = this.$('#new-todo');
            this.$footer = this.$('#footer');
            this.$main = this.$('#main');
            this.$todoList = this.$('#todo-list');
            this.listenTo(app.Todos, 'add', this.addOne);
            this.listenTo(app.Todos, 'reset', this.addAll);

            this.listenTo(app.Todos, 'change:complete', this.filterOne);
            this.listenTo(app.Todos, 'filter', this.filter);
            this.listenTo(app.Todos, 'all', this.render);

            app.Todos.fetch();
        },

        //to refresh the view this render function will into the existence
        render: function () {
            var completed = app.Todos.completed().length;
            var remaining = app.Todos.remaining().length;

            if (app.Todos.length) {
                this.$main.show();
                this.$footer.show();

                this.$footer.html(this.statsTemplate({
                    completed: completed,
                    remaining: remaining
                }));
                this.$("#filter li a").removeClass("selected").filter('[href="#/' + (app.TodoFilter || '') + '"]').addClass("selected");

            } else {
                this.$main.hide();
                this.$footer.hide();
            }
            this.allCheckbox.checked = !remaining;

            //helps in chaining of events --- by the way if nothing is returned automatically function returns the object calling it
            return this;

        },

        //add single todo in the list
        addOne: function (todo) {
            var view = new app.TodoView({ model: todo });
            $("#todo-list").append(view.render().el);
        },

        //to add all the todos in the collection
        //right now dont its use but will figure out soon
        addAll: function () {
            this.$("#todo-list").html('');
            app.Todos.each(this.addOne, this);
        },

        filterOne: function (todo) {
            todo.trigger('visible');
        },

        filterAll: function () {
            app.todos.each(this.filterOne, this);
        },

        // new attributes for the todo item
        newAttributes: function () {
            return {
                title: this.$input.val().trim(),
                completed: false,
                order: app.Todos.nextOrder()
            }
        },

        createOnEnter: function (event) {
            if (event.which !== ENTER_KEY || !this.$input.val().trim()) {
                return;
            }
            app.Todos.create(this.newAttributes());
            this.$input.val('');
        },

        clearComplete: function () {
            _.invoke(app.Todos.completed(), 'destroy');
            return false;
        },

        toggleAllComplete: function () {
            var completed = this.allCheckbox.checked;
            app.Todos.each(function (todo) {
                todo.save({
                    'completed': completed
                });
            });
        }

    });
})();