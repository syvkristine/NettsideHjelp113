
const bil = document.getElementById("bil");
const hjul1 = document.getElementById("hjul1");
const hjul2 = document.getElementById("hjul2");
const video = document.getElementById("videoPuls");

const overskrift = document.getElementById("overskrift");
const spørsmol = document.getElementById("spørsmål");

const rok = document.getElementById("røyk");

const driveKeyframes = [

    {left: "50px"},
    {left: "700px"}

];

const snurrKeyframes = [

    {transform: "rotate(0)"},
    {transform: "rotate(-5turn)"}

];

const driveSettings = {
    
    duration: 10000,
    iterations: Infinity,

};

const drive =  bil.animate(driveKeyframes,driveSettings);
const snurrHjul1 =  hjul1.animate(snurrKeyframes,driveSettings);
const snurrHjul2 =  hjul2.animate(snurrKeyframes,driveSettings);

drive.pause();
snurrHjul1.pause();
snurrHjul2.pause();

video.playbackRate = 1;

function animerSiden (){

    if (scrollY > 0 && scrollY < 100) {

        drive.currentTime = scrollY * 100;
        snurrHjul1.currentTime = scrollY * 100;
        snurrHjul2.currentTime = scrollY * 100;
        console.log(scrollY);

    }

    if(scrollY >= 100) {

        bil.style.backgroundImage = 'url("iconer/bilkjæs.svg")';
        hjul1.style.left = "18px";
        hjul2.style.left = "192px";
        overskrift.style.opacity = "1";
        røyk.style.opacity = "0";


    }else {

        bil.style.backgroundImage = 'url("iconer/bil.svg")';
        hjul1.style.left = "22px";
        hjul2.style.left = "198px";
       røyk.style.opacity = ".5";

    }

    if(scrollY >= 250) {

        spørsmol.style.opacity = "1";

    }

}

onscroll = animerSiden;
