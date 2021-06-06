import React, { FC } from "react";
import useDropdown from "react-dropdown-hook";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BoxShadow } from "../../styledHelpers/BoxShadow";
import { Colors } from "../../styledHelpers/Colors";
import { FontSize } from "../../styledHelpers/FontSize";
import { Margins } from "../../styledHelpers/Margins";
import { Padding } from "../../styledHelpers/Padding";
import IconButtonGeneric from "../Common/IconButtonGeneric";
import ExpandedMenu from "../ExpandedMenu/ExpandedMenu";
import { TopBarSearch } from "./TopBarSearch";

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: ${Colors.white};
  box-shadow: ${BoxShadow.medium};
  padding: 0 ${Padding[16]};
  min-height: 48px;
  position: sticky;
  top: 0;
  z-index: 1;
`;
const LeftContainer = styled.div`
  display: flex;
  flex: 2;
  align-items: center;
`;
const LogoContainer = styled.div`
  margin-right: ${Margins[24]};
`;
const IconsSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 2;
`;
const Comments = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${Margins[8]};
  background-color: ${Colors.gray02};
  border-radius: 50%;
  position: relative;
  border: 0;
`;
const Notifications = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.gray02};
  border-radius: 50%;
  position: relative;
  border: 0;
`;
const Badge = styled.span`
  border-radius: 16px;
  background-color: ${Colors.blue03};
  position: absolute;
  top: 0;
  right: -2px;
  height: 12px;
  min-width: 18px;
  color: ${Colors.white};
  font-size: ${FontSize[8]};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MenuWrapper = styled.div`
  margin-right: ${Margins[40]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: 1px solid ${Colors.gray02};
  cursor: pointer;
  position: relative;
  padding: 0 ${Padding[8]};
  height: 32px;
  border-radius: 4px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: ${FontSize[14]};
`;
const MenuLeftContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Button = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const ExpandedMenuContainer = styled.div`
  position: absolute;
  background-color: ${Colors.white};
  box-shadow: ${BoxShadow.small};
  width: 100%;
  top: 32px;
  left: 0;
  padding-top: ${Padding[4]};
  border-radius: 0 0 4px 4px;
  max-height: 0;
  transition: all .5s ease;
  overflow: hidden;

  &.isOpen {
    max-height: 42.75rem;
  }
`

export const TopBar: FC = () => {
  const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();

  const menuHandler = () => {
    toggleDropdown();
  };

  return (
    <Wrapper>
      <LeftContainer>
        <Link to="/">
          <LogoContainer>
            <IconButtonGeneric src="./media/icons/logo.png" className="lg" alt="logo"/>
          </LogoContainer>
        </Link>
        <MenuWrapper ref={wrapperRef}>
          <Button onClick={menuHandler}>
          <MenuLeftContainer >
            <IconButtonGeneric src="./media/icons/house2.svg" className="md h-margin-right-16" alt=""/>
            <span>Home</span>
          </MenuLeftContainer>
            {dropdownOpen ? (
                <img src="./media/icons/arrow-up.png" alt="" />
            ) : (
              <img src="./media/icons/arrow-down.png" alt="" />
            )}
          </Button>
          <ExpandedMenuContainer className={dropdownOpen ? 'isOpen' : ''}>
            <ExpandedMenu />
          </ExpandedMenuContainer>
        </MenuWrapper>
      </LeftContainer>
      <TopBarSearch />
      <IconsSection>
        <Link to="/">
          <IconButtonGeneric className="md h-margin-right-16" src="./media/icons/house.svg" alt="home icon"/>
        </Link>
        <Comments>
          <IconButtonGeneric className="md" src="./media/icons/comments.svg" alt="comments icon"/>
          <Badge> 1 </Badge>
        </Comments>
        <Notifications>
          <IconButtonGeneric className="md" src="./media/icons/bell.svg" alt="notifications icon"/>
          <Badge> 3 </Badge>
        </Notifications>
      </IconsSection>
    </Wrapper>
  );
};
export default TopBar;
