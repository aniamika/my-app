import React from 'react';
import styled from 'styled-components';
import { BoxShadow } from '../../styledHelpers/BoxShadow';
import { Colors } from '../../styledHelpers/Colors';
import { FontSize } from '../../styledHelpers/FontSize';
import { Margins } from '../../styledHelpers/Margins';
import { Padding } from '../../styledHelpers/Padding';
import IconButtonGeneric from '../Common/IconButtonGeneric';

const Wrapper = styled.div`
    background: ${Colors.white};
    border-radius: 0.25rem;
    box-shadow: ${BoxShadow.small};
    padding: ${Padding[8]} ${Padding[16]}; 
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
interface IResumeItemProps {
    title: string;
    body: string;
    companyName: string;
    companyCatchPhrase: string;
    userName: string;
}

const ResumeItem = (props: IResumeItemProps) => {
    
    return (
        <Wrapper>
            <Header>{props.title}</Header>
            <p>{props.body}</p>
            <Footer>
                <Container>
                    <IconButtonGeneric className="sm h-margin-right-8" src="./media/icons/logo.png" alt=""/>
                    <span>{props.companyName}</span>
                </Container>
                <Category>
                    <IconButtonGeneric className="sm h-margin-right-8" src="./media/icons/entities2.svg" alt=""/>
                    <span>{props.companyCatchPhrase}</span>
                </Category>
                <Update>Updated 3 days ago by {props.userName}</Update>
            </Footer>
        </Wrapper>
    )
}
export default ResumeItem;