import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import { View } from "react-native";
import { Card, Text } from "react-native-paper";

export default function IngredientComponent(props: { ingredient: string }) {
    return (
        <View>
            <Card style={{marginBottom: 10, padding: 10, borderRadius: 10, backgroundColor: '#f5f5f5', borderColor: '#ddd', borderWidth: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5}}>
                <Card.Content>
                    <Text>{props.ingredient}</Text>
                </Card.Content>
            </Card>
        </View>
    )
}