import React from "react";
import { Form, Button } from "react-bootstrap";

function EditForm() {
  return (
    <>
      <Form action="" method="">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" disabled />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label></Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Avatar</Form.Label>
          <Form.Control type="file" />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Image Cover</Form.Label>
          <Form.Control type="file" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>FullName</Form.Label>
          <Form.Control type="text" placeholder="FullName" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" placeholder="Description" />
        </Form.Group>

        <Form.Select className="mb-3" aria-label="Default select example">
          <option>Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Form.Select>

        <Form.Select className="mb-3" aria-label="Default select example">
          <option>Relationship Status</option>
          <option value="single">Single</option>
          <option value="married">Married</option>
          <option value="engaged">Engaged</option>
          <option value="relationship">In a relationship</option>
          <option value="separated">Separated</option>
        </Form.Select>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Lives</Form.Label>
          <Form.Control type="text" placeholder="Lives" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>From</Form.Label>
          <Form.Control type="text" placeholder="From" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" placeholder="Phone Number" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default EditForm;
