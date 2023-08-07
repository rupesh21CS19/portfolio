const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

// mouseMove

// function circleMouseOver() {
//   window.addEventListener("mousemove", (event) => {
//     document.querySelector(
//       ".mini-circle"
//     ).style.transform = `translate(${event.clientX}px,${event.clientY}px)`;
//   });
// }
// circleMouseOver();

// firstpage animation

function firstPage() {
  let v1 = gsap.timeline();

  v1.from("nav", {
    y: "-10",
    opacity: 0,
    duration: 1.1,
    ease: Expo.easeInOut,
  })
    .to(".boundelm", {
      y: "0",
      duration: 1,
      ease: Expo,
      stagger: 0.2,
    })
    .from(".hero-footer", {
      y: -10,
      opacity: 0,
      duration: 1,
      ease: Expo.easeInOut,
    });
}
firstPage();

// setTime

let time = document.querySelector("#time");

setInterval(() => {
  let date = new Date().toLocaleTimeString();
  time.innerHTML = date;
}, 1000);
