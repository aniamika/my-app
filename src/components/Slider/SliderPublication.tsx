import React, { FC } from 'react';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';
import { FontSize } from '../../styledHelpers/FontSize';

const PublicationWrapper=styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
`
const ImageContainer=styled.div`
    background-image: url("./media/city.jpg");
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
    background-image: url("./media/employee-photo.jpg");
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

const SliderPublication:FC = () => {
    return (
        <PublicationWrapper>
            <ImageContainer />
            <DescriptionContainer>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... and one more line for the demo</p>
                <FooterContainer>
                    <time>7 jan. 2020</time>
                    <PersonContainer>
                        <PersonImage />
                        <span>John Doe</span>
                    </PersonContainer>
                </FooterContainer>
            </DescriptionContainer>
        </PublicationWrapper>
    )
}
export default SliderPublication;