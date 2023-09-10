import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const FeaturedCard = ({
    imgUrl,
    title
}) => {
    return (
        <TouchableOpacity className="bg-slate-200 relative mr-2 rounded-lg">
            <Image
                source={{ uri: imgUrl }}
                className="h-52 w-52 rounded"
            />
            <Text className="absolute bottom-1 left-1 text-white font-bold">{title}</Text>
        </TouchableOpacity>
    )
}

export default FeaturedCard