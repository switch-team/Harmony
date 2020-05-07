$(document).ready(function(){
    $("#my-carousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function() {
        if ($('#carouselButton').children('span').hasClass('fa-pause'))
        {
            $("#my-carousel").carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');

        }
        else
        {
            $("#my-carousel").carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });

    //Family Scroliing
    $('#scroll-down').click(function(){
        $('#Family-Container').scrollTo('+=258px');
    });
    
    $('#scroll-up').click(function(){
        $('#Family-Container').scrollTo('-=258px');
    });
    //End Family Scroliing
    
    
      
     //Family Randomizing 
    (function($) {
    
    $.fn.randomize = function(tree, childElem) {
        return this.each(function() {
        var $this = $(this);
        if (tree) $this = $(this).find(tree);
        var unsortedElems = $this.children(childElem);
        var elems = unsortedElems.clone();
    
        elems.sort(function() {
            return (Math.round(Math.random()) - 0.5);
        });
    
        for (var i = 0; i < elems.length; i++)
            unsortedElems.eq(i).replaceWith(elems[i]);
        });
    };
    
    })(jQuery);
    $("#Family-Container").randomize();
    //End Family Randomizing 
});
