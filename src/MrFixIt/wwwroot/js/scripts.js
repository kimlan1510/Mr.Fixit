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
                window.location.reload();
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
    //Mark a job as pending
    $('.JobPending').submit(function (event) {
        event.preventDefault();
        $.ajax({
            type: 'POST',
            url: '/Jobs/MarkPending',
            data: $(this).serialize(),
            success: function () {
                window.location.reload();
            }
        });
    });
   
});