import React from "react";
import { Flex } from "@grammarly/design-system";
import { WelcomeScreen } from "./WelcomeScreen";
import { BoardScreen } from "../../src/pages/jeopardy/_components/BoardScreen";

/**
 * @typedef {'welcome' | 'board'} GameScreen
 */

export const Game = () => {
  /** @type {[GameScreen, React.Dispatch<React.SetStateAction<GameScreen>>]} */
  const [screen, setScreen] = React.useState("welcome");
  const [gameState, setGameState] = React.useState({
    name: "",
    score: 0,
  });

  return (
    <Flex gap={3} direction="column">
      {screen === "welcome" && (
        <WelcomeScreen
          onChange={name => {
            setGameState({
              ...gameState,
              name,
            });
            setScreen("board");
          }}
        />
      )}
      {screen === "board" && <BoardScreen />}
    </Flex>
  );
};
