$(document).ready(function () {
    $('.ClaimJob').submit(function (event) {
        event.preventDefault();
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
        $.ajax({
            type: 'POST',
            url: '/Jobs/Claimed',
            data: $(this).serialize(),
            success: function (result) {
                console.log(result);
                var resultMessage = 'You claimed this job! ';
                $('.ClaimedMessage').html(resultMessage);
            }
        });
    });
    //Mark a job as finished
    $('.JobDone').submit(function (event) {
        event.preventDefault();
        $.ajax({
            type: 'POST',
            url: '/Jobs/MarkDone',
            data: $(this).serialize(),
            success: function () {
                window.location.reload();
            }
        });
    });
   
});