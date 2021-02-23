import {useState} from 'react'; 
import Greeting from './Greeting';

const HomePage = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const update = () => {
        setIsLoggedIn(c => !c);
    }


    return(
        <Greeting isLoggedIn={isLoggedIn} update={update}/> 
    )

}

export default HomePage; 