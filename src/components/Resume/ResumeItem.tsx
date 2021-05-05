import React, { FC } from 'react';
import styled from 'styled-components';
import { BoxShadow } from '../../styledHelpers/BoxShadow';
import { Colors } from '../../styledHelpers/Colors';
import { FontSize } from '../../styledHelpers/FontSize';
import { Margins } from '../../styledHelpers/Margins';
import { Paddings } from '../../styledHelpers/Paddings';
import IconButtonGeneric from '../Common/IconButtonGeneric';

const Wrapper = styled.div`
    background: ${Colors.white};
    border-radius: 0.25rem;
    box-shadow: ${BoxShadow.small};
    padding: ${Paddings[8]} ${Paddings[16]}; 
    margin-bottom: ${Margins[16]};
    p {
        margin-bottom: ${Margins[8]};
        font-size: ${FontSize[16]};
        color: ${Colors.gray04};
        line-height: 1.2;
    }
`
const Header = styled.h2`
    color: ${Colors.blue01};
    margin-bottom: ${Margins[8]};
`
const Footer = styled.div`
    display: flex;
    align-items: center;
`
const Container = styled.div`
    display: flex;
    align-items: center;
    color: ${Colors.blue05};
    font-size: ${FontSize[12]};
    position: relative;
    padding-right: 0.5rem;
    &:after {
        content: "•";
        display: block;
        position: absolute;
        right: -0.1rem;
        color: ${Colors.gray04};
    }
`
const Category = styled.div`
    display: flex;
    align-items: center;
    color: ${Colors.blue05};
    font-size: ${FontSize[12]};
    position: relative;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
    &:after {
        content: "•";
        display: block;
        position: absolute;
        right: -0.1rem;
        color: ${Colors.gray04};
    }
`
const Update = styled.div`
    display: flex;
    align-items: center;
    color: ${Colors.gray04};
    padding-left: 0.5rem;
    font-size: ${FontSize[12]};
`
const ResumeItem: FC = () => {
    return (
        <Wrapper>
            <Header>Resume Item</Header>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et hendrerit orci. Donet vehicular justo ut nulla aliquet, ac tincidunt metus tristique.</p>
            <Footer>
                <Container>
                    <IconButtonGeneric className="sm h-margin-right-8" src="./media/icons/logo.png" alt=""/>
                    <span>Subsid. corp.</span>
                </Container>
                <Category>
                    <IconButtonGeneric className="sm h-margin-right-8" src="./media/icons/entities2.svg" alt=""/>
                    <span>Client contract</span>
                </Category>
                <Update>Updated 3 days ago by John Doe</Update>
            </Footer>
        </Wrapper>
    )
}
export default ResumeItem;