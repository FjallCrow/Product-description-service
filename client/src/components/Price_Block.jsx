import React from 'react';
import SizeMenu from './SizeMenu.jsx';
import Colors from './Colors.jsx';
import StarRating from './StarRating.jsx';
import {FaShoppingBag} from 'react-icons/fa'
import styled from 'styled-components';

const PriceBlockWrapper = styled.div`
  width: 100%;
  height: 600px;
  background: rgb(244,244,244);
  background: linear-gradient(180deg, rgba(244,244,244,1) 55%, rgba(235,235,235,1) 88%);
  font-family: 'M PLUS Rounded 1c', sans-serif;
`;

const ContentHeader = styled.div`
  padding-top: 50px;
`;

const Heading = styled.h1`
  font-size: 28px;
  font-weight: 900;
  lett-spacing: 1.68px;
  line-height: 28px;
  margin: 0px;
  text-align: left;
  text-size-adjust: 100%;
  width: 90%;
  padding-left: 5%;
`;

const SubHeadingWrapper = styled.div`
  display: flex;
  width: 90%;
`;

const Gender = styled.div`
  font-size: 12px;
  color: #707070;
  font-weight: 700;
  letter-spacing: 0.42px;
  line-height: 30px;
  text-align: left;
  text-size-adjust: 100%;
  width: 50px;
  padding-left: 6.2%;
`;

const Style = styled.div`
  font-size: 12px;
  color: #707070;
  font-weight: 400;
  letter-spacing: 0.42px;
  line-height: 30px;
  text-align: left;
  text-size-adjust: 100%;
  width: 90%;
  padding-left: 1%;
`;

const StyledRating = styled.div`
  line-height: 30px;
  text-size-adjust: 100%;
  width: 100%;
  padding-left: 35%;
  padding-bottom: 2px;
`;

const Price = styled.span`
  font-size: 20px;
  color: #303030;
  font-weight: 400;
  letter-spacing: .03em;
  line-height: 30px;
  margin-top: 10px;
  text-size-adjust: 100%;
  width: 100%;
  padding-left: 5%;
`;

const Description = styled.p`
  font-size: 14px;
  color: #303030;
  font-weight: 400;
  letter-spacing: 0.42px;
  line-height: 21px;
  margin: 0px;
  text-align: left;
  text-size-adjust: 100%;
  width: 85%;
  padding-left: 5%;
`;

const ColorButtonWrapper = styled.div`
  box-sizing: border-box;
  display: block;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.42px;
  line-height: 21px;
  text-align: left;
  text-size-adjust: 100%;
  width: 90%;
  padding-left: 5%;
  padding-top: 25px;
`;

const StyledMenu = styled.div`
  padding-top: 12px;
  padding-bottom: 5px;
  width: 45%;
`;

const Button = styled.button`
  background: #cc1618;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  font-stretch: 100%;
  letter-spacing: 0.42px;
  line-height: 20px;
  padding-top: 12px;
  padding-bottom: 12px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border: 0;
  justify-content: center;
  vertical-align: middle;
  cursor: pointer
  font-weight: 700;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 12px;
  padding-bottom: 12px;
  width: 40%;
  transition: .2s ease-in-out;
`;

var Price_Block = (props) => {

  return(
    <PriceBlockWrapper>

      <ContentHeader>
        <Heading>{props.data.currentProduct.name}</Heading>

        <SubHeadingWrapper>
          <Gender>{props.data.currentProduct.gender}</Gender>
          <Style>{props.data.currentProduct.style}</Style>
          <StyledRating><StarRating data={props.data.currentProduct}></StarRating></StyledRating>
        </SubHeadingWrapper>

        <Price>${props.data.currentProduct.price}</Price>
      </ContentHeader>

      <Description>{props.data.currentProduct.description}<span style={{paddingLeft: '7px', fontSize: '14px', fontWeight: 'bold', color: '#303030'}}>Read More<span style={{paddingLeft: '5px', fontSize: '14px', fontWeight: '900', color: '#cc1618', fontFamily: "sans-serif"}}>></span></span></Description>

      <ColorButtonWrapper>
        <Colors data={props.data} getCurrentProduct={props.getCurrentProduct}/>
        <StyledMenu><SizeMenu data={props.data.currentProduct} /></StyledMenu>
        <Button onClick={() => props.addToCart(props.data.currentProduct.price)} ><FaShoppingBag/> ADD TO CART</Button>
      </ColorButtonWrapper>

    </PriceBlockWrapper>
  )
}

export default Price_Block;