import LoginControl from "./LoginControl"
import Logout from "./Logout"

const Greeting = ({ isLoggedIn, update }) => {

    if (isLoggedIn) {
        return (
            <>
                <h1> Welcome Back!!</h1>
                <Logout update={update}/>
            </>
        )
    } else {
        return (
            <>
                <h1> Please Sign up:</h1>
                <LoginControl update={update} />
            </>
        )
    }
}
export default Greeting; 