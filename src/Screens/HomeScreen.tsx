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
import { NotesList } from "../Components/Notes/NotesList";
import { Iconsnav } from "../Components/Icons/IconsNav";
import { ButtonComponent } from "../Components/ButtonComponent";
import { TextInputComponent } from "../Components/TextInputComponent";

export const HomeScreen = ({ navigation }) => {
  const [name, setName] = React.useState("");

  return (
    <SafeAreaView style={home.container}>
      <ScrollView
        stickyHeaderIndices={[1]}
        style={home.scrollStyle}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={home.top}>
          <Text style={home.hello}>Здравствуйте, имя</Text>
          {name ? <Text style={home.name}>{name}</Text> : ""}
          <Iconsnav navigation={navigation} />
        </View>

        <View style={home.searchBar}>
          <TextInputComponent
            onChange={(e) => console.log(e)}
            placeholder="Поиск заметок" />
        </View>

        <View style={home.feed}>
          <Text style={home.feedTitle}>Cипсок заметок</Text>
          <ButtonComponent
            onPress={() => {
              navigation.navigate("Clinic");
            }}
            text="Добавить заметку" />
        </View>
        <NotesList navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};
