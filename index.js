$(function () {

    $('#login').click(function () {
        console.log("click");
        var email = $('#Email').val() ;
        console.log(email);
        var password = $('#Password').val() ;
        console.log(password);

        if (email=="admin@nw.com" && password=="12345**") {
            console.log("yes");
        }
         else {
            alert("email หรือ password ไม่ถูกต้อง");
            window.location.reload();
            return false;
            
        }
    });




});