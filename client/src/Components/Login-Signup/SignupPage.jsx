import React from 'react'
import { Button, TextField  } from '@material-ui/core'
import { connect } from "react-redux"
import {setUser} from "../../Redux/user/userAction"

class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target

        this.setState({ [name]: value })
        // console.log(value)
    }


    
    signUpReq = (obj) => {
        // Simple POST request with a JSON body using fetch
        if(obj.password.length < 8 ){
            alert("Password must be at least 8 characters")
        }else{

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(obj)
            };
            fetch('http://localhost:5000/api/user/signup', requestOptions)
                .then(response => response.json())
                .then(data => {
                    if(!data.token){
                    alert("Email already exists")
                    }else{
                        localStorage.setItem('Authorization',data.token)
                        this.props.handleClose()
                        this.props.setUser(data.user)
                        this.setState({ name: '',email: '',password: ''})
                    }
                })
                .catch(err=> {
                    alert("Email already exists")
                })
        }
            
           
    }

    signUp = (e) => {
        e.preventDefault()
        this.signUpReq(this.state)
    }




    render() {

        const { name, email, password } = this.state
        return (

            <form className='login' onSubmit={this.signUp}>
                <TextField className='Input'
                    label='Username'
                    type='text'
                    name='name'
                    value={name}
                    onChange={this.handleChange}
                    required
                />
                <br />
                <TextField className='Input'
                    label='Email'
                    type='email'
                    name='email'
                    value={email}
                    onChange={this.handleChange}
                    required
                />
                <br />
                <TextField className='Input'
                    label='Password'
                    type='password'
                    name='password'
                    value={password}
                    onChange={this.handleChange}
                    required
                />

                <Button type='submit' className='dialog_button'  > Sign Up </Button>
                </form>

        )
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        setUser:user=>dispatch(setUser(user))
    }
}



export default connect(null,mapDispatchToProps)(SignUp)
