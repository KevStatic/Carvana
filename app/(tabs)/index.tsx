import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Link } from "expo-router";
import { Image, Text, View, ScrollView } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  
  // const router = useRouter();

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0 backdrop-blur-sm"/>

      <ScrollView 
        className="flex-1 px-5"
        showsVerticalScrollIndicator={true}
        contentContainerStyle={{
          minHeight: '100%',
          paddingBottom: 10,
        }}
      >
        <Image source={icons.logonobg} className="w-32 h-20 mt-12 mb-5 mx-auto" />

        <View className="flex-1 mt-5">
          <SearchBar />
        </View>

      </ScrollView>

    </View>
  );
}
