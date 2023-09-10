import { useState } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import SafeAreaView from '../components/SafeAreaView/SafeAreaView';
import { ChevronDownIcon, UserIcon, AdjustmentsVerticalIcon, MagnifyingGlassIcon as SearchIcon } from 'react-native-heroicons/outline';
import Categories from '../components/Categories/Categories';
import Featured from '../components/Featured/Featured';

const Home = ({ navigation }) => {
    const [searchResturant, setSearchResturant] = useState('');

    return (
        <SafeAreaView className="flex-1 bg-white">
            {/* Header */}
            <View className="py-2 px-4 flex-row gap-x-2 items-center">
                <View>
                    <Image
                        source={require('../images/image0.png')}
                        className="bg-gray-200 w-10 h-10 rounded-full"
                    />
                </View>
                <View className="flex-1">
                    <Text className="text-gray-400 text-sm font-bold tracking-wider">
                        Deliver Now!
                    </Text>
                    <View className="flex-row items-center gap-x-1">
                        <Text className="font-bold text-xl">Current Location</Text>

                        <ChevronDownIcon size={20} color="#00CCBB" />
                    </View>
                </View>
                <View>
                    <UserIcon size={35} color="#00CCBB" />
                </View>
            </View>

            { /* Search */}
            <View className="py-2 px-4 flex-row gap-x-2 items-center">
                <View className="flex-1 bg-gray-100 flex-row rounded-md px-2">
                    <View className="py-3 px-2">
                        <SearchIcon size={20} color="#999" />
                    </View>
                    <TextInput
                        placeholder='Search for Restaurants'
                        value={searchResturant}
                        onChangeText={setSearchResturant}
                        className="flex-1"
                    />
                </View>
                <View>
                    <AdjustmentsVerticalIcon size={30} color="#00CCBB" />
                </View>
            </View>


            <ScrollView className="flex-1" contentContainerStyle={{
                paddingBottom: 100,
            }}>
                { /* Categories */}
                <Categories />

                { /* Offers near you */}
                <View>
                    <Featured
                        title="Offers near you"
                        description="Top local restaurants fruits"
                        categories={[]}
                    />
                </View>

                { /* Features components */}
                <View>
                    <Featured
                        title="Featured"
                        description="Top selling fruits"
                        categories={[]}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
export default Home;
