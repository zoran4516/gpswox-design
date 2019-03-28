(function($) {
    'use strict';

    // Initialize Popover
    var Popover = $('[data-toggle="popover"]');
    Popover.popover();
    Popover.on('show.bs.popover', function() {
        Popover.not(this).each(function() {
            $(this).popover('hide');
        });
    });

    $(document).on('click', '.menuCollapse .collapse-control', function() {
        if ($('.menu-full').is(':visible')) {
            $('.menu-full').slideUp(400, function() {
                $('.menu-collapsed').slideDown(400);
            });
        } else {
            $('.menu-collapsed').slideUp(400, function() {
                $('.menu-full').slideDown(400);
            });
        }
    });

    $(document).on('click', '.menu-geofencing', function() {
        $('.sidebar').find('a[href="#tools"]').trigger('click');
        $('#tools-collapse-1').collapse('show');
        $('#tools-collapse-2').collapse('hide');
        $('#tools-collapse-3').collapse('hide');
    });

    $(document).on('click', '.menu-routes', function() {
        $('.sidebar').find('a[href="#tools"]').trigger('click');
        $('#tools-collapse-1').collapse('hide');
        $('#tools-collapse-2').collapse('show');
        $('#tools-collapse-3').collapse('hide');
    });

    $(document).on('click', '.menu-poi', function() {
        $('.sidebar').find('a[href="#tools"]').trigger('click');
        $('#tools-collapse-1').collapse('hide');
        $('#tools-collapse-2').collapse('hide');
        $('#tools-collapse-3').collapse('show');
    });

    $(document).on('click', '.tools-close', function() {
        $('.sidebar').find('a[href="#objects"]').trigger('click');
    });

    $('.scrollbox').enscroll();
    $('.selectpicker').selectpicker();
    $('.datepicker').datepicker();
    $('#show-history').click(function() {
        $('.footer-table').toggle();
    });

    // Support popup show/hide
    // Todo: improvements needed
    $('.menu-support').click(function() {
        $('#support-popup').show();
    });
    $('#support-close').click(function() {
        $('#support-popup').hide();
    });

    // Reports popup show/hide
    // Todo: improvements needed
    $('.menu-reports').click(function() {
        $('#reports-popup').show();
    });
    $('#reports-close').click(function() {
        $('#reports-popup').hide();
    });

    $('#gps-device-modal').on('show.bs.modal, hidden.bs.modal', function() {
        $(this).find('.side-params').hide();
        $(this).find('.show-side-params').text('All parameters');
    });
    $('.toggle-side-params').on('click', function() {
        var params = $(this).closest('#gps-device-modal').find('.side-params');
        if (params.is(':visible')) {
            $(this).text('All parameters');
            params.hide();
        } else {
            $(this).text('Hide parameters');
            params.show();
        }
    });
    $('.auto-take-photo-dropdown li a').on('click', function(){
        $('.auto-take-photo-time').text($(this).text());
    });

    $('.btn-enlarge').on('click', function(){
        var modal = $(this).closest('.modal');
        modal.removeClass('modal-sm').addClass('modal-md')
            .removeClass('small-custom-modal').addClass('medium-custom-modal');
        $('.minimize-modal-container').hide();
        $('.enlarge-modal-container').show();
    });
    $('.btn-minimize').on('click', function(){
        var modal = $(this).closest('.modal');
        modal.removeClass('modal-md').addClass('modal-sm')
            .removeClass('medium-custom-modal').addClass('small-custom-modal');
        $('.enlarge-modal-container').hide();
        $('.minimize-modal-container').show();
    });

    $('[data-toggle="tooltip"]').tooltip({
        trigger: 'hover',
        placement: 'top',
        animate: true,
        container: 'body'
    });

    $('.horizontal-scrollbox').enscroll({
            horizontalScrolling: true,
            verticalScrolling: false
        }
    );

    $(document).on('click', '.reports-dropdown .close-dropdown', function (e) {
        $('.reports-dropdown').removeClass('open');
    });

    $(document).on('click', '.reports-dropdown .dropdown-menu', function (e) {
        e.stopPropagation();
    });
	/* prevents for settings and checkbox icon. Ad your event actions here */
	$(document).on('click', '.object-container ul .li_pointer .checkbox', function (e) {
		 e.stopImmediatePropagation();
	 });
		
	$(document).on('click', '.object-container ul .li_pointer .edit', function (e) {
		e.stopPropagation();
	 });
	/* end of prevents */
	
    $(document).on('click', '.object-container ul .li_pointer', function (e) {
        var sub = $(this).next('.moreinfo');//.removeClass('nonactive');
        var button = $(sub).find('.collapse_button_moreinfo');
		if (sub.hasClass('nonactive')){
			sub.removeClass('nonactive');
		} else {
			sub.addClass('nonactive');
		};
        $(button).click(function(){
			sub.addClass('nonactive');
        });
    });

    $(document).on('click', '.main-close', function (e) {
        $(this).parent().hide();
    });

    $(document).on('click', '.footer-table .collapse-control a', function (e) {

        var collapsed_footer = $(this).closest('.footer-table');
        var graph = collapsed_footer.find('.data-area');

        if(!(collapsed_footer.hasClass('expanded-footer'))){
            $(graph).animate({height: '511px'});
            $('#map-controls').hide();
            $(collapsed_footer).addClass('expanded-footer');
        }
        else
        {
            $(graph).animate({height: '200px'});
            $('#map-controls').show();
            $(collapsed_footer).removeClass('expanded-footer');
        }
    });
    
    $(document).on('click', '.collapse-control-view-options a', function(e) {
        
        
        var view = $('#map-view-options');
        var a = $(this);
        
        if(!(view.hasClass('collapsed'))){
           view.animate({right: '-100px'});
           a.animate({right: '-100px'});
           a.parent().addClass('collapsed-view-options');
           view.addClass('collapsed');
        }
        else {
           view.animate({right: '0px'});
           a.animate({right: '-10px'});
           a.parent().removeClass('collapsed-view-options'); 
           view.removeClass('collapsed');
        }   
    });  
})(jQuery);