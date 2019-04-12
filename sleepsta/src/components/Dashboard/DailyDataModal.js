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
  padding: 0rem;
  height: 40px;

  :hover {
    cursor: pointer;
    background: transparent;
    border: transparent;
    color: #e34a6f;
  }
`;

class DailyDataModal extends React.Component {
  constructor(props) {
    super(props);
  }

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
          <ModalBody style={{ border: "#4C546F" }}>
            {this.props.sleepData.sleep_notes}
            <DailyLineGraph sleepData={this.props.sleepData} />
          </ModalBody>
          <ModalFooter style={{ border: "#4C546F" }}>
            <Button
              style={{ background: "#E34A6F", border: "#E34A6F" }}
              onClick={this.props.hideDailyGraph}
            >
              Cancel
            </Button>
          </ModalFooter>
        </StyledModal>
      </div>
    );
  }
}

export default DailyDataModal;
