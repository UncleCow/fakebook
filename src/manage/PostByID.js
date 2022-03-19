import React from "react";
import { DataGrid } from '@material-ui/data-grid';

class PostByID extends React.Component {
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
                field: 'content',
                headerName: 'Content',
                width: 300,
            },

        ];
        this.state = {
            columns: columns,
            posts: [],
            userID: props.userID
        };
    }



    getData = () => {
        console.log('gettingData');
        fetch('http://localhost:8080/FakeStory/api/post/user?id=' + this.state.userID)
            .then((res) => res.json())
            .then(
                (data) => {
                    console.log('data', data);
                    const dataArray = data.map((record) => {
                        return {
                            id: record.id,
                            content: record.content,
                            image: record.image,
                            time: record.time,
                            react: record.react,
                        };
                    });
                    console.log('dataWithId', dataArray);
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
            </div>
        );
    }
}

export default PostByID;
