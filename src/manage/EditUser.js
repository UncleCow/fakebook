import React from "react";
import { Form } from "react-bootstrap";

class EditUser extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Form action="" method="">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <div style={{ paddingLeft: '2%', border: 'solid 1px blue' }}>
              {this.props.editUser.username}
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <div style={{ paddingLeft: '2%', border: 'solid 1px blue' }}>
              {this.props.editUser.password}
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>FullName</Form.Label>
            <div style={{ paddingLeft: '2%', border: 'solid 1px blue' }}>
              {this.props.editUser.fullname}
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Phone number</Form.Label>
            <div style={{ paddingLeft: '2%', border: 'solid 1px blue' }}>
              {this.props.editUser.phone}
            </div>
          </Form.Group>

          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Avatar</Form.Label>
            <img src={this.props.editUser.avatar} width="100%"></img>
          </Form.Group>

          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Background</Form.Label>
            <img src={this.props.editUser.background} width="100%"></img>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Role</Form.Label>
            <div style={{ paddingLeft: '2%', border: 'solid 1px blue' }}>
              {this.props.editUser.role_id == 1 ? 'Admin' : 'User'}
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Description</Form.Label>
            <div style={{ paddingLeft: '2%', border: 'solid 1px blue' }}>
              {this.props.editUser.description}
            </div>
          </Form.Group>


          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Number friends</Form.Label>
            <div style={{ paddingLeft: '2%', border: 'solid 1px blue' }}>
              {this.props.editUser.numberFriends}
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Country</Form.Label>
            <div style={{ paddingLeft: '2%', border: 'solid 1px blue' }}>
              {this.props.editUser.country}
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Lives</Form.Label>
            <div style={{ paddingLeft: '2%', border: 'solid 1px blue' }}>
              {this.props.editUser.live}
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Gender</Form.Label>
            <div style={{ paddingLeft: '2%', border: 'solid 1px blue' }}>
              {this.props.editUser.sex == 1 ? 'Male' : 'Female'}
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Date of birth</Form.Label>
            <div style={{ paddingLeft: '2%', border: 'solid 1px blue' }}>
              {this.props.editUser.birthday}
            </div>
          </Form.Group>
          
        </Form>
      </>
    );
  }
}

export default EditUser;
