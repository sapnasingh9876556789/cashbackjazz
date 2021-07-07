import React from "react";
import { createStackNavigator, TransitionSpecs } from "@react-navigation/stack";
import Home from "../container/Home";
import Cashbacklist from "../container/Cashbacklist";
import HomeScreen from "../container/HomeScreen";
import AllCategoriesList from "../container/AllCategoriesList";
import CouponsList from "../container/CouponsList";


import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

function AppMainStack() {
  return (
    <Stack.Navigator initialRouteName={"CouponsList "}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="Cashbacklist"
        component={Cashbacklist}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="AllCategoriesList"
        component={AllCategoriesList}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="CouponsList "
        component={CouponsList}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <AppMainStack/>
    </NavigationContainer>
  );
}
