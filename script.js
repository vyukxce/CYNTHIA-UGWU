// locomotive scroll setup
const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true,
  multiplier: 1,
  lerp: 0.08
});

// cursor follow
let xprev = 0, yprev = 0;

window.addEventListener("mousemove", (e) => {
  let xscale = gsap.utils.clamp(0.8, 1.2, (e.clientX - xprev) / 10);
  let yscale = gsap.utils.clamp(0.8, 1.2, (e.clientY - yprev) / 10);

  xprev = e.clientX;
  yprev = e.clientY;

  gsap.to("#cursor", {
    x: e.clientX,
    y: e.clientY,
    scaleX: xscale,
    scaleY: yscale,
    duration: 0.2,
    ease: "expo.out"
  });
});

// page load animation
function firstpageanim(){
  var t1 = gsap.timeline();
  t1.from("#nav",{
      y: -10,
      opacity: 0,
      duration: 1.5,
      ease: "expo.inOut"
  })
  .to(".lem",{
      y: 0,
      duration: 1,
      ease: "expo.inOut",
      delay: -1,
      stagger: 0.2
  })
  .from("#herofooter",{
      y: -10,
      opacity: 0,
      duration: 1,
      delay: -1,
      ease: "expo.inOut",
  });
}

firstpageanim();


document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;

  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });

  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      duration: 0.5,
    });
  });
});