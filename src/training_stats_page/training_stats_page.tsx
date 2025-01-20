import TrainingStats from "@/components/training_stats/training_stats";
import React from "react";

const popularGames = [
  { name: "Popular Game 1", score: 95 },
  { name: "Popular Game 2", score: 90 },
  { name: "Popular Game 3", score: 85 },
  { name: "Popular Game 4", score: 80 },
];

const unpopularGames = [
  { name: "Unpopular Game 1", score: 40 },
  { name: "Unpopular Game 2", score: 35 },
  { name: "Unpopular Game 3", score: 30 },
  { name: "Unpopular Game 4", score: 25 },
];

export default function TrainingStatsPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        width: "100%",
        height: "100%",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      {/* 왼쪽: TrainingStats 호출 */}
      <div style={{ flex: 1, marginRight: "20px" }}>
        <TrainingStats />
      </div>

      {/* 오른쪽: 카드 레이아웃 */}
      <div style={{ flex: 1 }}>
        {/* 인기 있는 게임 */}
        <h3>Popular Games</h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
          {popularGames.map((game, index) => (
            <div
              key={index}
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                backgroundColor: "#f9f9f9",
                textAlign: "center",
              }}
            >
              <h4 style={{ margin: "10px 0" }}>{game.name}</h4>
              <p>Score: {game.score}</p>
            </div>
          ))}
        </div>

        {/* 비인기 게임 */}
        <h3 style={{ marginTop: "20px" }}>Unpopular Games</h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
          {unpopularGames.map((game, index) => (
            <div
              key={index}
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                backgroundColor: "#f9f9f9",
                textAlign: "center",
              }}
            >
              <h4 style={{ margin: "10px 0" }}>{game.name}</h4>
              <p>Score: {game.score}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
