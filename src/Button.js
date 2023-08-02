import { Stack } from "@mui/material";
import { Button } from "@mui/material";
import './App.css';

function Btton(){
    return(
        <div>
             <Stack spacing={2} direction="row">
      <Button variant="text" className="text">Text</Button>
      <Button variant="contained" className="text1">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" href="#contained-buttons">
        Link
      </Button>
     
    </Stack>
        </div>
    )
}
export default Btton;