import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
    return (
        <ScrollView
            horizontal
            contentContainerStyle={{
                paddingHorizontal: 16,
                paddingTop: 10,
                marginBottom: 10
            }}
        >
            <CategoryCard imgUrl="https://us.123rf.com/450wm/denisined/denisined2307/denisined230700942/209224700-ripe-pear-with-drops-of-water-on-a-dark-background-toned.jpg?ver=6" title="Category" />
            <CategoryCard imgUrl="https://thumbs.dreamstime.com/b/fresh-pears-dark-background-covered-water-droplets-arranged-naturally-creating-composition-graphic-features-277289886.jpg?w=500" title="Category" />
            <CategoryCard imgUrl="https://us.123rf.com/450wm/denisined/denisined2307/denisined230700942/209224700-ripe-pear-with-drops-of-water-on-a-dark-background-toned.jpg?ver=6" title="Category" />
            <CategoryCard imgUrl="https://thumbs.dreamstime.com/b/fresh-pears-dark-background-covered-water-droplets-arranged-naturally-creating-composition-graphic-features-277289886.jpg?w=500" title="Category" />
            <CategoryCard imgUrl="https://us.123rf.com/450wm/denisined/denisined2307/denisined230700942/209224700-ripe-pear-with-drops-of-water-on-a-dark-background-toned.jpg?ver=6" title="Category" />
            <CategoryCard imgUrl="https://thumbs.dreamstime.com/b/fresh-pears-dark-background-covered-water-droplets-arranged-naturally-creating-composition-graphic-features-277289886.jpg?w=500" title="Category" />
            <CategoryCard imgUrl="https://us.123rf.com/450wm/denisined/denisined2307/denisined230700942/209224700-ripe-pear-with-drops-of-water-on-a-dark-background-toned.jpg?ver=6" title="Category" />
            <CategoryCard imgUrl="https://thumbs.dreamstime.com/b/fresh-pears-dark-background-covered-water-droplets-arranged-naturally-creating-composition-graphic-features-277289886.jpg?w=500" title="Category" />
            <CategoryCard imgUrl="https://us.123rf.com/450wm/denisined/denisined2307/denisined230700942/209224700-ripe-pear-with-drops-of-water-on-a-dark-background-toned.jpg?ver=6" title="Category" />
            <CategoryCard imgUrl="https://thumbs.dreamstime.com/b/fresh-pears-dark-background-covered-water-droplets-arranged-naturally-creating-composition-graphic-features-277289886.jpg?w=500" title="Category" />
            <CategoryCard imgUrl="https://us.123rf.com/450wm/denisined/denisined2307/denisined230700942/209224700-ripe-pear-with-drops-of-water-on-a-dark-background-toned.jpg?ver=6" title="Category" />
            <CategoryCard imgUrl="https://thumbs.dreamstime.com/b/fresh-pears-dark-background-covered-water-droplets-arranged-naturally-creating-composition-graphic-features-277289886.jpg?w=500" title="Category" />
            <CategoryCard imgUrl="https://us.123rf.com/450wm/denisined/denisined2307/denisined230700942/209224700-ripe-pear-with-drops-of-water-on-a-dark-background-toned.jpg?ver=6" title="Category" />
            <CategoryCard imgUrl="https://thumbs.dreamstime.com/b/fresh-pears-dark-background-covered-water-droplets-arranged-naturally-creating-composition-graphic-features-277289886.jpg?w=500" title="Category" />
        </ScrollView>
    )
}

export default Categories;