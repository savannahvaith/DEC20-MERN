const Basket = ({info}) => {
    return(
        <>
            {
                info.map((product) => (
                    <p>{product.productName} {product.quantity}</p>
                ))
            }
        </>
    )
}

export default Basket; 