import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import './index.css'

const UserCard = ({ repos }) => {
  return (
    <Card sx={{ margin: "5px", backgroundColor: "#24292F", width: "30%", display: "flex", justifyContent: "center" }}>
      <CardContent class="card">
        <img src={repos[0].owner.avatar_url} width={200}/>
        <Typography variant="body1" color="#fff" textAlign="center">
          {repos[0].owner.login}
        </Typography>
        <a href={repos[0].owner.html_url} target="_blank">Acessar Perfil</a>
      </CardContent>
    </Card>
  );
};

export default UserCard;