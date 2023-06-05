import React from "react";
import { View, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import params from "../Params";
import Mine from "./Mine";
import Flag from "./Flag";

export default (p) => {
  const { mined, opened, nearMines, exploded, flagged } = p;
  const styleField = [styles.field];

  if (opened) styleField.push(styles.opened);
  if (exploded) styleField.push(styles.exploded);
  if (styleField.length === 1) styleField.push(styles.regular);

  let color = null;
  if (nearMines > 0) {
    if (nearMines === 1) color = "#7FFF78";
    if (nearMines === 2) color = "#75E6FF";
    if (nearMines > 2 && nearMines < 6) color = "#E8CC68";
    if (nearMines >= 6) color = "#FF937F";
    if (flagged) styleField.push(styles.regular);
    if (styleField.length === 1) styleField.push(styles.regular);
  }

  return (
    <TouchableWithoutFeedback onPress={p.onOpen} onLongPress={p.onSelect}>
      <View style={styleField}>
        {!mined && opened && nearMines > 0 ? (
          <Text style={[styles.label, { color: color }]}>{nearMines}</Text>
        ) : (
          false
        )}
        {mined && opened ? <Mine /> : false}
        {flagged && !opened ? <Flag /> : false}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  field: {
    height: params.blockSize,
    width: params.blockSize,
    borderWidth: params.borderSize,
  },
  regular: {
    backgroundColor: "#999",
    borderLeftColor: "#ccc",
    borderTopColor: "#ccc",
    borderRightColor: "#333",
    borderBottomColor: "#333",
  },
  opened: {
    backgroundColor: "#999",
    borderColor: "#777",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    marginLeft: 3,
    fontWeight: "bold",
    fontSize: params.fontSize,
  },
  exploded: {
    backgroundColor: "#7A1631",
    borderColor: "#3F0B1B",
  },
});
