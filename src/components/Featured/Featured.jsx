import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import FeaturedCard from './FeaturedCard';

const Featured = ({
    title,
    description,
    categories
}) => {

    return (
        <View className="my-2">
            <View className="px-4">
                <View className="flex-1 flex-row items-center">
                    <Text className="font-extrabold text-lg tracking-wider flex-1">{title}</Text>
                    <View>
                        <ArrowRightIcon size={20} color="#00CCBB" />
                    </View>
                </View>
                <Text className="text-gray-400 font-semibold text-sm">{description}</Text>
            </View>
            <ScrollView
                horizontal
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingTop: 10
                }}
            > 
                <FeaturedCard imgUrl={require('../../images/image1.jpg')} title="Product" />
                <FeaturedCard imgUrl={require('../../images/image2.jpg')} title="Product" />                 
                <FeaturedCard imgUrl={require('../../images/image1.jpg')} title="Product" />
                <FeaturedCard imgUrl={require('../../images/image2.jpg')} title="Product" />                 
                <FeaturedCard imgUrl={require('../../images/image1.jpg')} title="Product" />
                <FeaturedCard imgUrl={require('../../images/image2.jpg')} title="Product" />                 
                <FeaturedCard imgUrl={require('../../images/image1.jpg')} title="Product" />
                <FeaturedCard imgUrl={require('../../images/image2.jpg')} title="Product" />                 
                <FeaturedCard imgUrl={require('../../images/image1.jpg')} title="Product" />
                <FeaturedCard imgUrl={require('../../images/image2.jpg')} title="Product" />                 
                <FeaturedCard imgUrl={require('../../images/image1.jpg')} title="Product" />
                <FeaturedCard imgUrl={require('../../images/image2.jpg')} title="Product" />                 
                <FeaturedCard imgUrl={require('../../images/image1.jpg')} title="Product" />
                <FeaturedCard imgUrl={require('../../images/image2.jpg')} title="Product" />                 
                <FeaturedCard imgUrl={require('../../images/image1.jpg')} title="Product" />
                <FeaturedCard imgUrl={require('../../images/image2.jpg')} title="Product" />                 
                <FeaturedCard imgUrl={require('../../images/image1.jpg')} title="Product" />
                <FeaturedCard imgUrl={require('../../images/image2.jpg')} title="Product" />                 
                <FeaturedCard imgUrl={require('../../images/image1.jpg')} title="Product" />
                <FeaturedCard imgUrl={require('../../images/image2.jpg')} title="Product" />                 
                <FeaturedCard imgUrl={require('../../images/image1.jpg')} title="Product" />
                <FeaturedCard imgUrl={require('../../images/image2.jpg')} title="Product" />                 
                <FeaturedCard imgUrl={require('../../images/image1.jpg')} title="Product" />
                <FeaturedCard imgUrl={require('../../images/image2.jpg')} title="Product" />                 
                <FeaturedCard imgUrl={require('../../images/image1.jpg')} title="Product" />
                <FeaturedCard imgUrl={require('../../images/image2.jpg')} title="Product" />                 
                <FeaturedCard imgUrl={require('../../images/image1.jpg')} title="Product" />
                <FeaturedCard imgUrl={require('../../images/image2.jpg')} title="Product" />                 
                <FeaturedCard imgUrl={require('../../images/image1.jpg')} title="Product" />
                <FeaturedCard imgUrl={require('../../images/image2.jpg')} title="Product" />
            </ScrollView>
        </View>
    )
}

export default Featured;