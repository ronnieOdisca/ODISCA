import React, {useState} from 'react';

import { useDispatch } from 'react-redux';


import './underProgressPage.css';
import logo from '../../images/logo.png';
import { addEmail } from '../../actions/emails';
import { EMAIL_VERIFIER } from '../../constants/underProgressPage'
 
const UnderProgressPage = () => {
     const [emailData, setemailData] = useState({
        email: ''
     });

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(emailData.email.match(EMAIL_VERIFIER)){
            dispatch(addEmail(emailData));
        }else{
            alert('Please enter a valid Email Address!');
        }
    }

    const handleKeypress = e => {
        // It triggers by pressing the enter key
        if (e.charCode === 13) {
            handleSubmit(e);
        }
    };

    return(
        <div id="underProgressPage">
            <div className="container left">
                <div className="middle-body">
                    <img src={logo} alt="Company Logo" />
                </div>
            </div>
            <div className="container right">
                <div className="middle-body">
                    <h1 style={{fontWeight: 400}}>Welcome,</h1>
                    <p>The website is under progress.</p>
                    <p>Please leave your Email address below, so that you get to know whenever we are up and running!</p>
                    <div className="email-container">
                        <input className="email-box" type="email" placeholder="Enter your Email Address" value={emailData.email} onChange={(e) => setemailData({...emailData, email: e.target.value})} onKeyPress={handleKeypress}/>
                        <button className="submit-email" type="submit" onClick={handleSubmit}>Submit</button>
                    </div>
                    <h2 style={{float: "right", fontWeight: 400}}>...See you soon!!!</h2>
                </div>
            </div>
        </div>
    );
}

export default UnderProgressPage;