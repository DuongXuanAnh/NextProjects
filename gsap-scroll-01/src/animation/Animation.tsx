import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function animateMenuItems(menu_items: any) {
  return gsap.from(menu_items.children, {
    opacity: 0,
    x: 0,
    duration: 1,
    delay: 1.5,
    stagger: {
      amount: 1,
    },
  });
}

export function animateStar(star: string) {
  return gsap.fromTo(
    star,
    {
      rotation: 450,
      opacity: 0,
      y: 100,
    },
    {
      rotation: 0,
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 1.5,
      scrollTrigger: star,
    },
  );
}

export function animateTitles(title: string) {
  return gsap.fromTo(
    title,
    {
      letterSpacing: "10px",
      opacity: 0,
      x: 300,
      skewX: 65,
    },
    {
      letterSpacing: "0",
      opacity: 1,
      x: 0,
      skewX: 0,
      duration: 1,
      delay: 0.5,
      scrollTrigger: title,
    },
  );
}

export function animateParagraph(paragraph: HTMLParagraphElement) {
  return gsap.fromTo(
    paragraph,
    {
      opacity: 0,
      x: 150,
      skewX: 30,
    },
    {
      opacity: 1,
      x: 0,
      skewX: 0,
      duration: 1,
      delay: 0.5,
      scrollTrigger: paragraph,
    },
  );
}

export function animateButton(button: string) {
  return gsap.fromTo(
    button,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1,
      delay: 1,
      scrollTrigger: button,
    },
  );
}

export function animatePyramid(pyramid: string) {
  return gsap.from(pyramid, {
    opacity: 0,
    scale: 0.5,
    duration: 1,
    delay: 0.5,
  });
}

export function animateHand(hand: string) {
  gsap.fromTo(
    hand,
    {
      scale: 0.2,
      opacity: 0,
      skewY: 30,
    },
    {
      scale: 1,
      opacity: 1,
      skewY: 0,
      duration: 1,
      delay: 0.5,
      scrollTrigger: hand,
    },
  );
}

export function animateLine(line: HTMLHRElement) {
  gsap.fromTo(
    line,
    {
      opacity: 0,
      width: "0%",
    },
    {
      opacity: 1,
      width: "100%",
      duration: 1,
      delay: 1,
      scrollTrigger: line,
    },
  );
}

export function animateRotation(rotate: any) {
  gsap.fromTo(
    rotate,
    {
      opacity: 0,
      rotation: 350,
      scale: 0.2,
    },
    {
      opacity: 1,
      rotation: 0,
      scale: 1,
      duration: 1,
      delay: 2.5,
      scrollTrigger: rotate,
    },
  );
}

export function animateCard(card: any) {
  gsap.fromTo(
    card,
    {
      opacity: 0,
      scale: 0.1,
    },
    {
      opacity: 1,
      scale: 1,
      duration: 1,
      delay: 0.5,
      stagger: {
        amount: 1,
      },
      scrollTrigger: card,
    },
  );
}
