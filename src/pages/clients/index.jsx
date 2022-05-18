import React, {useState, useEffect} from 'react';
import fetchDataFromApi from '../../services/api/handlers/api-handler';

// components
import AdvancedTable from '../../components/advance-table';
import Layout from '../../components/layout';
import Loader from '../../components/Loader';

const Clients = ({auth, inline = false}) => {
    const headers = [
        'ID',
        'logo',
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
                user: item.image,
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
                setData(inline ? data.slice(0, 5): data);
                setLoading(false);
            }).catch(err => {
                setLoading(false);
                setIsError(true);
                setError(err);
            });
        },
        [inline]
    );

    

    return (
        inline ? <>
        { loading && <Loader  height={"400px"} />}
            { isError && error}
            {
                data.length > 0 
                ?
                    <AdvancedTable
                        title={'Clients overview'}
                        headers={headers} 
                        data={data} 
                    />
                : 
                !loading && `${data.length} records available`
            }
        </>
        : <Layout auth={auth}>  
            { loading && <Loader  height={"80vh"} />}
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