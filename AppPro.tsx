import React from "react";

import {
    View,
    Text,
    useColorScheme,
    StyleSheet,

} from "react-native"

function AppPro():JSX.Element{

    const isDarkMode = useColorScheme() === "dark";


    return (
        <View style= {style.container}> 
            <Text style={isDarkMode ? style.whiteText : style.darkText}>
                Hello Ravi
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    whiteText: {
        color:' #FFFFFF'
    },
    darkText: {
        color: '#000000'
    }
})

export default AppPro;
