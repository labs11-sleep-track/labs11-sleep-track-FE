import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import DailyLineGraph from "./DailyLineGraph";
import styled from "styled-components";
import "./DailyDataModal.css";

const StyledModal = styled(Modal)`
  background-color: rgb(255, 255, 255, 0.09);
  width: 70%;
  margin: auto;

  @media (max-width: 500px) {
    width: 90%;
  }
`;
const Header = styled(ModalHeader)`
  border: rgb(255, 255, 255, 0.09);
  font-family: Poppins, Roboto, Arimo, Work Sans, Pacifico;
  padding: 0;
  font-size: 24px;
`;

const NotesHeader = styled(ModalHeader)`
  border-bottom: rgb(255, 255, 255, 0.09);
  border-top: 1px solid #e34a6f;
  border-radius: 0px;
  margin-top: 1rem;
  padding: 1rem 0;
  font-size: 24px;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e34a6f;
  padding: 1rem 0;
  margin: 0 1rem;
`;

const XButton = styled(Button)`
  background: transparent;
  border: transparent;
  color: white;
  font-size: 24px;
  margin: 0;
  padding: 0;

  :hover {
    cursor: pointer;
    background: transparent;
    border: transparent;
    color: #e34a6f;
  }
`;

class DailyDataModal extends React.Component {
  render() {
    return (
      <div>
        <StyledModal
          size="lg"
          isOpen={this.props.dailyDisplayed}
          className={this.props.className}
        >
          <HeaderContainer>
            <Header>Daily Sleep Analysis</Header>
            <XButton onClick={this.props.hideDailyGraph}>X</XButton>
          </HeaderContainer>
          {/* conditionally renders graph/text based on whether or not there is data to display: */}
          <ModalBody style={{ border: "#4C546F" }}>
            {this.props.sleepData && this.props.sleepData.length ? (
              <DailyLineGraph sleepData={this.props.sleepData} />
            ) : (
              <h3>No motion data.</h3>
            )}
            <NotesHeader>Sleep notes:</NotesHeader>
            {this.props.notes ? this.props.notes : <h3>No sleep notes.</h3>}
          </ModalBody>
          <ModalFooter style={{ border: "#4C546F" }}>
            <Button
              style={{ background: "#E34A6F", border: "#E34A6F" }}
              onClick={this.props.hideDailyGraph}
            >
              Close
            </Button>
          </ModalFooter>
        </StyledModal>
      </div>
    );
  }
}

export default DailyDataModal;
