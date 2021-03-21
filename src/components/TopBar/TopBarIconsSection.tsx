import { FC } from 'react';
import styled from 'styled-components';
import TopBarComments from './TopBarComments';
import TopBarNotifications from './TopBarNotifications';

const TopBarIconsSectionWrapper = styled.div`
    display: flex;
`
const TopBarHomeIcon = styled.img`
    width: 32px;
    height: 32px;
    margin-right: 8px;
`

export const TopBarIconsSection: FC = () => {
    return (
        <TopBarIconsSectionWrapper>
           <TopBarHomeIcon src='./media/icons/house.svg' />
           <TopBarComments />
           <TopBarNotifications />
        </TopBarIconsSectionWrapper>
    )
}
export default TopBarIconsSection;