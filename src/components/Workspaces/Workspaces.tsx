import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors";
import { FontSize } from "../../styledHelpers/FontSize";
import { Margins } from "../../styledHelpers/Margins";
import { Padding } from "../../styledHelpers/Padding";
import SingleItem from "./SingleItem";

const Wrapper = styled.section`
  width: 100%;
  padding: ${Padding[8]} 0; 
  margin-bottom: ${Margins[16]};
`;
const Header = styled.h1`
  padding-left: ${Padding[8]};
  margin-bottom: ${Margins[16]};
  font-weight: 500;
  font-size: ${FontSize[20]};
  color: ${Colors.blue04};
`;
const ScrollableBox = styled.div`
  overflow: auto;
  display: flex;
  padding-bottom: 1rem;
`

export const Workspaces: FC = () => {
  return (
    <Wrapper>
      <Header>Workspaces</Header>
      <ScrollableBox>
        <SingleItem category={"Client contract"} categoryImage={"./media/city.jpg"} categoryIcon={"./media/icons/pencil.svg"} />
        <SingleItem category={"Supplier contract"} categoryImage={"./media/city.jpg"} categoryIcon={"./media/icons/pencil.svg"}/>
        <SingleItem category={"Corporate"} categoryImage={"./media/city.jpg"} categoryIcon={"./media/icons/entities2.svg"}/>
        <SingleItem category={"Group norms"} categoryImage={"./media/city.jpg"} categoryIcon={"./media/icons/file-invoice.svg"}/>
      </ScrollableBox>
    </Wrapper>
  );
};
export default Workspaces;
