import { FC } from 'react';
import styled from 'styled-components';
import { BoxShadow } from '../../styledHelpers/BoxShadow';
import { Colors } from '../../styledHelpers/Colors';
import { ToggleMenu } from '../ToggleMenu/ToggleMenu';
import TopBarIconsSection from './TopBarIconsSection';
import { TopBarSearch } from './TopBarSearch';

const TopBarWrapper = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${Colors.white};
    box-shadow: ${BoxShadow.basic};
    padding: 0 16px;
    margin-bottom: 16px;
    min-height: 48px;
`

const TopBarLogoContainer = styled.div`
    max-width: 32px;
    height: 32px;
    margin-right: 16px;
`
const TopBarLogo = styled.img`
    height: 100%;
    max-height: 32px;
    width: auto;
`
export const TopBar: FC = () => {
    return (
        <TopBarWrapper>
            <TopBarLogoContainer> 
                <TopBarLogo src='./media/icons/logo.png' />
            </TopBarLogoContainer> 
            <ToggleMenu />
            <TopBarSearch />
            <TopBarIconsSection />
        </TopBarWrapper>
    )
}
export default TopBar;