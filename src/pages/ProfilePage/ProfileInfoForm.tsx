import React, { useState } from "react";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors";
import { FontSize } from "../../styledHelpers/FontSize";
import { Margins } from "../../styledHelpers/Margins";

const FormInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
const FormDetailsContainer = styled.div`
  display: flex;
  align-items: flex-start;
`
const FormInfo = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`
const FormName = styled.input`
  margin-bottom: ${Margins[8]};
  font-weight: 500;
  font-size: ${FontSize[16]};
  color: ${Colors.blue02};
`
const FormCompany = styled.input`
  margin-bottom: ${Margins[8]};
  font-weight: 500;
  font-size: ${FontSize[16]};
  color: ${Colors.blue02};
`
const FormCity = styled.input`
  margin-bottom: ${Margins[8]};
  font-weight: 500;
  font-size: ${FontSize[16]};
  color: ${Colors.blue02};
`
const FormRole = styled.input`
  font-weight: 500;
  font-size: ${FontSize[16]};
  color: ${Colors.blue02};
`
const FormRightContainer = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: auto;
  justify-content: flex-end;
`
const FormDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
const FormEmail = styled.input`
  margin-bottom: ${Margins[8]};
  font-weight: 500;
  font-size: ${FontSize[16]};
  color: ${Colors.blue02};
`
const FormPhoneNumber = styled.input`
  font-weight: 500;
  font-size: ${FontSize[16]};
  color: ${Colors.blue02};
`
export const ProfileInfoForm = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <FormInfoContainer>
        <FormDetailsContainer>
        <FormInfo> 
        <FormName value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text"/>
          <FormCompany placeholder="Clifford Chance" type="text"/>
          <FormCity placeholder="New York" type="text"/>
          <FormRole placeholder="Partner" type="text" />
        </FormInfo>
        </FormDetailsContainer>

        <FormRightContainer>
          <FormDetails>
            <FormEmail placeholder="humbertaswift@gmail.com" type="email"/>
            <FormPhoneNumber placeholder="762538201" type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
          </FormDetails>
        </FormRightContainer>
    </FormInfoContainer>
  );
};
export default ProfileInfoForm;
