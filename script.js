

function loader() {
  let tl = gsap.timeline();

  tl.to("#yellow1", {
    top: "-100%",
    duration: 0.5,
    delay: 0.7,
    ease: "expo.out",
  });

  tl.to(
    "#loader video",
    {
      top: "-100%",
      duration: 0.5,
      delay: 0.7,
      ease: "expo.out",
    },
    "anim"
  );

  tl.from(
    "#yellow2",
    {
      top: "100%",
      duration: 0.6,
      delay: 0.7,
      ease: "expo.out",
    },
    "anim"
  );

  tl.to(
    "#loader h1",
    {
      delay: 0.6,
      duration: 0.7,
      color: "black",
    },
    "anim"
  );

  tl.to("#loader", {
    opacity: 0,
  });

  tl.to("#loader", {
    display: "none",
  });
}

loader();


document.querySelectorAll('.img-div img').forEach(img => 
{
    const randomHeight = Math.floor(Math.random() * (600 - 300) + 300); 
    img.style.height = `${randomHeight}px`;
});


const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

let elem = document.querySelectorAll(".elem");

elem.forEach((item) => {
    item.addEventListener("mouseenter", function()
    {
        let data_img = item.getAttribute("data-img");
        
        document.querySelector("#page2").style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${data_img})`
    })
})


document.querySelector("#to-top-btn").addEventListener("click", function()
{
    scroll.scrollTo(0)
})

