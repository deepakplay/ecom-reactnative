import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
    return (
        <ScrollView
            horizontal
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10
            }}
        >
            <CategoryCard imgUrl="https://thumbs.dreamstime.com/b/fresh-pears-dark-background-covered-water-droplets-arranged-naturally-creating-composition-graphic-features-277289886.jpg?w=500" title="Testing" />
            <CategoryCard imgUrl="https://thumbs.dreamstime.com/b/fresh-pears-dark-background-covered-water-droplets-arranged-naturally-creating-composition-graphic-features-277289886.jpg?w=500" title="Testing" />
            <CategoryCard imgUrl="https://thumbs.dreamstime.com/b/fresh-pears-dark-background-covered-water-droplets-arranged-naturally-creating-composition-graphic-features-277289886.jpg?w=500" title="Testing" />
            <CategoryCard imgUrl="https://thumbs.dreamstime.com/b/fresh-pears-dark-background-covered-water-droplets-arranged-naturally-creating-composition-graphic-features-277289886.jpg?w=500" title="Testing" />
            <CategoryCard imgUrl="https://thumbs.dreamstime.com/b/fresh-pears-dark-background-covered-water-droplets-arranged-naturally-creating-composition-graphic-features-277289886.jpg?w=500" title="Testing" />
            <CategoryCard imgUrl="https://thumbs.dreamstime.com/b/fresh-pears-dark-background-covered-water-droplets-arranged-naturally-creating-composition-graphic-features-277289886.jpg?w=500" title="Testing" />
            <CategoryCard imgUrl="https://thumbs.dreamstime.com/b/fresh-pears-dark-background-covered-water-droplets-arranged-naturally-creating-composition-graphic-features-277289886.jpg?w=500" title="Testing" />
            <CategoryCard imgUrl="https://thumbs.dreamstime.com/b/fresh-pears-dark-background-covered-water-droplets-arranged-naturally-creating-composition-graphic-features-277289886.jpg?w=500" title="Testing" />
            <CategoryCard imgUrl="https://thumbs.dreamstime.com/b/fresh-pears-dark-background-covered-water-droplets-arranged-naturally-creating-composition-graphic-features-277289886.jpg?w=500" title="Testing" />
            <CategoryCard imgUrl="https://thumbs.dreamstime.com/b/fresh-pears-dark-background-covered-water-droplets-arranged-naturally-creating-composition-graphic-features-277289886.jpg?w=500" title="Testing" />
            <CategoryCard imgUrl="https://thumbs.dreamstime.com/b/fresh-pears-dark-background-covered-water-droplets-arranged-naturally-creating-composition-graphic-features-277289886.jpg?w=500" title="Testing" />
            

        </ScrollView>
    )
}

export default Categories;