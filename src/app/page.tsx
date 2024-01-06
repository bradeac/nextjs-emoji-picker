"use client";

import { useState } from "react";

export default function Home() {
  const emojis = [
    {
      id: 0,
      text: "🥹",
    },
    {
      id: 1,
      text: "😂",
    },
    {
      id: 2,
      text: "💚",
    },
  ];

  const handleClick = (e: any) => {
    console.log("e", e.timeStamp);
    if (e.timeStamp > 5000) return alert("Too slow !");

    if (e.target?.innerText === randomEmoji.text) {
      return alert("You won !");
    }

    alert("You lost !");
  };

  const handleReset = () => {
    window.location.reload();
  };

  const getRandomEmoji = () => {
    return emojis[Math.floor(Math.random() * emojis.length)];
  };

  const randomEmoji = getRandomEmoji();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <p style={{ fontSize: "48px", marginBottom: "36px" }}>
        {randomEmoji.text}
      </p>
      <p style={{ fontSize: "24px", textAlign: "center" }}>
        Select the emoji above in under 5 seconds:
      </p>
      <ul className="flex gap-10" style={{ marginBottom: "36px" }}>
        {emojis.map((emoji) => (
          <li
            key={emoji.id}
            onClick={handleClick}
            style={{ cursor: "pointer", fontSize: "36px" }}
          >
            {emoji.text}
          </li>
        ))}
      </ul>
      <p style={{ cursor: "pointer", fontSize: "24px" }} onClick={handleReset}>
        RESET
      </p>
    </main>
  );
}
