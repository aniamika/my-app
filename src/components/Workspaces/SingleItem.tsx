import React, { FC } from 'react';
import styled from 'styled-components';
import { BoxShadow } from '../../styledHelpers/BoxShadow';
import { Colors } from '../../styledHelpers/Colors';
import { FontSize } from '../../styledHelpers/FontSize';
import IconButtonGeneric from '../Common/IconButtonGeneric';

const ItemWrapper = styled.div`
background: ${Colors.white};
border-radius: 0.25rem;
box-shadow: ${BoxShadow.small};
width: 15.25rem;
overflow: hidden;
min-width: 15.25rem;
height: 12.063rem;
margin-right: 1rem;
display: flex;
flex-direction: column;
`
const TopBox = styled.div`
flex: 2;
overflow: hidden;
`
const BackgroundImage = styled.img`
width: 100%;
height: 100%;
max-width: 100%;
max-height: 100%;
object-fit: cover;
`
const MainContent = styled.div`
flex: 3;
padding: 0.5rem;
`
const Category = styled.div`
display: flex;
margin-bottom: 1rem;
`
const CategoryIconBox = styled.div`
background: ${Colors.white};
border-radius: 0.25rem;
box-shadow: ${BoxShadow.small};
width: 5.125rem;
min-width: 5.125rem;
height: 5.125rem;
display: flex;
align-items: center;
justify-content: center;
margin-top: -1.5rem;
`
const CategoryName = styled.div`
color: ${Colors.blue02};
font-weight: 500;
padding: 0.5rem;
`
const DescriptionBox = styled.div`
display: flex;
`
const CategoryBox = styled.div`
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
}
`
const UsersBox = styled.div`
display: flex;
align-items: center;
color: ${Colors.blue05};
font-size: ${FontSize[12]};
padding-left: 0.5rem;
`
const Footer = styled.p`
font-size: ${FontSize[12]};
color: ${Colors.gray04};
padding: 0 0.5rem;
margin-bottom: 0.5rem;
`


const SingleItem: FC = () => {
    return (
        <ItemWrapper>
        <TopBox>
        <BackgroundImage src="./media/city.jpg" alt=""/>
        </TopBox>
        <MainContent>
        <Category>
            <CategoryIconBox>
            <IconButtonGeneric src='./media/icons/comments.svg' alt='' className='xxl'/>
            </CategoryIconBox>
            <CategoryName>Client contract</CategoryName>
        </Category>
        <DescriptionBox>
            <CategoryBox>
            <IconButtonGeneric className="sm h-margin-right-8" src="./media/icons/comments.svg" alt=""/>
            <span>Contract</span>
            </CategoryBox>
            <UsersBox>
            <IconButtonGeneric className="sm h-margin-right-8" src="./media/icons/people.svg" alt=""/>
            <span>150 users</span>
            </UsersBox>
        </DescriptionBox>
        </MainContent>
        <Footer>
        Last update 2 days ago
        </Footer>
        </ItemWrapper>
    )
}
export default SingleItem;