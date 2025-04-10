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


// ANimations for Army page data content

const pageContentBottom = document.querySelector(".page-content-bottom");
const bottomInfo = document.querySelectorAll(".bottom-info");

gsap.from(bottomInfo, {
    duration : 1,
    y : 40,
    opacity : 0,
    stagger : 0.3,
    scrollTrigger: {
        scroller : "body",
        trigger : pageContentBottom,
        start : "top 60%",
        end : "top 5%",
    }
})

bottomInfo.forEach(info => {
    info.addEventListener("mouseenter", function() {
        gsap.to(this, {
            scaleX: 1.2,
            duration: 0.3,
        });
    });
    info.addEventListener("mouseleave", function() {
        gsap.to(this, {
            scale: 1,
            duration: 0.3,
        });
    });
})

// Animations for the army background video

const armyBgVideo = document.querySelector("#army-background-video");
gsap.from(armyBgVideo,{
    opacity : 0,
    duration : 5,
    delay : 0.2,
})

// Animations for badge
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