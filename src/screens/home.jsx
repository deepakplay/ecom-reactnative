
import { Text, TouchableOpacity, View } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View className="flex-1 items-center justify-center bg-slate-800">
            <TouchableOpacity onPress={() => navigation.push('Test')}>
                <Text className="text-white text-base">
                    Try editing me! 🎉
                </Text>
            </TouchableOpacity>
            
        </View>
    );
}

export default Home;
