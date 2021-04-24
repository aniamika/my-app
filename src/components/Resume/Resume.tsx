import React, { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors";
import { FontSize } from "../../styledHelpers/FontSize";
import { Margins } from "../../styledHelpers/Margins";
import { Paddings } from "../../styledHelpers/Paddings";

const Wrapper = styled.section`
  width: 100%;
  padding: ${Paddings[8]};
  display: flex;
  min-height: 200px;
  border: 1px solid ${Colors.gray03};
  margin-bottom: ${Margins[16]};
`;
const Header = styled.h1`
  padding-left: ${Paddings[8]};
  margin-bottom: ${Margins[8]};
  font-weight: 500;
  font-size: ${FontSize[20]};
  color: ${Colors.blue04};
`;

export const Resume: FC = () => {
  return (
    <Wrapper>
      <Header>Resume</Header>
    </Wrapper>
  );
};
export default Resume;
