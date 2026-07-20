import crewmates from '../assets/crewmates.webp';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { supabase } from '../client';

const COLORS = [
    'red', 'blue', 'lime', 'cyan', 'brown', 'green',
    'purple', 'white', 'black', 'yellow', 'orange', 'pink'
]

function Create() {
    const [color, setColor] = useState('red');
    const [susness, setSusness] = useState(0);
    const [name, setName] = useState("No name");
    const navigate = useNavigate();

    const createCrewmate = async () => {
        const { error } = await supabase
            .from('crewmates')
            .insert({ name, color, how_sus: susness });

        if (error) {
            console.error('Error creating crewmate:', error);
            return;
        }

        navigate('../summary');
    }

    return (
        <div className="content-window">
            <h1>Create a New Crewmate! </h1>
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
                name="calories"
                min="0"
                max="10"
                step="1"
                value={susness}
                onChange={(e) => setSusness(Number(e.target.value))}
            />
            <button onClick={createCrewmate}>Create!</button>
        </div>
    );
};

export default Create;