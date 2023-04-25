import { Component } from "react";
import { signUp } from '../../utilities/usersService'
import './SignUpForm.css'

export default class SignUpForm extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit = async (evt) => {
        evt.preventDefault()
        try{
            const formData = {...this.state}
            delete formData.error
            delete formData.confirm

            const user = await signUp(formData)
            this.props.setUser(user)
        } catch (err) {
            this.setState({ error: 'Sign up Failed - Try again!' })
        }
    }
    
    render() {
        const disable = this.state.password !== this.state.confirm;
        return (
            <div>
            <div className="form-container">
                <form autoComplete="off" onSubmit={this.handleSubmit}>
                    <input placeholder='Name' type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
                    <input placeholder='Email' type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                    <input placeholder='Password' type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                    <input placeholder='Confirm Password' type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
                    <button id ="signup-button" type="submit" disabled={disable}>SIGN UP</button>
                </form>
            </div>
            <p className="error-message">&nbsp;{this.state.error}</p>
            </div>
        );
    }
}