import React, { FC } from 'react';
import styled from 'styled-components';
import { BoxShadow } from '../../styledHelpers/BoxShadow';
import { Colors } from '../../styledHelpers/Colors';
import Dropdown from '../Dropdown/Dropdown';
import TopBarComments from './TopBarComments';
import TopBarNotifications from './TopBarNotifications';
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
     justify-content: flex-end;
     flex: 2;
`
const HomeIcon = styled.img`
    width: 32px;
    height: 32px;
    margin-right: 8px;
`
export const TopBar: FC = () => {
    return (
        <Wrapper>
            <LeftContainer>
                <LogoContainer> 
                    <Logo src='./media/icons/logo.png' />
                </LogoContainer> 
                <Dropdown />
            </LeftContainer>
            <TopBarSearch />
            <IconsSection >          
                <HomeIcon src='./media/icons/house.svg' />
                <TopBarComments />
                <TopBarNotifications />
           </IconsSection>
        </Wrapper>
    )
}
export default TopBar;