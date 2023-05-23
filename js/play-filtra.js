$('.filtro').on('input', function() {
    var numeros = $('.numero');
    var ref = $(this);

    if (ref.val().length > 0) {
        numeros.each(function() {
            var tdResult = $(this).find('.resultado');
            var resultado = tdResult.text();
            
            var expressao = new RegExp(ref.val(), 'i');

            if (!expressao.test(resultado)) {
                $(this).addClass('invisivel');
                console.log('add');
            } else {
                $(this).removeClass('invisivel');
                console.log('remove');
            }
        }); 
    } else {
        numeros.each(function() {
            $(this).removeClass('invisivel');
        });
    }
});

