import React from 'react';
import ImageCell from './ImageCell.jsx';
import Flickity from 'react-flickity-component';
import styled from 'styled-components'

const StyledCarousel = styled.div.attrs(props => ({
  className: 'carousel',
}))`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

// const StyledPrevButton = styled.button.attrs(props => ({
//   className: 'flickity-prev-next-button',
// }))`
//   top: 50%;
//   width: 44px;
//   height: 44px;
//   border-radius: 50%;
//   /* vertically center */
//   transform: translateY(-50%);
// `;

const flickityOptions = {
  initialIndex: 0,
  fullscreen: true,
  imagesLoaded: true,
  pageDots: false,
  prevNextButtons: true,
  adaptiveHeight: false,
  wrapAround: false,
  lazyLoad: true,
  cellAlign: 'left',


  // groupCells: 1
  // contain: true
}

var Carousel = (props) => {
  console.log("TEST", props)

  return (
    <StyledCarousel>
      {/* <StyledPrevButton> */}
        <Flickity
          className={'carousel'} // default ''
          elementType={'div'} // default 'div'
          options={flickityOptions} // takes flickity options {}
          disableImagesLoaded={false} // default false
          reloadOnUpdate // default false
          static // default false

        >
          <img src={props.data.products[0].image}/>
          <img src="https://hrphxfec.s3-us-west-1.amazonaws.com/Kanken+Laptop+13/kanken_autumn1.webp"/>
          <img src={props.data.products[0].image}/>
          <img src="https://hrphxfec.s3-us-west-1.amazonaws.com/Kanken+Laptop+13/kanken_autumn1.webp"/>
        </Flickity>
      {/* </StyledPrevButton> */}
    </StyledCarousel>
  )
}

export default Carousel;