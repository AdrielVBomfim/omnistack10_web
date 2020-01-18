import React from "react";
import './styles.css';
import { MdClose } from 'react-icons/md';
import api from "../../services/api";

function DevItem(props) {

    const {dev, setDevs} = props;

    async function handleRemoveDev() {
        await api.delete(`/devs/${dev.github_username}`);
        const response = await api.get('/devs');;

        setDevs(response.data.object);
    }

    return (
        <li key={dev._id} className="dev-item">
            <span onClick={handleRemoveDev}>
                <MdClose/>
            </span>
            <header>
                <img src={dev.avatar_url}
                     alt={dev.name}/>
                <div className="user-info">
                    <strong>{dev.name}</strong>
                    <span>{dev.techs.join(', ')}</span>
                </div>
            </header>
            <p>{dev.bio}</p>
            <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no Github</a>
        </li>
    )
}

export default DevItem;