import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import DailyLineGraph from "./DailyLineGraph";
import "./DailyDataModal.css";

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
            background: "#4C546F",
            border: "#4C546F",
            width: "800px",
            fontSize: "18px"
          }}
          isOpen={this.props.dailyDisplayed}
          className={this.props.className}
        >
          <ModalHeader
            style={{
              background: "#4C546F",
              border: "#4C546F",
              fontFamily: "Roboto"
            }}
            toggle={this.props.hideDailyGraph}
          >
            Nightly Sleep Motion Analysis
          </ModalHeader>
          <ModalBody style={{ background: "#4C546F", border: "#4C546F" }}>
            {this.props.sleepData.sleep_notes}
            <DailyLineGraph sleepData={this.props.sleepData} />
          </ModalBody>
          <ModalFooter style={{ background: "#4C546F", border: "#4C546F" }}>
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
