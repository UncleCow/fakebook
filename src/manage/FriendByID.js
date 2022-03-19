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

class FriendByID extends React.Component {
    constructor(props) {
        super(props);

        const columns = [,
            {
                field: 'id',
                headerName: 'ID',
                width: 150,
                hover: '123'
            },
            {
                field: 'fullname',
                headerName: 'Fullname',
                width: 300,
            },
            
        ];
        this.state = {
            columns: columns,
            users: [],
            selectedObject: props.selectedObject,
            userID: props.userID
        };
    }



    getData = () => {
        console.log('gettingData');
        fetch('http://localhost:8080/FakeStory/FindUserByUserId?id=' + this.state.userID + '&number=99')
            .then((res) => res.json())
            .then(
                (data) => {
                    console.log('data', data);
                    console.log('idfind', this.props.idFind);
                    const dataArray = data.map((record) => {
                        return {
                            id: record.id,
                            fullname: record.fullname,
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

export default FriendByID;
