import React, {useState, useEffect} from 'react';
import fetchDataFromApi from '../../services/api/handlers/api-handler';

// components
import AdvancedTable from '../../components/advance-table';
import Layout from '../../components/layout';
import Loader from '../../components/Loader';

const Team = ({auth}) => {
    const headers = [
        'ID',
        'user',
        'firstname',
        'lastname',
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
                firstname: item.firstname,
                lastname: item.lastname,
                phone: item.phone,
                email: item.email,
                country: item.address.country
            }
        })
    }

    useEffect(
        () => {
            setLoading(true);
            fetchDataFromApi('members')
            
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
        <Layout auth={auth}>  
            { loading && <Loader height={"80vh"} /> }
            { isError && error}
            {
                data.length > 0 
                ?
                    <AdvancedTable
                        title={'Team members table'}
                        headers={headers} 
                        data={data} 
                    />
                : 
                !loading && `${data.length} records available`
            }
        </Layout>
    )
}

export default Team;