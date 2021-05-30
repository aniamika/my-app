import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BoxShadow } from "../../styledHelpers/BoxShadow";
import { Colors } from "../../styledHelpers/Colors";
import { FontSize } from "../../styledHelpers/FontSize";
import { Margins } from "../../styledHelpers/Margins";
import { Padding } from "../../styledHelpers/Padding";
import SliderPublication from "./SliderPublication";

const SliderWrapper = styled.section`
  background: ${Colors.white};
  border-radius: 4px;
  box-shadow: ${BoxShadow.small};
  width: 100%;
  min-height: 300px;
  display: flex;
  justify-content: center;
  margin-bottom: ${Margins[16]};
`;
const LeftContainer = styled.div`
  background-image: url("./media/city.jpg");
  background-repeat: no-repeat;
  background-position: center; 
  background-size: cover;
  padding: ${Padding[16]};
  display: flex;
  flex-direction: column;
  flex: 1;
  color: ${Colors.white};
  align-items: flex-start;
  justify-content: flex-end;
  font-size: ${FontSize[14]};
  line-height: 1.4;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg,rgba(36,45,72,0.9) 0%,rgba(102,111,131,0.6) 50%,transparent 100%)
  }
  p {
    z-index: 1;
  }
`
const Footer=styled.div`
display: flex;
align-items: center;
z-index: 1;
  time {
    margin-right: 0.5rem;
    color: ${Colors.gray02};
   }
`
const PersonContainer=styled.div`
    display: flex;
    align-items: center;
    color: ${Colors.gray02};
`
const PersonImage=styled.div`
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    margin-right: 0.5rem;
    background-image: url("./media/employee-photo.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`
const RightContainer = styled.div`
  padding: ${Padding[16]};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 2;
  font-weight: 500;
  font-size: ${FontSize[18]};
  h2 {
    display: block;
    margin-bottom: 0.5rem;
  }
  a {
    color: ${Colors.blue01};
    font-size: ${FontSize[14]};
  }
`

const Slider: FC = () => {
  return (
    <SliderWrapper>
      <LeftContainer>
        <p>Lorem ipsum dolar sit amet, consectetur adipiscing elit... and one more line for the demo</p>
        <Footer>
          <time>7 jan. 2020</time>
          <PersonContainer>
              <PersonImage/>
              <span>John Doe</span>
          </PersonContainer>
        </Footer>
      </LeftContainer>
      <RightContainer>
        <h2>Latest publications</h2>
        <SliderPublication/>
        <SliderPublication/>
        <SliderPublication/>
        <Link to="/test">See more publications</Link>
      </RightContainer>
    </SliderWrapper>
  );
};
export default Slider;
