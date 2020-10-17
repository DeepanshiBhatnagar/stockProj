import React, { PureComponent } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Login extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Form className="form">
          <table>
            <tr><td>
          <label>Email address</label> </td>
          <td><input type="email" placeholder="Enter email" /></td></tr>
         <tr><td>
          <label>Password  </label></td>
          <td><input type="password" placeholder="Password" /></td></tr>
          <tr><td>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          </td></tr>
          </table>
        </Form>
        
      </div>
    );
  }
}

export default Login;
