import { View, Text } from 'react-native'
import React from 'react'
import SafeAreaView from '../components/SafeAreaView/SafeAreaView'

const Test = () => {
    return (
        <SafeAreaView className="flex-1 justify-center items-center bg-slate-800">
            <Text className="text-white">Test</Text>
        </SafeAreaView>
    )
}

export default Test;