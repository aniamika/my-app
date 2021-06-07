import React, { FC } from "react";
import styled from "styled-components";
import IconButtonGeneric from "../../components/Common/IconButtonGeneric";
import { Colors } from "../../styledHelpers/Colors";
import { FontSize } from "../../styledHelpers/FontSize";
import { Margins } from "../../styledHelpers/Margins";
import { Padding } from "../../styledHelpers/Padding";

const Wrapper = styled.section`
  overflow: auto;
  background: ${Colors.white};
  border-radius: 4px;
  box-shadow: 1px 3px 5px 1px rgb(0 0 0 / 7%);
  display: flex;
  flex-direction: column;
  min-height: 5.3rem;
`;
const Header = styled.header`
  padding: ${Padding[16]};
  border-bottom: 1px solid ${Colors.gray02};
`
const HeaderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: ${Margins[16]};
`
const HeaderButton = styled.button`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: ${FontSize[14]};
`
const HeaderMain = styled.div`
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
`
const ImageContainer = styled.div`
  background: pink;
  display: flex;
  align-items: center;
`
const PersonInfo = styled.div`
  background: lightblue;
  display: flex;
  align-items: center;
`
const PersonDetails = styled.div`
  background: lightgreen;
  display: flex;
  align-items: center;
`
const Section = styled.div`
  padding: ${Padding[16]};
  border-bottom: 1px solid ${Colors.gray02};
`
const SectionHeader = styled.p`
  font-weight: 500;
  margin-bottom: ${Margins[16]};
`

export const ProfilePage: FC = () => {
  return (
    <Wrapper>
      <Header> 
        <HeaderButtonsContainer>
          <HeaderButton>
            <IconButtonGeneric src="./media/icons/message.svg" className="sm h-margin-right-8" alt="message"/>
            Message
          </HeaderButton>
          <HeaderButton>
            <IconButtonGeneric src="./media/icons/file-invoice.svg" className="sm h-margin-right-8" alt="message"/>
            Create a request
          </HeaderButton>
          <HeaderButton>
            <IconButtonGeneric src="./media/icons/briefcase.svg" className="sm h-margin-right-8" alt="message"/>
            Add to a cluster
          </HeaderButton>
        </HeaderButtonsContainer>
        <HeaderMain>
          <ImageContainer> Image </ImageContainer>
          <PersonInfo> Info </PersonInfo>
          <PersonDetails> Details </PersonDetails>
        </HeaderMain>
      </Header>

      <Section> 
        <SectionHeader>Panel informations</SectionHeader>
      </Section>

      <Section> 
        <SectionHeader>Services & projects</SectionHeader>
      </Section>

      <Section> 
        <SectionHeader>Proposals</SectionHeader>
      </Section>

      <Section> 
        <SectionHeader>Internal reviews</SectionHeader>
      </Section>

      <Section> 
        <SectionHeader>See more Reviews</SectionHeader>
      </Section>

    </Wrapper>
  );
};
export default ProfilePage;
