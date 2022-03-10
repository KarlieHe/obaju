<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="JqueryAjax_Default" %>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style type="text/css">
    </style>
    <script src="../Scripts/jquery-1.4.1.js" type="text/javascript"></script>
    <script type="text/javascript">
        $(document).ready(function () {
                $("#message").html('');
                $.ajax({
                    type: "GET",
                    url: "Friend.xml",
                    dataType: "xml",
                    success: function (ResponseText) {
                        var table = "<table border='1px'><tr><td>firstname</td><td>lastname</td><td>city</td></tr>";
                        $(ResponseText).find('friend').each(function () {
                            var first = $(this).find('firstName').text();
                            var last = $(this).find('lastName').text();
                            var city = $(this).find('city').text();
                            table += "<tr><td>" + first + "</td><td>" + last + "</td><td>" + city + "</td></tr>";
                        })
                        table += "</table>";
                        $("#message").append(table);
                    }
                });
        });
    </script>
</head>
<body>
<form id="form1" runat="server">
    <label>Display My Friends</label><br />
    <input type="button" value="Display" id="Display" />
    <div id="message"></div>
</form>
</body>
</html>