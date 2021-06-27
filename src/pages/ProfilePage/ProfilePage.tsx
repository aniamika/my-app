import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
import ProfilePageDetails from "./ProfilePageDetails";


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
const FormInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
const FormDetailsContainer = styled.div`
  display: flex;
  align-items: flex-start;
`
const FormInfo = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`
const FormName = styled.input`
  margin-bottom: ${Margins[8]};
  font-weight: 500;
  font-size: ${FontSize[16]};
  color: ${Colors.blue02};
`
const FormCompany = styled.input`
  margin-bottom: ${Margins[8]};
  font-weight: 500;
  font-size: ${FontSize[16]};
  color: ${Colors.blue02};
`
const FormCity = styled.input`
  margin-bottom: ${Margins[8]};
  font-weight: 500;
  font-size: ${FontSize[16]};
  color: ${Colors.blue02};
`
const FormRole = styled.input`
  font-weight: 500;
  font-size: ${FontSize[16]};
  color: ${Colors.blue02};
`
const FormRightContainer = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: auto;
  justify-content: flex-end;
`
const FormDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
const FormEmail = styled.input`
  margin-bottom: ${Margins[8]};
  font-weight: 500;
  font-size: ${FontSize[16]};
  color: ${Colors.blue02};
`
const FormPhoneNumber = styled.input`
  font-weight: 500;
  font-size: ${FontSize[16]};
  color: ${Colors.blue02};
`
const PersonInfo = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`
const PersonName = styled.input`
  margin-bottom: ${Margins[8]};
  font-weight: 500;
  font-size: ${FontSize[16]};
  color: ${Colors.blue02};
  border: 1px solid transparent;
  background: ${Colors.white};
`
const PersonCompany = styled.input`
  margin-bottom: ${Margins[8]};
  font-weight: 500;
  font-size: ${FontSize[16]};
  color: ${Colors.blue02};
  border: 1px solid transparent;
  background: ${Colors.white};
`
const PersonCity = styled.input`
  margin-bottom: ${Margins[8]};
  font-weight: 500;
  font-size: ${FontSize[16]};
  color: ${Colors.blue02};
  border: 1px solid transparent;
  background: ${Colors.white};
`
const PersonRole = styled.input`
  font-weight: 500;
  font-size: ${FontSize[16]};
  color: ${Colors.blue02};
  border: 1px solid transparent;
  background: ${Colors.white};
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
const EditButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 4.125rem;
  z-index: 1;
`
const PersonEmail = styled.input`
  margin-bottom: ${Margins[8]};
  font-weight: 500;
  font-size: ${FontSize[16]};
  color: ${Colors.blue02};
  border: 1px solid transparent;
  background: ${Colors.white};
`
const PersonPhoneNumber = styled.input`
  font-weight: 500;
  font-size: ${FontSize[16]};
  color: ${Colors.blue02};
  border: 1px solid transparent;
  background: ${Colors.white};
`
const PersonInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
export const ProfilePage = () => {

  const { photosList } = useSelector<IState, IPhotosReducer >(state => ({
    ...state.photos,
  }));
  
  const toggleForm = () => setPersonInfoEditable(!isPersonInfoEditable);

  const [isPersonInfoEditable, setPersonInfoEditable] = useState<boolean>(true);
  const [isFormNameInputValue, setFormNameInputValue] = useState("");
  const [isFormCompanyInputValue, setFormCompanyInputValue] = useState("");
  const [isFormCityInputValue, setFormCityInputValue] = useState("");
  const [isFormRoleInputValue, setFormRoleInputValue] = useState("");
  const [isFormEmailInputValue, setFormEmailInputValue] = useState("");
  const [isFormPhoneNumberInputValue, setFormPhoneNumberInputValue] = useState("");

  return (
    <Wrapper>
      <Header> 
        <HeaderButtonsContainer>
          <Link to="/test">
            <HeaderButton>
              <IconButtonGeneric src="./media/icons/message.svg" className="sm h-margin-right-8" alt="message"/>
              Message
            </HeaderButton>
          </Link>
          <Link to="/test">
            <HeaderButton>
              <IconButtonGeneric src="./media/icons/file-invoice.svg" className="sm h-margin-right-8" alt="message"/>
              Create a request
            </HeaderButton>
          </Link>
          <Link to="/test">
            <HeaderButton>
              <IconButtonGeneric src="./media/icons/briefcase.svg" className="sm h-margin-right-8" alt="message"/>
              Add to a cluster
            </HeaderButton>
          </Link>
          <HeaderButton>
            <Link to="/">
              <IconButtonGeneric src="./media/icons/cross.svg" className="sm" alt="close"/>
            </Link>
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

          {!isPersonInfoEditable ? (
            <FormInfoContainer>
              <FormDetailsContainer>
                <FormInfo> 
                  <FormName value={isFormNameInputValue} onChange={(e) => setFormNameInputValue(e.target.value)} type="text" placeholder="Name"/>
                  <FormCompany value={isFormCompanyInputValue} onChange={(e) => setFormCompanyInputValue(e.target.value)} type="text" placeholder="Company"/>
                  <FormCity value={isFormCityInputValue} onChange={(e) => setFormCityInputValue(e.target.value)} type="text" placeholder="City"/>
                  <FormRole value={isFormRoleInputValue} onChange={(e) => setFormRoleInputValue(e.target.value)} type="text" placeholder="Role"/>
                </FormInfo>
              </FormDetailsContainer>
        
              <FormRightContainer>
                <FormDetails>
                  <FormEmail value={isFormEmailInputValue} onChange={(e) => setFormEmailInputValue(e.target.value)} placeholder="humbertaswift@gmail.com" type="email"/>
                  <FormPhoneNumber value={isFormPhoneNumberInputValue} onChange={(e) => setFormPhoneNumberInputValue(e.target.value)} placeholder="762538201" type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
                </FormDetails>
              </FormRightContainer>
            </FormInfoContainer>
          ) : (
            <PersonInfoContainer>
              <PersonDetailsContainer>
                <PersonInfo> 
                  <PersonName value={isFormNameInputValue} type="text" placeholder="Name" disabled/>
                  <PersonCompany value={isFormCompanyInputValue} type="text" placeholder="Company" disabled/>
                  <PersonCity value={isFormCityInputValue} type="text" placeholder="City" disabled/>
                  <PersonRole value={isFormRoleInputValue} type="text" placeholder="Role" disabled/>
                </PersonInfo>
              </PersonDetailsContainer>

              <RightContainer>
                <PersonDetails>
                  <PersonEmail value={isFormEmailInputValue} type="text" placeholder="Email" disabled/>
                  <PersonPhoneNumber value={isFormPhoneNumberInputValue} type="text" placeholder="Phone number" disabled/>
                </PersonDetails>
              </RightContainer>
            </PersonInfoContainer>
          )}

        </HeaderMain>
      </Header>

      <ProfilePageDetails />
     
    </Wrapper>
  );
};
export default ProfilePage;
