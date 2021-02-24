import {Link} from 'react-router-dom';
const Nav = () =>{

    return(
        <>
            <Link to="/" className="btn btn-danger">Home</Link>
            <Link to="/about" className="btn btn-outline-success">About</Link>
            <Link to="/shop" className="btn btn-outline-info">Product</Link>
        </>
    )
}
export default Nav; 