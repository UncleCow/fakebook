import React from "react";
import { Form, Button } from "react-bootstrap";

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
            <Form.Control type="email" value={this.props.editUser.username} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" value={this.props.editUser.password} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>FullName</Form.Label>
            <Form.Control type="text" value={this.props.editUser.fullname} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Phone number</Form.Label>
            <Form.Control type="text" value={this.props.editUser.phone} />
          </Form.Group>

          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Avatar</Form.Label>
            <Form.Control type="file" />
          </Form.Group>

          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Background</Form.Label>
            <Form.Control type="file" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Role</Form.Label>
            <select value={this.props.editUser.sex}>
              <option value="1">Admin</option>
              <option value="0">User</option>
            </select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" value={this.props.editUser.description} />
          </Form.Group>


          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Number friends</Form.Label>
            <Form.Control type="text" value={this.props.editUser.numberFriends} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Country</Form.Label>
            <Form.Control type="text" value={this.props.editUser.country} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Lives</Form.Label>
            <Form.Control type="text" value={this.props.editUser.live} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Gender</Form.Label>
            <select value={this.props.editUser.sex} style={{borderStyle: '2px solid black'}}>
              <option value="1">Male</option>
              <option value="0">Female</option>
            </select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Date of birth</Form.Label>
          </Form.Group>

          <Form.Select className="mb-3" aria-label="Default select example">
            <option>Relationship Status</option>
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="engaged">Engaged</option>
            <option value="relationship">In a relationship</option>
            <option value="separated">Separated</option>
          </Form.Select>







          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </>
    );
  }
}

export default EditUser;
