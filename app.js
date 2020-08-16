// var frameNumber = 0, // start video at frame 0
//     // lower numbers = faster playback
//     playbackConst = 500, 
//     // get page height from video duration
//     setHeight = document.getElementById("set-height"), 
//     // select video element         
//     vid = document.getElementById('v0'); 
//     // var vid = $('#v0')[0]; // jquery option

// // dynamically set the page height according to video length
// vid.addEventListener('loadedmetadata', function() {
//   setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
// });


// // Use requestAnimationFrame for smooth playback
// function scrollPlay(){  
//   var frameNumber  = window.pageYOffset/playbackConst;
//   vid.currentTime  = frameNumber;
//   window.requestAnimationFrame(scrollPlay);
// }

// window.requestAnimationFrame(scrollPlay);









//double quotes for class calls [" "], single quotes for element calls [' ']

const intro = document.querySelector(".intro");
const video = intro.querySelector('video');
const text = intro.querySelector('h1');
//End section

const section = document.querySelector('section');
const end = section.querySelector('h1');

//scroll magic

const controller = new ScrollMagic.Controller();

// curly braces add options... mind blown

const scene = new ScrollMagic.Scene({
    duration: 9000,
    triggerElement: intro,
    triggerHook: 0
})
    // .addIndicators()
    .setPin(intro)
    .addTo(controller);

// const textAnim = TweenMax.fromTo(text, 3, {opacity: 1}, {opacity: 0});

// let scene2 = new ScrollMagic.Scene({s
//     duration: 000,
//     triggerElement: intro,
//     triggerHook: 0
// })
//   .setTween(textAnim)
//      .addTo(controller);

    //video animation
    let accelamount = 0.1; /// will change frame of video basically ffwding and video has ease effect, giving remaining frames space & time tmove
    let scrollpos = 0;
    let delay = 0;                        //fast and slow scrolling should affect video playback

    scene.on('progress', e => {
        scrollpos = e.scrollPos / 1000;
       
    });

    setInterval(() => {
        delay += (scrollpos - delay) * accelamount;
        // console.log(scrollpos, delay);

        video.currentTime = delay;
    }, 16.6);

    