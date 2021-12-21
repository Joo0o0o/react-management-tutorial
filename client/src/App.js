import "./App.css";
import Customer from "./components/customer";
import CustomerAdd from "./components/customerAdd";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  CircularProgress,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import React from "react";
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
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

class App extends Component {
  constructor(props) {
    //생성자
    super(props);
    this.state = {
      customers: "",
      completed: 0,
    };
  }

  stateRefresh = () => {
    // state를 초기화한다
    this.setState({
      customers: "",
      completed: 0,
    });
    this.callApi() //고객데이터 불러오기
      .then((res) => this.setState({ customers: res }))
      .catch((err) => console.log(err));
  };
  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
    this.callApi()
      .then((res) => this.setState({ customers: res }))
      .catch((err) => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api/customers");
    const body = await response.json();
    return body;
  };

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed > +100 ? 0 : completed + 1 });
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
                <TableCell>설정</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.customers ? (
                this.state.customers.map((c) => {
                  return (
                    <Customer
                      key={c.id}
                      id={c.id}
                      name={c.name}
                      image={c.image}
                      gender={c.gender}
                      birthday={c.birthday}
                      job={c.job}
                      stateRefresh={this.stateRefresh}
                    />
                  );
                })
              ) : (
                <TableRow>
                  <TableCell colSpan="6" align="center">
                    <CircularProgress
                      className={classes.progress}
                      variant="determinate"
                      value={this.state.completed}
                    />
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </Paper>
        <CustomerAdd stateRefresh={this.stateRefresh} />
      </div>
    );
  }
}

export default withStyles(styles)(App);
