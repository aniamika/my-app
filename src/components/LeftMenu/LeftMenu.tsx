import React, { FC } from "react";
import styled from "styled-components";
import { BoxShadow } from "../../styledHelpers/BoxShadow";
import { Link } from "react-router-dom";
import { Colors } from "../../styledHelpers/Colors";
import { FontSize } from "../../styledHelpers/FontSize";
import { Margins } from "../../styledHelpers/Margins";
import IconButtonGeneric from "../Common/IconButtonGeneric";
import { IState } from "../../reducers";
import { Padding } from "../../styledHelpers/Padding";
import { IUsersReducer } from "../../reducers/usersReducers";
import { useSelector } from "react-redux";
import { IPhotosReducer } from "../../reducers/photosReducers";

const Wrapper = styled.aside`
  flex: 2;
  margin-right: ${Margins[16]};
`;
const Card = styled.div`
  background: ${Colors.white};
  border-radius: 4px;
  box-shadow: ${BoxShadow.small};
`;
const Header = styled.div`

  padding: ${Padding[16]};
  border-bottom: 1px solid ${Colors.gray02};
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    color: ${Colors.blue01};
    margin-bottom: ${Margins[8]};
    text-transform: capitalize;
    font-weight: 500;
    ${FontSize[18]};
  }
`;
const ImageBox = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: ${Margins[8]};
  overflow: hidden;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Description = styled.p`
  color: ${Colors.gray03};
  font-size: ${FontSize[14]};
  font-weight: 300;
  margin-bottom: ${Margins[8]};
`;
const CardList = styled.ul`

  padding: ${Padding[16]};
`;
const Item = styled.li`
  margin-bottom: ${Margins[8]};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CardItemLinkContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  a {
    display: flex;
    align-items: center;
    flex: 1;
  }
`;
const LinkName = styled.span`
  color: ${Colors.blue02};
  text-decoration: none;
  flex: 1;
`;
const CardButtonNetwork = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${Colors.blue02};
  width: 32px;
  height: 24px;
  background-color: ${Colors.white};
  border-radius: 4px;
  box-shadow: ${BoxShadow.small};
  cursor: pointer;
`;
const CardButtonPublications = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${Colors.blue02};
  width: 32px;
  height: 24px;
  background-color: ${Colors.white};
  border-radius: 4px;
  box-shadow: ${BoxShadow.small};
  cursor: pointer;
`;
const Navigation = styled.nav`

  padding: ${Padding[16]};
`;
const List = styled.ul``;
const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: ${Margins[16]};
`;

export const LeftMenu: FC = () => {

  const { usersList, photosList } = useSelector<IState, IUsersReducer & IPhotosReducer>(state => ({
    ...state.users,
    ...state.photos
  }));
  
  return (
    <Wrapper>
      {console.log(usersList?.[0])}
      {console.log(photosList?.[0])}
      <Card>
      <Link to="/profile">
        <Header>
          <ImageBox>
            <Image src={photosList[0]?.url} />
          </ImageBox>
          <span>{usersList[0]?.name}</span>
          <Description>{usersList[0]?.company.name}</Description>
        </Header>
      </Link>
        <CardList>
          <Item>
              <CardItemLinkContainer>
                <Link to="/test"> 
                  <IconButtonGeneric src="./media/icons/people.svg" className="lg h-margin-right-8" alt=""/>
                  <LinkName>Your network</LinkName>
                </Link>
              </CardItemLinkContainer>
            <Link to="/test">
              <CardButtonNetwork> 
                <IconButtonGeneric src="./media/icons/network.svg" className="sm" alt=""/>
              </CardButtonNetwork>
            </Link>
          </Item>
          <Item>
            <CardItemLinkContainer>
              <Link to="/test"> 
                  <IconButtonGeneric src="./media/icons/publications.svg" className="lg h-margin-right-8" alt=""/>
                  <LinkName>Your Publications</LinkName>
              </Link>
            </CardItemLinkContainer>
            <Link to="/test">
              <CardButtonPublications> 
                <IconButtonGeneric src="./media/icons/plus.svg" className="sm" alt=""/>
              </CardButtonPublications>
            </Link>
          </Item>
        </CardList>
      </Card>
      <Navigation>
        <List>
          <Link to="/test">
            <ListItem>
              <IconButtonGeneric src="./media/icons/publications.svg" className="xl h-margin-right-16" alt=""/>
              <LinkName>Publications</LinkName>
            </ListItem>
          </Link>
          <Link to="/test">
            <ListItem>
              <IconButtonGeneric src="./media/icons/ecosystem.svg" className="xl h-margin-right-16" alt=""/>
              <LinkName>Ecosystem</LinkName>
            </ListItem>
          </Link>
          <Link to="/entities">
            <ListItem>
              <IconButtonGeneric src="./media/icons/entities2.png" className="xl h-margin-right-16" alt=""/>
              <LinkName>Entities</LinkName>
            </ListItem>
          </Link>
        </List>
      </Navigation>
    </Wrapper>
  );
};
export default LeftMenu;
