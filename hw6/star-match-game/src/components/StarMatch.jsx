import React, { useState, useEffect } from "react";

const StarMatch = () => {
  const [stars, setStars] = useState(Math.floor(Math.random() * 9) + 1);  
  const [selectedNumbers, setSelectedNumbers] = useState([]); 
  const [timeRemaining, setTimeRemaining] = useState(30);  
  const [gameOver, setGameOver] = useState(false); 
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];  
  const selectNumber = (num) => {
    if (!selectedNumbers.includes(num) && !gameOver) {
      setSelectedNumbers([...selectedNumbers, num]);
    }
  };

  const isSumCorrect = selectedNumbers.reduce((acc, num) => acc + num, 0) === stars;
  useEffect(() => {
    if (timeRemaining === 0) {
      setGameOver(true);
    } else {
      const timer = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer); 
    }
  }, [timeRemaining]);

  const playAgain = () => {
    setStars(Math.floor(Math.random() * 9) + 1);
    setSelectedNumbers([]);
    setTimeRemaining(30);
    setGameOver(false);
  };

  return (
    <div>
      <h1>Welcome to Star Match!</h1>
      
      <div style={{ fontSize: "2rem" }}>
        {"⭐".repeat(stars)} {/* Показваме звездите */}
      </div>

      <div>
        <p>Pick 1 or more numbers that sum to the number of stars:</p>
        <div>
          {numbers.map((num) => (
            <button 
              key={num} 
              onClick={() => selectNumber(num)} 
              disabled={selectedNumbers.includes(num) || gameOver}
            >
              {num}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p>Time Remaining: {timeRemaining}s</p>
      </div>

      {gameOver && (
        <div style={{ color: "red", marginTop: "20px" }}>
          <p>Game Over</p>
          <button onClick={playAgain}>Play Again</button>
        </div>
      )}

      {isSumCorrect && !gameOver && (
        <div style={{ color: "green", marginTop: "20px" }}>
          <p>Congratulations! You matched the stars!</p>
        </div>
      )}
    </div>
  );
};

export default StarMatch;
