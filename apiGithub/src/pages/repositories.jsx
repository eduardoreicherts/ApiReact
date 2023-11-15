import axios from "axios";
import { useState } from "react";
import "./index.css"
import Grid from "@mui/material/Grid";
import Header from "../components/header";
import MaterialCard from "../components/Card";
import UserCard from "../components/userCard";



const Repositories = () => {
    const [name, setName] = useState("");
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
        <Header handleSubmit={handleSubmit} setName={setName} />
        {repos !== null && (
          <div class="response">
            <UserCard repos={repos} />
            <Grid container spacing={2}>
                {repos.map((repos, index) => {
              return (
                <Grid item xs={6} md={6} key={index}>
                  <MaterialCard key={index} repos={repos} />
                  </Grid>
                     )
                })}
              </Grid>
            
          </div>
        )}
        </>
    );
};

export default Repositories;

/*
{repos !== null && (
        <div class="main_result">
            <div class="list">
                <table className="repos-list">
                    <tr>
                        <th>Nome</th>
                    {repos.map((item, index) => (
                    <td key={index}><a href={item.html_url} target="_blank">{item.name}</a></td>
                    ))}
                    </tr>
                </table>
            </div>
            <div class="user_information">
                <img src={repos[0].owner.avatar_url} width = "200"/>
                <h1>{repos[0].owner.login}</h1>
            </div>
        </div>
        )}
        */