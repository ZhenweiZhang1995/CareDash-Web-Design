 $(document).ready(function() {
   $('#register').on('click', function(e) {

     var pass = $("#password_reg").val();
     var user = $("#username_reg").val();
     var email = $('#email_reg').val();
     var pass2 = $('#password2_reg').val();

     e.stopPropagation();
     e.preventDefault();

     if (user == "") {
       alert("Username cannot be blank.");
     } else if (pass == "") {
       alert("Password cannot be blank.");
     } else if (pass != pass2) {
       alert("The password you typed in twice does not match.");
     } else if (user.includes("&") || user.includes("=") || user.includes(
         "<") ||
       user.includes(">") || user.includes("+") || user.includes(",")) {
       alert("Username has invalid character.");
     } else if (pass.length < 6) {
       alert("Password must contain at least 6 characters.");
     } else if (!(/[a-z]/).test(pass)) {
       alert("Password must include one character from a-z.");
     } else if (!(/[0-9]/).test(pass)) {
       alert("Password must include one digital number.");
     } else if (!email.includes("@")) {
       alert("Email address is not valid.");
     } else if (user.includes(" ") || pass.includes(" ")) {
       alert("Username and password cannot contain white space.");
     } else {}
   });
 });
