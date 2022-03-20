import React, { useState } from "react";
import { DataGrid } from '@material-ui/data-grid';
import PreviewIcon from '@mui/icons-material/Preview';
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';
import DoDisturbOffIcon from '@mui/icons-material/DoDisturbOff';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Modal } from "react-bootstrap";
import EditPost from "./EditPost";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

class Post extends React.Component {
	constructor(props) {
		super(props);

		const columns = [
			{
				field: 'actions',
				headerName: 'Actions',
				width: 130,
				renderCell: (params) => (
					<div style={{ marginTop: 10, cursor: 'pointer' }}>
						<PreviewIcon
							onClick={() => this.handleShow(params.value)}
							alt='Show more'
						/>
						<a><DeleteForeverIcon
							onClick={() => this.handleDialogOpen(params.value)}
						/></a>
					</div>
				),
			},
			{
				field: 'id',
				headerName: 'ID',
				width: 100,
				hover: '123'
			},
			{
				field: 'content',
				headerName: 'Content',
				width: 500,
			},
			{
				field: 'image',
				headerName: 'Image',
				width: 200,
			},
			{
				field: 'user',
				headerName: 'User ID',
				width: 130,
			},
			{
				field: 'time',
				headerName: 'Time',
				width: 190,
			},
			{
				field: 'react',
				headerName: 'React',
				width: 120,
			},

		];
		this.state = {
			columns: columns,
			posts: [],
			selectedObject: props.selectedObject,
			show: false,
			editPost: Object.create({}),
			deletePost: Object.create({}),
			open: false
		};
	}

	handleClose = () => {
		this.setState({
			show: false,
		});

	};

	handleShow = (id) => {
		console.log("show", id);
		const temp = this.state.posts.filter((post) => {
			return post.id == id
		})
		this.setState({
			show: true,
			editPost: temp[0],
		});
	};

	handleDialogOpen = (id) => {
		const temp = this.state.posts.filter((post) => {
			return post.id == id
		})
		this.setState({
			open: true,
			deletePost: temp[0],
		});
	};

	handleDialogClose = () => {
		this.setState({
			open: false,
		});
	};

	handleDialogDelete = (id) => {
		console.log('delete here', id);
		this.handleDialogClose();
	}

	getData = () => {
		fetch('http://localhost:8080/FakeStory/api/admin/posts')
			.then((res) => res.json())
			.then(
				(data) => {
					const dataArray = data.map((record) => {
						return {
							actions: record.id,
							id: record.id,
							content: record.content,
							image: record.image,
							user: record.user,
							time: new Date(record.time).toISOString(),
							react: record.react,
						};
					});
					this.setState({
						posts: dataArray,
					});
				},
				(error) => {
					console.log('error', error);
				}
			)
	}


	componentDidMount() {
		this.getData();
	}

	render() {

		const displayPosts = [...this.state.posts]
		const totalPosts = displayPosts.length
		return (
			<div>
				<div style={{ textAlign: 'center' }}>
					Total: {totalPosts}
				</div>
				<div style={{ height: 700, width: '100%' }}>
					<DataGrid rows={displayPosts} columns={this.state.columns} />
				</div>
				<Modal show={this.state.show} className="modal" onHide={this.handleClose}>
					<Modal.Header className="formEditTitle" closeButton>
						<h4>View Post With ID: {this.state.editPost.id}</h4>
					</Modal.Header>
					<Modal.Body>
						<EditPost editPost={this.state.editPost} />
					</Modal.Body>
				</Modal>
				<Dialog
					open={this.state.open}
					onClose={this.handleDialogClose}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<DialogTitle id="alert-dialog-title">
						This action will delete all information of the post from the database
					</DialogTitle>
					<DialogContent>
						<DialogContentText id="alert-dialog-description">
							Delete post with ID: {this.state.deletePost.id}
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button onClick={this.handleDialogClose}>No</Button>
						<Button onClick={() => this.handleDialogDelete(this.state.deletePost.id)} autoFocus>
							Yes
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}

export default Post;
