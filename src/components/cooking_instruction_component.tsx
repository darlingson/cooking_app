import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import { View } from "react-native";
import { Card, Text } from "react-native-paper";

export default function CookingInstructionComponent(props: { instruction: string }) {
    return (
        <View>
            <Card>
                <Card.Content>
                    <Text>{props.instruction}</Text>
                </Card.Content>
            </Card>
        </View>
    )
}