$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(300).fadeOut('slow');
    
});

$(document).ready(function(){
    if($('.accordion-item').hasClass('open')){
        $('.open').next().show();
        return false;
    }
});

$(function($) {
    var allAccordions = $('.accordion div.data');
    var allAccordionItems = $('.accordion .accordion-item');
    $('.accordion > .accordion-item').click(function() {
        if($(this).hasClass('open'))
        {
            $(this).removeClass('open');
            $(this).next().fadeOut('slow');
            
        }
        else
        {
            allAccordions.fadeOut("fast");
            allAccordionItems.removeClass('open');
            $(this).addClass('open');
            $(this).next().delay(300).fadeIn('slow');
            return false;
            
        }
    });
    
});

var StickyElement = function(node){
    var doc = $(document), 
        fixed = false,
        anchor = node.find('.sticky-anchor'),
        content = node.find('.sticky-content');

    var onScroll = function(e){
        var docTop = doc.scrollTop(),
            anchorTop = anchor.offset().top;

        console.log('scroll', docTop, anchorTop);
        if(docTop > anchorTop){
            if(!fixed){
                anchor.height(content.outerHeight());
                content.addClass('fixed');        
                fixed = true;
            }
        }  else   {
            if(fixed){
                anchor.height(0);
                content.removeClass('fixed'); 
                fixed = false;
            }
        }
    };

    $(window).on('scroll', onScroll);
};

var demo = new StickyElement($('#sticky'));

$(document).ready(function(){
    var flag=0;
    $('.button-menu').click(function(){
        //$(this).parent().parent().children('.menu-list').slideToggle(600);   
        if(flag==0){           $(this).parent().parent().children('.menu-list').slideDown(600);
                    flag=1;
                   }
        else if(flag==1){ 
            
            $(this).parent().parent().children('.menu-list').slideUp(400);
            flag=0;
        }            

    });
    $('.close-space').click(function(){
        if(flag==0){           
            $(this).parent('.menu-list').slideDown(600);
                    flag=1;
            }
        else if(flag==1){ 
            $(this).parent('.menu-list').slideUp(400);
            flag=0;
        } 
    });
    
    //liquids
    
    var stan=0;
    $('.item').click(function(){  
        if(stan==0){           $(this).parent().children('.background_window').fadeIn('fast');
                    stan=1;
                   }
        else if(stan==1){ 
            stan=0;
        }            

    });
    $('.close_button').click(function(){
        if(stan==0){           
            stan=1;
        }
        else if(stan==1){ 
            $('.close_button').parent().parent().parent().children('.background_window').fadeOut('fast');
            stan=0;
        } 
    });
});