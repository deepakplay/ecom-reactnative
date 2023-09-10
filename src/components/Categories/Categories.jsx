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
            <CategoryCard imgUrl={require('../../images/image1.jpg')} title="Category" />
            <CategoryCard imgUrl={require('../../images/image2.jpg')} title="Category" />
            <CategoryCard imgUrl={require('../../images/image1.jpg')} title="Category" />
            <CategoryCard imgUrl={require('../../images/image2.jpg')} title="Category" />
            <CategoryCard imgUrl={require('../../images/image1.jpg')} title="Category" />
            <CategoryCard imgUrl={require('../../images/image2.jpg')} title="Category" />
            <CategoryCard imgUrl={require('../../images/image1.jpg')} title="Category" />
            <CategoryCard imgUrl={require('../../images/image2.jpg')} title="Category" />
            <CategoryCard imgUrl={require('../../images/image1.jpg')} title="Category" />
            <CategoryCard imgUrl={require('../../images/image2.jpg')} title="Category" />
            <CategoryCard imgUrl={require('../../images/image1.jpg')} title="Category" />
            <CategoryCard imgUrl={require('../../images/image2.jpg')} title="Category" />
            <CategoryCard imgUrl={require('../../images/image1.jpg')} title="Category" />
            <CategoryCard imgUrl={require('../../images/image2.jpg')} title="Category" />
            <CategoryCard imgUrl={require('../../images/image1.jpg')} title="Category" />
            <CategoryCard imgUrl={require('../../images/image2.jpg')} title="Category" />
            
        </ScrollView>
    )
}

export default Categories;