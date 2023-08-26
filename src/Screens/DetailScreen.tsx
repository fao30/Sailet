import React, { useState, useEffect } from "react";
import {
  TextInput,
  View,
  SafeAreaView,
} from "react-native";
import uuid from "react-native-uuid";

import { home } from "../Styles/Home";
import { addNotes, deleteNote, editNotes } from "../api/Routes/notes.api";
import { ButtonComponent } from "../Components/ButtonComponent";
import { TextInputComponent } from "../Components/TextInputComponent";

export const DetailScreen = ({ navigation, route }) => {
  const params = route?.params;
  const [dataShow, setDataShow] = useState({
    id: "",
    title: "",
    text: "",
  });

  const postData = async (body: TNotes) => {
    try {
      const response = await addNotes(body);
      if (response.length) {
        navigation.navigate("Main", {
          newNote: response,
        });
      }
    } catch (e) {
      // error reading value
    }
  };

  const editData = async (body: TNotes) => {
    try {
      const response = await editNotes(body);
      if (response.length) {
        navigation.navigate("Main", {
          newNote: response,
        });
      }
    } catch (e) {
      // error reading value
    }
  };

  const deleteNotes = async ({ id }: Tid) => {
    try {
      const response = await deleteNote({ id });
      if (response.length) {
        navigation.navigate("Main", {
          newNote: response,
        });
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    if (params) {
      const { id, title, text } = params;
      setDataShow({
        id,
        title,
        text,
      });
    }
  }, []);

  function onChangeFunction(value: string, name: string) {
    setDataShow({ ...dataShow, [name]: value });
  }

  const dataId = dataShow?.id

  return (
    <SafeAreaView style={home.container}>
      <View style={home.paddingText}>
        <TextInputComponent
          value={dataShow.title}
          placeholder="Загаловка"
          onChange={(e: string) => onChangeFunction(e, 'title')}
        />
      </View>
      <View style={home.paddingText}>
        <TextInputComponent
          value={dataShow.text}
          placeholder="Текст"
          onChange={(e: string) => onChangeFunction(e, 'text')
          }
        />
      </View>
      <View style={home.paddingText}>
        <View style={home.buttonAddEditLocation}>
          {dataId ? (
            <ButtonComponent
              text="Удалить"
              isDelete
              onPress={() => {
                if (dataId) {
                  deleteNotes({
                    id: dataId,
                  });
                }
              }}
            />
          ) : null}
          <ButtonComponent
            text={dataId ? "Редактировать" : "Добавить"}
            onPress={() => {
              const dataSend = {
                id: dataId || uuid.v4(),
                text: dataShow.text,
                title: dataShow.title,
              }
              if (dataId) {
                editData(dataSend);
              } else {
                postData(dataSend);
              }
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
