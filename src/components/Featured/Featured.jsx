import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/solid';
import FeaturedCard from './FeaturedCard';

const Featured = ({
    title,
    description,
    categories
}) => {

    return (
        <View className="mb-2">
            <View className="px-4">
                <View className="flex-1 flex-row items-center justify-between">
                    <Text className="font-bold text-lg tracking-wider">{title}</Text>
                    <View>
                        <ArrowRightIcon size={20} color="#00CCBB" />
                    </View>
                </View>
                <Text className="text-gray-500 text-xs">{description}</Text>
            </View>
            <ScrollView
                horizontal
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingTop: 10
                }}
                showsHorizontalScrollIndicator={false}
            >
                <FeaturedCard
                    imgUrl={require('../../images/image1.jpg')}
                    title="Product"
                    rating={4.5}
                    genre="Japanese"
                    address="123 Main st"
                    shortDescription="This is a Test Description"
                    dishes={[]}
                    lat={20}
                    lng={15}
                />
                
                <FeaturedCard
                    imgUrl={require('../../images/image2.jpg')}
                    title="Product"
                    rating={4.5}
                    genre="Japanese"
                    address="123 Main st"
                    shortDescription="This is a Test Description"
                    dishes={[]}
                    lat={20}
                    lng={15}
                />

                <FeaturedCard
                    imgUrl={require('../../images/image1.jpg')}
                    title="Product"
                    rating={4.5}
                    genre="Japanese"
                    address="123 Main st"
                    shortDescription="This is a Test Description"
                    dishes={[]}
                    lat={20}
                    lng={15}
                />

                <FeaturedCard
                    imgUrl={require('../../images/image2.jpg')}
                    title="Product"
                    rating={4.5}
                    genre="Japanese"
                    address="123 Main st"
                    shortDescription="This is a Test Description"
                    dishes={[]}
                    lat={20}
                    lng={15}
                />
            </ScrollView>
        </View>
    )
}

export default Featured;