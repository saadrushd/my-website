import styled, { keyframes } from 'styled-components'

const bgAnimation = keyframes`
  0% { transform: translate(0,0) }
  10% { transform: translate(-5%,-5%) }
  20% { transform: translate(-10%,5%) }
  30% { transform: translate(5%,-10%) }
  40% { transform: translate(-5%,15%) }
  50% { transform: translate(-10%,5%) }
  60% { transform: translate(15%,0) }
  70% { transform: translate(0,10%) }
  80% { transform: translate(-15%,0) }
  90% { transform: translate(10%,5%) }
  100% { transform: translate(5%,0) }
`

const Noise  = styled.div`
  z-index: 101;
  position: fixed;
  pointer-events: none;
  top: -50%;
  left: -50%;
  right: -50%;
  bottom: -50%;
  width: 200%;
  height: 200vh;
  background: transparent url('/assets/noise-transparent.png') repeat 0 0;
  background-repeat: repeat;
  animation: ${bgAnimation} .2s infinite;
  opacity: ${props => props.theme.noiseOpacity};
  visibility: visible;
`

export default Noise