import { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.aside`
    flex: 1;
    margin-right: 16px;
`
const Card = styled.div`
    background: #FFF;
    border-radius: 4px;
    box-shadow: 1px 3px 5px 1px rgba(0,0,0,0.07);
`
const CardHeader = styled.div`
    padding: 16px;
    border-bottom: 1px solid lightgray;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ImageBox= styled.div`
    border: 1px solid #2A3F9D;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-bottom: 8px;
`
const Image= styled.div`
    padding: 16px;
`
const Name= styled.p`
    color: #2A3F9D;
    margin-bottom: 8px;
    text-transform: capitalize;
`
const Description= styled.p`
    color: #96999E;
    margin-bottom: 8px;
`
const CardList= styled.ul`
    padding: 16px;
`
const CardItem= styled.li`
    margin-bottom: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const CardItemLink= styled.div`
    display: flex;
    align-items: center;
`

const CardIcon= styled.i`
    margin-right: 8px;
    width: 24px;
    height: 24px;
`
const CardButton=styled.button`
    border: 1px solid #000;
    width: 32px;
    height: 24px;
    background-color: #FFF;
    border-radius: 4px;
    box-shadow: 1px 3px 5px 1px rgba(0,0,0,0.07);
`
const Navigation= styled.nav`
    padding: 16px;
`

const List= styled.ul`
`

const Link= styled.li`
    display: flex;
    align-items: center;
    color: #808695;
    margin-bottom: 16px;
`
const LinkIconPublications= styled.i`
    margin-right: 16px;
    width: 40px;
    height: 40px;
    background-image: url('./media/icons/publications.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`
const LinkIconEcosystem= styled.i`
    margin-right: 16px;
    width: 40px;
    height: 40px;
    background-image: url('./media/icons/cog.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`
const LinkIconEntities= styled.i`
    margin-right: 16px;
    width: 40px;
    height: 40px;
    background-image: url('./media/icons/entities2.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

export const LeftMenu: FC = () => {
    return (
        <Wrapper>
            <Card>
                <CardHeader>
                    <ImageBox>
                        <Image/>
                    </ImageBox>
                    <Name>Humberta Swift</Name>
                    <Description>Job title - Company</Description>
                </CardHeader>
                <CardList>
                   <CardItem>
                       <CardItemLink>
                            <CardIcon />
                            Your network
                       </CardItemLink>
                        <CardButton />
                   </CardItem>
                   <CardItem>
                        <CardItemLink>
                            <CardIcon />
                            Your Publications
                       </CardItemLink>
                        <CardButton />
                    </CardItem>
                </CardList>
            </Card>
            <Navigation>
                <List>
                    <Link>
                        <LinkIconPublications/>
                        Publications
                    </Link>
                    <Link>
                        <LinkIconEcosystem/>
                        Ecosystem
                    </Link>
                    <Link>
                        <LinkIconEntities/>
                        Entities
                    </Link>
                </List>
            </Navigation>
        </Wrapper>
    )
}
export default LeftMenu;