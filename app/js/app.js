function clickSlider(obj, newIndex){
    obj.parents('.item').find('.slide-images > img').removeClass('active');
    obj.parents('.item').find('.slide-images > img').eq(newIndex).addClass('active');

    obj.parents('.item').find('.click-orange').removeClass('active');
    obj.parents('.item').find('.click-orange').eq(newIndex).addClass('active');

    clickSliderList();

}
function clickSliderList(){
    let widthImg = parseInt($('.slider-naturele').css('width')) + 50;
    let countImg = $('.slider-naturele').length;
    console.log('-------------');
    console.log(widthImg);
    console.log(countImg);
    
    let left = (widthImg + 50) * $('.slider-naturele.active').index();
    left = (widthImg * countImg) / 2 - left - 57;

    console.log(left);
    console.log((widthImg * countImg/2));
    console.log($('.slider-naturele.active').index());
    $('.slider-naturele').parent().css('left',left + 'px');
}
$(function(){
    clickSliderList();

    $(document).on('click', '.construction-choice-item:not(.active)', function(event){
        $(this).parent().find('.construction-choice-item').hide();
        $(this).parent().find('.construction-choice-item').removeClass('active');
        $(this).addClass('active');
        
        
        $('.construction-choice-block-link .construction-choice-block').removeClass('active');
        $('.construction-choice-block-link .construction-choice-block').eq($(this).index()).addClass('active');

        event.preventDefault();
    });
    $(document).on('click', '.construction-choice-item.active', function(event){
        $(this).parent().find('.construction-choice-item').show();

        event.preventDefault();
    });

    $(document).on('click', '.first-button', function(event){
        
        let activeIndex = $(this).parents('.item').find('.slide-images > img.active').index();
        let countImg = $(this).parents('.item').find('.slide-images > img').length;
        let newIndex = activeIndex - 1;

        if (newIndex < 0) {
            newIndex = countImg - 1;
        }
        clickSlider($(this), newIndex);

        event.preventDefault();
    });

    $(document).on('click', '.second-button', function(event){
        
        let activeIndex = $(this).parents('.item').find('.slide-images > img.active').index();
        let countImg = $(this).parents('.item').find('.slide-images > img').length;
        let newIndex = activeIndex + 1;

        if (newIndex > countImg -1) {
            newIndex = 0;
        }
       
        clickSlider($(this), newIndex);

        event.preventDefault();
    });

    $(document).on('click', '.click-orange', function(event){
        clickSlider($(this), $(this).index());
    });

    $(document).on('click', '.open-hide', function(event){
        $(this).hide();
        $('.close-hide').show();
        
        $('.hide').addClass('active');

        event.preventDefault();
    });

    $(document).on('click', '.close-hide', function(event){
        $(this).hide();
        $('.open-hide').show();
        
        $('.hide').removeClass('active');

        event.preventDefault();
    });
    $(document).on('click', '.header-menu-burger', function(event){
        $(this).hide();
        // $('.header-nav').show(1000);
        $('.header-menu-left').show();
        
        $('.header-nav').addClass('active');

        event.preventDefault();
    });

    $(document).on('click', '.header-right-icon', function(event){
        $('.header-nav').removeClass("active");
        // $('.header-nav').hide();
        $('.header-menu-left').hide();
        $('.header-menu-burger').show();
        

        event.preventDefault();
    });
})

