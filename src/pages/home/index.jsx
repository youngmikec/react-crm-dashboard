import React from 'react';
import Layout from '../../components/layout';

const Home = ({auth}) => {
    return (
        <Layout auth={auth}>
            <h1>Welcome to CRM Dashboard</h1>
        </Layout>
    )
}

export default Home;