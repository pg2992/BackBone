<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="TodoList.aspx.cs" Inherits="BackBone.TodoList.TodoList" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <link rel="stylesheet" href="dist/css/base.css"? />
    <%--<link rel="stylesheet" href="dist/css/bootstrap.css" />--%>
    <script type="text/javascript" src="Js/Library/jquery-2.1.1.js"></script>
    <script type="text/javascript" src="Js/library/Underscore-1.7.0.js"></script>
    <script type="text/javascript" src="Js/Library/Backbone-1.1.2.js"></script>
    <script type="text/javascript" src="Js/Library/Backbone-LocalStorage.js"></script>
    <script type="text/javascript" src="Js/Library/handlebars-v2.0.0.js"></script>
</head>
<body>
    <div>
        <section id="jappHolder">
            <header id="header">
                <h1>todos</h1>
                <input id="new-todo" placeholder="What needs to be done?" autofocus />
            </header>
            <section id="main">
                <input id="toggle-all" type="checkbox" />
                <label for="toggle-all">Mark all as complete</label>
                <ul id="todo-list"></ul>
            </section>
            <footer id="footer"></footer>
        </section>
        <div id="info">
            <p>Double-click to edit a todo</p>
        </div>
    </div>
    <script type="text/html" id="todo-task-item">
        <div class="view">
            <input class="toggle" type="checkbox" {{#if completed}}"checked"{{else}}{{/if}}>
            <label>{{title}}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="{{destroy}}">
    </script>

    <script type="text/html" id="todo-footer-stats">
        <span id="todo-count">
            <strong>{{remaining}}</strong>item(s) left
        </span>
        <ul id="filters">
            <li>
                <a class="selected" href="#/">All</a>
            </li>
            <li>
                <a href="#/active">Active</a>
            </li>
            <li>
                <a href="#/completed">Completed</a>
            </li>
        </ul>
        {{#if completed }}
        <button id="clear-completed">Clear completed {{completed}}</button>
        {{/if}}
    </script>

    <script type="text/javascript" src="Js/TodoList/Model/Model.js"></script>
    <script type="text/javascript" src="Js/TodoList/Collection/Collection.js"></script>
    <script type="text/javascript" src="Js/TodoList/Views/TodoView.js"></script>
    <script type="text/javascript" src="Js/TodoList/Views/AppView.js"></script>
    <script type="text/javascript" src="Js/TodoList/Router/Router.js"></script>
    <script type="text/javascript" src="Js/TodoList/Start.js"></script>
</body>

</html>
