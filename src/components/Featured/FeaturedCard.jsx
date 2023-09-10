import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const FeaturedCard = ({
    imgUrl,
    title
}) => {
    return (
        <TouchableOpacity className="bg-slate-200 relative mr-2 rounded-lg">
            <Image
                source={imgUrl}
                className="h-52 w-52 rounded"
            />
            <Text className="absolute bottom-2 left-2 text-white font-bold text-xl">{title}</Text>
        </TouchableOpacity>
    )
}

export default FeaturedCard