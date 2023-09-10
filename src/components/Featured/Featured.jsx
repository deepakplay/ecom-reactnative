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
                <FeaturedCard imgUrl="https://us.123rf.com/450wm/denisined/denisined2307/denisined230700942/209224700-ripe-pear-with-drops-of-water-on-a-dark-background-toned.jpg?ver=6" title="Category" />
                <FeaturedCard imgUrl="https://us.123rf.com/450wm/denisined/denisined2307/denisined230700942/209224700-ripe-pear-with-drops-of-water-on-a-dark-background-toned.jpg?ver=6" title="Category" />
                <FeaturedCard imgUrl="https://us.123rf.com/450wm/denisined/denisined2307/denisined230700942/209224700-ripe-pear-with-drops-of-water-on-a-dark-background-toned.jpg?ver=6" title="Category" />
                <FeaturedCard imgUrl="https://us.123rf.com/450wm/denisined/denisined2307/denisined230700942/209224700-ripe-pear-with-drops-of-water-on-a-dark-background-toned.jpg?ver=6" title="Category" />
                <FeaturedCard imgUrl="https://us.123rf.com/450wm/denisined/denisined2307/denisined230700942/209224700-ripe-pear-with-drops-of-water-on-a-dark-background-toned.jpg?ver=6" title="Category" />
                <FeaturedCard imgUrl="https://us.123rf.com/450wm/denisined/denisined2307/denisined230700942/209224700-ripe-pear-with-drops-of-water-on-a-dark-background-toned.jpg?ver=6" title="Category" />
                <FeaturedCard imgUrl="https://us.123rf.com/450wm/denisined/denisined2307/denisined230700942/209224700-ripe-pear-with-drops-of-water-on-a-dark-background-toned.jpg?ver=6" title="Category" />
                <FeaturedCard imgUrl="https://us.123rf.com/450wm/denisined/denisined2307/denisined230700942/209224700-ripe-pear-with-drops-of-water-on-a-dark-background-toned.jpg?ver=6" title="Category" />
                <FeaturedCard imgUrl="https://us.123rf.com/450wm/denisined/denisined2307/denisined230700942/209224700-ripe-pear-with-drops-of-water-on-a-dark-background-toned.jpg?ver=6" title="Category" />
            </ScrollView>
        </View>
    )
}

export default Featured;