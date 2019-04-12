import React, { Component } from 'react';
import _ from 'lodash';

class Table extends Component {
    render() {
        const { columns, data } = this.props; // data pass from parent comp. by attr.
        // spread two-dimensional array to arguments for zip
        // destructure resulting array elements from zip
        let [names, props] = _.zip(...columns);
        // build column headers with name values
        let headers = <tr>{names.map((name, n) => <th key={n}>{name}</th>)}</tr>
        // build rows with corresponding properties from the data for each column
        let rows = data.map((item, i) => <tr key={i}>{props.map((prop, p) => <td key={p}>{item[prop]}</td>)}</tr>);
        const table = {
            fontSize: 12,
            color: '#AF0000',
            border: '1px solid gray'
        }
        return (
            
          <table style={table}>
            <thead>{headers}</thead>
            <tbody>{rows}</tbody>
          </table>
        );
      }
};

class TableGeneric extends Component {
    
    render() {
        const data = [];
        const columns = [['Client', 'ClientName'], ['Payer', 'Payer', 'asasdd', 'ffff']];
        return(
            <Table columns={columns} data={data}/>
        )
    }
}

export default TableGeneric;

