import Button from '@mui/material/Button';
import {Link} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
        <Typography variant="h6" > Employees </Typography>
        <Link to={`/`}>
          <Button sx={{ color: 'white'}} size="small">Log out</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;