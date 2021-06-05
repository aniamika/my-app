import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IState } from "../../reducers";
import { IPhotosReducer } from "../../reducers/photosReducers";
import { IPostsReducer } from "../../reducers/postsReducers";
import { IUsersReducer } from "../../reducers/usersReducers";
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
    margin-bottom: 0.25rem;
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
const PersonImage=styled.img`
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    margin-right: 0.5rem;
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
const PublicationsContainer = styled.div`
  max-height: 15.25rem;
  overflow: auto;
`

const Slider: FC = () => {
  
  const { postsList, usersList, photosList } = useSelector<IState, IPostsReducer & IUsersReducer & IPhotosReducer >(state => ({
    ...state.posts,
    ...state.users,
    ...state.photos,
  }));

  return (
    <SliderWrapper>
      <LeftContainer style={{backgroundImage: `url(${(photosList[0]?.url)})`}}>
        <p>{postsList[0]?.body}</p>
        <Footer>
          <time>7 jan. 2020</time>
          <PersonContainer>
              <PersonImage src={photosList[0]?.url}/>
              <span>{usersList[1]?.name}</span>
          </PersonContainer>
        </Footer>
      </LeftContainer>
      <RightContainer>
        <h2>Latest publications</h2>
        <PublicationsContainer>
          {postsList.map(() => (
            <SliderPublication/>
          ))}
        </PublicationsContainer>
        <Link to="/test">See more publications</Link>
      </RightContainer>
    </SliderWrapper>
  );
};
export default Slider;
