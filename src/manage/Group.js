import React, { useState } from "react";
import { DataGrid } from '@material-ui/data-grid';
import PreviewIcon from '@mui/icons-material/Preview';
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';
import DoDisturbOffIcon from '@mui/icons-material/DoDisturbOff';
import { Modal } from "react-bootstrap";
import EditPost from "./EditPost";
import EditGroup from "./EditGroup";

class Group extends React.Component {
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
				headerName: 'Name',
				width: 200,
			},
			{
				field: 'des',
				headerName: 'Description',
				width: 300,
			},
			{
				field: 'dateCreate',
				headerName: 'Date Create',
				width: 190,
			},
			{
				field: 'totalMember',
				headerName: 'Total Member',
				width: 170,
			},
			{
				field: 'background',
				headerName: 'Background',
				width: 170,
			},
			
		];
		this.state = {
			columns: columns,
			groups: [],
			selectedObject: props.selectedObject,
			show: false,
			editGroup: Object.create({ })
		};
	}

	handleClose = () => {
		this.setState({
			show: false,
		});

	};

	handleShow = (id) => {
		const temp = this.state.groups.filter((group) => {
			return group.id == id
		})
		this.setState({
			show: true,
			editGroup: temp[0]
		});
	};

	banRow = (id) => {
		console.log('banRow', id);
		this.setState({ openConfirmation: true, editID: id });
	};

	getData = () => {
		fetch('http://localhost:8080/FakeStory/api/admin/groups')
			.then((res) => res.json())
			.then(
				(data) => {
					const dataArray = data.map((record) => {
						return {
							actions: record.id,
							id: record.id,
							name: record.name,
							des: record.des,
							dateCreate: new Date(record.dateCreate).toISOString(),
							totalMember: record.totalMember,
							background: record.background,
						};
					});
					this.setState({
						groups: dataArray,
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

		const displayGroups = [...this.state.groups]
		const totalGroups = displayGroups.length
		return (
			<div>
				<div style={{ textAlign: 'center' }}>
					Total: {totalGroups}
				</div>
				<div style={{ height: 700, width: '100%' }}>
					<DataGrid rows={displayGroups} columns={this.state.columns} />
				</div>
				<Modal show={this.state.show} className="modal" onHide={this.handleClose}>
					<Modal.Header className="formEditTitle" closeButton>
						<h4>View Group With ID: {this.state.editGroup.id}</h4>
					</Modal.Header>
					<Modal.Body>
						<EditGroup editGroup={this.state.editGroup}/>
					</Modal.Body>
				</Modal>
			</div>
		);
	}
}

export default Group;
