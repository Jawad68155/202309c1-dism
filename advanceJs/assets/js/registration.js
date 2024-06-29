$(document).ready(function() {
    $("#name").on("keyup", function() {
        let name = $(this).val();
        if (name.length < 3) {
            $(this).addClass("is-invalid").removeClass("is-valid");
            $(this).next('div').html("Name must be at least 3 characters long").show();
        } else {
            $(this).addClass("is-valid").removeClass("is-invalid");
            $(this).next('div').hide();
        }
    });

    $("#email").on("keyup", function() {
        let email = $(this).val();
        let emailRE = /^[\w-]+@([a-zA-Z\d-]+\.)+[a-zA-Z]{2,7}$/;
        if (!emailRE.test(email)) {
            $(this).addClass("is-invalid").removeClass("is-valid");
            $(this).next('div').html("Please enter a valid email").show();
        } else {
            $(this).addClass("is-valid").removeClass("is-invalid");
            $(this).next('div').hide();
        }
    });

    $("#password").on("keyup", function() {
        let password = $(this).val();
        if (password.length < 6) {
            $(this).addClass("is-invalid").removeClass("is-valid");
            $(this).next('div').html("Password must be at least 6 characters long").show();
        } else {
            $(this).addClass("is-valid").removeClass("is-invalid");
            $(this).next('div').hide();
        }
    });

    $("#confirm_password").on("keyup", function() {
        let confirmPassword = $(this).val();
        let password = $("#password").val();
        if (confirmPassword !== password) {
            $(this).addClass("is-invalid").removeClass("is-valid");
            $(this).next('div').html("Passwords do not match").show();
        } else {
            $(this).addClass("is-valid").removeClass("is-invalid");
            $(this).next('div').hide();
        }
    });

    $("#number").on("keyup", function() {
        let number = $(this).val();
        let numberRE = /^[0-9]{10}$/;
        if (!numberRE.test(number)) {
            $(this).addClass("is-invalid").removeClass("is-valid");
            $(this).next('div').html("Please enter a valid 10-digit number").show();
        } else {
            $(this).addClass("is-valid").removeClass("is-invalid");
            $(this).next('div').hide();
        }
    });
});