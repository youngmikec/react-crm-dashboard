import React, {useState, useEffect} from 'react';
import fetchDataFromApi from '../../services/api/handlers/api-handler';

// components
import AdvancedTable from '../../components/advance-table';
import Layout from '../../components/layout';

const Clients = () => {
    const headers = [
        'id',
        'name',
        'phone',
        'email',
        'country'
    ]
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState('');

    const hydrateData = (data) => {
        return data.map((item) => {
            return {
                id: item.id,
                name: item.name,
                phone: item.phone,
                email: item.email,
                country: item.country
            }
        })
    }

    useEffect(
        () => {
            setLoading(true);
            fetchDataFromApi('clients')
            
            .then(res => {
                const data = hydrateData(res.data.data);
                setData(data);
                setLoading(false);
            }).catch(err => {
                setLoading(false);
                setIsError(true);
                setError(err);
            });
        },
        []
    );

    

    return (
        <Layout>  
            { loading && 'Loading...'}
            { isError && error}
            {
                data.length > 0 
                ?
                    <AdvancedTable
                        title={'Clients table'}
                        headers={headers} 
                        data={data} 
                    />
                : 
                !loading && `${data.length} records available`
            }
        </Layout>
    )
}

export default Clients;