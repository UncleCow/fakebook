import React from 'react';
// import style from './ComboClasses.css';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

class ComboObject extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{ name: 'Users' },
				{ name: 'Posts' },
				{ name: 'Pages' },
				{ name: 'Groups' },
				{ name: 'Admins' },
			],
			selectedObject: '',
		};
	}

	handleChange = (event, value) => {
		console.log('comboobject', value?.name);
		this.setState({ selectedObject: value?.name });
		this.props.handleChange(value?.name);
	};

	render() {
		console.log('render combo');

		return (
			<div style={{ minWidth: 200 }}>
				<Autocomplete
					id='combo-box-lop'
					size='small'
					options={this.state.data}
					getOptionLabel={(option) => option.name}
					onChange={this.handleChange}
					style={{
						background: 'white',
					}}
					renderInput={(params) => (
						<TextField
							{...params}
							label=''
							variant='outlined'
							placeholder='Select Object'
						/>
					)}
				/>
			</div>
		);
	}
}

export default ComboObject;
