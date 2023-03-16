import { Fragment } from 'react';

function Table({ data, config, keyFn }) {

    const renderedRow = data.map((row) => {
        const renderedCell = config.map((cell) => {
            return (
                <td key={cell.label} className="p-2">{cell.render(row)}</td>
            );
        })

        return (
            <tr key={keyFn(row)} className="border-b">
                {renderedCell}
            </tr>
            
        );
    });

    const renderedColumn = config.map((column) => {
        if (column.header) {

            return <Fragment key={column.label}>{column.header()}</Fragment>;    
        }

        return <th key={column.label}>{column.label}</th>;
                     
    });

    return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr>
                   {renderedColumn}
                </tr>
            </thead>
            <tbody>
                {renderedRow}
            </tbody>
            
        </table>
    );
}

export default Table;