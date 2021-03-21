import { FC } from 'react';
import styled from 'styled-components';

const TopBarNotificationsWrapper = styled.div`
    width: 32px;
    height: 32px;
`
const TopBarNotificationsIcon = styled.img`
    height: 100%;
    max-height: 32px;
    width: auto;
`

export const TopBarNotifications: FC = () => {
    return (
        <TopBarNotificationsWrapper>
           <TopBarNotificationsIcon src='./media/icons/bell.svg' />
        </TopBarNotificationsWrapper>
    )
}
export default TopBarNotifications;