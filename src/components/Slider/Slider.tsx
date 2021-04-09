import React, { FC } from 'react';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';

const Wrapper = styled.section`
    background: ${Colors.white};
    border-radius: 4px;
    box-shadow: 1px 3px 5px 1px rgba(0,0,0,0.07);
    width: 100%;
    padding: 8px;
    min-height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Slider: FC = () => {
    return (
      <Wrapper> 
        Slider
      </Wrapper>
    );
  }
  export default Slider;
  