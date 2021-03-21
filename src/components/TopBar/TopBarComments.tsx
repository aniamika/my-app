import { FC } from 'react';
import styled from 'styled-components';

const TopBarCommentsWrapper = styled.div`
    width: 32px;
    height: 32px;
    margin-right: 8px;
`
const TopBarCommentsIcon = styled.img`
    height: 100%;
    max-height: 32px;
    width: auto;
`

export const TopBarComments: FC = () => {
    return (
        <TopBarCommentsWrapper>
            <TopBarCommentsIcon src='./media/icons/comments.svg'/>
        </TopBarCommentsWrapper>
    )
}
export default TopBarComments;