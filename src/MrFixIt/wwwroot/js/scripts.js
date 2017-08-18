$(document).ready(function () {
    $('.ClaimJob').submit(function (event) {
        event.preventDefault();
        console.log($(this).serialize());
        $.ajax({
            type: 'POST',
            url: '/Jobs/Claims',
            data: $(this).serialize(),
            success: function (result) {
                $('#ShowClaimForm').html(result);
            }
        });
    });
    $('.ClaimJobForm').submit(function (event) {
        event.preventDefault();
        console.log($(this).serialize());
        $.ajax({
            type: 'POST',
            url: '/Jobs/Claimed',
            data: $(this).serialize(),
            
        });
    });
   
});