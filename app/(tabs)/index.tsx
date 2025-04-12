import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Link } from "expo-router";
import { Image, Text, View, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import DiagnosticsCard from "@/components/DiagonisticsCard";

export default function Index() {
  
  const router = useRouter();

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0 backdrop-blur-sm"/>

      <ScrollView 
        className="flex-1 px-2"
        showsVerticalScrollIndicator={true}
        contentContainerStyle={{
          paddingBottom: 10,
        }}
      >
        <View className="flex-row justify-between items-center mt-4">
          <Image source={icons.logonobg} className="w-20 h-14" />
          <Image source={icons.enter} className="w-10 h-10 mr-4" />
        </View>

        <View className="flex-1 rounded-3xl px-4 py-4">
          <SearchBar />
        </View>

        <View>
          <DiagnosticsCard 
            status="Critical" 
            mileage={12000} 
            suggestion="Regular maintenance required" 
          />
        </View>

      </ScrollView>

    </View>
  );
}
