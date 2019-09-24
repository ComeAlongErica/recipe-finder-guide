import styled from 'styled-components'

// Recipes.jsx styles
export const Grid = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-areas: 'row';
`
export const ContainerForStickyArrows = styled.div`
  grid-area: row;
  min-width: 100vw;
  z-index: 5;
  pointer-events: none;
`
export const CardScrollContainer = styled.div`
  grid-area: row;
  z-index: 5;
  margin: 5px 0 0;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 6px 0;
  overflow-x: auto;
  scroll-behavior: smooth;
  transition: 0.4s ease-in-out;
  transform: translateX(
    ${props => (props.enterDirection ? (props.enterDirection === 'center' ? '' : '100vw') : '-100vw')}
  );
  ::-webkit-scrollbar {
    display: none;
  }
`

export const Arrow = styled.div`
  transition: 0.3s ease-in-out;
  opacity: ${props => (props.showArrow ? 1 : 0)};
  height: 223px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  pointer-events: auto;
  :hover {
    cursor: pointer;
  }
  ::after {
    content: '';
    float: clear;
  }
`
export const RightArrow = styled(Arrow)`
  height: ${props => props.expand && '326px'};
  float: right;
  padding: 0 10px 0 50px;
  border-radius: 10px 0 0 10px;
  background-image: linear-gradient(
    to right,
    ${props => `
    ${props.theme.background + '00'},
    ${props.theme.background + '6B'},
    ${props.theme.background + 'E6'},
    ${props.theme.background}`}
  );
`
export const LeftArrow = styled(Arrow)`
  height: ${props => props.expand && '326px'};
  float: left;
  border-radius: 10px 0 0 10px;
  padding: 0 50px 0 10px;
  background-image: linear-gradient(
    to left,
    ${props => `
    ${props.theme.background + '00'},
    ${props.theme.background + '6B'},
    ${props.theme.background + 'E6'},
    ${props.theme.background}`}
  );
`
export const SearchResults = styled.h3`
  grid-area: row;
  opacity: 0.4;
  margin-top: -10px;
  margin-left: 16px;
`

// modal styles
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: #101B29CF;
  z-index: 10;
  animation: ${props =>
    props.displayModal
      ? 'unfoldIn 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards'
      : 'fadeOut 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards'};
  @keyframes unfoldIn {
    0% {
      transform: scaleY(0.005) scaleX(0);
    }
    15% {
      transform: scaleY(0.005) scaleX(1);
    }
    100% {
      transform: scaleY(1) scaleX(1);
    }
  }
  @keyframes fadeOut {
    0% {
      opacity: 1;
      transform: scaleY(1) scaleX(1);
    }
    50% {
      opacity: 0;
      transform: scaleY(1) scaleX(1);
    }
    100% {
      opacity: 0;
      transform: scaleY(0.005) scaleX(0);
    }
  }
`
export const ModalContainer = styled.div`
  position: fixed;
  z-index: 11;
  top: 50%;
  left: 50%;
  height: 60vh;
  max-height: 500px;
  width: 450px;
  padding: 10px;
  margin: 10px;
  background-color: ${props => props.theme.backgroundSecondary};
  border: none;
  border-radius: 10px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  transform: translate(-50%, -50%);
  transform-origin: top left;
  animation: ${props =>
    props.displayModal
      ? 'popIn 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards'
      : 'fadeOutContainer 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards'};
  @keyframes popIn {
    0% {
      transform: scaleY(0) scaleX(0) translate(-50%, -50%);
    }
    55% {
      transform: scaleY(0) scaleX(0) translate(-50%, -50%);
    }
    100% {
      transform: scaleY(1) scaleX(1) translate(-50%, -50%);
    }
  }
  @keyframes fadeOutContainer {
    0% {
      opacity: 1;
      transform: scaleY(1) scaleX(1) translate(-50%, -50%);
    }
    75% {
      opacity: 0;
      transform: scaleY(1) scaleX(1) translate(-50%, -50%);
    }
    100% {
      opacity: 0;
      transform: scaleY(0) scaleX(0) translate(-50%, -50%);
    }
  }
`

// recipe modal
export const Image = styled.div`
  background: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px 10px 0 0;
  height: 50%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  ::after {
    content: '';
    position: absolute;
    display: block;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 50%;
    background: linear-gradient(to top, ${props => props.theme.backgroundSecondary} 0%, transparent 100%);
  }
`
export const TextSection = styled.div`
  max-height: 65%;
  overflow: scroll;
  position: absolute;
  margin: 0 30px 20px;
  color: ${props => props.theme.fontMain};
  top: 35%;
  left: 0;
  display: flex;
  flex-wrap: wrap;
  h3 {
    width: 100%;
    font-size: 26px;
    margin: 10px;
  }
  div {
    box-sizing: border-box;
    padding: 10px;
    width: 50%;
  }
`
export const Ingredients = styled.ul`
  margin: 0;
  padding: 0 0 0 18px;
  li {
    font-size: 12px;
    margin: 2px;
  }
`
export const SectionHeaders = styled.h4`
  text-transform: uppercase;
  font-size: 12px;
  margin: 5px;
  ${props => props.ingredient && `margin-left:-16px;`}
  ${props => props.inline && `display: inline-block;`}
`
export const StyledParagraphs = styled.p`
  font-size: 12px;
  margin: 2px 5px;
  ${props => props.inline && `display: inline-block;`}
`
export const StyledLink = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
  font-size: 12px;
  color: #f9bd35;
  display: inline-block;
  padding: 50px 0 5px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 20px;
  border-radius: 10px;
  overflow: hidden;
  background: linear-gradient(to top, ${props => props.theme.backgroundSecondary} 0%, transparent 100%);
  ::after {
    width: 100%;
    position: absolute;
    bottom: 0px;
    left: 0px;
    display: block;
    content: '';
    transform: scaleX(0.5);
    border-bottom: 3px solid #f9bd35;
    transition: transform 250ms ease-in-out 0s;
  }
  :hover::after {
    transform: scaleX(1);
  }
`