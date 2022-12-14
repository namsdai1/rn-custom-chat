import React, { memo } from "react";
import { FlatList, Dimensions, View } from "react-native";

import Emoji from "./Emoji";
import { emojisByCategory } from "../data/emoji/emoji";

const EmojiCategory = ({ category, setTextInput, removeText }) => {
  return (
    <View style={{ backgroundColor: "#FFF",flex:1 }}>
      <FlatList
        data={emojisByCategory[category]}
        renderItem={({ item }) => (
          <Emoji setTextInput={setTextInput} item={item} />
        )}
        keyExtractor={(item) => item}
        numColumns={8}
      />
    </View>
  );
};

export default memo(EmojiCategory);
