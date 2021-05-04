import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors";
import { FontSize } from "../../styledHelpers/FontSize";
import { Margins } from "../../styledHelpers/Margins";
import { Paddings } from "../../styledHelpers/Paddings";

const PaginationWrapper = styled.section`
  width: 100%;
  padding: ${Paddings[8]};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: ${FontSize[12]};
  margin-bottom: ${Margins[16]};

  a {
    padding: 0 0.5rem;
    color: ${Colors.blue03};
    &:active {
      color: ${Colors.black};
      font-weight: 500;
    }
  }
`;

export const Pagination: FC = () => {
  return (
    <PaginationWrapper>
      <Link to="/test">PREVIOUS</Link>
      <Link to="/test">01</Link>
      <Link to="/test">09</Link>
      <Link to="/test">10</Link>
      <Link to="/test">11</Link>
      <Link to="/test">18</Link>
      <Link to="/test">NEXT</Link>
    </PaginationWrapper>
  );
};
export default Pagination;
