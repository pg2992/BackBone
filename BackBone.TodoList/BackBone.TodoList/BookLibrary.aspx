<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="BookLibrary.aspx.cs" Inherits="BackBone.TodoList.BookLibrary" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <link rel="stylesheet" href="dist/css/screen.css"? />
    <%--<link rel="stylesheet" href="dist/css/bootstrap.css" />--%>
    <script type="text/javascript" src="Js/Library/jquery-2.1.1.js"></script>
    <script type="text/javascript" src="Js/library/Underscore-1.7.0.js"></script>
    <script type="text/javascript" src="Js/Library/Backbone-1.1.2.js"></script>
    <script type="text/javascript" src="Js/Library/Backbone-LocalStorage.js"></script>
    <script type="text/javascript" src="Js/Library/handlebars-v2.0.0.js"></script>
</head>
<body>
    <div class="container">
        <h1>Book Library</h1>
    </div>
    <div id="addBook">
            <%--<label for="coverImage">CoverImage: </label>
            <input id="coverImage" type="file" />--%>
            <label for="title">Title: </label>
            <input id="title" type="text" />
            <label for="author">Author: </label>
            <input id="author" type="text" />
            <label for="releaseDate">Release date: </label>
            <input id="releaseDate" type="text" />
            <label for="keywords">Keywords: </label>
            <input id="keywords" type="text" />
            <label for="stock">Stock: </label>
            <input id="stock" type="text" />
            <button id="add">Add</button>
    </div>
    <div id="listView">
    </div>
    
    <script id="createTemplate" type="text/template">
        
    </script>
    <script id="bookTemplate" type="text/template">
            <img src="{{coverImage}}" />
            <ul>
                <li>{{ title }}</li>
                <li>{{ author }}</li>
                <li>{{ releaseDate }}</li>
                <li>{{ keywords }}</li>
                <li>{{ stock }}</li>
            </ul>
            <button class="delete">Delete</button>
    </script>

    <script type="text/javascript" src="Js/BookLibrary/Model/Model.js"></script>
    <script type="text/javascript" src="Js/BookLibrary/Collection/Collection.js"></script>
    <script type="text/javascript" src="Js/BookLibrary/Views/BookView.js"></script>
    <script type="text/javascript" src="Js/BookLibrary/Views/ListView.js"></script>
    <script type="text/javascript" src="Js/BookLibrary/Views/CreateView.js"></script>
    <script type="text/javascript" src="Js/BookLibrary/Start.js"></script>
</body>
</html>
