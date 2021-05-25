import React, { FC, useState } from "react";
import styled from "styled-components";
import IconButtonGeneric from "../../components/Common/IconButtonGeneric";
import Entitie from "../../components/Entitie/Entitie";
import { Colors } from "../../styledHelpers/Colors";
import { FontSize } from "../../styledHelpers/FontSize";

const Wrapper = styled.section`
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

`
const RightContainer = styled.div`

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
const ListViewContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
`
const MosaicView = styled.button`
  padding: 0.5rem;
  border-radius: 4px 0 0 4px;
  height: 2rem;
  background-color: ${Colors.blue06};
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    color: ${Colors.blue01};
    font-size: ${FontSize[12]};
    text-transform: capitalize;
    font-weight: 700;
    margin-left: 0.5rem;
  }
`
const ListView = styled.button`
  padding: 0.5rem;
  border-radius: 0 4px 4px 0;
  height: 2rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.gray01};
`
export const EntitiesPage: FC = () => {
  const [visible, setVisible] = useState(true);

 const toggleView = () => {
    setVisible(function changeValue(oldValue) {
      return !oldValue;
    });
  }


  return (
    <Wrapper>
      <Header> 
        <HeadingContainer>
          <h2>Entities</h2>
          <IconButtonGeneric src="./media/icons/cog.png" className="sm" alt="settings"/>
        </HeadingContainer>
        <ViewContainer>

        
          <MosaicView onClick={toggleView}>
            <IconButtonGeneric src="./media/icons/entities.svg" className="sm" alt="settings"/>
            <span>Mosaic</span>
          </MosaicView>
        
          <ListView onClick={toggleView}> 
            <IconButtonGeneric src="./media/icons/publications.svg" className="md" alt=""/>
          </ListView>
       

        </ViewContainer>
      </Header>
      <SortingContainer>
        <LeftContainer>
          All Sort Filters Share
        </LeftContainer>
        <RightContainer>
          Search Followed
        </RightContainer>
      </SortingContainer>

      {visible ? (
        <MosaicViewContainer>
          <Entitie/>
          <Entitie/>
          <Entitie/>
          <Entitie/>
          <Entitie/>
          <Entitie/>
          <Entitie/>
          <Entitie/>
          <Entitie/>
          <Entitie/>
          <Entitie/>
          <Entitie/>
          <Entitie/>
          <Entitie/>
        </MosaicViewContainer>
      ) : (
        <ListViewContainer>
          <Entitie/>
          <Entitie/>
          <Entitie/>
          <Entitie/>
          <Entitie/>
          <Entitie/>
          <Entitie/>
          <Entitie/>
          <Entitie/>
          <Entitie/>
          <Entitie/>
          <Entitie/>
          <Entitie/>
          <Entitie/>
        </ListViewContainer>
      )}

    </Wrapper>
  );
};
export default EntitiesPage;
