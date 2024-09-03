import React from "react";

const StarBackground = () => {
  const numStars = 60;

  const stars = Array.from({ length: numStars }).map((_, index) => {
    const size = Math.random() * 2 + 1;
    const left = Math.random() * 100; // horizontal
    const top = Math.random() * 100; // vert
    const opacity = Math.random() * 0.6 + 0.2;
    const duration = Math.random() * 2 + 0.5;

    return (
      <div
        key={index}
        className="star"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${left}%`,
          top: `${top}%`,
          backgroundColor: `rgba(255, 255, 255, ${opacity})`,
          animationDuration: `${duration}s`,
        }}
      />
    );
  });

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {stars}
    </div>
  );
};

export default StarBackground;
