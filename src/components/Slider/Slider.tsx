import React, { FC } from 'react';
import styled from 'styled-components';
import { BoxShadow } from '../../styledHelpers/BoxShadow';
import { Colors } from '../../styledHelpers/Colors';
import { Margins } from '../../styledHelpers/Margins';
import { Paddings } from '../../styledHelpers/Paddings';

const Wrapper = styled.section`
    background: ${Colors.white};
    border-radius: 4px;
    box-shadow: ${BoxShadow.small};
    width: 100%;
    padding: ${Paddings[8]};
    min-height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${Margins[16]};
`

const Slider: FC = () => {
    return (
      <Wrapper> 
        Slider
      </Wrapper>
    );
  }
  export default Slider;
  