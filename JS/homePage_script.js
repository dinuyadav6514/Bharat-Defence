const tl1 = gsap.timeline();

tl1.from("#nav #leftsubnav #bd_logo", {
    opacity : 0,
    delay : 0.25,
    duration : 0.25,
    y : -50,
})
tl1.from("#nav #leftsubnav #bd_text", {
    opacity : 0,
    duration : 0.5,
    y : -50,
})
tl1.from("#nav #rightsubnav i", {
    delay : 0,
    duration : 0.5,
    y : -50,
    stagger : 0.13,
    opacity : 0,
})



const logos = document.querySelectorAll("#nav>#rightsubnav>.logos");

logos.forEach(logo => {
    logo.addEventListener("mouseover", function() {
        gsap.to(this, {
            scale: 1.5,
            color: "#808080",
            duration: 0.3,
            scrub : 5,
        });
    });

    logo.addEventListener("mouseout", function() {
        gsap.to(this, {
            scale: 1,
            color: "white",
            scrub : 2,
            ease : "elastic.out(2, 0.3)",
            duration: 0.5,
        });
    });
});
