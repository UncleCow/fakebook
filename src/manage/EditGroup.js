import React from "react";
import { Form, Button } from "react-bootstrap";

class EditGroup extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Form action="" method="">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Group ID</Form.Label>
                        <div style={{ paddingLeft: '2%', border: 'solid 1px blue' }}>
                            {this.props.editGroup.id}
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Name</Form.Label>
                        <div style={{ paddingLeft: '2%', border: 'solid 1px blue' }}>
                            {this.props.editGroup.name}
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Description</Form.Label>
                        <div style={{ paddingLeft: '2%', border: 'solid 1px blue' }}>
                            {this.props.editGroup.des}
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Date Create</Form.Label>
                        <div style={{ paddingLeft: '2%', border: 'solid 1px blue' }}>
                            {this.props.editGroup.dateCreate}
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Total Member</Form.Label>
                        <div style={{ paddingLeft: '2%', border: 'solid 1px blue' }}>
                            {this.props.editGroup.totalMember}
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Background</Form.Label>
                        <div style={{ border: 'solid 1px blue' }}>
                            <img src={this.props.editGroup.background} />
                        </div>
                    </Form.Group>

                </Form>
            </>
        );
    }
}

export default EditGroup;
