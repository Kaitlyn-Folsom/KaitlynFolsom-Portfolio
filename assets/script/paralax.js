/*************************
 * jQuery Paralax Plugin 
 * version:0.0.1a
 * Author:Yaroslav Romanenko
 * Mail:yarikrom05@gmail.com
 * 
 * //TODO:вынести настройки коефициента в дата атрибуты, создать нейтив версию
 ************************/
(function( $ ){
    let methods = {
        init : function( settings,respondOptions ) { 
            //значения настроек по умолчанию
            
            let $this = this;
            var settings = $.extend(
                    {
                        transition:'0',
                        koef:0.2
                    },settings);
            var respondOptions = $.extend(
                    {
                        desktop:true,
                        smallscreen:true,
                        tablet:false,
                        phone:false
                    },respondOptions);

            return   $(this).each(function(){
                let paralaxObject = {
                    wrapper:$(this),
                    items:$(this).children('div'),
                    wrapperHeight:$(this).outerHeight(),
                    top: $(this).scrollTop(),
                    topOffset: $(this).offset().top
                }
                let displayTrigger = methods.widthTest(respondOptions);
                methods.startParalax(paralaxObject,settings,displayTrigger);
            });
        },
        startParalax : (object,settings, isDisplayed)=>{
            if(isDisplayed){
                $(window).trigger('scroll');
                let positionEl = [];
                let offsetEl = [];
                let {wrapper,items,wrapperHeight,top,topOffset} = object;
         
                items.each(function(index){
                    positionEl[index] = Number($(this).position().top);
                    offsetEl[index] = Number($(this).offset().top);
                    //var position = positionEl[index]-((wrapper.offset().top - $(window).scrollTop() -wrapper.innerHeight()*0.5 ))*settings[index].koef;
                    //$(this).css('transform','translate3d(0,'+position+'px,0)');
                });
                console.log(offsetEl[0] - Number(topOffset));
                $(window).bind('scroll', function(){
                    var scrolled = $(window).scrollTop();      
        
                    //console.log('scrolol',scrolled,'offset:',windowOffset,'position',windowPos);
                    items.each(function(index){
                        var position = scrolled*settings[index].koef;
                        var a = topOffset+wrapperHeight;
                        console.log('pos',$(this).offset().top,'topOffset',topOffset);
                  
                            $(this).css('transform','translate3d(0,'+position+'px,0)');
                        
                       
                        
                    });
                });
            }
        },
        widthTest: (respondOptions)=>{
            var w = $(window).width();
                if(w>=1200){
                    return respondOptions.desktop
                } else
                if(w>=992){
                    return respondOptions.smallscreen
                } else
                if(w>=992){
                    return respondOptions.smallscreen
                } else
                if(w>=768){
                    return respondOptions.tablet
                } else    
                if(w>=480){
                    return respondOptions.phone
                }else 
                if(w<480){
                    return respondOptions.phone
                }else {
                    return false
                }
        }
    };  
    $.fn.UIparalax = function( method ) {

        // логика вызова метода
        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Метод с именем ' +  method + ' не существует для jQuery.tooltip' );
        } 
    };

  })( jQuery );