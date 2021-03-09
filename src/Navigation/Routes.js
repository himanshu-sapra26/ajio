import React,{Fragment} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"
import AuthStack from "./AuthStack";
import { Account, Confirm, DetailPage, HomePage } from "../Screens";
import navigationStrings from "./navigationStrings";
import Cart from "../Screens/Cart/Cart";



const Stack = createStackNavigator();
Stack.Screen

export default function () {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                    {AuthStack(Stack)}
                    <Stack.Screen
                component={HomePage}
                options={{
                    headerShown: false
                }}
                name={navigationStrings.HOMEPAGE}

            />
            <Stack.Screen
                component={DetailPage}
                options={{
                    headerShown: false
                }}
                name={navigationStrings.DETAILPAGE}

            />
            <Stack.Screen
                component={Cart}
                options={{
                    headerShown: false
                }}
                name='cart'

            />

<Stack.Screen
                component={Account}
                options={{
                    headerShown: false
                }}
                name={navigationStrings.ACCOUNT}

            />
            <Stack.Screen
                component={Confirm}
                options={{
                    headerShown: false
                }}
                name={navigationStrings.CONFIRM}

            />
           
            </Stack.Navigator>
        </NavigationContainer>
    )

}