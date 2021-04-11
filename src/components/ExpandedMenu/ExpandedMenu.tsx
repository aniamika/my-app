import React, { FC } from 'react';
import styled from 'styled-components';
import { BoxShadow } from '../../styledHelpers/BoxShadow';
import { Colors } from '../../styledHelpers/Colors';
import { FontSize } from '../../styledHelpers/FontSize';

const Wrapper = styled.div`
    position: absolute;
    background-color: ${Colors.white};
    box-shadow: ${BoxShadow.small};
    width: 100%;
    top: 32px;
    left: 0;
    padding-top: 4px;
    border-radius: 0 0 4px 4px;
    ul li {
        font-size: ${FontSize[16]};
        font-weight: 500;
        display: flex;
        align-items: center;
        padding: 4px 0;
        padding: 8px;
        height: 40px;
        &:hover {
            background-color: ${Colors.gray02};
        }
    }
    img {
        margin-right: 16px;
        width: 32px;
        height: 32px;
    }
`
const FilterContainer = styled.div`
    padding: 4px 8px;
    input {
        width: 100%;
        border: 1px solid ${Colors.gray02};
        border-radius: 4px;
        padding: 0 8px;
        height: 32px;
        margin-bottom: 4px;
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
    padding: 8px;
    color: ${Colors.gray03};
    font-weight: 400;
    width: 100%;
    display: block;
`
const LogoutButton = styled.button`
    padding: 12px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${Colors.gray03};
    font-size: ${FontSize[16]};
    font-weight: 500;
    width: 100%;
    img {
        margin-left: -36px;
    }
`
const AccountListItem = styled.li`
        font-size: ${FontSize[16]};
        font-weight: 500;
        display: flex;
        align-items: center;
        padding: 4px 0;
        padding: 8px;
        height: 40px;
        &:hover {
            background-color: ${Colors.gray02};
        }
        div {
            display: flex;
            flex-direction: column;
        }
        span {
            margin-top: 4px;
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
    margin-right: 16px;

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
                    <img src='./media/icons/logout.svg' />
                    <span>Logout</span>
            </LogoutButton>
        </Wrapper>
    )
}
export default ExpandedMenu;