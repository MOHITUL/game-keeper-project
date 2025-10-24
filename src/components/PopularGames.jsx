import React, { useEffect, useState } from 'react';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router';

const PopularGames = () => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/gamesData.json")
            .then((res) => res.json())
            .then((data) => {
                const sorted = [...data].sort((a, b) => b.ratings - a.ratings);
                setGames(sorted.slice(0, 3))
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error loading games:", error);
                setLoading(false);
            })
    }, []);

    if (loading) {
        return <p className='text-center mt-10 text-gray-600'>Loading games...</p>
    }

    return (
        <div>
            <div className='p-10 max-w-7xl mx-auto '>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>

                {
                    games.map((game) => (
                        <Link
                            to={`/games/${game.id}`}
                            key={game.id}
                            className=' rounded-lg shadow-md hover:scale-105 transition ease-in-out'
                        >
                            <img src={game.coverPhoto}
                                alt={game.title}
                                className='w-full h-120 object-cover rounded-t-lg' />

                            <div className='p-8 '>
                                <h3 className='text-xl font-semibold'>{game.title}</h3>
                                <p className='text-lg text-gray-900 mt-1'>{game.category}</p>

                                <p className='text-lg text-gray-800 mt-2 flex items-center'> <FaRegStar />{game.ratings}</p>
                            </div>
                        </Link>
                    ))
                }

            </div>

        </div>
         <div className='flex justify-center'>
            <Link
        to="/games"
        className=" bg-linear-to-r from-[#7928CA] to-[#2AFADF] font-semibold px-6 py-2 rounded hover:text-xl "
      >
        See All Games
      </Link>
         </div>
        </div>
    );
};

export default PopularGames;


