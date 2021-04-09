import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding-right: 40px;
    width: 100%;
`

const SelectContainer = styled.div`
    position: relative;

    &:after {
        content: "▼";
        position: absolute;
        right: 0;
        top: 50%;
        transform: translate(-50%,-50%);
        z-index: 1;
        text-align: center;
        pointer-events: none;
    }
`

const Select = styled.select`
    appearance: none;
    width: 100%;
    padding: 8px;
    border: none;
    padding: 8px;
    border-radius: 4px;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
`

const Option = styled.option`
`

export const Dropdown: FC = () => {
    return (
        <Wrapper>
            <SelectContainer>
                <Select>
                    <Option>Home</Option>
                    <Option>Option 1</Option>
                    <Option>Option 2</Option>
                    <Option>Option 3</Option>
                </Select>
            </SelectContainer>
        </Wrapper>
    )
}
export default Dropdown;