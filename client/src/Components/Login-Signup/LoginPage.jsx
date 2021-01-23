import React from 'react'
import { Button, TextField  } from '@material-ui/core'

class LogIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
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
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        };
        fetch('http://localhost:5000/api/user/signin', requestOptions)
            .then(response => response.json())
            .then(data => {
                // console.log(data)
               if(!data){
                //    alert(data)
                }else{
                    localStorage.setItem('Authorization',data.token)
                    this.props.handleClose()
                    this.setState({email: '',password: ''})
                }

            })
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


export default LogIn