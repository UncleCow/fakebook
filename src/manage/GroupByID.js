import React from "react";
import { DataGrid } from '@material-ui/data-grid';

class GroupByID extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.userID);

        const columns = [,
            {
                field: 'id',
                headerName: 'ID',
                width: 150,
                hover: '123'
            },
            {
                field: 'name',
                headerName: 'Group Name',
                width: 300,
            },

        ];
        this.state = {
            columns: columns,
            groups: [],
            userID: props.userID
        };
    }



    getData = () => {
        console.log('gettingData');
        fetch('http://localhost:8080/FakeStory/FindGroupByUserId?id=' + this.state.userID)
            .then((res) => res.json())
            .then(
                (data) => {
                    console.log('data', data);
                    const dataArray = data.map((record) => {
                        return {
                            id: record.id,
                            name: record.name,
                            des: record.des,
                            dateCreate: record.dateCreate,
                            totalMember: record.totalMember,
                        };
                    });
                    console.log('dataWithId', dataArray);
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
            </div>
        );
    }
}

export default GroupByID;
