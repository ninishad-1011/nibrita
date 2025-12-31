"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [popupVisible, setPopupVisible] = useState(false);
  const [confettiList, setConfettiList] = useState([]);
  const [sparkleList, setSparkleList] = useState([]);
  const [fireworkList, setFireworkList] = useState([]);
  const [floatingImages, setFloatingImages] = useState([]);

  const galleryImages = [
    "/WhatsApp Image 2025-12-31 at 9.05.30 PM.jpeg",
    "/WhatsApp Image 2025-12-31 at 9.36.16 PM.jpeg",
    "/WhatsApp Image 2025-12-31 at 9.05.33 PM (1).jpeg",
    "/WhatsApp Image 2025-12-31 at 9.05.34 PM (1).jpeg",
    "/WhatsApp Image 2025-12-31 at 9.36.15 PM.jpeg",
  ];

  const showMessage = () => setPopupVisible(true);
  const closePopup = () => setPopupVisible(false);

  // Confetti
  useEffect(() => {
    const interval = setInterval(() => {
      setConfettiList((prev) => [
        ...prev,
        {
          id: Math.random().toString(36).substr(2, 9),
          left: Math.random() * 100,
          color: `hsl(${Math.random() * 360}, 100%, 60%)`,
          size: Math.random() * 6 + 2,
          duration: 2 + Math.random() * 3,
        },
      ]);
      setTimeout(() => setConfettiList((prev) => prev.slice(1)), 5000);
    }, 150);
    return () => clearInterval(interval);
  }, []);

  // Sparkles
  useEffect(() => {
    const interval = setInterval(() => {
      setSparkleList((prev) => [
        ...prev,
        {
          id: Math.random().toString(36).substr(2, 9),
          left: Math.random() * 100,
          top: Math.random() * 50,
          size: Math.random() * 6 + 2,
          duration: 1 + Math.random() * 2,
        },
      ]);
      setTimeout(() => setSparkleList((prev) => prev.slice(1)), 3000);
    }, 200);
    return () => clearInterval(interval);
  }, []);

  // Fireworks
  useEffect(() => {
    const interval = setInterval(() => {
      setFireworkList((prev) => [
        ...prev,
        {
          id: Math.random().toString(36).substr(2, 9),
          left: Math.random() * 80 + 10,
          top: Math.random() * 50 + 10,
          color: `hsl(${Math.random() * 360}, 100%, 60%)`,
        },
      ]);
      setTimeout(() => setFireworkList((prev) => prev.slice(1)), 1500);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  // Floating images
  useEffect(() => {
    const interval = setInterval(() => {
      setFloatingImages((prev) => [
        ...prev,
        {
          id: Math.random().toString(36).substr(2, 9),
          src: galleryImages[Math.floor(Math.random() * galleryImages.length)],
          left: Math.random() * 80 + 10,
          size: 80 + Math.random() * 40,
          duration: 6 + Math.random() * 4,
        },
      ]);
      setTimeout(() => setFloatingImages((prev) => prev.slice(1)), 10000);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gradient-to-br from-pink-200 via-pink-300 to-pink-400 overflow-hidden px-2">
      {/* Confetti */}
      {confettiList.map((c) => (
        <div
          key={c.id}
          className="absolute rounded-full"
          style={{
            left: `${c.left}vw`,
            width: `${c.size}px`,
            height: `${c.size}px`,
            backgroundColor: c.color,
            top: "-10px",
            animation: `confettiFall ${c.duration}s linear forwards`,
            zIndex: 5,
          }}
        />
      ))}

      {/* Sparkles */}
      {sparkleList.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full"
          style={{
            left: `${s.left}vw`,
            top: `${s.top}vh`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            backgroundColor: "white",
            boxShadow: "0 0 8px white, 0 0 15px pink",
            animation: `sparkle ${s.duration}s infinite alternate`,
            zIndex: 5,
          }}
        />
      ))}

      {/* Fireworks */}
      {fireworkList.map((f) => (
        <div
          key={f.id}
          className="absolute rounded-full"
          style={{
            left: `${f.left}vw`,
            top: `${f.top}vh`,
            width: "8px",
            height: "8px",
            backgroundColor: f.color,
            animation: `firework 1.5s ease-out forwards`,
            zIndex: 5,
          }}
        />
      ))}

      {/* Floating gallery images */}
      {floatingImages.map((img) => (
        <img
          key={img.id}
          src={img.src}
          className="absolute rounded-lg shadow-lg"
          style={{
            left: `${img.left}vw`,
            width: `${img.size}px`,
            bottom: "-100px",
            animation: `flyUp ${img.duration}s linear forwards`,
            zIndex: 20, // <-- card-er upor
          }}
        />
      ))}

      {/* Glass Card */}
      <div className="relative z-10 text-center p-8 sm:p-12 rounded-3xl bg-pink-100/25 backdrop-blur-lg shadow-[0_0_60px_rgba(227,129,180,0.7),0_0_30px_rgba(255,200,230,0.5)] animate-[float_4s_ease-in-out_infinite] max-w-lg w-full sm:w-11/12">
        <h2 className="text-[50px]">🎆</h2>
        <h1 className="text-3xl sm:text-4xl font-bold text-pink-600 text-shadow animate-glow mb-2">
          {" "}
          Happy New Year{" "}
        </h1>

        <div className="text-3xl text-pink-600 font-bold text-shadow animate-neon mb-4">
          💖 2026 💖
        </div>
        <img
          src="/WhatsApp Image 2025-12-31 at 9.05.31 PM.jpeg"
          alt="Happy New Year"
          className="mx-auto w-32 sm:w-40 h-32 sm:h-40 mb-4 rounded-full shadow-lg object-cover"
        />
        <h2 className="font-bold text-xl sm:text-2xl text-pink-600 mb-2">
          💖 NAZMUN NAHAR 💖
        </h2>
        <p className="mt-2 font-medium text-pink-700 text-shadow">
          May your life be full of love & happiness ✨
        </p>
        <div className="text-5xl mt-5 animate-beat text-pink-600 text-shadow">
          💗
        </div>
        <button
          onClick={showMessage}
          className="mt-5 px-6 sm:px-8 py-2 sm:py-3 rounded-full bg-gradient-to-br from-pink-500 to-pink-400 text-white text-lg shadow-lg animate-[buttonGlow_1.5s_infinite_alternate] hover:scale-110 transition-transform"
        >
          Click Here 💫
        </button>
      </div>

      {/* Popup */}
      {popupVisible && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center p-5 z-20">
          <div className="bg-white text-center p-6 sm:p-8 rounded-2xl max-w-sm w-full animate-[zoom_0.5s_ease]">
            <h2 className="text-2xl sm:text-3xl text-pink-600 text-shadow mb-4">
              💖 My Special Message 💖
            </h2>
            <p className="text-pink-500">
              This new year I just want to say…
              <br />
              You mean everything to me 🥰
              <br />
              Your smile lights up my world 🌸
              <br />
              <br />
              💍 Will you stay with me and make this year unforgettable
              together?
            </p>
            <button
              onClick={closePopup}
              className="mt-4 px-6 py-2 bg-gradient-to-br from-pink-500 to-pink-400 text-white rounded-2xl shadow-md"
            >
              Yes❤️
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes glow {
          0% {
            text-shadow: 0 0 10px #ff84c4, 0 0 20px #ff9edc;
          }
          100% {
            text-shadow: 0 0 20px #ff84c4, 0 0 30px #ffb3e0, 0 0 40px #ffccee;
          }
        }
        @keyframes neon {
          0% {
            text-shadow: 0 0 5px #ff8fab, 0 0 10px #ffb3c6;
          }
          100% {
            text-shadow: 0 0 20px #ff8fab, 0 0 30px #ffb3c6, 0 0 40px #ffc9db;
          }
        }
        @keyframes beat {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.3);
          }
        }
        @keyframes buttonGlow {
          0% {
            box-shadow: 0 0 20px rgba(255, 100, 150, 0.8);
          }
          100% {
            box-shadow: 0 0 40px rgba(255, 100, 200, 1);
          }
        }
        @keyframes zoom {
          from {
            transform: scale(0.5);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        @keyframes confettiFall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
        @keyframes sparkle {
          0% {
            opacity: 0.3;
            transform: scale(0.5) rotate(0deg);
          }
          100% {
            opacity: 1;
            transform: scale(1.5) rotate(180deg);
          }
        }
        @keyframes firework {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          50% {
            transform: scale(3);
            opacity: 1;
          }
          100% {
            transform: scale(5);
            opacity: 0;
          }
        }
        @keyframes flyUp {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(-120vh) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-glow {
          animation: glow 1.5s ease-in-out infinite alternate;
        }
        .animate-neon {
          animation: neon 2s infinite alternate;
        }
        .animate-beat {
          animation: beat 1s infinite;
        }
        .animate-buttonGlow {
          animation: buttonGlow 1.5s infinite alternate;
        }
        .animate-zoom {
          animation: zoom 0.5s ease;
        }
        .text-shadow {
          text-shadow: 0 0 5px #ff84c4, 0 0 10px #ff9edc, 0 0 20px #ffb3e0,
            0 0 30px #ffccee;
        }
      `}</style>
    </div>
  );
}
