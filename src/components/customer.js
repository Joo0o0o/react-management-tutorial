import React from "react";

class Customer extends React.Component {
  render() {
    return (
      <div>
        <CustomerProFile
          id={this.props.id}
          name={this.props.id}
          image={this.props.image}
        />
        <Customerinfo
          birthday={this.props.birthday}
          job={this.props.job}
          gender={this.props.gender}
        />
      </div>
    );
  }
}

class CustomerProFile extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.image} art="profile" />
        <div>이름 : {this.props.name}</div>
        <div>id: {this.props.id}</div>
      </div>
    );
  }
}

class Customerinfo extends React.Component {
  render() {
    return (
      <div>
        <div>birthday : {this.props.birthday}</div>
        <div>job: {this.props.job}</div>
        <div>gender: {this.props.gender}</div>
      </div>
    );
  }
}

export default Customer;
