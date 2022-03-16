import React from 'react';
// import './Countries.css';
import { DataGrid } from '@material-ui/data-grid';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForIcon from '@material-ui/icons/DeleteForever';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Snackbar from '@material-ui/core/Snackbar';
// import Moment from 'react-moment';
// import moment from 'moment';

class User extends React.Component {
	constructor(props) {
		super(props);
		const columns = [
			{
				field: 'actions',
				headerName: 'Actions',
				width: 100,
				renderCell: (params) => (
					<div style={{ marginTop: 10, cursor: 'pointer' }}>
						<EditIcon onClick={() => this.editRow(params.value)} />
						<DeleteForIcon
							onClick={() => this.deleteRow(params.value)}
						/>
					</div>
				),
			},
			{
				field: 'id',
				headerName: 'ID',
				width: 70,
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
				width: 150,
			},
			{
				field: 'avatar',
				headerName: 'Avatar',
				width: 150,
			},
			{
				field: 'background',
				headerName: 'Background',
				width: 150,
			},
			{
				field: 'role_id',
				headerName: 'Role',
				width: 90,
			},
			{
				field: 'description',
				headerName: 'Description',
				width: 150,
			},
			{
				field: 'numberFriends',
				headerName: 'Number friends',
				width: 150,
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
				width: 90,
			},
			{
				field: 'dateCreate',
				headerName: 'Create date',
				width: 150,
			},
			{
				field: 'birthday',
				headerName: 'Date of birth',
				width: 150,
			},
		];
		this.state = {
			columns: columns,
			users: [],
			selectedObject: props.selectedObject,
		};
	}

	// static getDerivedStateFromProps(props, state) {
	// 	console.log(
	// 		'User getDerivedStateFromProps', props.className, props.newStudent
	// 	);
	// 	return { className: props.className, newStudent: props.newStudent };
	// }

	// editRow = (id) => {
	// 	console.log('editRow', id);
	// };

	// deleteRow = (id) => {
	// 	// console.log('deleteRow', id);
	// 	// alert('xoá');
	// 	this.setState({ openConfirmation: true, editID: id });
	// };

	// handleCloseConfirmation = (yes) => {
	// 	// console.log('handleCloseConfirmation', yes);
	// 	this.setState({ openConfirmation: false });
	// 	if (yes) {
	// 		let students = this.state.students;
	// 		students = students.filter((data) => data.id !== this.state.editID);
	// 		const totalStudents = this.state.totalStudents - 1;
	// 		// console.log('test', students);
	// 		this.setState({ students: students, totalStudents: totalStudents });
	// 		this.props.handleTotalStudents(totalStudents);
	// 		this.setState({
	// 			openSnackbar: true,
	// 			snackbarInfo: 'Xóa thành công !',
	// 		});
	// 	}
	// };

	// handleSnackbarClose = () => {
	// 	this.setState({
	// 		openSnackbar: false,
	// 	});
	// };

	// componentDidUpdate() {
	// 	console.log('componentDidUpdate');
	// 	let totalStudents = MyClass.calculateTotalStudents(
	// 		this.state.selectedClass,
	// 		this.state.students
	// 	);
	// 	this.props.handleTotalStudents(totalStudents);
	// }

	getData = () => {
		console.log('gettingData');
		fetch('https://mocki.io/v1/66ae2a1d-6360-4f06-a257-986d9b21444c?fbclid=IwAR2NR7sKONbqg1GKqggw2Kl-R8LCEGcmeYE5cq1sM3UGF4fpYDsaBmB78LM')
			.then((res) => res.json())
			.then(
				(data) => {
					data = [data]
					console.log('data', data);
					const dataArray = data.map((record) => {
						return {
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
							dateCreate: record.dateCreate,
							birthday: record.birthday,
						};
					});
					console.log('dataWithId', dataArray);
					this.setState({
						users: dataArray,
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
			// <div style={{ height: 700, width: '100%' }}>
			// 	<DataGrid rows={displayStudents} columns={this.state.columns} />
			// 	<Dialog
			// 		open={this.state.openConfirmation}
			// 		onClose={() => this.handleCloseConfirmation(false)}
			// 		aria-labelledby='alert-dialog-title'
			// 		aria-describedby='alert-dialog-description'
			// 	>
			// 		<DialogTitle id='alert-dialog-title'>
			// 			'Bạn có chắc là muốn xóa sinh viên có ID ={' '}
			// 			{this.state.editID} ?'
			// 		</DialogTitle>
			// 		<DialogContent>
			// 			<DialogContentText id='alert-dialog-description'></DialogContentText>
			// 		</DialogContent>
			// 		<DialogActions>
			// 			<Button
			// 				onClick={() => this.handleCloseConfirmation(false)}
			// 				color='primary'
			// 			>
			// 				Hủy
			// 			</Button>
			// 			<Button
			// 				onClick={() => this.handleCloseConfirmation(true)}
			// 				color='primary'
			// 				autoFocus
			// 			>
			// 				Đồng ý
			// 			</Button>
			// 		</DialogActions>
			// 	</Dialog>
			// 	<Snackbar
			// 		anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
			// 		open={this.state.openSnackbar}
			// 		onClose={this.handleSnackbarClose}
			// 		message={this.state.snackbarInfo}
			// 		key={{ vertical: 'bottom', horizontal: 'right' }}
			// 	/>
			// </div>
			<div>
				<div style={{ textAlign: 'center' }}>
					Total: {totalUsers}
				</div>
				<div style={{ height: 700, width: '100%' }}>
					<DataGrid rows={displayUsers} columns={this.state.columns} />
				</div>
			</div>
		);
	}
}

export default User;
