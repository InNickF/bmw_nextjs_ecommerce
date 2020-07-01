import styled, { css } from 'styled-components'
import { prop, switchProp } from 'styled-tools'

const Loading = styled.div`
  ${switchProp('type', {
    'points': css`
      :before,
      :after {
         border-radius: 50%;
         width: 2.5em;
         height: 2.5em;
         animation-fill-mode: both;
         animation: points 1.8s infinite ease-in-out;
       }
       color: ${prop('color')};
       font-size: 10px;
       margin: auto;
       position: relative;
       text-indent: -9999em;
       transform: translateZ(0);
       animation-delay: -0.16s;
       border-radius: 50%;
       width: 2.5em;
       height: 2.5em;
       animation-fill-mode: both;
       animation: points 1.8s infinite ease-in-out;

       :before,
       :after {
         content: '';
         position: absolute;
         top: 0;
       }
       :before {
         left: -3.5em;
         animation-delay: -0.32s;
       }
       :after {
         left: 3.5em;
       }
       @-webkit-keyframes points {
         0%,
         80%,
         100% {
           box-shadow: 0 2.5em 0 -1.3em;
         }
         40% {
           box-shadow: 0 2.5em 0 0;
         }
       }
       @keyframes points {
         0%,
         80%,
         100% {
           box-shadow: 0 2.5em 0 -1.3em;
         }
         40% {
           box-shadow: 0 2.5em 0 0;
         }
       }
    `,
    'circle': css`
      width: 40px;
      height: 40px;
      margin: 0 auto;
      background-color: ${prop('color')};
      border-radius: 100%;
      animation: circle 1s infinite ease-in-out;
      @keyframes circle {
        0% {
          transform: scale(0);
        }
        100% {
          transform: scale(1);
          opacity: 0;
        }
      }
    `,
    'lines': css`
      :before,
      :after {
        background: ${prop('color')};
        animation: lines 1s infinite ease-in-out;
        width: 1em;
        height: 4em;
      }
      background: ${prop('color')};
      animation: lines 1s infinite ease-in-out;
      width: 1em;
      height: 4em;
      color: ${prop('color')};
      text-indent: -9999em;
      margin: 1rem auto;
      position: relative;
      font-size: 11px;
      transform: translateZ(0);
      animation-delay: -0.16s;
      :before,
      :after {
        position: absolute;
        top: 0;
        content: '';
      }
      :before {
        left: -1.5em;
        animation-delay: -0.32s;
      }
      :after {
        left: 1.5em;
      }
      @keyframes lines {
        0%,
        80%,
        100% {
          box-shadow: 0 0;
          height: 4em;
        }
        40% {
          box-shadow: 0 -2em;
          height: 5em;
        }
      }
    `
  })}


  /*
   </Lines Loader>
  */
  `

export default Loading
