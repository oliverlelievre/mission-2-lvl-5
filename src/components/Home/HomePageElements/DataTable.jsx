import React from 'react';

function DataTable(props) {
    return (
        <tr>
            <td>
                {props.obj.id}
            </td>
            <td>
                {props.obj.year}
            </td>
            <td>
                {props.obj.make}
            </td>
            <td>
                {props.obj.model}
            </td>
            <td>
                {props.obj.type}
            </td>
        </tr>
    );
}

export default DataTable;