// gsapからメディアクエリ関数を実行
const mm = gsap.matchMedia()
// ブレイクポイントを指定
// 端末画面幅が1025PX以上の時（PC)
mm.add("(min-width: 1025px)",() => {
  
  
  gsap.fromTo(
    ".concept-first .column-left",
    2,
    {
      x: -100,
      opacity: 0
    },
    {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".concept-first .column-left",
        start: "top center",
        maker: true
      }
    }
  )
  
  gsap.fromTo(
    ".concept-first .column-right",
    2,
    {
      x: 100,
      opacity: 0
    },
    {
      x: 0,
      opacity: 1,
      delay: 1,
      scrollTrigger: {
        trigger: ".concept-first .column-right",
        start: "top center",
        maker: true
      }
    }
  )
  
})





// 端末画面幅が599PX以下の時（スマホ)
mm.add("(max-width: 599px)",() => {
  gsap.fromTo(
    ".concept-first .column-left",
    2,
    {
      y: 100,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".concept-first .column-left",
        start: "top center",
        maker: true
      }
    }
  )
  
  gsap.fromTo(
    ".concept-first .column-right",
    2,
    {
      y: 100,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".concept-first .column-right",
        start: "top center",
        maker: true
      }
    }
  )
  
})
