import React from "react";
import { TableCell, TableRow } from "@material-ui/core";
import CustomerDelete from "./customerDelete.js";

class Customer extends React.Component {
  render() {
    return (
      <TableRow>
        <TableCell>{this.props.id}</TableCell>
        <TableCell>{this.props.name}</TableCell>
        <TableCell>
          <img src={this.props.image} />
        </TableCell>
        <TableCell>{this.props.birthday}</TableCell>
        <TableCell>{this.props.gender}</TableCell>
        <TableCell>{this.props.job}</TableCell>
        <TableCell>
          <CustomerDelete
            id={this.props.id}
            stateRefresh={this.props.stateRefresh}
          />
        </TableCell>
      </TableRow>
    );
  }
}

export default Customer;
