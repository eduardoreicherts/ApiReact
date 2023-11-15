import axios from "axios";
import { useState } from "react";
import "./index.css"
import Grid from "@mui/material/Grid";
import Header from "../components/header";
import MaterialCard from "../components/Card";
import Asside from "../components/asside";



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
            <Asside repos={repos} />
            <Grid container spacing={1}>
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