import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { ArrowRightCircle } from 'react-feather'

import Card from './parts/Card'

const CardScrollContainer = styled.div`
  position: relative;
  margin: 5px 0 0;
  min-width: 100%;
  display: flex;
  overflow-x: auto;
  padding: 6px 0;
  transition: 0.4s ease-in-out;
  transform: translateX(
    ${props => (props.enterDirection ? (props.enterDirection === 'center' ? '' : '100vw') : '-100vw')}
  );
  ::-webkit-scrollbar {
    display: none;
  }
`

const Arrow = styled.div`
  width: 100px;
  height: 100%;
  border-radius: 100%;
  position: sticky;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: ${props => props.theme.backgroundSecondary + 'AD'};
  :hover {
    cursor: pointer;
  }
`
const Recipes = props => {
  const { recipes, handleDisplayModal, scrollDirection, index, expand } = props
  const [direction, setDirection] = useState(scrollDirection)
  const [showArrow, setShowArrow] = useState(false)
  const loaderCards = [1, 2, 3, 4, 5]
  useEffect(
    () => {
      setTimeout(() => {
        setDirection('center')
      }, 0)
    },
    [scrollDirection]
  )
  const displayArrow = () => setShowArrow(!showArrow)
  const handleScroll = () => {
    let containerIdx = index === 0 ? index : index - 1
    const scrollContainer = document.getElementsByClassName('card-scroll-container')[containerIdx]
    let halfWindowSize = window.innerWidth / 2
    let currentPosition = scrollContainer.scrollLeft
    let scrollDistance = currentPosition + halfWindowSize
    scrollContainer.style.scrollBehavior = 'smooth'
    scrollContainer.scrollLeft = scrollDistance
  }
  return (
    <CardScrollContainer className={'card-scroll-container'} enterDirection={direction} onMouseEnter={displayArrow} onMouseLeave={displayArrow}>
      {recipes &&
        recipes.map((recipe, idx) => {
          return <Card recipe={recipe.recipe} key={idx} handleDisplayModal={handleDisplayModal} expand={expand} />
        })}
      {!recipes &&
        loaderCards.map((card, idx) => {
          return <Card key={idx} loader />
        })}
      {showArrow && (
        <Arrow className={'arrow'} onClick={handleScroll} right>
          <ArrowRightCircle height={50} width={50} color={'white'} />
        </Arrow>
      )}
    </CardScrollContainer>
  )
}

export default Recipes
