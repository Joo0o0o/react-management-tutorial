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

const customers = [
  {
    id: 1,
    name: "홍길동",
    image:
      "https://img1.daumcdn.net/thumb/C500x500.fpng/?fname=http://t1.daumcdn.net/brunch/service/user/6qYm/image/eAFjiZeA-fGh8Y327AH7oTQIsxQ.png",
    gender: "male",
    birthday: "19910904",
    job: "thief",
  },
  {
    id: 2,
    name: "풍월량",
    image: "https://cdn.gametoc.co.kr/news/photo/201710/45338_85463_759.JPG",
    gender: "male",
    birthday: "19840124",
    job: "bj",
  },
  {
    id: 3,
    name: "침착맨",
    image:
      "https://w.namu.la/s/2cd5110fc9e9e2f8c67f05fa5fb1d7f20957a29c80203d0c63864960640fd8b7d618ee394c9efb04d0da86512ea9a7b6a9adb7422ea2c82051286c31c975c3351ba05ed8dfabe0b3be5520292e8e09bd",
    gender: "male",
    birthday: "19870902",
    job: "streamer",
  },
];

class App extends Component {
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
              {customers.map((c) => {
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
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(App);
