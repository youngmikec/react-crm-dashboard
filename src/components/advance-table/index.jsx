import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AdvancedTable = (props) => {
    const {title, headers, data } = props;

    const renderData = (value = "", ind) => {
        if((value+"").startsWith('http')){
            return (<img src={`https://source.unsplash.com/random/200x200?sig=${ind}`} alt="user" className="img-fluid rounded-circle" width="35" height="35" />)
        }
        return value
    }

    return (
        <>
            <div className="container pt-2">
                <div className="card">
                    {
                        title &&
                        <div className="card-header">
                            <h5 className="card-title">{ title }</h5>
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
                                                values.map((value, ind) => {
                                                    return <td key={ind}>{renderData(value, key)}</td>
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