import { FC } from 'react';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';

const Wrapper = styled.div`
    border: 1px solid ${Colors.gray01};
    border-radius: 4px;
    flex: 3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
`
const Search = styled.input`
    color: ${Colors.gray03};
    width: 100%;
    padding: 8px;
    border: none;
    text-transform: capitalize;
    ::placeholder {
        text-align: center;
    }
`
const SearchIcon = styled.img`
    padding: 8px;
    position: absolute;
    right: 0;
`

export const TopBarSearch: FC = () => {
    return (
        <Wrapper>
            <Search type="text" placeholder="Search Legalcluster"/>
            <SearchIcon src='./media/icons/search.svg'/>
        </Wrapper>
    )
}
export default TopBarSearch;