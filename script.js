gsap.registerPlugin(ScrollTrigger);

// Select the `.container` element, and adjust its css so its wider and
// its content is rendered horizontally.
let container = document.querySelector('.container');
container.style.cssText += ";" + "width: 300%; height: 100%;display:flex;flex-wrap:nowrap;";

// Select all the sections inside the container.
let sections = gsap.utils.toArray(".container section");

gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none", // <-- IMPORTANT!
    scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: true
    }
});