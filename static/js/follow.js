jQuery(document).ready(function($) {
    /*******************************
     follow / unfollow a user
     *******************************/
    $( '.tec-follow-link' ).on('click', function(e) {
        e.preventDefault();

        var $this = $(this);

        if( teconce_vars.logged_in != 'undefined' && teconce_vars.logged_in != 'true' ) {
            alert( teconce_vars.login_required );
            return;
        }

        var data      = {
            action:    $this.hasClass('follow') ? 'follow' : 'unfollow',
            user_id:   $this.data('user-id'),
            follow_id: $this.data('follow-id'),
            nonce:     teconce_vars.nonce
        };

        

        $.post( teconce_vars.ajaxurl, data, function(response) {
            if( response == 'success' ) {
                $('.tec-follow-link').toggle();
            } else {
                alert( teconce_vars.processing_error );
            }
            
        } );
    });
});