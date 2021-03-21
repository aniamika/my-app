import { FC } from 'react';
import styled from 'styled-components';

const LeftMenuWrapper = styled.aside`
    flex: 1;
    margin-right: 16px;
`

export const LeftMenu: FC = () => {
    return (
        <LeftMenuWrapper>
            LeftMenu
        </LeftMenuWrapper>
    )
}
export default LeftMenu;