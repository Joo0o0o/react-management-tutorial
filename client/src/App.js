import "./App.css";
import Customer from "./components/customer";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Component } from "react";

const styles = (theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
  },
  table: {
    minWidth: 1080,
  },
});

class App extends Component {
  state = { customers: "" };

  componentDidMount() {
    this.callApi()
      .then((res) => this.setState({ customers: res }))
      .catch((err) => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api/customers");
    const body = await response.json();
    return body;
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>id</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>이미지</TableCell>
                <TableCell>생년월일</TableCell>
                <TableCell>성별</TableCell>
                <TableCell>직업</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.customers
                ? this.state.customers.map((c) => {
                    return (
                      <Customer
                        id={c.id}
                        name={c.name}
                        image={c.image}
                        gender={c.gender}
                        birthday={c.birthday}
                        job={c.job}
                      />
                    );
                  })
                : ""}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(App);
