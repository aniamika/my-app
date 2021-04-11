import { FC } from 'react';
import styled from 'styled-components';

import { Colors } from '../../styledHelpers/Colors';
import { fontSize } from '../../styledHelpers/FontSize';

const Wrapper = styled.aside`
    flex: 2;
    margin-right: 16px;
`
const Card = styled.div`
    background: ${Colors.white};
    border-radius: 4px;
    box-shadow: 1px 3px 5px 1px rgba(0,0,0,0.07);
`
const Header = styled.div`
    padding: 16px;
    border-bottom: 1px solid ${Colors.gray02};
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
        color: ${Colors.blue01};
        margin-bottom: 10px;
        text-transform: capitalize;
        font-weight: 500;
        ${fontSize[18]};
    }
`;
const ImageBox= styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 8px;
    overflow: hidden;
`
const Image= styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Description= styled.p`
    color: ${Colors.gray03};
    font-size: ${fontSize[14]};
    font-weight: 300;
    margin-bottom: 8px;
`
const CardList= styled.ul`
    padding: 16px;
`
const Item= styled.li`
    margin-bottom: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const CardItemLinkContainer= styled.div`
    display: flex;
    align-items: center;
`

const CardItemLink= styled.a`
    color: ${Colors.blue02};
    text-decoration: none;
`

const CardIconNetwork= styled.i`
    margin-right: 8px;
    width: 24px;
    height: 24px;
    background-image: url('./media/icons/people.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
`;

const CardIconPublications= styled(CardIconNetwork)`
    background-image: url('./media/icons/publications.svg');
`

const CardButtonNetwork=styled.button`
    border: 1px solid ${Colors.blue02};
    width: 32px;
    height: 24px;
    background-color: ${Colors.white};
    border-radius: 4px;
    box-shadow: 1px 3px 5px 1px rgba(0,0,0,0.07);
    background-image: url('./media/icons/network.svg');
    background-repeat: no-repeat;
    background-size: 16px;
    background-position: center;
    cursor: pointer;
`

const CardButtonPublications=styled.button`
    border: 1px solid ${Colors.blue02};
    width: 32px;
    height: 24px;
    background-color: ${Colors.white};
    border-radius: 4px;
    box-shadow: 1px 3px 5px 1px rgba(0,0,0,0.07);
    background-image: url('./media/icons/plus.svg');
    background-repeat: no-repeat;
    background-size: 16px;
    background-position: center;
    cursor: pointer;
`

const Navigation= styled.nav`
    padding: 16px;
`

const List= styled.ul`
`

const ListItem= styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 16px;
`
const Link= styled.a`
    color: ${Colors.blue02};
    text-decoration: none;
`
const PublicationsIcon= styled.i`
    margin-right: 16px;
    width: 40px;
    height: 40px;
    background-image: url('./media/icons/publications.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`
const EcosystemIcon= styled.i`
    margin-right: 16px;
    width: 40px;
    height: 40px;
    background-image: url('./media/icons/ecosystem.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`
const EntitiesIcon= styled.i`
    margin-right: 16px;
    width: 40px;
    height: 40px;
    background-image: url('./media/icons/entities2.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

export const LeftMenu: FC = () => {
    return (
        <Wrapper>
            <Card>
                <Header>
                    <ImageBox>
                        <Image src='./media/employee-photo.jpg' />
                    </ImageBox>
                    <span>Humberta Swift</span>
                    <Description>Job title - Company</Description>
                </Header>
                <CardList>
                   <Item>
                       <CardItemLinkContainer>
                            <CardIconNetwork />
                            <CardItemLink href='#'>Your network</CardItemLink>
                       </CardItemLinkContainer>
                        <CardButtonNetwork />
                   </Item>
                   <Item>
                        <CardItemLinkContainer>
                            <CardIconPublications />
                            <CardItemLink href='#'>Your Publications</CardItemLink>
                       </CardItemLinkContainer>
                        <CardButtonPublications />
                    </Item>
                </CardList>
            </Card>
            <Navigation>
                <List>
                    <ListItem>
                        <PublicationsIcon/>
                        <Link href='#'>Publications</Link>
                    </ListItem>
                    <ListItem>
                        <EcosystemIcon/>
                        <Link href='#'>Ecosystem</Link>
                    </ListItem>
                    <ListItem>
                        <EntitiesIcon/>
                        <Link href='#'>Entities</Link>
                    </ListItem>
                </List>
            </Navigation>
        </Wrapper>
    )
}
export default LeftMenu;