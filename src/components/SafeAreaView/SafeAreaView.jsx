import { StyleSheet, Platform, StatusBar, SafeAreaView as SafeView } from "react-native";


const SafeAreaView = ({ children, style = [], ...otherProps }) => {
    const safeAreaStyle = {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }

    return (
        <SafeView style={[safeAreaStyle, ...style]} {...otherProps}>
            {children}
        </SafeView>
    )
}

export default SafeAreaView;