import { FC } from 'react';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';
import { fontSize } from '../../styledHelpers/FontSize';

const Wrapper = styled.div`
    flex: 3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
`
const Search = styled.input`
    border: 1px solid ${Colors.gray02};
    border-radius: 4px;
    color: ${Colors.blue02};
    width: 100%;
    height: 32px;
    padding: 4px 8px;
    text-transform: capitalize;
    font-family: 'Roboto', sans-serif;
    font-size: ${fontSize[14]};
    &::placeholder {
        text-align: center;
        color: ${Colors.gray03};
        font-weight: 300;
    }
`
const SearchButton = styled.button`
    padding: 8px;
    position: absolute;
    right: 0;
    width: 32px;
    height: 32px;
    background-image: url('./media/icons/search.svg');
    background-repeat: no-repeat;
    background-size: auto;
    background-position: center;
`

export const TopBarSearch: FC = () => {
    return (
        <Wrapper>
            <Search type="text" placeholder="Search Legalcluster"/>
            <SearchButton />
        </Wrapper>
    )
}
export default TopBarSearch;