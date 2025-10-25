import React, { useEffect, useRef, useState } from 'react';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BarLoader } from 'react-spinners';

gsap.registerPlugin(ScrollTrigger);

const Games = () => {
    useEffect(() => {
        document.title = "Games | GAMEKEEPER";
    }, []);

    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const cardsRef = useRef([]);

    const addToRefs = (el) => {
        if (el && !cardsRef.current.includes(el)) {
            cardsRef.current.push(el);
        }
    }

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

    const filteredGames = games.filter((game) =>
        game.title.toLowerCase().includes(searchTerm.toLowerCase()))

    // Animation 
    useEffect(() => {
        if (cardsRef.current.length === 0) return;

        gsap.fromTo(
            cardsRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.15 }
        );


        cardsRef.current.forEach((card) => {
            gsap.fromTo(
                card,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                        toggleActions: "play none none none",
                    },
                }
            );
        });
    }, [filteredGames]);


    if (loading) {
        return <div className='flex flex-col justify-center items-center h-screen gap-5'>
            <BarLoader color='#7928CA' size={100} />
            <p className='text-lg text-gray-600'>Loading all games...</p>
        </div>
    }

    return (
        <div className='p-10 max-w-7xl mx-auto text-center mt-18'>
            <h2 className='text-5xl font-semibold mb-10 shadow-sm'>All Games</h2>

            {/* search bar */}

            <div>
                <input type="text"
                    placeholder='Search Games...'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className='w-full md:w-1/2 px-4 py-3 border border-[#7928CA] rounded-lg focus:outline-none  focus:ring-purple-500' />
            </div>

            {/* found */}
            <div>
                <h2 className='font-semibold mt-5 text-xl'>Total Games Found: <span className='text-2xl text-[#2AFADF]'>{filteredGames.length}</span></h2>
            </div>

            {/* card */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-10'>
                {filteredGames.length > 0 ? (
                    filteredGames.map((game) => (
                        <Link to={`/gamedetails/${game.id}`}
                            key={game.id}
                            ref={addToRefs}
                            className='rounded-lg shadow-md hover:scale-105 transition ease-in-out'>
                            <img src={game.coverPhoto} alt={game.title}
                                className='w-full h-120 object-cover rounded-t-lg' />

                            <div className='p-8 text-left'>
                                <h3 className='text-xl font-semibold'>{game.title}</h3>
                                <p className='text-lg text-gray-950 mt-1'>Category: {game.category}</p>
                                <p className='text-lg text-gray-900 mt-2 flex items-center'><FaRegStar /> {game.ratings} </p>
                            </div>
                        </Link>
                    ))
                ) : (
                    <p className='text-gray-700 col-span-full text-center'>
                        No Games found for "<span className='font-semibold'>{searchTerm}</span>"
                    </p>
                )
                }

            </div>


        </div>
    );
};

export default Games;