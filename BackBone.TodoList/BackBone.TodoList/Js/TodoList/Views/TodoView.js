var app = app || {};

(function () {

    app.TodoView = Backbone.View.extend({

        tagName: 'li',

        template: Handlebars.compile($("#todo-task-item").html()),

        events: {
            'dblClick label': 'edit',
            'keypress .edit': 'updateOnEnter',
            'blur .edit': 'close',
            'click .toggle': 'toggleCompelted',
            'click .destroy': 'clear'
        },

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'destroy', this.remove);
            this.listenTo(this.model, 'visible', this.toggleVisible)
        },

        render: function () {
            this.$el.html(this.template(this.model));
            this.$input = this.$('.edit');
            return this;
        },

        edit: function () {
            this.$el.addClass('editing');
            this.$input.focus();
        },

        close: function () {
            var value = this.$input.val().trim();
            if (value) {
                this.model.save({ title: value });
            }
            this.$el.removeClass('editing');
        },
        updateOnEnter: function (event) {
            if (event.which === ENTER_KEY)
                this.close();
        },

        toggleCompleted: function () {
            this.model.toggle();
        },
        toggleVisible: function () {
            this.$el.toggleClass('hidden', this.isHidden());    //toggleClass(className, switch)//class name can be space separated multiple --switch is boolean (not truth or falsy) the one who determines that toggle should work or not
        },

        isHidden: function () {
            var isCompleted = this.model.get('completed');
            return
        },
        clear: function () {
            this.model.destroy();
        }

    });
})();