const modalOpen = document.querySelector(".ham")
const modalClose = document.querySelector(".close")
const modalNavmenu = document.querySelector(".nav-menu")


modalOpen.addEventListener("click", () => {
  // console.log("check click!");
  gsap.fromTo(
    ".modal",
    0.5,
    {
      opacity: 0
    },
    {
      opacity: 1,
      display: "block"
    }
  )
})

modalClose.addEventListener("click", () => {
  // console.log("check click!");
  gsap.fromTo(
    ".modal",
    0.5,
    {
      opacity: 1
    },
    {
      opacity: 0,
      display: "none"
    }
  )

})

modalNavmenu.addEventListener("click", () => {
  // console.log("check click!");
  gsap.fromTo(
    ".modal",
    0.5,
    {
      opacity: 1
    },
    {
      opacity: 0,
      display: "none"
    }
  )

})