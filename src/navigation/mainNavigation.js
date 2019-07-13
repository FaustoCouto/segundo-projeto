import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import LoginController from '../controller/login/loginController'
import DrawerNavigation from '../navigation/drawerNavigation'

const MainVavigation = createSwitchNavigator(
    {
        'Login': {
            screen: LoginController
        },
        'DrawerApp': {
            screen: DrawerNavigation
        }
    },
    {
        initialRouteName: 'DrawerApp'
    }
)

export default createAppContainer(MainVavigation)