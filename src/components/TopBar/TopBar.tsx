import React, { FC } from 'react';
import useDropdown from 'react-dropdown-hook';
import styled from 'styled-components';
import { BoxShadow } from '../../styledHelpers/BoxShadow';
import { Colors } from '../../styledHelpers/Colors';
import { FontSize } from '../../styledHelpers/FontSize';
import { Margins } from '../../styledHelpers/Margins';
import { Paddings } from '../../styledHelpers/Paddings';
import ExpandedMenu from '../ExpandedMenu/ExpandedMenu';
import { TopBarSearch } from './TopBarSearch';

const Wrapper = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    background-color: ${Colors.white};
    box-shadow: ${BoxShadow.medium};
    padding: 0 ${Paddings[16]};
    margin-bottom: ${Margins[16]};
    min-height: 48px;
`
const LeftContainer = styled.div`
    display: flex;
    flex: 2;
    align-items: center;
`
const LogoContainer = styled.div`
    max-width: 32px;
    height: 32px;
    margin-right: ${Margins[24]};
`
const Logo = styled.img`
    height: 100%;
    max-height: 32px;
    width: auto;
`
const IconsSection = styled.div`
     display: flex;
     align-items: center;
     justify-content: flex-end;
     flex: 2;
`
const HomeIcon = styled.img`
    width: 24px;
    height: 24px;
    margin-right: ${Margins[16]};
`
const Comments = styled.button`
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
    cursor: pointer;
`
const Notifications = styled.button`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${Colors.gray02};
    border-radius: 50%;
    position: relative;
    border: 0;
    cursor: pointer;
`
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
`

const Icon = styled.img`
    height: 24px;
    width: 24px;
`

const HomeButton = styled.img`
    width: 24px;
    height: 24px;
    margin-right: ${Margins[16]};
`
const MenuWrapper = styled.div`
    margin-right: ${Margins[40]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border: 1px solid ${Colors.gray02};
    cursor: pointer;
    position: relative;
    padding: 0 ${Paddings[8]};
    height: 32px;
    border-radius: 4px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: ${FontSize[14]};
`
const MenuLeftContainer = styled.div`
    display: flex;
    align-items: center;
`

export const TopBar: FC = () => {
    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();

    const menuHandler = () => {
        toggleDropdown();
    }

    return (
        <Wrapper>
            <LeftContainer>
                <LogoContainer> 
                    <Logo src='./media/icons/logo.png' />
                </LogoContainer> 
                <MenuWrapper ref={wrapperRef} onClick={menuHandler}>
                    <MenuLeftContainer>
                        <HomeButton src='./media/icons/house2.svg'/>
                        <span>Home</span>
                    </MenuLeftContainer>
                    {dropdownOpen ? (
                        <>
                            <img src='./media/icons/arrow-up.png' />
                            <ExpandedMenu/>
                        </>
                    ) : (
                        <img src='./media/icons/arrow-down.png' />
                    )}
                </MenuWrapper>
            </LeftContainer>
            <TopBarSearch />
            <IconsSection >          
                <HomeIcon src='./media/icons/house.svg' />
                <Comments>
                    <Icon src='./media/icons/comments.svg'/>
                    <Badge> 1 </Badge>
                </Comments>
                <Notifications>
                    <Icon src='./media/icons/bell.svg' />
                    <Badge> 3 </Badge>
                </Notifications>
           </IconsSection>
        </Wrapper>
    )
}
export default TopBar;