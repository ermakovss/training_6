
const burger = document.querySelector('.header_burger');
const menu = document.querySelector('.header_wrapper');


burger.addEventListener("click", function() {
	burger.classList.toggle('menu_active');
	menu.classList.toggle('menu_active');
});


var video = document.getElementsByTagName('video')[0];

var audio = document.getElementsByTagName('audio')[0];

var pause = document.querySelector('.start');

var text =  document.querySelector('.video_text');


video.addEventListener("ended",Pause,false);


function Pause(){
    audio.currentTime = 0;
    audio.pause(); 
    pause.classList.remove('effect');
    pause.classList.remove('pause');

    text.style.opacity = "1";
    pause.classList.add('start'); 
};

function Video_start(){

	if(video.paused){

		video.play();
		audio.play();
		pause.classList.remove('start');
		pause.classList.add('pause');
		pause.classList.add('effect');

		text.style.opacity = "0";

	}else{
  		video.pause();
  		audio.pause();
 	 	pause.classList.remove('pause');
 		pause.classList.add('start');

 		text.style.opacity = "1";
	}
};
