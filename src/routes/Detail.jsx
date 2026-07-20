import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router';
import { supabase } from '../client';
import suspect from '../assets/suspect.webp';

function Detail() {
    const { id } = useParams();
    const [crewmate, setCrewmate] = useState(null);

    useEffect(() => {
        const loadCrewmate = async () => {
            const { data, error } = await supabase
                .from('crewmates')
                .select('*')
                .eq('id', id)
                .single();

            if (error) {
                console.error('Error loading crewmate:', error);
                return;
            }

            setCrewmate(data);
        };

        loadCrewmate();
    }, [id]);

    if (!crewmate) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }

    return (
        <div>
            <h1>About your Crewmate</h1>
            <img src={suspect} alt="Accusation scene" className="create-image" />
            <h2>Name: {crewmate.name}</h2>
            <h2>Color: {crewmate.color}</h2>
            <h2>How Sus: {crewmate.how_sus}/10</h2>
            <h2>Created: {new Date(crewmate.created_at).toLocaleDateString()}</h2>
            <Link to={`../edit/${crewmate.id}`}><button className="edit-button">Edit this crewmate</button></Link>
        </div>
    );
};

export default Detail;