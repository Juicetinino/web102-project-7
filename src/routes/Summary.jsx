import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { supabase } from '../client';
import Black from '../assets/Black.webp';
import Blue from '../assets/Blue.webp';
import Brown from '../assets/Brown.webp';
import Cyan from '../assets/Cyan.webp';
import Green from '../assets/Green.webp';
import Lime from '../assets/Lime.webp';
import Orange from '../assets/Orange.webp';
import Pink from '../assets/Pink.webp';
import Purple from '../assets/Purple.webp';
import Red from '../assets/Red.webp';
import White from '../assets/White.webp';
import Yellow from '../assets/Yellow.webp';

const COLOR_IMAGES = {
    black: Black,
    blue: Blue,
    brown: Brown,
    cyan: Cyan,
    green: Green,
    lime: Lime,
    orange: Orange,
    pink: Pink,
    purple: Purple,
    red: Red,
    white: White,
    yellow: Yellow,
};

function Summary() {

    const [crewmates, setCrewmates] = useState([]);

    useEffect(() => {
        const loadCrewmates = async () => {
            const { data, error } = await supabase
                .from('crewmates')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) {
                console.error('Error loading crewmates:', error);
                return;
            }

            setCrewmates(data);
        };

        loadCrewmates();
    }, []);


    return (
        <div>
            <h1>Your Crew</h1>
            {crewmates.length > 0 ? (
                <div className="crewmate-container">
                    {crewmates.map((crewmate) => (
                        <div className="crewmate" key={crewmate.id}>
                            <Link to={`../detail/${crewmate.id}`}>
                                <p>Name: {crewmate.name}</p>
                                <img
                                    src={COLOR_IMAGES[crewmate.color]}
                                    alt="Crewmate"
                                    className="crewmate-image"
                                />
                                <p>Color: {crewmate.color}</p>
                                <p>How Sus: {crewmate.how_sus}/10</p>
                            </Link>
                            <Link to={`../edit/${crewmate.id}`}>
                                <button className="edit-button">Edit</button>
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                <h2>No crewmates created yet!</h2>
            )}
        </div>
    );
};

export default Summary;