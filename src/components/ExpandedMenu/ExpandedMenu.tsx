import React, { FC } from 'react';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';

const Wrapper = styled.div`
    border: 1px solid red;
    position: absolute;
    background-color: ${Colors.white};
    width: 100%;
    top: 32px;
    left: 0;
    padding: 8px;
    ul {
        border: 1px solid blue;
    }
`
export const ExpandedMenu: FC = () => {
    return (
        <Wrapper>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </Wrapper>
    )
}
export default ExpandedMenu;