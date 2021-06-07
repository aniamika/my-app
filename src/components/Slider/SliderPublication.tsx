import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';
import { FontSize } from '../../styledHelpers/FontSize';

const PublicationWrapper=styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
`
const ImageContainer=styled.div`

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 70px;
    min-width: 70px;
    min-height: 70px;
    height: 70px;
    margin-right: 0.5rem;
`
const PersonImage=styled.div`
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    margin-right: 0.5rem;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`
const DescriptionContainer=styled.div`
    p {
        font-size: ${FontSize[14]};
        line-height: 1.4;
        font-weight: 500;
        margin-bottom: 12px;
    }
`
const FooterContainer=styled.div`
   display: flex;
   align-items: center;
   font-size: ${FontSize[12]};
   time {
    margin-right: 0.5rem;
    color: ${Colors.gray03};
   }
   span {
    color: ${Colors.blue04};
   }
`

const PersonContainer=styled.div`
    display: flex;
    align-items: center;
`

interface ISliderPublicationProps {
    image: string;
    personImage: string;
    title: string;
    name: string;
}

export const SliderPublication = (props: ISliderPublicationProps) => {

    return (
        <PublicationWrapper>
            <ImageContainer style={{backgroundImage: `url(${(props.image)})`}} />
            <DescriptionContainer>
                <p>{props.title}</p>
                <FooterContainer>
                    <time>7 jan. 2020</time>
                    <PersonContainer>
                        <PersonImage style={{backgroundImage: `url(${(props.personImage)})`}}/>
                        <span>{props.name}</span>
                    </PersonContainer>
                </FooterContainer>
            </DescriptionContainer>
        </PublicationWrapper>
    )
}
export default SliderPublication;