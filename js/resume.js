/**
 * Created by Administrator on 2016/6/10.
 */
!function (desW) {
    var winW=document.documentElement.clientWidth;
    document.documentElement.style.fontSize=winW/desW*100+'px';
}(640);


//滑屏区域进行初始化设置
!function () {
    var step=0,divList=null;
    var mySwiper=new Swiper('.swiper-container',{
        direction:'vertical',
        loop:true,
        lazyLoading:true,
        mousewheelControl: true,
        watchSlidesProgress: true,
        onSlidePrevEnd:function () {
            step--;
            change();
            if(step==0)
            {
                step=6;
            }

        },
        onSlideNextEnd:function () {
            step++;
            change();
            if(step==7)
            {
                step=1;
            }

        }/*,
        onInit:function (swiper) {
            swiper.myactive=0;
        },
        onProgress:function (swiper) {
            for(var i=0;i<swiper.slides.length;i++)
            {
               // console.log(swiper.slides)
                
                var slide = swiper.slides[i];
                var progress = slide.progress;
                console.log(progress)
                var translate;

                translate = progress * swiper.height * 0.8;
                scale = 1 - Math.min(Math.abs(progress * 0.2), 1);
               // boxShadowOpacity = 0;

                //slide.style.boxShadow = '0px 0px 10px rgba(0,0,0,' + boxShadowOpacity + ')';
                if (i == swiper.myactive) {
                    es = slide.style;
                    es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = 'translate3d(0,' + (translate) + 'px,0) scale(' + scale + ')';
                    es.zIndex=0;

                }else{
                    es = slide.style;
                    es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform ='';
                    es.zIndex=1;
                }
            }
        },
        onTransitionEnd: function(swiper, speed) {
            for (var i = 0; i < swiper.slides.length; i++) {
                //	es = swiper.slides[i].style;
                //	es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = '';

                //	swiper.slides[i].style.zIndex = Math.abs(swiper.slides[i].progress);


            }

            swiper.myactive = swiper.activeIndex;

        },
        onSetTransition: function(swiper, speed) {

            for (var i = 0; i < swiper.slides.length; i++) {
                //if (i == swiper.myactive) {

                es = swiper.slides[i].style;
                es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = speed + 'ms';
                //}
            }

        }*/
        
    });

    function change() {
        divList=document.querySelectorAll('.swiper-slide');
        //console.log(divList);
        [].forEach.call(divList,function (item, index) {
            item.id=index==step?item.getAttribute('trueId'):"";
        })
    }
}();


//音频的自动播放
!function () {
    var audioBox=document.getElementsByClassName('audioBox')[0];
    var audio=audioBox.getElementsByTagName('audio')[0];

    //延迟播放音频文件，先让其他资源加载
    setTimeout(function () {
        audio.play();

        audio.addEventListener('canplay',function () {

            audioBox.style.display='block';
            audioBox.className+=' audioMove';


        },false);
    },500);



    audioBox.addEventListener('click',function () {

        if(audio.paused)
        {
            audio.play();
            audioBox.className+=' audioMove';
        }else{
            audio.pause();
            audioBox.className='audioBox';
        }

    },false);
}();



