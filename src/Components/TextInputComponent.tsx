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

export const TextInputComponent = ({ placeholder, value, onChange }: TComponentInput) => {
    /**
     * этот компонент не очень важно так как используется только на 2х 
     * компонентах и разницы почти нет между ними в фунционалах и внешности
     */

    return (
        <TextInput
            style={home.searchInput}
            placeholder={placeholder}
            value={value}
            onChangeText={(e) => {
                onChange(e);
            }}
        />
    );
};
