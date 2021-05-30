import styled from "styled-components";
import { Colors } from "./Colors";
import { Padding } from "./Padding";

export type Styles = {
  [ruleOrSelector: string]: string | number | Styles;
};
const boxShadow = (): Styles => {
  return {
    color: `${Colors.black}​​`,
  };
};
export const Wrapper = styled.div`
  background: grey;
  display: flex;
  justify-content: center;
  padding: ${Padding[8]};
  box-shadow: ${boxShadow()}​​;
`;
