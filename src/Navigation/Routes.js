import React,{Fragment} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"
import AuthStack from "./AuthStack";
import { DetailPage, HomePage } from "../Screens";
import navigationStrings from "./navigationStrings";


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
            </Stack.Navigator>
        </NavigationContainer>
    )

}