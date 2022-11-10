import "./Success.css";
// import img1 from './images/alertsuccess_righttick.png';
import { useNavigate } from "react-router-dom";
export default function Success({ setshow1 }) {
    const navigate = useNavigate();
    function OK() {
        navigate('/')
    }
    return <>
        <div className='alertsuccess'>
            <div className='alertsuccess_popup'>
                {/* <img src={img1} /> */}
                <label>Success!</label>
                <button type='Button' onClick={(e) => { setshow1(false) }}>OK</button>
            </div>
        </div>
    </>
}