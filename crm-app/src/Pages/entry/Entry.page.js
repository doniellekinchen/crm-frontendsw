import React, {useState} from 'react'

import './Entry.style.css';
import { LoginForm } from '../../components/login/Login.comp'
import { ResetPassword } from '../../components/password-reset/PasswordReset.comp';

export const Entry = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [formLoad, setFormLoad] = useState('login')

    const handleOnChange = (e) => {
        const {name, value} = e.target;
        
        switch(name){
            case 'email':
                setEmail(value);
                break;

                case 'password':
                    setPassword(value);
                    break;

                default:
                    break;
        }
    }
   const handleOnSubmit = (e) => {
        e.preventDefault();

        if(!email || !password){
            alert("Fill up the form gworl");
        }
        console.log(email)
    }

    const handleOnResetSubmit = (e) => {
        e.preventDefault();

        if(!email){
            alert("Please enter an email gworl");
        }
        console.log(email)
    }

    const formSwitcher = formType => {
        setFormLoad(formType)
    }

    return (
    <div className="entry-page bg-info">
        {formLoad === 'login' && (
           <LoginForm 
           handleOnChange={handleOnChange}
           handleOnSubmit={handleOnSubmit} 
           formSwitcher={formSwitcher} 
           email={email}
           pass={password}
           />
        )}
            {formLoad === 'reset' && (<ResetPassword
           handleOnChange={handleOnChange}
           handleOnResetSubmit={handleOnResetSubmit} 
           formSwitcher={formSwitcher}
           email={email}
           />
        )}
    </div>
      
  )
}



