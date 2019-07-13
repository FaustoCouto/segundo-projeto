import React from 'react'
import LoginView from '../../view/login/loginView'
import { validaLogin } from '../../api/api'

export default class LoginController extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            user: 'guilherme',
            password: 'google94',
            message: '',
            loading: false
        }
    }

    changeUserState = (user) => {
        this.setState({
            user: user
        })
    }

    changePasswordState = (password) => {
        this.setState({
            password: password
        })
    }

    validationLogin = () => {

        this.setState({
            loading: true,
            message: ''
        })

        validaLogin(this.state.user, this.state.password)// entrada user, passord saída promiss
            .then((body) => body.json()) // entrada promiss saída body
            .then((resp) => {

                if (resp.meta.status === 'success') {
                    this.props.navigation.navigate('DrawerApp')
                } else {
                    this.setState({
                        message: resp.meta.message,
                        loading: false
                    })
                }

            }) // entrada body
            .catch((error) => console.error(error))
    }

    render() {
        return (
            <LoginView 
                state={this.state}
                functions={{
                    'changeUserState': this.changeUserState,
                    'changePasswordState': this.changePasswordState,
                    'validationLogin': this.validationLogin
                }}
            />
        )
    }
}