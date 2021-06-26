
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import IconButtonGeneric from "../../components/Common/IconButtonGeneric";
import { Colors } from "../../styledHelpers/Colors";
import { FontSize } from "../../styledHelpers/FontSize";
import { Margins } from "../../styledHelpers/Margins";
import { Padding } from "../../styledHelpers/Padding";

const Wrapper = styled.div`
    table {
        border-collapse: collapse;
        width: 100%;
    }

    td {
        border: 1px solid ${Colors.white};
        text-align: left;
        padding: ${Padding[8]};
    }
    th {
        border-top: 1px solid ${Colors.white};
        border-right: 1px solid ${Colors.white};
        border-left: 1px solid ${Colors.white};
        border-bottom: 1px solid ${Colors.gray02};
        text-align: left;
        padding: ${Padding[8]};
        font-weight: 600;
        color: ${Colors.blue02};
    }
`
const Form = styled.form`
`
const MainFormContainer = styled.div`
    position: relative;
    padding: ${Padding[16]};
    border-bottom: 1px solid ${Colors.gray02};
    div {
        margin-bottom: ${Margins[8]};
    }
    label {
        display: block;
        color: ${Colors.gray03};
        margin: ${Margins[4]} 0;
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
const SecondaryFormContainer = styled.div`
    position: relative;
    padding: ${Padding[16]};
    border-bottom: 1px solid ${Colors.gray02};
    label {
        display: block;
        color: ${Colors.gray03};
        margin: ${Margins[4]} 0;
    }
    input {
        background-color: ${Colors.gray02};
        color: ${Colors.black};
        border-radius: 4px;
        border: 1px solid ${Colors.black};
        padding: ${Padding[4]};
        margin-right: ${Margins[8]};
        &:disabled {
            border: 1px solid ${Colors.gray02};
        }
    }
    .attachment {
        margin-top: 0.5rem;
        input {
            width: 100%;
        }
    }
`
const Group = styled.div`
    margin: ${Margins[8]} 0 ${Margins[16]} 0;
`
const SectionHeader = styled.p`
font-size: ${FontSize[18]};
  font-weight: 500;
  margin-bottom: ${Margins[24]};
`
const EditButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 1rem;
  z-index: 2;
`
const ServicesSubheader = styled.p`
    margin-bottom: ${Margins[16]};
`
const InternationalCorrespondantsBox = styled.div`
    border: 1px solid ${Colors.white};
    background-color: ${Colors.gray02};
    padding: ${Padding[4]};
    display: flex;
    align-items: center;
`
const Image = styled.div`
  width: 32px;
  min-width: 32px;
  height: 32px;
  min-height: 32px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: ${Margins[16]};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Names = styled.input`
    font-weight: 500;
`
const MessagesContainer = styled.div`
    display: flex;
    align-items: center;
`
const Messages = styled.input`
    background-color: ${Colors.gray02};
    color: ${Colors.black};
    border-radius: 4px;
    border: 1px solid ${Colors.black};
    padding: ${Padding[4]};
    margin-right: ${Margins[8]};
    &:disabled {
        border: 1px solid ${Colors.gray02};
    }
`
const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
`
const Profile = styled.input`
    background-color: ${Colors.gray02};
    color: ${Colors.black};
    border-radius: 4px;
    border: 1px solid ${Colors.black};
    padding: ${Padding[4]};
    margin-right: ${Margins[8]};
    &:disabled {
        border: 1px solid ${Colors.gray02};
    }
`
const MoreProposals = styled.div`
    font-weight: 500;
    color: ${Colors.blue03};
    text-align: right;
    padding: ${Padding[8]} 0;
`
const MoreReviews = styled.div`
    font-weight: 500;
    color: ${Colors.blue03};
    text-align: right;
    padding: ${Padding[8]} 0;
`
export const ProfilePageDetails = () => {
    
    const toggleForm = () => setIsFormEditable(!isFormEditable);
    const [isFormEditable, setIsFormEditable] = useState<boolean>(true);
    const [isFormNameInputValue, setFormNameInputValue] = useState("");

    return (
      <Wrapper>
        <Form>
            <MainFormContainer>   
                <EditButton onClick={toggleForm}>
                    <IconButtonGeneric src="./media/icons/pencil.svg" className="sm" alt="edit person information"/>
                </EditButton>
                <div>
                    <label htmlFor="expertise">Expertise</label>
                    <input type="text" id="expertise" name="expertise" value="" disabled={isFormEditable}/>
                </div>
                <div>
                    <label htmlFor="specialties">Specialties</label>
                    <input type="text" id="specialties" name="specialties" value="" disabled={isFormEditable}/>
                    <input type="text" id="specialties" name="specialties" value="" disabled={isFormEditable}/>
                </div>
                <div>
                    <label htmlFor="admission">Admission to practice law</label>
                    <input type="text" id="admission" name="admission" value="" disabled={isFormEditable}/>
                    <input type="text" id="admission" name="admission" value="" disabled={isFormEditable}/>
                </div>
                <div>
                    <label htmlFor="counties">Counties</label>
                    <input type="text" id="counties" name="counties" value="" disabled={isFormEditable}/>
                </div>
            </MainFormContainer>

            <SecondaryFormContainer>
                <Group> 
                    <SectionHeader>Panel informations</SectionHeader>
                    <label htmlFor="hourlyFree">Hourly free</label>
                    <input type="text" id="hourlyFree" name="hourlyFree" value="" disabled={isFormEditable}/>

                    <label htmlFor="terms">Terms & conditions</label>
                    <input type="text" id="terms" name="terms" value="" disabled={isFormEditable}/>

                    <div className="attachment">
                        <input type="text" id="terms" name="terms" value="" disabled={isFormEditable}/>
                    </div>

                    {/* <input type="text" value={expertise} onChange={(e) => setExpertise(e.target.value)}></input> */}
                </Group>

                <Group> 
                    <SectionHeader>Services & projects</SectionHeader>
                    <ServicesSubheader>Corporate M&A and international acquisitions</ServicesSubheader>
                </Group>

                <Group> 
                    <SectionHeader>Internal correspondants</SectionHeader>
                    <InternationalCorrespondantsBox>
                        <Image> 
                            <img src="./media/employee-photo.jpg" alt="image"/>
                        </Image>
                        <Names type="text" value="Firstname Lastname" disabled={isFormEditable}/>
                        <MessagesContainer>
                            <IconButtonGeneric src="./media/icons/message.svg" className="md h-margin-right-8" alt=""/>
                            <Messages type="text" value="Message" disabled={isFormEditable}/>
                        </MessagesContainer>
                        <ProfileContainer>
                            <IconButtonGeneric src="./media/icons/user-regular.svg" className="md h-margin-right-8" alt=""/>
                            <Profile type="text" value="Profile" disabled={isFormEditable}/>
                        </ProfileContainer>
                    </InternationalCorrespondantsBox>
                    <InternationalCorrespondantsBox>
                        <Image> 
                            <img src="./media/employee-photo.jpg" alt="image"/>
                        </Image>
                        <Names type="text" value="Firstname Lastname" disabled={isFormEditable}/>
                        <MessagesContainer>
                            <IconButtonGeneric src="./media/icons/message.svg" className="md h-margin-right-8" alt=""/>
                            <Messages type="text" value="Message" disabled={isFormEditable}/>
                        </MessagesContainer>
                        <ProfileContainer>
                            <IconButtonGeneric src="./media/icons/user-regular.svg" className="md h-margin-right-8" alt=""/>
                            <Profile type="text" value="Profile" disabled={isFormEditable}/>
                        </ProfileContainer>
                    </InternationalCorrespondantsBox>
                </Group>

                <Group>
                    <SectionHeader>Proposals</SectionHeader>
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Entity</th>
                            <th>Location</th>
                            <th>Expertise</th>
                            <th>Date</th>
                            <th>Firm</th>
                        </tr>
                        <tr>
                            <td>Operation</td>
                            <td>Renault Co</td>
                            <td>France</td>
                            <td>#Tax</td>
                            <td>20/01/2018</td>
                            <td>Racine</td>
                        </tr>
                        <tr>
                            <td>Op. Prometh</td>
                            <td>Renault HQ</td>
                            <td>USA</td>
                            <td>#M&A</td>
                            <td>18/02/2019</td>
                            <td>Clifford chance</td>
                        </tr>
                        <tr>
                            <td>Op. Latandre</td>
                            <td>Renault Br</td>
                            <td>Italy</td>
                            <td>#Social</td>
                            <td>18/02/2019</td>
                            <td>SVZ</td>
                        </tr>
                    </table>
                    <Link to="/test">
                        <MoreProposals>See more proposals</MoreProposals>
                    </Link>
                </Group>

                <Group> 
                    <SectionHeader>Internal reviews</SectionHeader>
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Entity</th>
                            <th>Location</th>
                            <th>Expertise</th>
                            <th>Date</th>
                        </tr>
                        <tr>
                            <td>Operation</td>
                            <td>Renault Co</td>
                            <td>France</td>
                            <td>#Tax</td>
                            <td>20/01/2018</td>
                        </tr>
                        <tr>
                            <td>Op. Prometh</td>
                            <td>Renault HQ</td>
                            <td>USA</td>
                            <td>#M&A</td>
                            <td>18/02/2019</td>
                        </tr>
                        <tr>
                            <td>Op. Latandre</td>
                            <td>Renault Br</td>
                            <td>Italy</td>
                            <td>#Social</td>
                            <td>18/02/2019</td>
                        </tr>
                    </table>
                    <Link to="/test">
                        <MoreReviews>See more Reviews</MoreReviews>
                    </Link>
                </Group>

                <Group> 
                    <SectionHeader>Amount of fees</SectionHeader>
                    <table>
                        <tr>
                            <th>Year</th>
                            <th>Cost center</th>
                            <th>Total amount</th>
                            <th>Law firm</th>
                        </tr>
                        <tr>
                            <td>2019</td>
                            <td>CS 153</td>
                            <td>3500$</td>
                            <td>Clifford chance</td>
                        </tr>
                        <tr>
                            <td>2018</td>
                            <td>CS 153</td>
                            <td>9500$</td>
                            <td>Linklaters</td>
                        </tr>
                        <tr>
                            <td>2017</td>
                            <td>CS 47</td>
                            <td>10500$</td>
                            <td>Linklaters</td>
                        </tr>
                    </table>
                </Group>
            </SecondaryFormContainer>

        </Form>
       
      </Wrapper>
    );
  };
  export default ProfilePageDetails;
  