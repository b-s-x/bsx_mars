import gsap from "gsap";

export const useAnimationHeader = (
  elemItem: string,
  elemBackground: string,
  elemBox: string,
) => {
  const line1 = gsap.timeline();

  line1.to(elemBox, {
    fontSize: 80,
    delay: 3,
    duration: 3,
    position: 'absolute',
    top: '0%',
    left: '0%',
    transform: 'none',
    width: '100%'
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

export const animationCardList = (elem: string) => {
  gsap.to(elem, {
    duration: 2,
    ease: "power1.in",
    opacity: 1,
    delay: 8.5,
    display: 'grid',
  })
}

