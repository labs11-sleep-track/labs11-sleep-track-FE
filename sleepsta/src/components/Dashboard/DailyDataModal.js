import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import DailyLineGraph from "./DailyLineGraph";

class DailyDataModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Modal
          size="lg"
          style={{
            backgroundColor: "rgb(255, 255, 255, 0.09)",
            width: "800px",
            fontSize: "18px"
          }}
          isOpen={this.props.dailyDisplayed}
          className={this.props.className}
        >
          <ModalHeader
            style={{
              border: "#4C546F",
              fontFamily: "Poppins"
            }}
            toggle={this.props.hideDailyGraph}
          >
            Daily Sleep Analysis
          </ModalHeader>
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
