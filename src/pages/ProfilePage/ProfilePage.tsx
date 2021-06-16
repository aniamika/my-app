import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import IconButtonGeneric from "../../components/Common/IconButtonGeneric";
import { IState } from "../../reducers";
import { IAlbumsReducer } from "../../reducers/albumsReducers";
import { ICommentsReducer } from "../../reducers/commentsReducers";
import { IPhotosReducer } from "../../reducers/photosReducers";
import { IPostsReducer } from "../../reducers/postsReducers";
import { ITodosReducer } from "../../reducers/todosReducers";
import { IUsersReducer } from "../../reducers/usersReducers";
import { Colors } from "../../styledHelpers/Colors";
import { FontSize } from "../../styledHelpers/FontSize";
import { Margins } from "../../styledHelpers/Margins";
import { Padding } from "../../styledHelpers/Padding";
import ProfileInfoForm from "./ProfileInfoForm";

const Wrapper = styled.section`
  overflow: auto;
  background: ${Colors.white};
  border-radius: 4px;
  box-shadow: 1px 3px 5px 1px rgb(0 0 0 / 7%);
  display: flex;
  flex-direction: column;
  min-height: 5.3rem;
  position: relative;
`;
const Header = styled.header`
  padding: ${Padding[16]};
  border-bottom: 1px solid ${Colors.gray02};
`
const HeaderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: ${Margins[32]};
`
const HeaderButton = styled.button`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: ${FontSize[14]};
  color: ${Colors.blue02};
`
const HeaderMain = styled.div`
  display: flex;
  justify-content: space-between;
`
const PersonContainer = styled.div`
  margin-right: ${Margins[16]};
`
const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: ${Margins[8]};
  position: relative;

  &:after {
    content: "";
    display: block;
    border-radius: 16px;
    background-color: ${Colors.orange};
    background-image: url("./media/icons/star.svg");
    background-repeat: no-repeat;
    background-size: 80%;
    background-position: center;
    z-index: 1;
    position: absolute;
    bottom: 0;
    right: 0;
    height: 1.5rem;
    width: 1.5rem;
    color: ${Colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid ${Colors.white};
    line-height: normal;
  }

`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  border-radius: 50%;
`;
const SeeProfileButton = styled.button`
  color: ${Colors.blue03};
  font-size: ${FontSize[16]};
  font-weight: 500;
`
const PersonDetailsContainer = styled.div`
  display: flex;
  align-items: flex-start;
`
const PersonInfo = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`
const PersonName = styled.p`
  margin-bottom: ${Margins[8]};
  font-weight: 500;
`
const PersonCompany = styled.div`
  margin-bottom: ${Margins[8]};
  font-weight: 500;
`
const PersonCity = styled.div`
  margin-bottom: ${Margins[8]};
`
const PersonRole = styled.div`

`
const RightContainer = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: auto;
  justify-content: flex-end;
`
const PersonDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
const Section = styled.div`
  padding: ${Padding[16]};
  border-bottom: 1px solid ${Colors.gray02};
`
const SectionHeader = styled.p`
  font-weight: 500;
  margin-bottom: ${Margins[16]};
`
const EditButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 4.125rem;
  z-index: 1;
`
const PersonEmail = styled.div`
  margin-bottom: ${Margins[8]};
`
const PersonPhoneNumber = styled.div`

`
const PersonInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
export const ProfilePage = () => {

  const { albumsList, commentsList, photosList, postsList, todosList, usersList } = useSelector<IState, IAlbumsReducer & ICommentsReducer & IPhotosReducer & IPostsReducer & ITodosReducer & IUsersReducer >(state => ({
    ...state.albums,
    ...state.comments,
    ...state.photos,
    ...state.posts,
    ...state.todos,
    ...state.users,
  }));
  
  const [isPersonInfoEditable, setPersonInfoEditable] = useState<boolean>(true);

  const toggleForm = () => setPersonInfoEditable(!isPersonInfoEditable);

  return (
    <Wrapper>
      <Header> 
        <HeaderButtonsContainer>
          <HeaderButton>
            <IconButtonGeneric src="./media/icons/message.svg" className="sm h-margin-right-8" alt="message"/>
            Message
          </HeaderButton>
          <HeaderButton>
            <IconButtonGeneric src="./media/icons/file-invoice.svg" className="sm h-margin-right-8" alt="message"/>
            Create a request
          </HeaderButton>
          <HeaderButton>
            <IconButtonGeneric src="./media/icons/briefcase.svg" className="sm h-margin-right-8" alt="message"/>
            Add to a cluster
          </HeaderButton>
        </HeaderButtonsContainer>
        
        <EditButton onClick={toggleForm}>
          <IconButtonGeneric src="./media/icons/pencil.svg" className="sm" alt="edit person information"/>
          </EditButton>
        <HeaderMain>

          <PersonContainer>
            <ImageContainer>
                <Image src={photosList[0]?.url} />
            </ImageContainer>
            <SeeProfileButton>See profile</SeeProfileButton>
          </PersonContainer>

          {isPersonInfoEditable ? (
            <ProfileInfoForm />
          ) : (
            <PersonInfoContainer>
              <PersonDetailsContainer>
                <PersonInfo> 
                  <PersonName>Humberta swift</PersonName>
                  <PersonCompany>Clifford Chance</PersonCompany>
                  <PersonCity>New York</PersonCity>
                  <PersonRole>Partner</PersonRole>
                </PersonInfo>
              </PersonDetailsContainer>

              <RightContainer>
                <PersonDetails>
                  <PersonEmail>humbertaswift@gmail.com</PersonEmail>
                  <PersonPhoneNumber>762538201</PersonPhoneNumber>
                </PersonDetails>
              </RightContainer>
            </PersonInfoContainer>
          )}

        </HeaderMain>
      </Header>


      <Section> 
        <SectionHeader>Panel informations</SectionHeader>
      </Section>

      <Section> 
        <SectionHeader>Services & projects</SectionHeader>
      </Section>

      <Section> 
        <SectionHeader>Proposals</SectionHeader>
      </Section>

      <Section> 
        <SectionHeader>Internal reviews</SectionHeader>
      </Section>

      <Section> 
        <SectionHeader>See more Reviews</SectionHeader>
      </Section>

    </Wrapper>
  );
};
export default ProfilePage;
