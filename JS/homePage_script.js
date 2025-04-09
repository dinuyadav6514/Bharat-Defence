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