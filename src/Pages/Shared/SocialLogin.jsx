import { useContext } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {

    const {signInWithGoogle} = useContext(AuthContext);
    const navigate = useNavigate();

    const loc = useLocation();
    const setRoute = loc?.state || "/";

    const handleGoogle = () => {
        signInWithGoogle()
        .then(result => {
            // console.log(result.user);
            navigate(setRoute);
        })
        .catch(error => {
            // console.log(error.message);
        })
    }
    return (
        <div>
            <div className="divider">OR</div>
            <button className="btn mb-4 w-[86%] ml-8" onClick={handleGoogle}>Google</button>
        </div>
    );
};

export default SocialLogin;