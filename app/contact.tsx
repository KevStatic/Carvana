import { StyleSheet, Appearance, Platform, FlatList, View, Image, Text } from "react-native";

import { Colors } from '@/constants/Colors';
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import { CONTACT_ITEMS } from '@/constants/ContactItems';
import CONTACTIMAGES from '@/constants/ContactImages';

export default function ContactPage() {
    const colorScheme = Appearance.getColorScheme();
    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
    const styles = createStyles(theme, colorScheme);  
    const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView;
    const SeparatorComponent = () => <View style={styles.separator} />;
    
    return(
        <Container>
            <FlatList
                data={CONTACT_ITEMS}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.contentContainer}
                ItemSeparatorComponent={SeparatorComponent}
                renderItem={({ item }) => (
                    <View>
                        <View>
                            <Text>{item.title}</Text>
                            <Text>{item.description}</Text>
                        </View>
                        <Image
                            source={CONTACTIMAGES[Number(item.id) - 1]}
                        />
                    </View>
                )}
            />
        </Container>
    )
}

function createStyles(theme, colorScheme){
    return StyleSheet.create({
        contentContainer: {
            paddingTop: 10,
            paddingBottom: 20,
            paddingHorizontal: 12,
            backgroundColor: theme.blackground,
        },
        separator: {
            height: 1,
            backgroundColor: colorScheme === 'dark' ? 'papayawhip' : '#000',
            width: '50%',
            maxWidth: 300,
            marginHorizontal: 'auto',
            marginBottom: 10,
        }
    });
}