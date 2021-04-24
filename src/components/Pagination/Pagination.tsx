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
  align-items: center;
  justify-content: center;
  color: ${Colors.blue03};
  text-transform: uppercase;
  font-size: ${FontSize[12]};
  border: 1px solid ${Colors.gray03};
  margin-bottom: ${Margins[16]};
`;

export const Pagination: FC = () => {
  return <Wrapper>Pagination</Wrapper>;
};
export default Pagination;
