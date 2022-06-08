import { useState } from 'react'
import { useAuthContext } from '../../contexts/authContext'
import PropTypes from "prop-types";
import { fetchData } from '../../helpers/fecthData';

const LoginForm = ({ title }) => {
    const { login } = useAuthContext()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleChangeEmail = (event, type) => {
        setEmail(event.target.value)
    }

    const handleChangePassword = (event, type) => {
        setPassword(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log(email, password)
        const data = await fetchData(`${process.env.REACT_APP_API_URL}/login`, 'POST', { email, password })
        if (data.token) {
            login(email)
        }
    }

    return (
        <div className="formContainer">
            <h1>{title}</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" onChange={handleChangeEmail} required />
                <input type="password" placeholder="Password" onChange={handleChangePassword} required />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

LoginForm.propTypes = {
    title: PropTypes.string.isRequired
}

export default LoginForm