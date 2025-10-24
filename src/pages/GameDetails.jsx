import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const GameDetails = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/gamesData.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((g) => g.id === id);
        setGame(found);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading game details:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p className="text-center mt-10 text-gray-600">Loading game details...</p>;
  }

  if (!game) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-bold">Game Not Found</h2>
        <Link to="/" className="text-blue-600 underline mt-4 block">
          Go Back Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <img
        src={game.coverPhoto}
        alt={game.title}
        className="w-full h-64 object-cover rounded-lg"
      />
      <h2 className="text-3xl font-bold mt-4">{game.title}</h2>
      <p className="text-gray-600 mt-2">Category: {game.category}</p>
      {game.developer && <p className="text-gray-600 mt-1">Developer: {game.developer}</p>}
      <p className="text-yellow-500 mt-1">⭐ Rating: {game.rating}</p>
      <p className="mt-4 text-gray-700">{game.description}</p>

      {game.downloadLink && (
        <a
          href={game.downloadLink}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-6 px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Download Game
        </a>
      )}

      <div className="mt-6">
        <Link
          to="/"
          className="text-blue-500 hover:underline text-sm font-medium"
        >
          ← Back to Popular Games
        </Link>
      </div>
    </div>
  );
};

export default GameDetails;
