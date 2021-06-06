import React from 'react';
import useDropdown from 'react-dropdown-hook';
import styled from 'styled-components';
import { BoxShadow } from '../../styledHelpers/BoxShadow';
import { Colors } from '../../styledHelpers/Colors';
import { FontSize } from '../../styledHelpers/FontSize';
import { Margins } from '../../styledHelpers/Margins';
import { Padding } from '../../styledHelpers/Padding';


const InDropdown = styled.div`
    margin-left: ${Margins[8]};
    display: flex;
    align-items: center;
    color: ${Colors.blue04};
    font-size: ${FontSize[14]};
    font-weight: 600;
    position: relative;
`
const InDropdownButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    margin-right: 0.5rem;
    color: ${Colors.blue04};
    font-size: ${FontSize[14]};
    font-weight: 600;
  }
`
const InDropdownMenuContainer = styled.div`
    position: absolute;
    background-color: ${Colors.white};
    width: 100%;
    top: 1rem;
    left: 0;
    border-radius: 0 0 4px 4px;
    max-height: 0;
    transition: all .5s ease;
    overflow: hidden;
    padding-top: ${Padding[4]};
    z-index: 1;
    
    &.isOpen {
    box-shadow: ${BoxShadow.small};
    max-height: initial;
    }

    ul {
        padding: ${Padding[8]};
        color: ${Colors.blue04};
        font-size: ${FontSize[14]};
        font-weight: 600;
        li {
            margin-bottom: ${Margins[4]};
        }
    }
`
export const FiltersIn = () => {
    const [inWrapperRef, inDropdownOpen, inToggleDropdown] = useDropdown();
    const inMenuHandler = () => {
        inToggleDropdown();
    };

    return (
        <InDropdown ref={inWrapperRef}>
            <InDropdownButton onClick={inMenuHandler}>
                <span>In</span>
                {inDropdownOpen ? (
                    <img src="./media/icons/arrow-up.png" alt="" />
                ) : (
                    <img src="./media/icons/arrow-down.png" alt="" />
                )}
            </InDropdownButton>
            <InDropdownMenuContainer className={inDropdownOpen ? 'isOpen' : ''}>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </InDropdownMenuContainer>
        </InDropdown>
    )
}
export default FiltersIn;

