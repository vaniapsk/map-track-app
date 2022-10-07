import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const TrackListScreen = ({ navigation }) => {
    return <View>
        <Text style={style.text}>Track List Screen</Text>
        <Button title="Go to main track detail" onPress={() => navigation.navigate("TrackDetail")} />

    </View>;
};

const style = StyleSheet.create({
    text: {
        fontSize: 25
    }
});

export default TrackListScreen;