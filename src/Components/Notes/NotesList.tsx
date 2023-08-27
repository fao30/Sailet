import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  SafeAreaView,
  FlatList,
} from "react-native";
import { home } from "../../Styles/Home";
import { hideIcon, expandIcon } from "../Icons/HideExpand";
import { SvgXml } from "react-native-svg";
import { getNotes } from "../../api/Routes/notes.api";
import { useRoute, RouteProp } from "@react-navigation/native";
import { ButtonComponent } from "../ButtonComponent";

type RootStackParamList = {
  Main: { newNote?: string };
};

export const NotesList = ({ navigation }) => {
  const [notesList, setNotesList] = React.useState([]);
  const route = useRoute<RouteProp<RootStackParamList, 'Main'>>(); // Use RouteProp


  const getData = async () => {
    try {
      // await AsyncStorage.removeItem("notes");
      const value = await getNotes();
      if (value.length) {
        setNotesList(JSON.parse(value));
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getData();
    if (route.params?.newNote) {
      setNotesList(JSON.parse(route.params?.newNote));
    }
  }, [route.params?.newNote]);

  const Item = React.useCallback(({ id, title, text }) => {
    const [isExpand, setIsexpand] = useState(false);

    return (
      <TouchableOpacity
        style={home.noteItem}
        key={id}
        onPress={() => {
          setIsexpand(isExpand ? false : true);
        }}
      >
        <View style={home.row}>
          <Text style={home.noteInfo}>{title}</Text>
          <View>
            <SvgXml xml={isExpand ? expandIcon : hideIcon} />
          </View>
        </View>
        {isExpand && (
          <View>
            <Text style={home.noteInfo}>Text: {text}</Text>
            <View style={home.bottomButtons}>
              <ButtonComponent
                text="Подробнее"
                onPress={() => {
                  navigation.navigate("Clinic", {
                    id,
                    title,
                    text,
                  });
                }}
              />
            </View>
          </View>
        )}
      </TouchableOpacity>
    );
  },
    [] // No dependencies since the component doesn't rely on external variables
  );

  return (
    <SafeAreaView style={home.container}>
      <FlatList
        data={notesList}
        renderItem={({ item }) => (
          <Item id={item.id} title={item.title} text={item.text} />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};
