// ou yea
$(function() {
    $('#mandar').click(function() {
     /* Rock n Roll */
            var data = {
                name: $("#nombre").val(),
                email: $("#email").val(),
                message: $("#ta").val()
            };
            $.ajax({
                type: "POST",
                url: "sendbymail.php",
                data: data,
                success: function(){
                    // hara que un "enviado con exito" en hide con .succes aparezca
                    $('.success').fadeIn(1000);
                    // limpio los inputs tras el envio, ya tu sabeh.
                    $('#nombre').val('');
                    $('#email').val('');
                    $('#ta').val('');
                    $('#ta').focus();
                    // oculto el mensaje pasado 5sec
                    setTimeout("$('.success').fadeOut(3000);", 5000);
                }
            });

        return false;
    });
});
// mi codigo comentado hace llorar al niño Jesús pero me ayuda con mis milongas