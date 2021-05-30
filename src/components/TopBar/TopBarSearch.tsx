import { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors";
import { FontSize } from "../../styledHelpers/FontSize";
import { Padding } from "../../styledHelpers/Padding";
import IconButtonGeneric from "../Common/IconButtonGeneric";

const Wrapper = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;
const Search = styled.input`
  border: 1px solid ${Colors.gray02};
  border-radius: 4px;
  color: ${Colors.blue02};
  width: 100%;
  height: 32px;
  padding: ${Padding[4]} ${Padding[8]};
  text-transform: capitalize;
  font-family: "Roboto", sans-serif;
  font-size: ${FontSize[14]};
  &::placeholder {
    text-align: center;
    color: ${Colors.gray03};
    font-weight: 300;
  }
`;
const SearchButtonContainer = styled.button`
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TopBarSearch: FC = () => {
  return (
    <Wrapper>
      <Search type="text" placeholder="Search Legalcluster" />
      <SearchButtonContainer>
        <IconButtonGeneric className="md" src="./media/icons/search.svg" alt="search icon"/>
      </SearchButtonContainer>
    </Wrapper>
  );
};
export default TopBarSearch;
