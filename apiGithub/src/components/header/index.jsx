import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#51565A",
    '&:hover': {
      color: "#24292F",
      backgroundColor: "white",
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

  const Header = ({handleSubmit, setName}) => {

    return (
        <Box sx={{ flexGrow: 1, backgroundColor: "#24292F"}}>
      <AppBar position="static" backgroundColor="#24292F">
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
    );
  };

  export default Header;