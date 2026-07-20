import crewmates from '../assets/crewmates.webp';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { supabase } from '../client';

const COLORS = [
    'red', 'blue', 'lime', 'cyan', 'brown', 'green',
    'purple', 'white', 'black', 'yellow', 'orange', 'pink'
]

function Edit() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [color, setColor] = useState('red');
    const [susness, setSusness] = useState(0);
    const [name, setName] = useState("No name");

    useEffect(() => {
        const getCurrentInfo = async () => {
            const { data, error } = await supabase
                .from('crewmates')
                .select('*')
                .eq('id', id)
                .single();

            if (error) {
                console.error('Error loading crewmate:', error);
                return;
            }

            setName(data.name);
            setColor(data.color);
            setSusness(data.how_sus);
        };

        getCurrentInfo();
    }, [id]);

    const editCrewmate = async () => {
        const { error } = await supabase
            .from('crewmates')
            .update({ name, color, how_sus: susness })
            .eq('id', id);

        if (error) {
            console.error('Error updating crewmate:', error);
        }
        navigate('../summary');
    }

    const deleteCrewmate = async () => {
        const { error } = await supabase
            .from('crewmates')
            .delete()
            .eq('id', id);

        if (error) {
            console.error('Error deleting crewmate:', error);
            return;
        }

        navigate('../summary');
    }

    return (
        <div className="content-window">
            <h1>Edit {name} </h1>
            <img src={crewmates} alt="All the crewmate colors" className="create-image" />
            <h3>Name:</h3>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <h3>Color:</h3>
            <div className="color-picker">
                {COLORS.map((c) => (
                    <label key={c}>
                        <input
                            type="radio"
                            name="color"
                            value={c}
                            checked={color === c}
                            onChange={(e) => setColor(e.target.value)}
                        />
                        {c.charAt(0).toUpperCase() + c.slice(1)}
                    </label>
                ))}
            </div>
            <h3>How sus:</h3>
            <input
                type="range"
                id="susness"
                name="susness"
                min="0"
                max="10"
                step="1"
                value={susness}
                onChange={(e) => setSusness(Number(e.target.value))}
            />
            <button onClick={editCrewmate}>Confirm</button>
            <button onClick={deleteCrewmate}>Delete</button>
        </div>
    );
};

export default Edit;