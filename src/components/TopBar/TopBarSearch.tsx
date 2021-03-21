import { FC } from 'react';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';

const TopBarSearchWrapper = styled.div`
    border: 1px solid ${Colors.gray};
    color: ${Colors.grayMiddle};
`

export const TopBarSearch: FC = () => {
    return (
        <TopBarSearchWrapper>
           Search Legalcluster
        </TopBarSearchWrapper>
    )
}
export default TopBarSearch;