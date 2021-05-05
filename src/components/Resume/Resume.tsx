import React, { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors";
import { FontSize } from "../../styledHelpers/FontSize";
import { Margins } from "../../styledHelpers/Margins";
import { Paddings } from "../../styledHelpers/Paddings";
import ResumeItem from "./ResumeItem";

const Wrapper = styled.section`
  width: 100%;
  padding: ${Paddings[8]} 0;
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
  padding-left: ${Paddings[8]};
  font-weight: 500;
  font-size: ${FontSize[20]};
  color: ${Colors.blue04};
`;
const FilterBox = styled.div`

`;
export const Resume: FC = () => {
  return (
    <Wrapper>
      <Header>
        <Heading>Resume your work</Heading>
        <FilterBox>
          <input type='text'/>
          <select/>
        </FilterBox>
      </Header>
      <ResumeItem/>
      <ResumeItem/>
      <ResumeItem/>
      <ResumeItem/>
      <ResumeItem/>
    </Wrapper>
  );
};
export default Resume;
