import { createDrawerNavigator, createStackNavigator } from 'react-navigation'
import HomeController from '../controller/home/homeController'

export default DrawerNavigation = createDrawerNavigator({
    'Home': {
        screen: createStackNavigator({
            'Home': {
                screen: HomeController,
                navigationOptions: {
                    title: 'Lista de compras'
                }
            },}
        ),
        navigationOptions: ({
            drawerLabel: 'Home'
        })
    }
},
    {
        initialRouteName: 'Home'
    }
)