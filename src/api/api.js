import { urlBase, urlController, urlMethods } from './helper/rest'

export const validaLogin = (user, password) => (
    fetch(`${urlBase}${urlController.login}${urlMethods.autenticar}`, {
        method: 'GET',
        headers: {
            login: user,
            senha: password,
            origem: 'M'
        }
    })
)