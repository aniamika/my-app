import React, { ChangeEvent, FC, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BoxShadow } from "../../styledHelpers/BoxShadow";
import { Colors } from "../../styledHelpers/Colors";
import { FontSize } from "../../styledHelpers/FontSize";
import { Margins } from "../../styledHelpers/Margins";
import { Paddings } from "../../styledHelpers/Paddings";

const Wrapper = styled.div`
  position: absolute;
  background-color: ${Colors.white};
  box-shadow: ${BoxShadow.small};
  width: 100%;
  top: 32px;
  left: 0;
  padding-top: ${Paddings[4]};
  border-radius: 0 0 4px 4px;
  ul li {
    font-size: ${FontSize[16]};
    font-weight: 500;
    display: flex;
    align-items: center;
    padding: ${Paddings[4]} 0;
    padding: ${Paddings[8]};
    height: 40px;
    &:hover {
      background-color: ${Colors.gray02};
    }
    span {
      max-width: 100%;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      display: block;
    }
  }
  img {
    margin-right: ${Margins[16]};
    width: 32px;
    height: 32px;
  }
`;
const FilterContainer = styled.div`
  padding: ${Paddings[4]} ${Paddings[8]};
  input {
    width: 100%;
    border: 1px solid ${Colors.gray02};
    border-radius: 4px;
    padding: 0 ${Paddings[8]};
    height: 32px;
    margin-bottom: ${Margins[4]};
    font-size: ${FontSize[14]};
    font-weight: 300;
    &::placeholder {
      color: ${Colors.gray03};
    }
  }
`;
const MainContainer = styled.div`
  border-bottom: 1px solid ${Colors.gray02};
  max-height: 440px;
  overflow-x: auto;
`;

const Container = styled.div`
  border-bottom: 1px solid ${Colors.gray02};
`;
const GroupHeader = styled.span`
  padding: ${Paddings[8]};
  color: ${Colors.gray03};
  font-weight: 400;
  width: 100%;
  display: block;
`;
const LogoutButton = styled.button`
  padding: ${Paddings[16]} 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${Colors.gray03};
  font-size: ${FontSize[16]};
  font-weight: 500;
  width: 100%;
`;
const LogoutButtonContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  img {
    position: absolute;
    left: -36px;
  }
`;

const AccountListItem = styled.li`
  font-size: ${FontSize[16]};
  font-weight: 500;
  display: flex;
  align-items: center;
  padding: ${Paddings[4]} 0;
  padding: ${Paddings[8]};
  height: 40px;
  &:hover {
    background-color: ${Colors.gray02};
  }
  div {
    display: flex;
    flex-direction: column;
    max-width: calc(100% - 3rem);
  }
  p {
    max-width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  span {
    margin-top: ${Margins[4]};
    color: ${Colors.blue01};
    font-weight: 400;
    font-size: ${FontSize[14]};
  }
`;

const AccountImageContainer = styled.div`
  width: 32px;
  min-width: 32px;
  height: 32px;
  min-height: 32px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: ${Margins[16]};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ExpandedMenu: FC = () => {

  const [inputText, setInputText] = useState<string>('');

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputText(text);
  }

  return (
    <Wrapper>

      <FilterContainer>
        <input type="text" value={inputText} onChange={inputHandler} placeholder="Filter..." />
      </FilterContainer>


      <MainContainer>
        <GroupHeader>Platform</GroupHeader>
        <ul>
          {'Home'.toLowerCase().includes(inputText.toLowerCase()) && 
            <Link to="/">
              <li>
                <img src="./media/icons/house2.svg" alt="" />
                  <span>Home</span>
              </li>
            </Link>
          }
          {'Publications'.toLowerCase().includes(inputText.toLowerCase()) && 
            <Link to="/test">
              <li>
                <img src="./media/icons/publications.svg" alt="" />
                  <span>Publications</span>
              </li>
            </Link>
          }
          {'People'.toLowerCase().includes(inputText.toLowerCase()) && 
            <Link to="/test">
              <li>
                <img src="./media/icons/people.svg" alt="" />
                  <span>People</span>
              </li>
            </Link>
          }
          {'Entities'.toLowerCase().includes(inputText.toLowerCase()) && 
            <Link to="/entities">
              <li>
                <img src="./media/icons/entities2.svg" alt="" />
                  <span>Entities</span>
              </li>
            </Link>
          }
          {'Administration'.toLowerCase().includes(inputText.toLowerCase()) && 
            <Link to="/test">
              <li>
                <img src="./media/icons/administration.svg" alt="" />
                  <span>Administration</span>
              </li>
            </Link>
          }
        </ul>
        <GroupHeader>Workspaces</GroupHeader>
        <ul>
          {'Client contract'.toLowerCase().includes(inputText.toLowerCase()) && 
            <Link to="/test">
              <li>
                <img src="./media/icons/entities2.svg" alt="" />
                  <span>Client contract</span>
              </li>
            </Link>
          }
          {'Supplier contract'.toLowerCase().includes(inputText.toLowerCase()) && 
            <Link to="/test">
              <li>
                <img src="./media/icons/entities2.svg" alt="" />
                  <span>Supplier contract</span>
              </li>
            </Link>
          }
          {'Corporate'.toLowerCase().includes(inputText.toLowerCase()) && 
            <Link to="/test">
              <li>
                <img src="./media/icons/entities.svg" alt="" />
                  <span>Corporate</span>
              </li>
            </Link>
          }
          {'Group Norms'.toLowerCase().includes(inputText.toLowerCase()) && 
            <Link to="/test">
              <li>
                <img src="./media/icons/entities2.svg" alt="" />
                  <span>Group Norms</span>
              </li>
            </Link>
          }
          {'Real estate contracts'.toLowerCase().includes(inputText.toLowerCase()) && 
            <Link to="/test">
              <li>
                <img src="./media/icons/entities2.svg" alt="" />
                  <span>Real estate contracts</span>
              </li>
            </Link>
          }
        </ul>
      </MainContainer>
      <Container>
        <GroupHeader>Account</GroupHeader>
        <ul>
          {'See profile'.toLowerCase().includes(inputText.toLowerCase()) && 
            <Link to="/profile">
              <AccountListItem>
                <AccountImageContainer>
                  <img src="./media/employee-photo.jpg" alt="" />
                </AccountImageContainer>
                <div>
                  <p>Jeanne-Marie de la cli</p>
                  <span>See profile</span>
                </div>
              </AccountListItem>
            </Link>
          }
          {'Privacy'.toLowerCase().includes(inputText.toLowerCase()) && 
            <Link to="/test">
              <li>
                <img src="./media/icons/privacy.svg" alt="" />
                  <span>Privacy</span>
              </li>
            </Link>
          }
          {'Settings'.toLowerCase().includes(inputText.toLowerCase()) && 
            <Link to="/test">
              <li>
                <img src="./media/icons/settings.svg" alt="" />
                  <span>Settings</span>
              </li>
            </Link>
          }
        </ul>
      </Container>
      {'Logout'.toLowerCase().includes(inputText.toLowerCase()) && 
      <LogoutButton>
        <LogoutButtonContainer>
          <img src="./media/icons/logout.svg" alt="" />
            <span>Logout</span>
        </LogoutButtonContainer>
      </LogoutButton>
      }
    </Wrapper>
  );
};
export default ExpandedMenu;
