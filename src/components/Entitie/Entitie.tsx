import React from 'react';
import styled, { css } from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';
import { FontSize } from '../../styledHelpers/FontSize';

const Wrapper = styled.div<{isMosaic: boolean; isListView: boolean}>`
    background: ${Colors.white};
    border-radius: 4px;
    box-shadow: 1px 3px 5px 1px rgb(0 0 0 / 7%);
    padding: 0.5rem;
    margin: 0.5rem;
    display: flex;
    min-height: 5.3rem;

    ${props => props.isMosaic && css`
        width: calc(25% - 1rem);    
    `}
    ${props => !props.isListView && css`
        width: 100%;
    `}
`
const ImageContainer = styled.div`
    border: 1px solid ${Colors.gray04};
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Image = styled.div`
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`
const DescriptionContainer = styled.div`
    padding-left: 0.5rem;
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    span {
        color: ${Colors.blue01};
        margin-bottom: 0.5rem;
        font-size: ${FontSize[14]};
        text-transform: capitalize;
        font-weight: 500;
    }
    p {
        color: ${Colors.gray03};
        font-size: ${FontSize[12]};
        text-transform: capitalize;
        font-weight: 400;
        line-height: normal;
    }
`

interface IEntitieProps {
    image: string;
    companyName: string;
    companyAdress: string;
    isMosaic: boolean;
    isListView: boolean;
}

export const Entitie = (props: IEntitieProps) => {
      
    return (
        <Wrapper isMosaic={props.isMosaic} isListView={props.isListView}> 
            <ImageContainer>
                <Image style={{backgroundImage: `url(${(props.image)})`}}/>
            </ImageContainer>
            <DescriptionContainer>
                <span>{props.companyName}</span>
                <p>{props.companyAdress}</p>
            </DescriptionContainer>
        </Wrapper>
    )
}
export default Entitie;