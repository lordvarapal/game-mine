import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default (p) => {
  return (
    <View style={styles.container}>
      <View className="start-1 w-48">
        <TouchableOpacity onPress={p.onShowLevelSelection}>
          <Text className="text-white text-sm p-1 p"> MINES</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          className="bg-white rounded-lg "
          onPress={p.onNewGame}
        >
          <Text className="text-cyan-700 text-sm p-1 font-semibold">
            NOVO JOGO
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 20,
    paddingHorizontal: 20,
  },
});
