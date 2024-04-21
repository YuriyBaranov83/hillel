$( document ).ready(function() {
    
    const buttonOpen = $('.button');
    const body = $('body');
    const modal = $('.modal');
    const buttonClose = $('.button-close');

    buttonOpen.on('click', function(event) {
        event.stopPropagation(); 
        modal.slideToggle();
        body.addClass('bg');
        $(this).addClass('display-none');
    });
    
    buttonClose.on('click', function() {
        body.removeClass('bg');
        modal.slideToggle();
        buttonOpen.removeClass('display-none');
    });
    
    $(document).on('click', function(event) {
        if (!modal.is(event.target) && modal.has(event.target).length === 0) {
            body.removeClass('bg');
            modal.slideUp();
            buttonOpen.removeClass('display-none');
        }
    });

});