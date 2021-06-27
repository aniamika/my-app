
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import IconButtonGeneric from "../../components/Common/IconButtonGeneric";
import { Colors } from "../../styledHelpers/Colors";
import { FontSize } from "../../styledHelpers/FontSize";
import { Margins } from "../../styledHelpers/Margins";
import { Padding } from "../../styledHelpers/Padding";

const Wrapper = styled.div`
    position: relative;
    overflow-x: hidden;
    table {
        border-collapse: collapse;
        width: 100%;
        input {
            background-color: ${Colors.white};
            margin-right: 0;
            width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
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
    }



`
const Form = styled.form`
`
const MainFormContainer = styled.div`

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
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
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
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
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
    const [expertise, setExpertise] = useState("Mergers and acqusition");
    const [specialties, setSpecialties] = useState("Cross border operation");
    const [additionalSpecialties, setAdditionalSpecialties] = useState("Transaction over 500M $");
    const [admission, setAdmission] = useState("Paris bar association");
    const [additionalAdmission, setAdditionalAdmission] = useState("Tunisian bar association");
    const [counties, setCounties] = useState("Tunisia");

    const [hourlyFree, setHourlyFree] = useState("610$/hour (Negociated)");
    const [terms, setTerms] = useState("Montly 10k$ retainer - see with Jeanny Smith");
    const [attachment, setAttachment] = useState("Attachment_lorem-ipsum25432.jpg");

    const [names, setNames] = useState("Firstname Lastname");
    const [messages, setMessages] = useState("Message");
    const [profile, setProfile] = useState("Profile");
    const [secondaryNames, setSecondaryNames] = useState("Firstname Lastname");
    const [secondaryMessages, setSecondaryMessages] = useState("Message");
    const [secondaryProfile, setSecondaryProfile] = useState("Profile");

    const [firstProposalName, setFirstProposalName] = useState("Operation");
    const [firstProposalEntity, setFirstProposalEntity] = useState("Renault Co");
    const [firstProposalLocation, setFirstProposalLocation] = useState("France");
    const [firstProposalExpertise, setFirstProposalExpertise] = useState("#Tax");
    const [firstProposalDate, setFirstProposalDate] = useState("20/01/2018");
    const [firstProposalFirm, setFirstProposalFirm] = useState("Racine");

    const [secondProposalName, setSecondProposalName] = useState("Op. Prometh");
    const [secondProposalEntity, setSecondProposalEntity] = useState("Renault HQ");
    const [secondProposalLocation, setSecondProposalLocation] = useState("USA");
    const [secondProposalExpertise, setSecondProposalExpertise] = useState("#M&A");
    const [secondProposalDate, setSecondProposalDate] = useState("18/02/2019");
    const [secondProposalFirm, setSecondProposalFirm] = useState("Clifford chance");

    const [thirdProposalName, setThirdProposalName] = useState("Op. Latandre");
    const [thirdProposalEntity, setThirdProposalEntity] = useState("Renault Br");
    const [thirdProposalLocation, setThirdProposalLocation] = useState("Italy");
    const [thirdProposalExpertise, setThirdProposalExpertise] = useState("#Social");
    const [thirdProposalDate, setThirdProposalDate] = useState("18/02/2019");
    const [thirdProposalFirm, setThirdProposalFirm] = useState("SVZ");
    
    const [firstInternalReviewName, setFirstInternalReviewName] = useState("Operation");
    const [firstInternalReviewEntity, setFirstInternalReviewEntity] = useState("Renault Co");
    const [firstInternalReviewLocation, setFirstInternalReviewLocation] = useState("France");
    const [firstInternalReviewExpertise, setFirstInternalReviewExpertise] = useState("#Tax");
    const [firstInternalReviewDate, setFirstInternalReviewDate] = useState("20/01/2018");
    const [firstInternalReviewFirm, setFirstInternalReviewFirm] = useState("Racine");

    const [secondInternalReviewName, setSecondInternalReviewName] = useState("Op. Prometh");
    const [secondInternalReviewEntity, setSecondInternalReviewEntity] = useState("Renault HQ");
    const [secondInternalReviewLocation, setSecondInternalReviewLocation] = useState("USA");
    const [secondInternalReviewExpertise, setSecondInternalReviewExpertise] = useState("#M&A");
    const [secondInternalReviewDate, setSecondInternalReviewDate] = useState("18/02/2019");
    const [secondInternalReviewFirm, setSecondInternalReviewFirm] = useState("Clifford chance");

    const [thirdInternalReviewName, setThirdInternalReviewName] = useState("Op. Latandre");
    const [thirdInternalReviewEntity, setThirdInternalReviewEntity] = useState("Renault Br");
    const [thirdInternalReviewLocation, setThirdInternalReviewLocation] = useState("Italy");
    const [thirdInternalReviewExpertise, setThirdInternalReviewExpertise] = useState("#Social");
    const [thirdInternalReviewDate, setThirdInternalReviewDate] = useState("18/02/2019");
    const [thirdInternalReviewFirm, setThirdInternalReviewFirm] = useState("SVZ");

    const [firstAmountOfFeesYear, setFirstAmountOfFeesYear] = useState("2019");
    const [firstAmountOfFeesCost, setFirstAmountOfFeesCost] = useState("CS 153");
    const [firstAmountOfFeesTotalAmount, setFirstAmountOfFeesTotalAmount] = useState("3500$");
    const [firstAmountOfFeesLawFirm, setFirstAmountOfFeesLawFirm] = useState("Clifford chance");

    const [secondAmountOfFeesYear, setSecondAmountOfFeesYear] = useState("2018");
    const [secondAmountOfFeesCost, setSecondAmountOfFeesCost] = useState("CS 153");
    const [secondAmountOfFeesTotalAmount, setSecondAmountOfFeesTotalAmount] = useState("9500$");
    const [secondAmountOfFeesLawFirm, setSecondAmountOfFeesLawFirm] = useState("Linklaters DSRCSRSAEAEAEAEDD");
    
    const [thirdAmountOfFeesYear, setThirdAmountOfFeesYear] = useState("2017");
    const [thirdAmountOfFeesCost, setThirdAmountOfFeesCost] = useState("CS 47");
    const [thirdAmountOfFeesTotalAmount, setThirdAmountOfFeesTotalAmount] = useState("10500$");
    const [thirdAmountOfFeesLawFirm, setThirdAmountOfFeesLawFirm] = useState("Linklaters DSRCSRSAEAEAEAEDD");

    return (
      <Wrapper>
            <EditButton onClick={toggleForm}>
                <IconButtonGeneric src="./media/icons/pencil.svg" className="sm" alt="edit person information"/>
            </EditButton>
        <Form>
            <MainFormContainer>   
                <div>
                    <label htmlFor="expertise">Expertise</label>
                    <input type="text" id="expertise" name="expertise" value={expertise} onChange={(e) => setExpertise(e.target.value)} disabled={isFormEditable}/>
                </div>
                <div>
                    <label htmlFor="specialties">Specialties</label>
                    <input type="text" id="specialties" name="specialties" value={specialties} onChange={(e) => setSpecialties(e.target.value)} disabled={isFormEditable}/>
                    <input type="text" id="specialties" name="specialties" value={additionalSpecialties} onChange={(e) => setAdditionalSpecialties(e.target.value)} disabled={isFormEditable}/>
                </div>
                <div>
                    <label htmlFor="admission">Admission to practice law</label>
                    <input type="text" id="admission" name="admission" value={admission} onChange={(e) => setAdmission(e.target.value)} disabled={isFormEditable} />
                    <input type="text" id="admission" name="admission" value={additionalAdmission} onChange={(e) => setAdditionalAdmission(e.target.value)} disabled={isFormEditable} />
                </div>
                <div>
                    <label htmlFor="counties">Counties</label>
                    <input type="text" id="counties" name="counties" value={counties} onChange={(e) => setCounties(e.target.value)} disabled={isFormEditable}/>
                </div>
            </MainFormContainer>

            <SecondaryFormContainer>
                <Group> 
                    <SectionHeader>Panel informations</SectionHeader>
                    <label htmlFor="hourlyFree">Hourly free</label>
                    <input type="text" id="hourlyFree" name="hourlyFree" value={hourlyFree} onChange={(e) => setHourlyFree(e.target.value)} disabled={isFormEditable}/>

                    <label htmlFor="terms">Terms & conditions</label>
                    <input type="text" id="terms" name="terms" value={terms} onChange={(e) => setTerms(e.target.value)} disabled={isFormEditable}/>

                    <div className="attachment">
                        <input type="file" accept={attachment} onChange={(e) => setAttachment(e.target.value)} disabled={isFormEditable}/>
                    </div>
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
                        <Names type="text" value={names} onChange={(e) => setNames(e.target.value)} disabled={isFormEditable}/>
                        <MessagesContainer>
                            <IconButtonGeneric src="./media/icons/message.svg" className="md h-margin-right-8" alt=""/>
                            <Messages type="text" value={messages} onChange={(e) => setMessages(e.target.value)} disabled={isFormEditable}/>
                        </MessagesContainer>
                        <ProfileContainer>
                            <IconButtonGeneric src="./media/icons/user-regular.svg" className="md h-margin-right-8" alt=""/>
                            <Profile type="text" value={profile} onChange={(e) => setProfile(e.target.value)} disabled={isFormEditable}/>
                        </ProfileContainer>
                    </InternationalCorrespondantsBox>
                    <InternationalCorrespondantsBox>
                        <Image> 
                            <img src="./media/employee-photo.jpg" alt="image"/>
                        </Image>
                        <Names type="text" value={secondaryNames} onChange={(e) => setSecondaryNames(e.target.value)} disabled={isFormEditable}/>
                        <MessagesContainer>
                            <IconButtonGeneric src="./media/icons/message.svg" className="md h-margin-right-8" alt=""/>
                            <Messages type="text" value={secondaryMessages} onChange={(e) => setSecondaryMessages(e.target.value)} disabled={isFormEditable}/>
                        </MessagesContainer>
                        <ProfileContainer>
                            <IconButtonGeneric src="./media/icons/user-regular.svg" className="md h-margin-right-8" alt=""/>
                            <Profile type="text" value={secondaryProfile} onChange={(e) => setSecondaryProfile(e.target.value)} disabled={isFormEditable}/>
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
                            <td>
                                <input type="text" value={firstProposalName} onChange={(e) => setFirstProposalName(e.target.value)} disabled={isFormEditable}/>
                            </td>
                            <td>
                                <input type="text" value={firstProposalEntity} onChange={(e) => setFirstProposalEntity(e.target.value)} disabled={isFormEditable}/>
                            </td>
                            <td>
                                <input type="text" value={firstProposalLocation} onChange={(e) => setFirstProposalLocation(e.target.value)} disabled={isFormEditable}/>
                            </td>
                            <td>
                                <input type="text" value={firstProposalExpertise} onChange={(e) => setFirstProposalExpertise(e.target.value)} disabled={isFormEditable}/>
                            </td>
                            <td>
                                <input type="date" value={firstProposalDate} onChange={(e) => setFirstProposalDate(e.target.value)} disabled={isFormEditable}/>
                            </td>
                            <td>
                                <input type="text" value={firstProposalFirm} onChange={(e) => setFirstProposalFirm(e.target.value)} disabled={isFormEditable}/>    
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" value={secondProposalName} onChange={(e) => setSecondProposalName(e.target.value)} disabled={isFormEditable}/>
                            </td>
                            <td>
                                <input type="text" value={secondProposalEntity} onChange={(e) => setSecondProposalEntity(e.target.value)} disabled={isFormEditable}/>
                            </td>
                            <td>
                                <input type="text" value={secondProposalLocation} onChange={(e) => setSecondProposalLocation(e.target.value)} disabled={isFormEditable}/>
                            </td>
                            <td>
                                <input type="text" value={secondProposalExpertise} onChange={(e) => setSecondProposalExpertise(e.target.value)} disabled={isFormEditable}/> 
                            </td>
                            <td>
                                <input type="date" value={secondProposalDate} onChange={(e) => setSecondProposalDate(e.target.value)} disabled={isFormEditable}/>      
                            </td>
                            <td>
                                <input type="text" value={secondProposalFirm} onChange={(e) => setSecondProposalFirm(e.target.value)} disabled={isFormEditable}/>  
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" value={thirdProposalName} onChange={(e) => setThirdProposalName(e.target.value)} disabled={isFormEditable}/>
                            </td>
                            <td>
                                <input type="text" value={thirdProposalEntity} onChange={(e) => setThirdProposalEntity(e.target.value)} disabled={isFormEditable}/>
                            </td>
                            <td>
                                <input type="text" value={thirdProposalLocation} onChange={(e) => setThirdProposalLocation(e.target.value)} disabled={isFormEditable}/>
                            </td>
                            <td>
                                <input type="text" value={thirdProposalExpertise} onChange={(e) => setThirdProposalExpertise(e.target.value)} disabled={isFormEditable}/>
                            </td>
                            <td>
                                <input type="date" value={thirdProposalDate} onChange={(e) => setThirdProposalDate(e.target.value)} disabled={isFormEditable}/>
                            </td>
                            <td>
                                <input type="text" value={thirdProposalFirm} onChange={(e) => setThirdProposalFirm(e.target.value)} disabled={isFormEditable}/>
                            </td>
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
                            <th>Firm</th>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" value={firstInternalReviewName} onChange={(e) => setFirstInternalReviewName(e.target.value)} disabled={isFormEditable}/>
                            </td>
                            <td>
                                <input type="text" value={firstInternalReviewEntity} onChange={(e) => setFirstInternalReviewEntity(e.target.value)} disabled={isFormEditable}/>
                            </td>
                            <td>
                                <input type="text" value={firstInternalReviewLocation} onChange={(e) => setFirstInternalReviewLocation(e.target.value)} disabled={isFormEditable}/>
                            </td>
                            <td>
                                <input type="text" value={firstInternalReviewExpertise} onChange={(e) => setFirstInternalReviewExpertise(e.target.value)} disabled={isFormEditable}/>
                            </td>
                            <td>
                                <input type="date" value={firstInternalReviewDate} onChange={(e) => setFirstInternalReviewDate(e.target.value)} disabled={isFormEditable}/>
                            </td>
                            <td>
                                <input type="text" value={firstInternalReviewFirm} onChange={(e) => setFirstInternalReviewFirm(e.target.value)} disabled={isFormEditable}/>    
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" value={secondInternalReviewName} onChange={(e) => setSecondInternalReviewName(e.target.value)} disabled={isFormEditable}/>
                            </td>
                            <td>
                                <input type="text" value={secondInternalReviewEntity} onChange={(e) => setSecondInternalReviewEntity(e.target.value)} disabled={isFormEditable}/>
                            </td>
                            <td>
                                <input type="text" value={secondInternalReviewLocation} onChange={(e) => setSecondInternalReviewLocation(e.target.value)} disabled={isFormEditable}/>
                            </td>
                            <td>
                                <input type="text" value={secondInternalReviewExpertise} onChange={(e) => setSecondInternalReviewExpertise(e.target.value)} disabled={isFormEditable}/> 
                            </td>
                            <td>
                                <input type="date" value={secondInternalReviewDate} onChange={(e) => setSecondInternalReviewDate(e.target.value)} disabled={isFormEditable}/>      
                            </td>
                            <td>
                                <input type="text" value={secondInternalReviewFirm} onChange={(e) => setSecondInternalReviewFirm(e.target.value)} disabled={isFormEditable}/>  
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" value={thirdInternalReviewName} onChange={(e) => setThirdInternalReviewName(e.target.value)} disabled={isFormEditable}/>
                            </td>
                            <td>
                                <input type="text" value={thirdInternalReviewEntity} onChange={(e) => setThirdInternalReviewEntity(e.target.value)} disabled={isFormEditable}/>
                            </td>
                            <td>
                                <input type="text" value={thirdInternalReviewLocation} onChange={(e) => setThirdInternalReviewLocation(e.target.value)} disabled={isFormEditable}/>
                            </td>
                            <td>
                                <input type="text" value={thirdInternalReviewExpertise} onChange={(e) => setThirdInternalReviewExpertise(e.target.value)} disabled={isFormEditable}/>
                            </td>
                            <td>
                                <input type="date" value={thirdInternalReviewDate} onChange={(e) => setThirdInternalReviewDate(e.target.value)} disabled={isFormEditable}/>
                            </td>
                            <td>
                                <input type="text" value={thirdInternalReviewFirm} onChange={(e) => setThirdInternalReviewFirm(e.target.value)} disabled={isFormEditable}/>
                            </td>
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
                            <td>
                                <input type="number" value={firstAmountOfFeesYear} onChange={(e) => setFirstAmountOfFeesYear(e.target.value)} disabled={isFormEditable}/>
                            </td>
                            <td>
                                <input type="text" value={firstAmountOfFeesCost} onChange={(e) => setFirstAmountOfFeesCost(e.target.value)} disabled={isFormEditable}/>
                            </td>
                            <td>
                                <input type="text" value={firstAmountOfFeesTotalAmount} onChange={(e) => setFirstAmountOfFeesTotalAmount(e.target.value)} disabled={isFormEditable}/>
                            </td>
                            <td>
                                <input type="text" value={firstAmountOfFeesLawFirm} onChange={(e) => setFirstAmountOfFeesLawFirm(e.target.value)} disabled={isFormEditable}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="number" value={secondAmountOfFeesYear} onChange={(e) => setSecondAmountOfFeesYear(e.target.value)} disabled={isFormEditable}/>
                            </td>
                            <td>
                                <input type="text" value={secondAmountOfFeesCost} onChange={(e) => setSecondAmountOfFeesCost(e.target.value)} disabled={isFormEditable}/>
                            </td>
                            <td>
                                <input type="text" value={secondAmountOfFeesTotalAmount} onChange={(e) => setSecondAmountOfFeesTotalAmount(e.target.value)} disabled={isFormEditable}/>
                            </td>
                            <td>
                                <input type="text" value={secondAmountOfFeesLawFirm} onChange={(e) => setSecondAmountOfFeesLawFirm(e.target.value)} disabled={isFormEditable}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="number" value={thirdAmountOfFeesYear} onChange={(e) => setThirdAmountOfFeesYear(e.target.value)} disabled={isFormEditable}/>
                            </td>
                            <td>
                                <input type="text" value={thirdAmountOfFeesCost} onChange={(e) => setThirdAmountOfFeesCost(e.target.value)} disabled={isFormEditable}/>
                            </td>
                            <td>
                                <input type="text" value={thirdAmountOfFeesTotalAmount} onChange={(e) => setThirdAmountOfFeesTotalAmount(e.target.value)} disabled={isFormEditable}/>
                            </td>
                            <td>
                                <input type="text" value={thirdAmountOfFeesLawFirm} onChange={(e) => setThirdAmountOfFeesLawFirm(e.target.value)} disabled={isFormEditable}/>
                            </td>
                        </tr>
                    </table>
                </Group>
            </SecondaryFormContainer>

        </Form>
       
      </Wrapper>
    );
  };
  export default ProfilePageDetails;
  