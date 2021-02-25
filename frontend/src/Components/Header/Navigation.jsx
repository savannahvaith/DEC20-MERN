import { Link } from 'react-router-dom';
import { Navbar } from 'reactstrap';
const Navigation = () => {

    return (
        <>
            <Navbar color="dark" dark expand="md">
                <Link to="/" className="btn btn-outline-light">Home</Link>
                <Link to="/about" className="btn btn-outline-light">About</Link>
                <a href="http://github.com/savannahvaith" className="btn btn-outline-light">Github</a>
            </Navbar>
        </>
    )

}

export default Navigation; 