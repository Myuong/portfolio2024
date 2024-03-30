// Swiper 화면 스크롤
var slideNav = ['About', 'Works', 'Work1', 'Work2', 'Work3',];

var swiper = new Swiper('.main-swiper', {
    speed: 500,
    mousewheel: true,
    pagination: {
        el: '.main-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<div class="' + className + '"><span>' + (slideNav[index]) + '</span></div>';
        }
    },
    on: {
        reachEnd: function () {
        swiper.mousewheel.disable();
        }
    }
    });
    window.addEventListener('wheel', function (event) {
    if (event.deltaY < 0) {
        swiper.mousewheel.enable();
    } else if (event.deltaY > 0) {
    }
});

var slidetab = [
    '그린 컴퓨터 아카데미 과정수료',
    '그린 컴퓨터 아카데미 과정수료2',
    '그린 컴퓨터 아카데미 과정수료3',
    '그린 컴퓨터 아카데미 과정수료4',
    '그린 컴퓨터 아카데미 과정수료5'
];

var swiper2 = new Swiper('.history-swiper', {
    speed: 500,
    loop: true,
    navigation: {
        nextEl: '.history-button-next'
    },
    pagination: {
        el: '.history-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<div class="' + className 
            + '"><span class="tab_mark"><svg class="hover_arrow_ani" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_277_271)"><path d="M8.41447 16.2276L15.843 8.79907L8.41447 1.3705" stroke="black" stroke-width="2" stroke-miterlimit="10"/><path d="M0.985901 8.79907H15.843" stroke="black" stroke-width="2" stroke-miterlimit="10"/></g><defs><clipPath id="clip0_277_271"><rect width="12" height="12" fill="white" transform="translate(0.110596 8.79907) rotate(-45)"/></clipPath></defs></svg></span><span class="tab_title">' 
            + (slidetab[index]) + '</span></div>';
        }
    }
});

//링크 확인
$('.work_link_wrap').mouseover(function(){
    $(this).children('.work_link').addClass('show');
    $(this).siblings('.device_image_wrap').find('.screen').addClass('screen_stop');
});

$('.work_link_wrap').mouseout(function(){
    $(this).children('.work_link').removeClass('show');
    $(this).siblings('.device_image_wrap').find('.screen').removeClass('screen_stop');
});

 //nav contact 클릭시 아래로
$('.pagination3').click(function(){
    $("html, body").animate({ scrollTop: $(document).height() },1000,'swing');
});

//top 클릭시 위로
$('.totop_wrap').click(function(){
    $('html,body').animate({scrollTop : 0})
})