import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'
import { MapPinIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/core'

const FeaturedCard = ({
    imgUrl,
    title,
    rating,
    genre,
    address,
    shortDescription,
    dishes,
    lat,
    lng
}) => {
    const navigate  = useNavigation();
    return (
        <TouchableOpacity className="rounded mr-3 h-60 w-52 bg-white shadow" onPress={()=> navigate.navigate('Restaurants', {title})}>
            <Image
                source={imgUrl}
                className="h-3/5 w-full rounded-t"
            />
            <View className="px-2 pt-2 pb-10 flex-1 gap-1">
                <Text className="font-bold text-lg">{title}</Text>
                <View className="flex-row items-center space-x-1">
                    <StarIcon size={20} color="green" opacity={0.5} />
                    <Text className="text-xs text-gray-500">
                        <Text className="text-green-500 font-bold">{rating}</Text> · {genre}
                    </Text>

                </View>
                <View className="flex-row items-center">
                    <MapPinIcon size={20} color="gray" opacity={0.4}/>
                    <Text className="text-xs text-gray-500">Nearby · {address}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default FeaturedCard;