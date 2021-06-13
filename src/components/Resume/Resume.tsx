import React, { ChangeEvent, FC, useState } from "react";
import ReactPaginate from 'react-paginate';
import { useSelector } from "react-redux";
import styled from "styled-components";
import { IState } from "../../reducers";
import { IPostsReducer } from "../../reducers/postsReducers";
import { IUsersReducer } from "../../reducers/usersReducers";
import { Colors } from "../../styledHelpers/Colors";
import { FontSize } from "../../styledHelpers/FontSize";
import { Margins } from "../../styledHelpers/Margins";
import { Padding } from "../../styledHelpers/Padding";
import IconButtonGeneric from "../Common/IconButtonGeneric";
import Pagination from "../Pagination/Pagination";
import ResumeItem from "./ResumeItem";

const Wrapper = styled.section`
  width: 100%;
  padding: ${Padding[8]} 0;
  display: flex;
  flex-direction: column;
  margin-bottom: ${Margins[16]};
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${Margins[16]};
`
const Heading = styled.h1`
  padding-left: ${Padding[8]};
  font-weight: 500;
  font-size: ${FontSize[20]};
  color: ${Colors.blue04};
`;
const FilterBox = styled.div`
  display: flex;
  align-items: center;
`;
const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-right: ${Margins[24]};
  input {
    width: 100%;
    border: 1px solid ${Colors.gray02};
    border-radius: 4px;
    padding: 0 ${Padding[32]} 0 ${Padding[8]};
    height: 32px;
    font-size: ${FontSize[14]};
    font-weight: 300;
    &::placeholder {
      color: ${Colors.gray03};
    }
  }
`;
const SearchButtonContainer = styled.button`
  position: absolute;
  right: 0.25rem;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
`;
const SelectContainer = styled.div`
  margin-right: ${Margins[24]};
`
const ResumeItemWrapper = styled.div`

`
export const Resume: FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(0);

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputText(text);
  }

  const hanglePageClick = (data: any) => {
    const selected = data.selected;
    setCurrentPage(selected);
  }
  
  const { postsList, usersList } = useSelector<IState, IPostsReducer & IUsersReducer>(state => ({
    ...state.posts,
    ...state.users,
  }));

  return (
    <Wrapper>
      <Header>
        <Heading>Resume your work</Heading>
        <FilterBox>
          <FilterContainer>
            <input type="text" value={inputText} onChange={inputHandler} placeholder="Filter..." />
            <SearchButtonContainer>
              <IconButtonGeneric className="sm" src="./media/icons/search.svg" alt="search icon"/>
            </SearchButtonContainer>
          </FilterContainer>
          <SelectContainer>
            <select> 
              <option>Followed</option>
            </select>
          </SelectContainer>
        </FilterBox>
      </Header>
      <ResumeItemWrapper>
        {postsList.slice(currentPage, currentPage + 10).map(elem => 
          <>
            {elem.title.toLowerCase().includes(inputText.toLowerCase()) && (
              <ResumeItem 
                key={elem.id}
                title={elem.title} 
                body={elem.body} 
                companyName={usersList[0]?.company.name} 
                companyCatchPhrase={usersList[0]?.company.catchPhrase} 
                userName={usersList[0]?.name}
              />
            )}
            </>
          )}
      </ResumeItemWrapper>
      <Pagination />
      <ReactPaginate 
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={postsList.length}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={hanglePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'} 
      />
    </Wrapper>
  );
};
export default Resume;
