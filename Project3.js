import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

const Button = (props) => (
    <TouchableOpacity
    onPress={props.onPress}
    style={{
        backgroundColor: "#ff637c",
        alignSelf: "center",
        padding: 10,
        margin: 10,
        ...props.buttonStyle,
    }}>
        <Text style={{color: "#fff"}}>{props.Text}</Text>
    </TouchableOpacity>
);

export default () =>(
    <View style = { {flex:1, justifyContent:"center"}}>
        <Button Text="Say hello" onPress={() => alert("hello!")} />
        <Button Text="Say goodbye" onPress={() => alert("goodbye!")} buttonStyle={{backgroundColor: "#49be25"}}/>
    </View>
);