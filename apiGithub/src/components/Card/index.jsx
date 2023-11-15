import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Chip from "@mui/material/Chip";

const MaterialCard = ({ repos }) => {
  return (
    <Card sx={{ margin: "5px", backgroundColor: "#24292F" }}>
      <CardContent>
        <Typography variant="body1" color="#fff">
          {repos.name}
        </Typography>
        <Chip
          label={repos.language ? repos.language : "Desconhecida"}
          color="primary"
        />
        <br />
        <Link
          variant="body2"
          href={repos.html_url}
          target="_blank"
          rel="noreferrer"
        >
          Acesar repositório
        </Link>
      </CardContent>
    </Card>
  );
};

export default MaterialCard;