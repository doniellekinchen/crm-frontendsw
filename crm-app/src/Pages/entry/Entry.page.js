import React, {useState} from 'react'

import './Entry.style.css';
import { LoginForm } from '../../components/login/Login.comp'

export const Entry = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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
            alert("Fill in the space gworl");
        }
    }

    return (
    <div className="entry-page bg-info">
           <LoginForm 
           handleOnChange={handleOnChange}
           handleOnSubmit={handleOnSubmit} 
           email={email}
           pass={password}
           />
    </div>
      
  )
}



