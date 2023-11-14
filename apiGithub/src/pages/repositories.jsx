import axios from "axios";
import { useState } from "react";
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import "./index.css"

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

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
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Busca Repositórios
          </Typography>
          <Search >
            <form onSubmit={handleSubmit}>
            <SearchIconWrapper>
              <SearchIcon type="submit"/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Usuario..."
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => {setName(e.target.value)}}
            />
            </form>
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
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
        </>
    );
};

export default Repositories;