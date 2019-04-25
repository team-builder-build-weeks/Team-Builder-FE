import React from 'react';
import ReactTable from 'react-table'
import { connect } from 'react-redux';
import "react-table/react-table.css";

class Table extends React.Component {
    constructor(props) {
        super(props)
        this.state = props.projectList;
    }

    componentWillUpdate() {
        // this.state = this.props.projectList;
        // this.setState(this.props.projectList);
    }

    renderEditable = (cellInfo) => {
        return (
            <div>cellInfo</div>
        )

        /*
        return (
          <div
            style={{ backgroundColor: "#fafafa" }}
            contentEditable
            suppressContentEditableWarning
            onBlur={e => {
              const data = [...this.state.data];
              data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
              this.setState({ data });
            }}

            // updates html
            dangerouslySetInnerHTML={{
              __html:  this.state[cellInfo.index][cellInfo.column.id]
            }}

          />
        );*/
      }

    render() {
        const data = this.props.projectList // this.state;

        const columns = [
        {
            Header: 'id',
            accessor: 'id'
        },
        {
            Header: 'Name',
            accessor: 'name',
            // Cell: props => <span className="name">{props.value}</span>
        },
        {
            Header: 'Description',
            accessor: 'description',
            // Cell: this.renderEditable
        }
    ]
        return (
            <ReactTable 
                data={data}
                columns={columns}
                className={`-striped -highlight`}
                />
        )
    }
}

const mapStateToProps = state => ({
    projectList: state.projectList
})

export default connect(mapStateToProps, {})(Table);