import React, { FC } from 'react';
import styled from 'styled-components';
import { BoxShadow } from '../../styledHelpers/BoxShadow';
import { Colors } from '../../styledHelpers/Colors';
import { FontSize } from '../../styledHelpers/FontSize';
import { Margins } from '../../styledHelpers/Margins';
import { Paddings } from '../../styledHelpers/Paddings';

const Wrapper = styled.div`
    position: absolute;
    background-color: ${Colors.white};
    box-shadow: ${BoxShadow.small};
    width: 100%;
    top: 32px;
    left: 0;
    padding-top: ${Paddings[4]}
    border-radius: 0 0 4px 4px;
    ul li {
        font-size: ${FontSize[16]};
        font-weight: 500;
        display: flex;
        align-items: center;
        padding: ${Paddings[4]} 0;
        padding: ${Paddings[8]};
        height: 40px;
        &:hover {
            background-color: ${Colors.gray02};
        }
    }
    img {
        margin-right: ${Margins[16]};
        width: 32px;
        height: 32px;
    }
`
const FilterContainer = styled.div`
    padding: ${Paddings[4]} ${Paddings[8]};
    input {
        width: 100%;
        border: 1px solid ${Colors.gray02};
        border-radius: 4px;
        padding: 0 ${Paddings[8]};
        height: 32px;
        margin-bottom: ${Margins[4]};
        font-size: ${FontSize[14]};
        font-weight: 300;
        &::placeholder {
            color: ${Colors.gray03};
        }
    }
`
const MainContainer = styled.div`
    border-bottom: 1px solid ${Colors.gray02};
    max-height: 440px;
    overflow-x: auto;
`

const Container = styled.div`
    border-bottom: 1px solid ${Colors.gray02};
`
const GroupHeader = styled.span`
    padding: ${Paddings[8]};
    color: ${Colors.gray03};
    font-weight: 400;
    width: 100%;
    display: block;
`
const LogoutButton = styled.button`
    padding: ${Paddings[16]} 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${Colors.gray03};
    font-size: ${FontSize[16]};
    font-weight: 500;
    width: 100%;
`
const LogoutButtonContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    img {
        position: absolute;
        left: -36px;
    }
`

const AccountListItem = styled.li`
        font-size: ${FontSize[16]};
        font-weight: 500;
        display: flex;
        align-items: center;
        padding: ${Paddings[4]} 0;
        padding: ${Paddings[8]};
        height: 40px;
        &:hover {
            background-color: ${Colors.gray02};
        }
        div {
            display: flex;
            flex-direction: column;
        }
        span {
            margin-top: ${Margins[4]};
            color: ${Colors.blue01};
            font-weight: 400;
            font-size: ${FontSize[14]};
        }
`

const AccountImageContainer = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: ${Margins[16]};

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const ExpandedMenu: FC = () => {
    return (
        <Wrapper>
            <FilterContainer>
                <input type="text" placeholder="Filter..."/>
            </FilterContainer>
            <MainContainer>
                <GroupHeader>Platform</GroupHeader>
                <ul>
                    <li>
                        <img src='./media/icons/house2.svg' />
                        <span>Home</span>
                    </li>
                    <li>
                        <img src='./media/icons/publications.svg' />
                        <span>Publications</span>
                    </li>
                    <li>
                        <img src='./media/icons/people.svg' />
                        <span>People</span>
                    </li>
                    <li>
                        <img src='./media/icons/entities2.svg' />
                        <span>Entities</span>
                    </li>
                    <li>
                        <img src='./media/icons/administration.svg' /> 
                        <span>Administration</span>
                    </li>
                </ul>
                <GroupHeader>Workspaces</GroupHeader>
                <ul>
                    <li>
                        <img src='./media/icons/entities2.svg' />
                        <span>Client contract</span>
                    </li>
                    <li>
                        <img src='./media/icons/entities2.svg' />
                        <span>Supplier contract</span>
                    </li>
                    <li>
                        <img src='./media/icons/entities.svg' />
                        <span>Corporate</span>
                    </li>
                    <li>
                        <img src='./media/icons/entities2.svg' />
                        <span>Group Norms</span>
                    </li>
                    <li>
                        <img src='./media/icons/entities2.svg' />
                        <span>Real estate contracts</span>
                    </li>
                </ul>
            </MainContainer>
            <Container>
            <GroupHeader>Account</GroupHeader>
                <ul>
                    <AccountListItem>
                        <AccountImageContainer>
                            <img src='./media/employee-photo.jpg' />
                        </AccountImageContainer>
                        <div>
                            Jeanne-Marie de la cli
                            <span>See profile</span>
                        </div>
                    </AccountListItem>
                    <li>
                        <img src='./media/icons/privacy.svg' />
                        <span>Privacy</span>
                    </li>
                    <li>
                        <img src='./media/icons/settings.svg' />
                        <span>Settings</span> 
                    </li>
                </ul>
            </Container>
            <LogoutButton>    
                <LogoutButtonContainer>
                    <img src='./media/icons/logout.svg' />
                    <span>Logout</span>
                </LogoutButtonContainer>          
            </LogoutButton>
        </Wrapper>
    )
}
export default ExpandedMenu;