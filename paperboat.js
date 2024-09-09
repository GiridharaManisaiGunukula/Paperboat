$(document).ready(function(){
        var offcanvasElement = document.getElementById('offcanvasRegistration');
        $(offcanvasElement).on('hidden.bs.offcanvas', function () {
            username = $.trim($('#username').val(''));
            email = $.trim($('#email').val(''));
            password = $.trim($('#password').val(''));
            confirmPassword = $.trim($('#confirmPassword').val(''));  
        });
        $(offcanvasElement).on('hide.bs.offcanvas', function () {
            username = $.trim($('#username').val(''));
            email = $.trim($('#email').val(''));
            password = $.trim($('#password').val(''));
            confirmPassword = $.trim($('#confirmPassword').val(''));
        });
})

function onregister(){
    debugger
    // Get form values

    var registrationdetails = {
        username: $('#username').val(),
        email: $('#email').val(),
        password:$('#password').val()
    }
    var username = $.trim($('#username').val());
    var email = $.trim($('#email').val());
    var password = $.trim($('#password').val());
    var confirmPassword = $.trim($('#confirmPassword').val());
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var isValid = true;
    
    // Validate username
    if (username.length < 3 || username.length > 20) {
        showToast(0,'Username must be between 3 and 20 characters.')
        isValid = false;
    }
    else if(!emailPattern.test(email)){
    // Validate email
    showToast(0,'Please enter a valid email address.')
    isValid = false;
    }
    else if(password.length < 6){
        showToast(0,'Password must be at least 6 characters long.')
        isValid = false;
    }
    else if(confirmPassword==''){
        showToast(0,'Please Enter the Confirm Password')
        isValid = false;
    }
    
    else if(password !== confirmPassword){
        showToast(0,'Passwords do not match.')
        isValid = false;
    }
    if (isValid) 
        {
            $.ajax({
                url: 'http://localhost:8056/api/user/register', // Replace with your API endpoint
                type: 'POST',
                data: JSON.stringify(registrationdetails),
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                success: function(response) {
                    debugger
                    if(response.message =='User already exists.'){
                        showToast(0,`${response.message}`) 
                    }
                    else{
                        showToast(1,`${response.message}`) 
                    }
                },
                error: function(xhr, status, error) {
                    showToast(0,`${error}`) 
                }
            }); 
    }
}
function onoffclose(){
        username = $.trim($('#username').val(''));
        email = $.trim($('#email').val(''));
        password = $.trim($('#password').val(''));
        confirmPassword = $.trim($('#confirmPassword').val(''))  
    }


