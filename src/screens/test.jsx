import { View, Text } from 'react-native'
import React from 'react'

const Test = () => {
    return (
        <View className="flex-1 justify-center items-center bg-slate-800">
            <Text className="text-white">Test</Text>
        </View>
    )
}

export default Test;



// import { Text, TouchableOpacity, View } from "react-native"

// const Test = ({ navigation }) => {
//     return (
//         <View className="flex-1 items-center justify-center bg-slate-800">
//             <TouchableOpacity onPress={() => navigation.goBack()}>
//                 <Text className="text-white text-base">
//                     Back to Home
//                 </Text>
//             </TouchableOpacity>
//         </View>
//     )
// }
// export default Test;