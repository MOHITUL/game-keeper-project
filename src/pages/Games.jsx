import React, { useEffect, useState } from 'react';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router';

const Games = () => {
    useEffect(() => {
        document.title = "Games | GAMEKEEPER";
    }, []);

    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch("/gamesData.json")
            .then((res) => res.json())
            .then((data) => {
                setGames(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error loading games:", err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p className='text-center mt-10 text-gray-600'>Loading all games...</p>
    }
    return (
        <div className='p-10 max-w-7xl mx-auto text-center'>
            <h2 className='text-5xl font-semibold mb-10 shadow-sm'>All Games</h2>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                {
                    games.map((game) => (
                        <Link to={`/games/${game.id}`}
                        key={game.id}
                        className='rounded-lg shadow-md hover:scale-105 transition ease-in-out'>
                            <img src={game.coverPhoto} alt={game.title}
                            className='w-full h-120 object-cover rounded-t-lg' />

                            <div className='p-8 text-left'>
                                <h3 className='text-xl font-semibold'>{game.title}</h3>
                                <p className='text-lg text-gray-950 mt-1'>Category: {game.category}</p>
                                <p className='text-lg text-gray-900 mt-2 flex items-center'><FaRegStar/> {game.ratings} </p>
                            </div>
                        </Link>
                    ))
                }

            </div>


        </div>
    );
};

export default Games;