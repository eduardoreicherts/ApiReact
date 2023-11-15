import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import './index.css'

const Asside = ({ repos }) => {
  return (
    <Card sx={{ margin: "5px", backgroundColor: "#24292F", width: "30%", height: "85vh", display: "flex", justifyContent: "center" }}>
      <CardContent class="card">
        <img src={repos[0].owner.avatar_url}/>
        <Typography variant="body1" color="#fff" textAlign="center">
          {repos[0].owner.login}
        </Typography>
        <Link
          color={"#fff"}
          variant="body2"
          href={repos[0].owner.html_url}
          target="_blank"
          rel="noreferrer"
          marginTop={"10px"}
        >
          Acesar repositório
        </Link>
      </CardContent>
    </Card>
  );
};

export default Asside;