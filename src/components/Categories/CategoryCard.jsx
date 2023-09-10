import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const CategoryCard = ({
    imgUrl,
    title
}) => {

    return (
        <TouchableOpacity className="bg-slate-200 relative mr-2 rounded-lg">
            <Image
                source={imgUrl}
                className="h-20 w-20 rounded"
            />
            <Text className="absolute bottom-1 left-1 text-white font-bold">{title}</Text>
        </TouchableOpacity>
    )
}

export default CategoryCard;