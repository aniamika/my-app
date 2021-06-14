import React, { FC } from "react";
import styled from "styled-components";
import IconButtonGeneric from "../../components/Common/IconButtonGeneric";
import { BoxShadow } from "../../styledHelpers/BoxShadow";
import { Colors } from "../../styledHelpers/Colors";
import { FontSize } from "../../styledHelpers/FontSize";


const SecondaryBox = styled.div`
  border: 2px solid ${Colors.white};
  background-color: ${Colors.gray03};
  border-radius: 0.25rem;
  box-shadow: ${BoxShadow.small};
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-bottom: 1rem;
  padding: 1rem;
`;
const SecondaryBoxHeading = styled.div`
  color: ${Colors.gray02};
  font-size: ${FontSize[16]};
  line-height: 1.25;
  margin-bottom: 1rem;
`
const MainBox = styled.div`
  display: flex;
  align-items: center;
`
const SimpleBox = styled.div`
  background-color: ${Colors.white};
  border-radius: 0.25rem;
  box-shadow: ${BoxShadow.small};
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-bottom: 1rem;
  padding: 1rem;
  margin: 0 0.5rem;
`
const SimpleBoxHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1rem;
`
const SimpleBoxHeading = styled.h2`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1rem;
`
const SimpleBoxMain = styled.p`
  color: ${Colors.blue02};
  font-size: ${FontSize[14]};
  line-height: 1.5;
`
export const WorkspacePageSecondaryBox: FC = () => {
  return (    
      <SecondaryBox>
        <SecondaryBoxHeading>Start working on corporate matters</SecondaryBoxHeading>
        <MainBox>
          <SimpleBox>
            <SimpleBoxHeader>
              <IconButtonGeneric className="xxl" src="./media/icons/entities.svg" alt="search icon"/>
            </SimpleBoxHeader>
            <SimpleBoxHeading>Explore your <b> entities</b></SimpleBoxHeading>
            <SimpleBoxMain>Take a few minutes to look at the most important elements and specificities of your entities.</SimpleBoxMain>
          </SimpleBox>
          <SimpleBox>
            <SimpleBoxHeader>
              <IconButtonGeneric className="xxl" src="./media/icons/entities.svg" alt="search icon"/>
            </SimpleBoxHeader>
            <SimpleBoxHeading>Structure the <b> ownership</b></SimpleBoxHeading>
            <SimpleBoxMain>Take a few minutes to look at the most important elements and specificities of your entities.</SimpleBoxMain>
          </SimpleBox>
          <SimpleBox>
            <SimpleBoxHeader>
              <IconButtonGeneric className="xxl" src="./media/icons/entities.svg" alt="search icon"/>
            </SimpleBoxHeader>
            <SimpleBoxHeading>Define the <b> calendar</b></SimpleBoxHeading>
            <SimpleBoxMain>Take a few minutes to look at the most important elements and specificities of your entities.</SimpleBoxMain>
          </SimpleBox>
        </MainBox>
      </SecondaryBox>
  );
};
export default WorkspacePageSecondaryBox;
