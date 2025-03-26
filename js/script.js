$(document).ready(function(){
    //1024이하에서는 작동하지x
    let windowWidth   = $( window ).width();
    if(windowWidth > 1024){
        window.onload = function () {
            var elm = ".content_item";
            $(elm).each(function (index) {
                // 개별적으로 Wheel 이벤트 적용
                $(this).on("mousewheel DOMMouseScroll", function (e) {
                    e.preventDefault();
                    var delta = 0;
                    if (!event) event = window.event;
                    if (event.wheelDelta) {
                        delta = event.wheelDelta / 120;
                        if (window.opera) delta = -delta;
                    } 
                    else if (event.detail)
                        delta = -event.detail / 3;
                    var moveTop = $(window).scrollTop();
                    var elmSelecter = $(elm).eq(index);
                    // 마우스휠을 위에서 아래로
                    if (delta < 0) {
                        if ($(elmSelecter).next() != undefined) {
                            try{
                                moveTop = $(elmSelecter).next().offset().top;
                            }catch(e){}
                        }
                    // 마우스휠을 아래에서 위로
                    } else {
                        if ($(elmSelecter).prev() != undefined) {
                            try{
                                moveTop = $(elmSelecter).prev().offset().top;
                            }catch(e){}
                        }
                    }
                     
                    // 화면 이동 0.8초(800)
                    $("html,body").stop().animate({
                        scrollTop: moveTop + 'px'
                    }, {
                        duration: 800, complete: function () {
                        }
                    });
                });
            });
        }

        // window.addEventListener("wheel", function(e){
        //     e.preventDefault();
        // },{passive : false});
        
        // var $html = $("html");
        // var page = 1;
        // var lastPage = $("section").length;
        
        //scroll animation time
        // var timeScrollAnimation = 750;
        
        // $html.animate({scrollTop:0},10);
        
        // $(window).on("wheel", function(e){
         
        //     if($html.is(":animated")) return;
         
        //     if(e.originalEvent.deltaY > 0){
        //         if(page== lastPage) return;
         
        //         page++;
        //     }else if(e.originalEvent.deltaY < 0){
        //         if(page == 1) return;
         
        //         page--;
        //     }
            
        //     var posTop = (page-1) * ($(window).height());
         
        //     $html.animate({scrollTop : posTop}, timeScrollAnimation);
         
        // });
        
    }


    //페럴렉스 버튼
    //클릭시 해당 섹션으로 이동
    $(function(){
        $(".parallax>ul>li").on("click",function(){
            $(".parallax>ul>li>a").removeClass('active');
            $(this).find('>a').addClass('active')
        });

    })

    //스크롤시 해당 섹션의 버튼색 바뀜
    $(window).scroll(function(){
        $(".content_item").each(function(index){
            if( $(window).scrollTop() >= $(this).offset().top - $(window).height()/2 ){
                $(".parallax>ul>li>a").removeClass("active");
                $(".parallax>ul>li>a").eq(index).addClass("active")
            }
        });
    });
    
    

    //hamburger_menu 클릭시 toggle menu창 나오고 들어감
    $('.hamburger_menu').click(function () {
        $('#toggle_menu').animate({ 'right': 0 }, 400)
    });
    $('.xbutton').click(function () {
        $('#toggle_menu').animate({ 'right': '-1024px' }, 400)
    });



    //Home
    //반짝이 효과
    $(".star1").delay(600).addClass('active'),
    $(".star2").delay(600).addClass('active'),
    $(".star3").delay(600).addClass('active'),
    $(".line_star").delay(600).addClass('active')

    window.onresize = function(){
        document.location.reload();
    };
    

    
    // $( window ).resize(function(event) {
    //     console.log('창크기 크기 변경:', event);
      
    //     let windowWidth   = $( window ).width();
    //     let windowHeight  = $( window ).height();
    //     if (windowHeight < 900) {
    //         $('#Layout .content-text','#Layout .detail-text-wrap').css({display:'none'})
    //     }
      
    // });
    



    //skill 텍스트 자동 롤링
    $('.all-Pskill-wrap').marquee({
        duration: 15000, // 속도
        gap: 30, // 간격
        delayBeforeStart: 500, // 시작 delay값
        direction: 'left', // 방향
        duplicated: true, // 선택 영역 복제
        pauseOnHover: true, // hover시 일시중지 여부
        startVisible: true, //true로 설정된 경우 marquee가 처음부터 보임
    });
});
    