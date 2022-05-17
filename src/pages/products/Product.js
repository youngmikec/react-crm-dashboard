const Product = (props) => {
    const { item } = props;
    return (
        <div
            className="col-md-4 col-lg-3 col-xs-12 col-sm-6 mb-3 mt-5"
        >
            <div className="card">
                <img className="card-img-top" src={item.product_image} alt="the image alt text here" />
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
            {/* <div className="card p-2" style={{ height: "100%" }}>
                <div className="text-center my-1">
                    <img
                        
                        src={item.product_image}
                        className="card-img-top"
                        style={{ height: "120px", width: "120px" }}
                        alt="Alternative Data"
                    ></img>
                </div>
                <div className="card-body" style={{ backgroundColor: "ButtonFace" }}>
                    <h5 className="card-title">{item.product_name}</h5>
                    <div className="card-body ">
                        <div>
                            <div>Price : {item.price}</div>
                            <div>Net Price : {item.net_price}</div>
                            <div className="text center">taxes: {item.taxes} </div>

                        </div>
                        
                    </div>
                </div>
            </div> */}
        </div>
    );
};
export default Product;