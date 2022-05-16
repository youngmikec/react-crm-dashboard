import React from "react";
import Layout from "../../components/layout";

const Products = ({auth}) => {
    return (
        <Layout auth={auth}>
            <h1>Welcome to Products</h1>
        </Layout>
    )
}

export default Products;