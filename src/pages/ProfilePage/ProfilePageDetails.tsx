
import React, { useState } from "react";
import styled from "styled-components";
import IconButtonGeneric from "../../components/Common/IconButtonGeneric";
import { Colors } from "../../styledHelpers/Colors";
import { FontSize } from "../../styledHelpers/FontSize";
import { Margins } from "../../styledHelpers/Margins";
import { Padding } from "../../styledHelpers/Padding";

const Wrapper = styled.div`
    position: relative;
`
const Section = styled.div`
  padding: ${Padding[16]};
  border-bottom: 1px solid ${Colors.gray02};
`
const SubSection = styled.div`
    margin-bottom: ${Margins[8]};
    span {
        display: block;
        color: ${Colors.gray03};
        margin-bottom: ${Margins[8]};
    }
    input {
        background-color: ${Colors.blue07};
        color: ${Colors.blue08};
        border-radius: 4px;
        border: 1px solid ${Colors.blue08};
        padding: ${Padding[4]};
        margin-right: ${Margins[8]};
        &:disabled {
            border: 1px solid ${Colors.blue07};
        }
    }
`
const SectionHeader = styled.p`
  font-weight: 500;
  margin-bottom: ${Margins[16]};
`
const EditButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 1rem;
  z-index: 1;
`
export const ProfilePageDetails = () => {
    
    const toggleForm = () => setIsEditable(!isEditable);
    const [isEditable, setIsEditable] = useState<boolean>(true);
    const [isFormNameInputValue, setFormNameInputValue] = useState("");
    return (
      <Wrapper>

        <EditButton onClick={toggleForm}>
          <IconButtonGeneric src="./media/icons/pencil.svg" className="sm" alt="edit person information"/>
        </EditButton>

        <Section>   
            <SubSection>
                <span>Expertise</span>
                <input type="text" disabled={isEditable}/>
            </SubSection>
            <SubSection>
                <span>Specialties</span>
                <input type="text" disabled={isEditable}/>
                <input type="text" disabled={isEditable}/>
            </SubSection>
            <SubSection>
                <span>Admission to practice law</span>
                <input type="text" disabled={isEditable}/>
                <input type="text" disabled={isEditable}/>
            </SubSection>
            <SubSection>
                <span>Counties</span>
                <input type="text" disabled={isEditable}/>
            </SubSection>
        </Section>

        <Section> 
            <SectionHeader>Panel informations</SectionHeader>
            {/* <input type="text" value={expertise} onChange={(e) => setExpertise(e.target.value)}></input> */}
            <input type="text" disabled={isEditable}/>
        </Section>

        <Section> 
            <SectionHeader>Services & projects</SectionHeader>
            <input type="text" disabled={isEditable}/>
        </Section>

        <Section> 
            <SectionHeader>Proposals</SectionHeader>
        </Section>

        <Section> 
            <SectionHeader>Internal reviews</SectionHeader>
        </Section>

        <Section> 
            <SectionHeader>See more Reviews</SectionHeader>
        </Section>
      </Wrapper>
    );
  };
  export default ProfilePageDetails;
  