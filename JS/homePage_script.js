// Home Page Animations and Behaviours
function animations(){
    //  Animations for navbar and its behaviours
const logos = document.querySelectorAll("#nav>#rightsubnav>.logos");

logos.forEach(logo => {
    logo.addEventListener("mouseover", function() {
        gsap.to(this, {
            scale: 1.5,
            color: "#808080",
            duration: 0.3,
        });
    });

    logo.addEventListener("mouseout", function() {
        gsap.to(this, {
            scale: 1,
            color: "black",
            ease : "elastic.out(2, 0.3)",
            duration: 0.5,
        });
    });
});


// Animations for all badges
const badge = document.querySelectorAll(".bg-image-badge");

badge.forEach(bdg => {
    bdg.addEventListener("mouseenter", function() {
        gsap.to(this, {
            scale: 1.1,
            duration: 0.3,
        });
    });
    bdg.addEventListener("mouseleave", function() {
        gsap.to(this, {
            scale: 1,
            duration: 0.3,
        });
    });
})


//  ARMY PAGE ANIMATIONS:-------------------------------

// Animations for the main page start content

const armyBadge = document.querySelector("#army-badge");
const armyHeading = document.querySelector("#army-heading");
const armySubHeading = document.querySelector("#army-subheading-text");
const armyButton = document.querySelector("#army-button");

gsap.from(armyBadge,{
    delay : 0.5,
    duration : 1,
    scale : 0,
    opacity : 0,
})


const tl2 = gsap.timeline();

tl2.from(armyHeading,{
    delay : 0.2, 
    duration : 1,
    y : "200%",
})
tl2.from(armySubHeading,{
    duration : 1,
    y : "200%",
})
tl2.from(armyButton,{
    duration : 1,
    scale : 0,
})



// Animations for the army background video

const armyBgVideo = document.querySelector("#army-background-video");
gsap.from(armyBgVideo,{
    opacity : 0,
    duration : 5,
    delay : 0.5,
})



// Animations for army bottom content

const pageContentBottom = document.querySelector(".page-content-bottom");
const bottomInfo = document.querySelectorAll(".bottom-info");

bottomInfo.forEach(info => {
    info.addEventListener("mouseenter", function() {
        gsap.to(this, {
            scaleX: 1.2,
            duration: 0.3,
            color : "black",
            backgroundImage: "linear-gradient(to right, #ffffff , rgb(74, 74, 74))",
        });
    });
    info.addEventListener("mouseleave", function() {
        gsap.to(this, {
            scale: 1,
            duration: 0.3,
            color : "white",  
            backgroundImage: "linear-gradient(to right, #d6d6d6 , rgb(130, 130, 130))",
        });
    });
})


const armyBottomContent = document.querySelector(".army-bottom-content");

gsap.from(".army-bottom-content", {
    duration : 1,
    y : 40,
    opacity : 0,
    stagger : 0.2,
    scrollTrigger: {
        scroller : "body",
        trigger : pageContentBottom,
        start : "top 70%",
        end : "top 5%",
    }
})


// Animations for army base page:-

const armyBaseCenterContainer = document.querySelector("#army-base-center-container");
gsap.from(armyBaseCenterContainer , {
    duration : 1,
    opacity : 0,
    scale : 0.95,
    scrollTrigger :{
        scroller : "body",
        trigger : armyBaseCenterContainer,
        start : "top 60%",
        end : "top 5%",
    }
})






// NAVY PAGE ANIMATIONS:-------------------------------

const page2  = document.querySelector("#page2");
// Air force bg video
const navyBgVideo = document.querySelector("#navy-background-video");
gsap.from(navyBgVideo,{
    opacity : 0,
    duration : 4,
    scrollTrigger : {
        scroller : "body",
        trigger : page2,
        start : "top 40%",
        end : "top 5%",
        onEnter: () => navyBgVideo.play(),
    }
})

// navy badge 
const navyBadge = document.querySelector("#navy-badge");
gsap.from(navyBadge,{
    scale : 0,
    scrollTrigger : {
        scroller : "body",
        start : "top 70%",
        trigger : navyBadge,
    }
})

// navy bottom content :-

const navyBottomContent = document.querySelectorAll(".navy-bottom-content");
gsap.from(navyBottomContent, {
    duration : 1,
    y : 40,
    opacity : 0,
    stagger : 0.2,
    scrollTrigger: {
        scroller : "body",
        trigger : navyBottomContent,
        start : "top 70%",
        end : "top 5%",
    }
})


// Animations for navy base page:-

const navyBaseCenterContainer = document.querySelector("#navy-base-center-container");
gsap.from(navyBaseCenterContainer , {
    duration : 1,
    opacity : 0,
    scale : 0.95,
    scrollTrigger :{
        scroller : "body",
        trigger : navyBaseCenterContainer,
        start : "top 60%",
        end : "top 5%",
    }
})




// AIR FORCE PAGE ANIMATIONS:-------------------------------

const page3  = document.querySelector("#page3");
// Air force bg video
const iafBgVideo = document.querySelector("#iaf-background-video");
gsap.from(iafBgVideo,{
    opacity : 0,
    duration : 4,
    scrollTrigger : {
        scroller : "body",
        trigger : page3,
        start : "top 40%",
        end : "top 5%",
        onEnter: () => iafBgVideo.play(),
    }
})

// Air force badge
const iafBadge = document.querySelector("#iaf-badge");
gsap.from(iafBadge,{
    scale : 0,
    scrollTrigger : {
        scroller : "body",
        start : "top 70%",
        trigger : iafBadge,
    }
})

// Air force bottom content :-
const iafBottomContent = document.querySelectorAll(".iaf-bottom-content");

gsap.from(iafBottomContent, {
    duration : 1,
    y : 40,
    opacity : 0,
    stagger : 0.2,
    scrollTrigger: {
        scroller : "body",
        trigger : iafBottomContent,
        start : "top 70%",
        end : "top 5%",
    }
})



// Animations for Air Force base page:-

const iafBaseCenterContainer = document.querySelector("#iaf-base-center-container");
gsap.from(iafBaseCenterContainer , {
    duration : 1,
    opacity : 0,
    scale : 0.95,
    scrollTrigger :{
        scroller : "body",
        trigger : iafBaseCenterContainer,
        start : "top 60%",
        end : "top 5%",
    }
})
}

animations();