/* eslint-disable @typescript-eslint/no-use-before-define */
import { animateScroll } from 'react-scroll';

type TArgs = {
  offset: number;
};

let intervalId: any;

// TODO: fix any
export const scrollToElement = (
  selectorOrElement: any,
  { offset = 0 }: TArgs = {} as any
) => {
  clearInterval(intervalId);

  const getElement = () =>
    typeof selectorOrElement === 'string'
      ? document.querySelector(selectorOrElement)
      : selectorOrElement;

  const element = getElement();

  if (!element) {
    let i = 0;

    intervalId = setInterval(() => {
      const el = getElement();
      if (el) {
        scroll(el, offset);
        clearInterval(intervalId);
      }

      i += 1;

      if (i === 12) {
        clearInterval(intervalId);
      }
    }, 100);
    return;
  }

  scroll(element, offset);
};

const scroll = (element: any, offset: number) => {
  const top = element.getBoundingClientRect().top + window.scrollY + offset;
  animateScroll.scrollTo(top, { smooth: true, duration: 400 });
};

export const scrollOnClick = (event: any) => {
  event.preventDefault();
  const selector = event.currentTarget.getAttribute('href');

  scrollToElement(selector);
};
