import AsyncStorage from "@react-native-async-storage/async-storage";

export const getNotes = async () => {
  return await AsyncStorage.getItem("notes");
};

export const addNotes = async (body: TNotes) => {
  const value = await AsyncStorage.getItem("notes");
  console.log(body, "<<<---body");

  if (body) {
    const parseValue = await JSON.parse(value);
    parseValue.push(body);

    const jsonValue = JSON.stringify(parseValue === null ? [body] : parseValue);
    await AsyncStorage.setItem("notes", jsonValue);

    return jsonValue;
  }
  return null;
};

export const editNotes = async (body: TNotes) => {
  const value = await AsyncStorage.getItem("notes");
  if (value && body) {
    const parseValue = await JSON.parse(value);
    const getTargetData = parseValue.map((e: TNotes) => {
      if (e.id === body.id) {
        return {
          id: e.id,
          title: body?.title,
          text: body?.text,
        };
      }
      return e;
    });

    const jsonValue = JSON.stringify(getTargetData);
    await AsyncStorage.setItem("notes", jsonValue);
    return jsonValue;
  }
  return null;
};

export const deleteNote = async ({ id }: Tid) => {
  const value = await AsyncStorage.getItem("notes");
  if (value && id) {
    const parseValue = await JSON.parse(value);

    const getTargetData: TNotes[] = [];
    parseValue.forEach((e: TNotes) => {
      if (e.id !== id) {
        getTargetData.push(e);
      }
    });
    const jsonValue = JSON.stringify(getTargetData);
    await AsyncStorage.setItem("notes", jsonValue);
    return jsonValue;
  }
  return null;
};
