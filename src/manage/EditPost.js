import React from "react";
import { Form, Button } from "react-bootstrap";

class EditPost extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Form action="" method="">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Post ID</Form.Label>
                        <div style={{ paddingLeft: '2%', border: 'solid 1px blue' }}>
                            {this.props.editPost.id}
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Content</Form.Label>
                        <div style={{ paddingLeft: '2%', border: 'solid 1px blue' }}>
                            {this.props.editPost.content}
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Image</Form.Label>
                        <div style={{ border: 'solid 1px blue' }}>
                            <img src={this.props.editPost.image} />
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>User ID</Form.Label>
                        <div style={{ paddingLeft: '2%', border: 'solid 1px blue' }}>
                            {this.props.editPost.user}
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Time</Form.Label>
                        <div style={{ paddingLeft: '2%', border: 'solid 1px blue' }}>
                            {this.props.editPost.time}
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>React</Form.Label>
                        <div style={{ paddingLeft: '2%', border: 'solid 1px blue' }}>
                            {this.props.editPost.react}
                        </div>
                    </Form.Group>

                </Form>
            </>
        );
    }
}

export default EditPost;
