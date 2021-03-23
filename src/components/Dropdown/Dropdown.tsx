import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding-right: 40px;
    width: 100%;
`
const Select = styled.select`
    width: 100%;
    padding: 8px;
    border: none;
`
const Option = styled.option`
`

export const Dropdown: FC = () => {
    return (
        <Wrapper>
            <Select>
                <Option>Home</Option>
                <Option>Home</Option>
                <Option>Home</Option>
                <Option>Home</Option>
            </Select>
        </Wrapper>
    )
}
export default Dropdown;