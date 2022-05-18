const Product = (props) => {
    const { item } = props;
    return (
        <div
            className="col-md-4 col-lg-3 col-xs-12 col-sm-6 mb-3 mt-5"
        >
            <div className="card">
                <img className="card-img-top" src={`https://source.unsplash.com/random/200x200?sig=${item.product_image}`} alt="product" />
                <div className="card-body text-center">
                    <h5 className="card-title">{item.product_name}</h5>
                    <hr />
                    <div className="card-body">
                        <div className="card-text text-left">Net price: {item.net_price}</div>
                        <div className="card-text text-left">taxes: {item.taxes}</div>
                        <div className="card-text text-left">Price : {item.price}</div>
                    </div>
                    

                </div>
            </div>
        </div>
    );
};
export default Product;