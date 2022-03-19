import React from "react";
import { DataGrid } from '@material-ui/data-grid';
import PreviewIcon from '@mui/icons-material/Preview';
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';
import DoDisturbOffIcon from '@mui/icons-material/DoDisturbOff';
import GroupsIcon from '@mui/icons-material/Groups';
import ArticleIcon from '@mui/icons-material/Article';
import FlagIcon from '@mui/icons-material/Flag';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { Modal } from "react-bootstrap";
import EditUser from "./EditUser";
import FriendByID from "./FriendByID";
import PostByID from "./PostByID";
import { Routes, Route } from "react-router-dom";
import PageByID from "./PageByID";
import GroupByID from "./GroupByID";

class Admin extends React.Component {
	constructor(props) {
		super(props);

		const columns = [
			{
				field: 'actions',
				headerName: 'Actions',
				width: 160,
				renderCell: (params) => (
					<div style={{ marginTop: 10, cursor: 'pointer' }}>
						<PreviewIcon
							onClick={() => this.inforShow(params.value)}
							alt='Show more'
						/>
						<PeopleAltIcon
							onClick={() => this.friendShow(params.value)}
						/>
						<ArticleIcon
							onClick={() => this.postShow(params.value)}
						/>
						<FlagIcon
							onClick={() => this.pageShow(params.value)}
						/>
						<GroupsIcon
							onClick={() => this.groupShow(params.value)}
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
				field: 'username',
				headerName: 'Username',
				width: 150,
			},
			{
				field: 'password',
				headerName: 'Password',
				width: 150,
			},
			{
				field: 'fullname',
				headerName: 'Fullname',
				width: 150,
			},
			{
				field: 'phone',
				headerName: 'Phone number',
				width: 170,
			},
			{
				field: 'avatar',
				headerName: 'Avatar',
				width: 150,
			},
			{
				field: 'background',
				headerName: 'Background',
				width: 160,
			},
			{
				field: 'role_id',
				headerName: 'Role',
				width: 110,
			},
			{
				field: 'description',
				headerName: 'Description',
				width: 150,
			},
			{
				field: 'numberFriends',
				headerName: 'Number friends',
				width: 180,
			},
			{
				field: 'country',
				headerName: 'Country',
				width: 150,
			},
			{
				field: 'live',
				headerName: 'Live',
				width: 150,
			},
			{
				field: 'sex',
				headerName: 'Gender',
				width: 140,
			},
			{
				field: 'dateCreate',
				headerName: 'Create date',
				width: 190,
			},
			{
				field: 'birthday',
				headerName: 'Date of birth',
				width: 190,
			},
		];
		this.state = {
			columns: columns,
			users: [],
			selectedObject: props.selectedObject,
			editUser: Object.create({}),
			showInfor: false,
			showFriend: false,
			showPost: false,
			showPage: false,
			showGroup: false,

		};
	}

	allClose = () => {
		this.setState({
			showInfor: false,
			showFriend: false,
			showPost: false,
			showPage: false,
			showGroup: false,
		});

	};

	inforShow = (id) => {
		console.log('show', id);
		const temp = this.state.users.filter((user) => {
			return user.id === id
		})
		this.setState({
			showInfor: true,
			editUser: temp[0]
		});
		console.log('show', this.state.editUser);
	};

	friendShow = (id) => {
		console.log('show', id);
		const temp = this.state.users.filter((user) => {
			return user.id === id
		})
		this.setState({
			showFriend: true,
			editUser: temp[0]
		});
	};

	postShow = (id) => {
		console.log('show', id);
		const temp = this.state.users.filter((user) => {
			return user.id === id
		})
		this.setState({
			showPost: true,
			editUser: temp[0]
		});
	};

	pageShow = (id) => {
		console.log('show', id);
		const temp = this.state.users.filter((user) => {
			return user.id === id
		})
		this.setState({
			showPage: true,
			editUser: temp[0]
		});
	};

	groupShow = (id) => {
		console.log('show', id);
		const temp = this.state.users.filter((user) => {
			return user.id === id
		})
		this.setState({
			showGroup: true,
			editUser: temp[0]
		});
	};

	getData = () => {
		console.log('gettingData');
		fetch('http://localhost:8080/FakeStory/api/admin/users')
			.then((res) => res.json())
			.then(
				(data) => {
					console.log('data', data);
					console.log('idfind', this.props.idFind);
					const dataArray = data.map((record) => {
						return {
							actions: record.id,
							id: record.id,
							username: record.username,
							password: record.password,
							fullname: record.fullname,
							phone: record.phone,
							avatar: record.avatar,
							background: record.background,
							role_id: record.role_id,
							description: record.description,
							numberFriends: record.numberFriends,
							country: record.country,
							live: record.live,
							sex: record.sex,
							dateCreate: new Date(record.dateCreate).toISOString(),
							birthday: new Date(record.birthday).toISOString(),
						};
					});
					console.log('dataWithId', dataArray);
					const adminArray = dataArray.filter(
                        (data) => data.role_id == 1
                    )
					this.setState({
						users: adminArray,
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
		const displayUsers = [...this.state.users]
		const totalUsers = displayUsers.length
		return (
			<div>
				<Routes>
					<Route path="/post" element={<PostByID userID={this.state.editUser.id} />} />
				</Routes>
				<div style={{ textAlign: 'center' }}>
					Total: {totalUsers}
				</div>
				<div style={{ height: 700, width: '100%' }}>
					<DataGrid rows={displayUsers} columns={this.state.columns} />
				</div>

				{/* infor */}
				<Modal show={this.state.showInfor} className="modal" onHide={this.allClose} width>
					<Modal.Header className="formEditTitle" closeButton>
						<h4>View User With ID: {this.state.editUser.id}</h4>
					</Modal.Header>
					<Modal.Body>
						<EditUser editUser={this.state.editUser} />
					</Modal.Body>
				</Modal>

				{/* friend */}
				<Modal show={this.state.showFriend} className="modal" onHide={this.allClose}>
					<Modal.Header className="formEditTitle" closeButton>
						<h4>View User's Friends With ID: {this.state.editUser.id}</h4>
					</Modal.Header>
					<FriendByID />
				</Modal>

				{/* post */}
				<Modal show={this.state.showPost} className="modal" onHide={this.allClose} width>
					<Modal.Header className="formEditTitle" closeButton>
						<h4>View User's Posts With ID: {this.state.editUser.id}</h4>
					</Modal.Header>
					<PostByID userID={this.state.editUser.id} />
				</Modal>

				{/* page */}
				<Modal show={this.state.showPage} className="modal" onHide={this.allClose} width>
					<Modal.Header className="formEditTitle" closeButton>
						<h4>View User's Pages With ID: {this.state.editUser.id}</h4>
					</Modal.Header>
					<PageByID userID={this.state.editUser.id} />
				</Modal>

				{/* group */}
				<Modal show={this.state.showGroup} className="modal" onHide={this.allClose} width>
					<Modal.Header className="formEditTitle" closeButton>
						<h4>View User's Groups With ID: {this.state.editUser.id}</h4>
					</Modal.Header>
					<GroupByID userID={this.state.editUser.id} />
				</Modal>
			</div >
		);
	}
}

export default Admin;
