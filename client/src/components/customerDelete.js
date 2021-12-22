import React from "react";
import Dialog from "@material-ui/core/Dialog";
import { Button } from "@material-ui/core";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import { Typography } from "@material-ui/core";

class CustomerDelete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  deleteCustomer(id) {
    const url = "/api/customers/" + id;
    fetch(url, {
      method: "DELETE",
    });
    this.props.stateRefresh();
  }

  render() {
    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleClickOpen}
        >
          삭제하기
        </Button>
        <Dialog open={this.state.open} onClose={this.handleClose}>
          <DialogTitle onClose={this.handleClose}>
            삭제하시겠습니까?
          </DialogTitle>
          <DialogContent>
            <Typography gutterBottom>선택한 고객 정보가 삭제됩니다</Typography>
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              color="primary"
              onClick={(e) => {
                this.deleteCustomer(this.props.id);
              }}
            >
              예, 삭제합니다
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={this.handleClose}
            >
              아니오
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      // <button
      //   onClick={(e) => {
      //     this.deleteCustomer(this.props.id);
      //   }}
      // >
      //   delete
      // </button>
    );
  }
}

export default CustomerDelete;
