import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { IState } from '../../reducers';
import { IPhotosReducer } from '../../reducers/photosReducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import { Colors } from '../../styledHelpers/Colors';
import { FontSize } from '../../styledHelpers/FontSize';

const Wrapper = styled.div`
    background: ${Colors.white};
    border-radius: 4px;
    box-shadow: 1px 3px 5px 1px rgb(0 0 0 / 7%);
    padding: 0.5rem;
    margin: 0.5rem;
    display: flex;
    min-height: 5.3rem;
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
export const Entitie = () => {

    const { usersList, photosList } = useSelector<IState, IUsersReducer & IPhotosReducer>(state => ({
        ...state.users,
        ...state.photos,
      }));
      
    return (
        <Wrapper>
            <ImageContainer>
                <Image style={{backgroundImage: `url(${(photosList[5]?.thumbnailUrl)})`}}/>
            </ImageContainer>
            <DescriptionContainer>
                <span>{usersList[0]?.company.name}</span>
                <p>{usersList[0]?.address.street}</p>
            </DescriptionContainer>
        </Wrapper>
    )
}
export default Entitie;