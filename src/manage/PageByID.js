import React from "react";
import { DataGrid } from '@material-ui/data-grid';

class PageByID extends React.Component {
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
                headerName: 'Page Name',
                width: 300,
            },

        ];
        this.state = {
            columns: columns,
            pages: [],
            userID: props.userID
        };
    }



    getData = () => {
        console.log('gettingData');
        fetch('http://localhost:8080/FakeStory/FindPageByUserId?id=' + this.state.userID)
            .then((res) => res.json())
            .then(
                (data) => {
                    console.log('data', data);
                    const dataArray = data.map((record) => {
                        return {
                            id: record.id,
                            name: record.name,
                            description: record.description,
                            dateCreate: record.dateCreate,
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
            </div>
        );
    }
}

export default PageByID;
