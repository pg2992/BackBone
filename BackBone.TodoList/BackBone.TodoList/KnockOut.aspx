<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="KnockOut.aspx.cs" Inherits="BackBone.TodoList.KnockOut" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <script type="text/javascript" src="Js/Library/KnockOut-3.2.0.js"></script>
</head>
<body>
    <div>
        <name-editor></name-editor>
        <name-editor></name-editor>
        <name-editor></name-editor>

        <script>
            ko.components.register('name-editor', {
        
                template:"<p>Enter your Name:<input type='text' data-bind='value:name' /></p><p>You entered  <strong data-bind='text:name().toUpperCase()'></strong></p>",
                viewModel: function(){
                    this.name = ko.observable('something');
                }
            });
            ko.applyBindings();
        </script>
    </div>
</body>
</html>
