import React from 'react';
import Layout from '../../components/layout';
import Mainboard from './mainboard';

const Home = ({auth}) => {
    return (
        <Layout auth={auth}>
            <Mainboard />
        </Layout>
    )
}

export default Home;