import React from "react";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors";
import { FontSize } from "../../styledHelpers/FontSize";
import { Margins } from "../../styledHelpers/Margins";

const PersonInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
const PersonDetailsContainer = styled.div`
  display: flex;
  align-items: flex-start;
`
const PersonInfo = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`
const PersonName = styled.input`
  margin-bottom: ${Margins[8]};
  font-weight: 500;
  font-size: ${FontSize[16]};
  color: ${Colors.blue02};
`
const PersonCompany = styled.input`
  margin-bottom: ${Margins[8]};
  font-weight: 500;
  font-size: ${FontSize[16]};
  color: ${Colors.blue02};
`
const PersonCity = styled.input`
  margin-bottom: ${Margins[8]};
  font-weight: 500;
  font-size: ${FontSize[16]};
  color: ${Colors.blue02};
`
const PersonRole = styled.input`
  font-weight: 500;
  font-size: ${FontSize[16]};
  color: ${Colors.blue02};
`
const RightContainer = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: auto;
  justify-content: flex-end;
`
const PersonDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
const PersonEmail = styled.input`
  margin-bottom: ${Margins[8]};
  font-weight: 500;
  font-size: ${FontSize[16]};
  color: ${Colors.blue02};
`
const PersonPhoneNumber = styled.input`
  font-weight: 500;
  font-size: ${FontSize[16]};
  color: ${Colors.blue02};
`
export const ProfileInfoForm = () => {

  return (
    <PersonInfoContainer>
        <PersonDetailsContainer>
        <PersonInfo> 
            <PersonName placeholder="Humberta swift" type="text"/>
            <PersonCompany placeholder="Clifford Chance" type="text"/>
            <PersonCity placeholder="New York" type="text"/>
            <PersonRole placeholder="Partner" type="text" />
        </PersonInfo>
        </PersonDetailsContainer>

        <RightContainer>
            <PersonDetails>
                <PersonEmail placeholder="humbertaswift@gmail.com" type="email"/>
                <PersonPhoneNumber placeholder="762538201" type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
            </PersonDetails>
        </RightContainer>
    </PersonInfoContainer>
  );
};
export default ProfileInfoForm;
