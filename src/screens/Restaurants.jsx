import { View, Text, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import SafeAreaView from '../components/SafeAreaView/SafeAreaView'
import { useRoute } from '@react-navigation/core'
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/core';

const Restaurants = () => {
    const navigate = useNavigation();
    // const { params: { title } } = useRoute();

    return (
        <ScrollView className="flex-1">
            <View className="w-full h-52">
                <ImageBackground source={require('../images/image2.jpg')} className="w-full h-full relative">
                    <TouchableOpacity className="w-10 h-10 bg-neutral-700 rounded-full absolute top-2 left-2 justify-center items-center" onPress={navigate.goBack}>
                        <ArrowLeftIcon size={20} color="#00CCBB" />
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        </ScrollView>
    )
}

export default Restaurants;