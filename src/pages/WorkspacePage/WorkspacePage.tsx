import React, { FC } from "react";
import styled from "styled-components";
import IconButtonGeneric from "../../components/Common/IconButtonGeneric";
import { BoxShadow } from "../../styledHelpers/BoxShadow";
import { Colors } from "../../styledHelpers/Colors";
import { FontSize } from "../../styledHelpers/FontSize";
import WorkspacePageLatestUpdates from "./WorkspacePageLatestUpdates";
import WorkspacePageSecondaryBox from "./WorkspacePageSecondaryBox";

const Wrapper = styled.section`

`;
const MainBox = styled.div`
  background: ${Colors.white};
  border-radius: 0.25rem;
  box-shadow: ${BoxShadow.small};
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-bottom: 1rem;
`;
const Header = styled.div`
  background-image: url("./media/city.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 10rem;
`;
const Main = styled.div`

`;
const MainIcon = styled.div`
  margin-right: 1rem;
`;
const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`
const MainHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;
const MainHeaderButton = styled.button`

`;
const Heading = styled.h2`
  font-size: ${FontSize[20]};
  font-weight: 500;
`;
const MainText = styled.p`
  color: ${Colors.gray03};
  font-size: ${FontSize[14]};
  line-height: 1.25;
`;
const MainContent = styled.div`

`;

export const WorkspacePage: FC = () => {
  return (
    <Wrapper>

      <MainBox> 
        <Header />
        <Main>
          <MainContainer>
            <MainIcon>
              <IconButtonGeneric src="./media/icons/entities2.svg" className='xxl' alt='icon'/>
            </MainIcon>
            <MainContent>
              <MainHeader>
                <Heading>Corporate holdings</Heading>
                <MainHeaderButton>
                  <IconButtonGeneric src="./media/icons/cog.svg" className="sm" alt=""/>
                </MainHeaderButton>
              </MainHeader>
              <MainText>Workspace purpose and a bit of context. This much needed description is here to remind people where they are, if they are new or have por memory.</MainText>
            </MainContent>
          </MainContainer>
        </Main>
      </MainBox>

      <WorkspacePageSecondaryBox/>
      <WorkspacePageLatestUpdates/>
      
    </Wrapper>
  );
};
export default WorkspacePage;
