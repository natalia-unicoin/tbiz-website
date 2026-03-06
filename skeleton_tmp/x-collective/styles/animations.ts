import { keyframes } from 'tss-react';

export const fadeInSlide = `${keyframes`
0% {
  opacity: 0;
}

100% {
  transform: translateY(-70px);
  opacity: 1;
}
`} 2s forwards ease-in`;

export const slideInOut = `${keyframes`
0% {
  top: 100px;
}
30% {
  top: 0;
}
70% {
  top: 0;
}
100% {
  top: -100px;
}
`}`;

export const collapseInOut = `${keyframes`
0% {
  width: 0;
}
10% {
  width: 100%;
}
90% {
  width: 100%;
}
100% {
  width: 0;
}
`}`;

export const rotate = `${keyframes`
0% {
  transform: rotate(0)
}
100% {
  transform: rotate(360deg)
}
`}`;
