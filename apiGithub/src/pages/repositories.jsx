import axios from "axios";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./index.css";

const Repositories = () => {
    const [name, setName] = useState(null);
    const [repos, setRepos] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = `https://api.github.com/users/${name}/repos`;
        const response = await axios.get(url);
        setRepos(response.data);
        setName(null);
      };

    return (
        <>
        <nav>
            <h1>Busca Repositorios</h1>
            <form onSubmit={handleSubmit}>
            <TextField label="Nome do Usuario" variant="outlined" type="text" onChange={(e) => {setName(e.target.value)}}/>
            <Button variant="outlined" type="submit">Buscar</Button>
            </form>
        </nav>
        {repos !== null && (
        <div>
            <ul className="repos-list">
                {repos.map((item, index) => (
                 <li key={index}>{item.name}</li>
                ))}
            </ul>
        </div>
        )}
        </>
    );
};

export default Repositories;