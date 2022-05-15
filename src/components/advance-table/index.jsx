import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AdvancedTable = (props) => {
    const {title, headers, data } = props;
    return (
        <>
            <div className="container pt-5">
                <div className="card">
                    {
                        title &&
                        <div className="card-header">
                            <h4 className="card-title">{ title }</h4>
                        </div>
                    }
                    <div className="card-body">
                        <table className="table table-striped" title={title}>
                            <thead>
                                <tr>
                                    {
                                        headers.length > 0 ?
                                        headers.map((head, key) => {
                                            return <th key={key}>{head}</th>
                                        }) : 
                                        <th>No header available</th>
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((item, key) => {
                                        const values = Object.values(item);
                                        return <tr key={key}>
                                            {
                                                values.map((value, key) => {
                                                    return <td key={key}>{value}</td>
                                                })
                                            }
                                        </tr>
                                    }) 
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
};

export default AdvancedTable;