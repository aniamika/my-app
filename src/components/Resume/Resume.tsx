import React, { FC } from 'react';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';
import { FontSize } from '../../styledHelpers/FontSize';

const Wrapper = styled.section`
    width: 100%;
    padding: 8px;
    display: flex;
    min-height: 200px;
    border: 1px solid ${Colors.gray03};
    margin-bottom: 16px;
`
const Header = styled.h1`
    padding-left: 8px;
    margin-bottom: 8px;
    font-weight: 500;
    font-size: ${FontSize[20]};
    color: ${Colors.blue04};
`

export const Resume: FC = () => {
    return (
        <Wrapper>
            <Header>Resume</Header>
        </Wrapper>
    )
}
export default Resume;