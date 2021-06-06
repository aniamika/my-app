import React, { FC } from "react";
import { createGlobalStyle } from "styled-components";
import { Colors } from "../../styledHelpers/Colors";
import { FontSize } from "../../styledHelpers/FontSize";
import { Margins } from "../../styledHelpers/Margins";
import { Padding } from "../../styledHelpers/Padding";

const GlobalStyle = createGlobalStyle`
  .pagination {
    width: 100%;
    padding: ${Padding[8]};
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-size: ${FontSize[12]};
    margin-bottom: ${Margins[16]};

  }
  li  {
    color: ${Colors.blue03};
    padding: 0 0.5rem;
    &:hover {
      cursor: pointer;
    }
    &.disabled {
      color: ${Colors.gray01};
    }
    &.active {
        color: ${Colors.black};
        font-weight: 500;
      }
  }
`;

export const Pagination: FC = () => {
  return (
    <GlobalStyle/>
  );
};
export default Pagination;
