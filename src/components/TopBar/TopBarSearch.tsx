import { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors";
import { FontSize } from "../../styledHelpers/FontSize";
import { Paddings } from "../../styledHelpers/Paddings";

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
  padding: ${Paddings[4]} ${Paddings[8]};
  text-transform: capitalize;
  font-family: "Roboto", sans-serif;
  font-size: ${FontSize[14]};
  &::placeholder {
    text-align: center;
    color: ${Colors.gray03};
    font-weight: 300;
  }
`;
const SearchButton = styled.button`
  padding: ${Paddings[8]};
  position: absolute;
  right: 0;
  width: 32px;
  height: 32px;
  background-image: url("./media/icons/search.svg");
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center;
`;

export const TopBarSearch: FC = () => {
  return (
    <Wrapper>
      <Search type="text" placeholder="Search Legalcluster" />
      <SearchButton />
    </Wrapper>
  );
};
export default TopBarSearch;
