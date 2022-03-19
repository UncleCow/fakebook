import React from 'react';
import MyAppBar from './MyAppBar';
// import MyContent from './MyContent';
//import moment from 'moment';
import User from './User';
import Page from './Page';
import Group from './/Group';
import Post from './Post';
import Admin from './Admin';

class Manage extends React.Component {
	constructor() {
		super();
		this.state = {
			selectedObject: '',
		};
	}

	handleObjectChange = (selectedObject) => {
		console.log('manage call ', selectedObject);
		this.setState({
			selectedObject: selectedObject,
		});

	};

	render() {
		console.log('render manage');
		const object = () => {
			switch (this.state.selectedObject) {

				
				case "Users": return <User />;
				case "Posts": return <Post />;
				case "Pages": return <Page />;
				case "Groups": return <Group />;
				case "Admins": return <Admin />;

				default: return <h1 style={{textAlign: 'center'}}>Select object to begin manage!</h1>
			}
		}
		return (
			<div>
				<MyAppBar
					handleSelectObjectChange={this.handleObjectChange}
				/>
				<br />
				<div>{ object() }</div>
			</div>
		);
	}
}

export default Manage;
