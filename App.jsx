/**
 * Comando para executar o projeto:
 * npx expo start --clear
 * */
import React, { Component } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import params from "./src/Params";
import MineField from "./src/components/MineField";
import Header from "./src/components/Header";
import LevelSelection from "./src/screens/LevelSelection";
import {
  createMinedBoard,
  cloneBoard,
  openField,
  wonGame,
  showMines,
  hadExplosion,
  invertFlag,
} from "./src/components/Functions";

export default class App extends Component {
  container = " flex justify-center items-center bg-slate-800";

  constructor(props) {
    super(props);
    this.state = this.createState();
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return Math.ceil(cols * rows * params.difficultLevel);
  };

  createState = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return {
      board: createMinedBoard(rows, cols, this.minesAmount()),
      won: false,
      lost: false,
      showLevelSelection: false,
    };
  };

  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board);
    openField(board, row, column);
    const lost = hadExplosion(board);
    const won = wonGame(board);
    if (lost) {
      showMines(board);
      Alert.alert("Perdeu!", "Que pena, você perdeu!");
    }
    if (won) Alert.alert("Meus parabéns!", "Você ganhou!");

    this.setState({ board, lost, won });
  };

  onSelectField = (row, column) => {
    const board = cloneBoard(this.state.board);
    invertFlag(board, row, column);
  };

  onLevelSelected = (level) => {
    params.difficultLevel = level;
    this.setState(this.createState());
  };

  showLevelSelection = () => {
    this.setState({ showLevelSelection: true });
  };

  render() {
    return (
      <View className="flex-1 items-center justify-center bg-cyan-700">
        {this.state.showLevelSelection && (
          <LevelSelection
            isVisible={this.state.showLevelSelection}
            onLevelSelected={this.onLevelSelected}
            onCancel={() => this.setState({ showLevelSelection: false })}
          />
        )}

        <Header
          onNewGame={() => this.setState(this.createState())}
          onMinesPress={() => this.setState({ showLevelSelection: true })}
        />

        <View style={styles.board} className="mb-2">
          <MineField board={this.state.board} onOpenField={this.onOpenField} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  board: {
    alignItems: "center",
    backgroundColor: "#AAA",
  },
});

{
  /*
<Text className="text-white text-sm">
   {" "}
   Tamanho da Grade: {params.getColumnsAmount()} x{" "}
   {params.getRowsAmount()}
 </Text>
*/
}

{
  /**
   import Field from "./src/components/Field";
   
<Field />
<Field opened />
<Field opened nearMines={1} />
<Field opened nearMines={2} />
<Field opened nearMines={3} />
<Field opened nearMines={4} />
<Field opened nearMines={5} />
<Field opened nearMines={6} />
<Field mined />
<Field mined opened />
<Field mined opened exploded />
<Field flagged />
<Field flagged opened/>
*/
}
