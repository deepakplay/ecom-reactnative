
import { Text, TouchableOpacity, View } from 'react-native';
import SafeAreaView from '../components/SafeAreaView/SafeAreaView';

const Home = ({ navigation }) => {
    return (
        <SafeAreaView className="flex-1 items-center justify-center bg-slate-800">
            <Text className="text-white">Test123</Text>
            <TouchableOpacity onPress={() => navigation.push('Test')}>
                <Text className="text-white text-base">
                    Try editing me! 🎉
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default Home;
