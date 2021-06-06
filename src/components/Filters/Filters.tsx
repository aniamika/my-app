import React from 'react';
import useDropdown from "react-dropdown-hook";
import styled from 'styled-components';
import { BoxShadow } from '../../styledHelpers/BoxShadow';
import { Colors } from '../../styledHelpers/Colors';
import { FontSize } from '../../styledHelpers/FontSize';
import { Margins } from '../../styledHelpers/Margins';
import { Padding } from '../../styledHelpers/Padding';
import IconButtonGeneric from '../Common/IconButtonGeneric';
import FiltersCompany from './FiltersCompany';
import FiltersContains from './FiltersContains';
import FiltersEndsBefore from './FiltersEndsBefore';
import FiltersIn from './FiltersIn';
import FiltersIs from './FiltersIs';
import FiltersStatus from './FiltersStatus';

const Wrapper = styled.div`
    background: ${Colors.white};
    border-radius: 4px;
    box-shadow: 1px 3px 5px 1px rgb(0 0 0 / 7%);
    padding: 1rem;
    margin: 0.5rem;
    display: flex;
    flex-direction: column;
    min-height: 5.3rem;

    &.isDropdownOpen {
        min-height: 17.5rem;
    }

    p {
        color: ${Colors.gray03};
        font-size: ${FontSize[14]};
        margin-bottom: ${Margins[8]};
    }
`
const MainContainer = styled.div`
    padding: ${Padding[8]} 0;
`
const AddFilterContainer = styled.div`
    display: flex;
    align-items: center;
`
const AddFilterButton = styled.button`
    display: flex;
    align-items: center;
    color: ${Colors.blue01};
    font-weight: 700;
    margin-right: 1rem;
`
const ChooseFilter = styled.div`
    position: relative;
`
const Button = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    margin-right: 0.5rem;
    color: ${Colors.blue01};
    font-weight: 700;
  }
`
const ExpandedMenuContainer = styled.div`
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

  &.isOpen {
    box-shadow: ${BoxShadow.small};
    max-height: initial;
  }

  ul {
    padding: ${Padding[8]};
    color: ${Colors.blue01};
    font-size: ${FontSize[14]};
    font-weight: 700;
    li {
        margin-bottom: ${Margins[4]};
    }
  }
`
const FiltersGroup = styled.div`
    margin-bottom: ${Margins[8]};
    color: ${Colors.blue04};
    font-size: ${FontSize[16]};
    font-weight: 500;
    display: flex;
    align-items: center;
`
const WhereButton = styled.button`
    width: 100px;
    display: flex;
    align-items: center;
    color: ${Colors.blue04};
    font-size: ${FontSize[14]};
    font-weight: 600;
`
const AndButton = styled.button`
    width: 100px;
    display: flex;
    align-items: center;
    color: ${Colors.blue04};
    font-size: ${FontSize[14]};
    font-weight: 600;
`
const Input = styled.input`
    border: none;
    border-radius: 0.25rem;
    padding: ${Padding[8]};
    margin-left: ${Margins[8]};
    color: ${Colors.gray03};
    background-color: ${Colors.gray02};
    &::placeholder {
        color: ${Colors.gray03};
    }
`
export const Filters = () => {
    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();

    const menuHandler = () => {
      toggleDropdown();
    };

    return (
        <Wrapper className={dropdownOpen ? "isDropdownOpen" : ""}>
            <p>Rows are filtered by the following conditions starting from the top.</p>
            <MainContainer>
                <FiltersGroup>
                    <WhereButton>
                        <IconButtonGeneric src="./media/icons/cross.svg" className="sm h-margin-right-8" alt=""/>
                        <span>Where</span>
                    </WhereButton>
                        <FiltersCompany />
                        <FiltersContains />
                    <Input type="text" placeholder="Type..."/>
                </FiltersGroup>
                <FiltersGroup>
                    <WhereButton>
                        <IconButtonGeneric src="./media/icons/cross.svg" className="sm h-margin-right-8" alt=""/>
                        <span>Where</span>
                    </WhereButton>
                    <FiltersStatus />
                    <FiltersIs /> 
                    <Input type="text" placeholder="Type..."/> 
                    <FiltersIn />
                    <Input type="text" placeholder="Entity..."/>
                </FiltersGroup>
                <FiltersGroup>
                    <AndButton>
                        <IconButtonGeneric src="./media/icons/cross.svg" className="sm h-margin-right-8" alt=""/>
                        <span>And</span>
                    </AndButton>
                    <FiltersStatus />
                    <FiltersEndsBefore />
                    <Input type="text" placeholder="Date..."/>
                    <FiltersIn />
                    <Input type="text" placeholder="Entity..."/>
                </FiltersGroup>
            </MainContainer>
            <AddFilterContainer>
                <AddFilterButton>
                    <IconButtonGeneric src="./media/icons/plus-blue.svg" className="sm h-margin-right-8" alt=""/>
                    <span>Add filter</span>
                </AddFilterButton>
                <ChooseFilter ref={wrapperRef}>
                    <Button onClick={menuHandler}>
                        <span>choose property</span>
                        {dropdownOpen ? (
                            <img src="./media/icons/arrow-up.png" alt="" />
                        ) : (
                            <img src="./media/icons/arrow-down.png" alt="" />
                        )}
                    </Button>
                    <ExpandedMenuContainer className={dropdownOpen ? 'isOpen' : ''}>
                        <ul>
                            <li>Property 1</li>
                            <li>Property 2</li>
                            <li>Property 3</li>
                        </ul>
                    </ExpandedMenuContainer>
                </ChooseFilter>
            </AddFilterContainer>
        </Wrapper>
    )
}
export default Filters;