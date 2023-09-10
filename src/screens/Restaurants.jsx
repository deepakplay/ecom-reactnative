import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import SafeAreaView from '../components/SafeAreaView/SafeAreaView'
import { useRoute } from '@react-navigation/core'

const Restaurants = () => {
    const { params: { title } } = useRoute();
    return (
        <ScrollView>
            <SafeAreaView className="flex-1 bg-slate-800">
                <Text className="text-white">Test</Text>
            </SafeAreaView>
        </ScrollView>
    )
}

export default Restaurants;