import React, { useState } from "react";
import { DataGrid } from '@material-ui/data-grid';
import PreviewIcon from '@mui/icons-material/Preview';
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';
import DoDisturbOffIcon from '@mui/icons-material/DoDisturbOff';
import { Modal } from "react-bootstrap";
import EditPage from "./EditPage";

class Page extends React.Component {
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
				field: 'name',
				headerName: 'Page name',
				width: 200,
			},
			{
				field: 'description',
				headerName: 'Description',
				width: 300,
			},
			{
				field: 'dateCreate',
				headerName: 'Create Date',
				width: 190,
			},
			{
				field: 'liked',
				headerName: 'Liked',
				width: 170,
			},
			
		];
		this.state = {
			columns: columns,
			pages: [],
			selectedObject: props.selectedObject,
			show: false,
			editPage: Object.create({ })
		};
	}

	handleClose = () => {
		this.setState({
			show: false,
		});

	};

	handleShow = (id) => {
		console.log('show', id);
		const temp = this.state.pages.filter((page) => {
			return page.id == id
		})
		this.setState({
			show: true,
			editPage: temp[0]
		});
		console.log('show', this.state.editPage);
	};

	banRow = (id) => {
		console.log('banRow', id);
		this.setState({ openConfirmation: true, editID: id });
	};

	getData = () => {
		console.log('gettingData');
		fetch('http://localhost:8080/FakeStory/api/admin/pages')
			.then((res) => res.json())
			.then(
				(data) => {
					console.log('data', data);
					const dataArray = data.map((record) => {
						return {
							actions: record.id,
							id: record.id,
							name: record.name,
							description: record.description,
							dateCreate: new Date(record.dateCreate).toISOString(),
							liked: record.liked,
						};
					});
					console.log('dataWithId', dataArray);
					this.setState({
						pages: dataArray,
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

		const displayPages = [...this.state.pages]
		const totalPages = displayPages.length
		return (
			<div>
				<div style={{ textAlign: 'center' }}>
					Total: {totalPages}
				</div>
				<div style={{ height: 700, width: '100%' }}>
					<DataGrid rows={displayPages} columns={this.state.columns} />
				</div>
				<Modal show={this.state.show} className="modal" onHide={this.handleClose}>
					<Modal.Header className="formEditTitle" closeButton>
						<h4>View Page With ID: {this.state.editPage.id}</h4>
					</Modal.Header>
					<Modal.Body>
						<EditPage editPage={this.state.editPage}/>
					</Modal.Body>
				</Modal>
			</div>
		);
	}
}

export default Page;
