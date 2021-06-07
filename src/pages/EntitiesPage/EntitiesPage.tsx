import React, { ChangeEvent, FC, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import IconButtonGeneric from "../../components/Common/IconButtonGeneric";
import Entitie from "../../components/Entitie/Entitie";
import Filters from "../../components/Filters/Filters";
import { IState } from "../../reducers";
import { IPhotosReducer } from "../../reducers/photosReducers";
import { IUsersReducer } from "../../reducers/usersReducers";
import { Colors } from "../../styledHelpers/Colors";
import { FontSize } from "../../styledHelpers/FontSize";
import { Margins } from "../../styledHelpers/Margins";
import { Padding } from "../../styledHelpers/Padding";

const Wrapper = styled.section`
  width: auto;
  height: auto;
  transition: all .5s ease-in-out;
  overflow: hidden;
  &.full {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    overflow: auto;
    width: 100vw;
    height: 100vh;
    background-color: ${Colors.gray01};
    padding: ${Padding[16]};
  }
`;
const Header = styled.header`
  margin: 0 0.5rem 0.5rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const SortingContainer = styled.div`
  margin-bottom: 0.5rem;
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`
const RightContainer = styled.div`
  display: flex;
  align-items: center;
`
const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  h2 {
    color: ${Colors.blue04};
    text-transform: capitalize;
    font-weight: 500;
    margin-right: 0.5rem;
  }
`
const ViewContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
const MosaicViewContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`
const MosaicEntitieContainer = styled.div`
  width: 25%;
`
const ListViewContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: nowrap;
`
const ListEntitieContainer = styled.div`
  width: 100%;
`
const MosaicView = styled.button`
  padding: 0.5rem;
  border-radius: 4px 0 0 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${Colors.blue06};
  background-color: ${Colors.gray01};
  span {
    color: ${Colors.gray04};
    font-size: ${FontSize[12]};
    text-transform: capitalize;
    font-weight: 700;
    margin-left: 0.5rem;
  }
  &.show {
    background-color: ${Colors.blue06};
    span {
      color: ${Colors.blue01};
    }
  }
`
const ListView = styled.button`
  padding: 0.5rem;
  border-radius: 0 4px 4px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.gray01};
  border: 1px solid ${Colors.gray02};
  &.show {
    background-color: ${Colors.blue06};
  }
`
const SearchButtonContainer = styled.button`
  position: absolute;
  right: 0.25rem;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
`;
const SelectAllContainer = styled.button`
  padding: ${Padding[8]};
  display: flex;
  align-items: center;
  color: ${Colors.blue01};
  font-size: ${FontSize[12]};
  text-transform: capitalize;
  font-weight: 700;
  border-radius: 4px;
  background-color: ${Colors.blue06};
  justify-content: center;
`
const ExpandContainer = styled.button`
  border-left: 1px solid ${Colors.gray04};
  padding: 0 ${Padding[8]};
  display: flex;
  align-items: center;
  color: ${Colors.gray04};
  &:hover {
    cursor: nesw-resize;
  }
`
const EllipsisContainer = styled.button`
  padding: 0 ${Padding[8]};
  display: flex;
  align-items: center;
`
const SortContainer = styled.button`
  border-left: 1px solid ${Colors.gray04};
  padding: 0 ${Padding[8]};
  display: flex;
  align-items: center;
  color: ${Colors.gray04};
  font-size: ${FontSize[12]};
  font-weight: 400;
`
const FiltersContainer = styled.button`
  padding: 0 ${Padding[8]};
  display: flex;
  align-items: center;
  color: ${Colors.gray04};
  font-size: ${FontSize[12]};
  font-weight: 400;
`
const ShareContainer = styled.button`
  border-left: 1px solid ${Colors.gray04};
  padding: 0 ${Padding[8]};
  display: flex;
  align-items: center;
  color: ${Colors.gray04};
  font-size: ${FontSize[12]};
  font-weight: 400;
`
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
const FollowedContainer = styled.button`
  border: 1px solid ${Colors.blue01};
  border-radius: 4px;
  padding: ${Padding[4]} ${Padding[8]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${FontSize[12]};
  color: ${Colors.blue01};
  font-weight: 700;
`
const FiltersBox = styled.div`
  max-height: 0;
  transition: all .5s ease;
  overflow: hidden;
  &.isOpen {
    max-height: 19rem;
  }
`
export const EntitiesPage: FC = () => {
  const [mosaicViewVisible, setMosaicViewVisible] = useState(true);
  const [listViewVisible, setListViewVisible] = useState(false);
  const [filters, setFilters] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);
  const [inputText, setInputText] = useState<string>('');

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputText(text);
  }

  const showMosaicView = () => {
    setMosaicViewVisible(function changeValue() {
      return true;
    });
    setListViewVisible(function changeValue() {
      return false;
    });
  }
  const showListView = () => {
    setMosaicViewVisible(function changeValue() {
      return false;
    });
    setListViewVisible(function changeValue() {
      return true;
    });
  }

  const expandEntities = () => {
    setFullScreen(function changeValue(oldValue) {
      return !oldValue;
    });
  }
  const showFilters = () => {
    setFilters(function changeValue(oldValue) {
      return !oldValue;
    });
  };

  const sortAlphabetical = () => {
    console.log("sorting function");
  }
  const { usersList, photosList } = useSelector<IState, IUsersReducer & IPhotosReducer >(state => ({
    ...state.users,
    ...state.photos,
  }));


  return (
    <Wrapper className={fullScreen ? "full" : ""}>
      <Header> 
        <HeadingContainer>
          <h2>Entities</h2>
          <IconButtonGeneric src="./media/icons/cog.png" className="sm" alt="settings"/>
        </HeadingContainer>
        <ViewContainer>
        
          <MosaicView onClick={showMosaicView} className={mosaicViewVisible ? "show" : ""}>
            <IconButtonGeneric src={mosaicViewVisible ? "./media/icons/grid-blue.svg" : "./media/icons/grid.svg"} className="md" alt="settings"/>
            <span>Mosaic</span>
          </MosaicView>
        
          <ListView onClick={showListView} className={listViewVisible ? "show" : ""}> 
            <IconButtonGeneric src={listViewVisible ? "./media/icons/list-blue.svg" : "./media/icons/list.svg"} className="md" alt=""/>
          </ListView>
       
        </ViewContainer>
      </Header>
      <SortingContainer>
        <LeftContainer>

          <SelectAllContainer>
            <IconButtonGeneric src="./media/icons/dot-circle.svg" className="sm h-margin-right-8" alt="menu"/>
            All
            <IconButtonGeneric src="./media/icons/arrow-down.svg" className="xs h-margin-left-8" alt="menu"/>
          </SelectAllContainer>

          <EllipsisContainer>
            <IconButtonGeneric src="./media/icons/ellipsis-h.svg" className="sm" alt="ellipsis"/>
          </EllipsisContainer>

          <SortContainer onClick={sortAlphabetical}>
            <IconButtonGeneric src="./media/icons/sort.svg" className="sm h-margin-right-8" alt="sort"/>
            Sort
          </SortContainer>

          <FiltersContainer onClick={showFilters}>
            <IconButtonGeneric src="./media/icons/filter.svg" className="sm h-margin-right-8" alt="filter"/>
            Filters
          </FiltersContainer>

          <ExpandContainer onClick={expandEntities}>
            <IconButtonGeneric src="./media/icons/expand.svg" className="sm" alt="expand"/>
          </ExpandContainer>

          <ShareContainer>
            <IconButtonGeneric src="./media/icons/share.svg" className="sm h-margin-right-8" alt="share"/>
            Share
          </ShareContainer>
        </LeftContainer>
        <RightContainer>
        <FilterContainer>
            <input type="text" value={inputText} onChange={inputHandler} placeholder="Filter..." />
            <SearchButtonContainer>
              <IconButtonGeneric className="sm" src="./media/icons/search.svg" alt="search icon"/>
            </SearchButtonContainer>
          </FilterContainer>
          <FollowedContainer>
            <IconButtonGeneric src="./media/icons/dot-circle.svg" className="sm h-margin-right-8" alt="menu"/>
            Followed
            <IconButtonGeneric src="./media/icons/arrow-down.svg" className="xs h-margin-left-8" alt="menu"/>
          </FollowedContainer>
        </RightContainer>
      </SortingContainer>
      
      <FiltersBox className={filters ? "isOpen" : ""}>
        {filters && (
          <Filters/>
        )}
      </FiltersBox>

      {mosaicViewVisible && (
        <MosaicViewContainer>
          {/* {usersList?.sort((a, b) => a.company.name - b.company.name).map((element, index) => ( */}
          {usersList?.map((element, index) => (
            <MosaicEntitieContainer>
              <Entitie key={element.id} image={photosList[index]?.thumbnailUrl} companyName={element.company.name} companyAdress={usersList[index]?.address.street}/>
            </MosaicEntitieContainer>
          ))}
        </MosaicViewContainer>
     )}
     {listViewVisible && (
      <ListViewContainer>
        {usersList?.map((element, index) => (
        <ListEntitieContainer>
          <Entitie key={element.id} image={photosList[index]?.thumbnailUrl} companyName={element.company.name} companyAdress={usersList[index]?.address.street}/>
        </ListEntitieContainer>
        ))}
      </ListViewContainer>
     )}
    </Wrapper>
  );
};
export default EntitiesPage;
