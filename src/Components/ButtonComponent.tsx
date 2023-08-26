import React, { useState, useEffect } from "react";
import {
    TextInput,
    TouchableOpacity,
    Text,
    View,
    SafeAreaView,
    ScrollView,
} from "react-native";
import { home } from "../Styles/Home";

export const ButtonComponent = ({ text, onPress, isDelete = false }: TComponentButton) => {
    return (
        <TouchableOpacity
            onPress={() => onPress()}
        >
            <View style={{ ...home.addEditButton, backgroundColor: isDelete ? "red" : "#3989FA" }}>
                <Text style={home.cancelButtonTitle}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
};
