import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import DailyLineGraph from "./DailyLineGraph";
import styled from "styled-components";
import "./DailyDataModal.css";

const Header = styled(ModalHeader)`
  // border: rgb(255, 255, 255, 0.09);
  font-family: [Poppins, Roboto, Arimo, Work Sans, Pacifico];
`;

class DailyDataModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Modal
          fontSize="24"
          size="lg"
          style={{
            backgroundColor: "rgb(255, 255, 255, 0.09)",
            width: "80%"
            // fontSize: "18px"
          }}
          isOpen={this.props.dailyDisplayed}
          className={this.props.className}
        >
          <Header
            toggle={this.props.hideDailyGraph}
            style={{
              fontSize: "24px"
            }}
          >
            Daily Sleep Analysis
          </Header>
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
        </Modal>
      </div>
    );
  }
}

export default DailyDataModal;
