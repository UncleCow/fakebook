import React from "react";
import { Form, Button } from "react-bootstrap";

class EditPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Form action="" method="">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Page Name</Form.Label>
                        <div style={{ paddingLeft: '2%', border: 'solid 1px blue' }}>
                            {this.props.editPage.name}
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Description</Form.Label>
                        <div style={{ paddingLeft: '2%', border: 'solid 1px blue' }}>
                            {this.props.editPage.description}
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Create Date</Form.Label>
                        <div style={{ paddingLeft: '2%', border: 'solid 1px blue' }}>
                            {this.props.editPage.dateCreate}
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Liked</Form.Label>
                        <div style={{ paddingLeft: '2%', border: 'solid 1px blue' }}>
                            {this.props.editPage.liked}
                        </div>
                    </Form.Group>

                </Form>
            </>
        );
    }
}

export default EditPage;
