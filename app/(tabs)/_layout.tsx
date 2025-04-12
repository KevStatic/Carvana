import { View, Text, ImageBackground, Image } from 'react-native';
import { Tabs } from 'expo-router';
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";

const TabIcon = ({ focused, icon, title }: any) => {
    if (focused) {
        return (
            <ImageBackground
                source={images.highlight}
                className='flex flex-row w-full flex-1 min-w-[94px] min-h-14 mt-4 mb-1 justify-center items-center rounded-full     overflow-hidden'
            >
                <Image source={icon} tintColor="#151312" className="size-5" />
                <Text className="text-secondary text-base font-semibold ml-2">{title}</Text>
            </ImageBackground>
        )
    }

    return (
        <View className='size-full justify-center items-center mt-4 rounded-full'>
            <Image source={icon} className='size-5' tintColor={'#A8B5DB'} />
        </View>
    )
}

const _layout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarItemStyle: {
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                tabBarStyle: {
                    backgroundColor: '#0f0a23',
                    borderRadius: 50,
                    marginHorizontal: 16,
                    marginBottom: 36,
                    height: 48,
                    position: 'absolute',
                    overflow: 'hidden',
                    borderWidth: 1,
                    borderColor: '#d67609',
                }
            }}
        
        >

            {/* Home */}
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.home}
                            title="Home"
                        />
                    )
                }}
            />

            {/* Scan */}
            <Tabs.Screen
                name="scan"
                options={{
                    title: 'Scan',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.scan}
                            title="Scan"
                        />
                    )
                }}
            />
            
            {/* History */}
            <Tabs.Screen
                name="history"
                options={{
                    title: 'History',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.history}
                            title="History"
                        />
                    )
                }}
            />

            {/* Profile */}
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.profile}
                            title="Profile"
                        />
                    )
                }}
            />

        </Tabs>
    )
}

export default _layout;