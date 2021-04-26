import gsap from "gsap";

export const animHeader = (elemItem: string, elemBackground: string) => {
  gsap.timeline()
    .from(elemItem, {
      duration: 3,
      x: 150,
      y: 250,
      delay: 3,
      "font-size": 200,
    })
    .to(elemBackground, {
      height: 90,
      ease: "ease",
      duration: 2
    })
    .to(elemItem, {
      background: "white",
      color: "black",
      duration: 1,
    })
}

export const animCardList = (elem: string) => {
  gsap.to(elem, {
    duration: 2,
    ease: "power1.in",
    opacity: 1,
    delay: 8,
  })
}

