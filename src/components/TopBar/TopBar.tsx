import React, { FC } from 'react';
import styled from 'styled-components';
import { BoxShadow } from '../../styledHelpers/BoxShadow';
import { Colors } from '../../styledHelpers/Colors';
import Dropdown from '../Dropdown/Dropdown';
import { TopBarSearch } from './TopBarSearch';

const Wrapper = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    background-color: ${Colors.white};
    box-shadow: ${BoxShadow.basic};
    padding: 0 16px;
    margin-bottom: 16px;
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
    margin-right: 16px;
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
    margin-right: 16px;
`
const CommentsWrapper = styled.button`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
    background-color: ${Colors.gray02};
    border-radius: 50%;
    position: relative;
    border: 0;
    cursor: pointer;
`
const NotificationsWrapper = styled.button`
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
    font-size: 8px;
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
    margin-right: 8px;
`

export const TopBar: FC = () => {
    return (
        <Wrapper>
            <LeftContainer>
                <LogoContainer> 
                    <Logo src='./media/icons/logo.png' />
                </LogoContainer> 
                <HomeButton src='./media/icons/house2.svg'/>
                <Dropdown />
            </LeftContainer>
            <TopBarSearch />
            <IconsSection >          
                <HomeIcon src='./media/icons/house.svg' />
            <CommentsWrapper>
                <Icon src='./media/icons/comments.svg'/>
                <Badge> 1 </Badge>
            </CommentsWrapper>
            <NotificationsWrapper>
                <Icon src='./media/icons/bell.svg' />
                <Badge> 3 </Badge>
            </NotificationsWrapper>
           </IconsSection>
        </Wrapper>
    )
}
export default TopBar;