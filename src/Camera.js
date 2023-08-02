import { Stack } from "@mui/material";
import { Button } from "@mui/material";
import { IconButton } from "@mui/material";
import { styled } from '@mui/material/styles';
import PhotoCamera from '@mui/icons-material/PhotoCamera'; 
import { Autocomplete } from "@mui/material";
import { TextField } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Checkbox from '@mui/material/Checkbox';
//import { pink } from "@mui/material/colors";
function Camera(){
    const Input = styled('input')({
        display: 'none',
      });
      const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return(
        <div>
           <Stack direction="row" alignItems="center" spacing={2}>
      <label htmlFor="contained-button-file">
        <Input accept="image/*" id="contained-button-file" multiple type="file" />
        <Button variant="contained" component="span">
          Upload
        </Button>
      </label>
      <label htmlFor="icon-button-file">
        <Input accept="image/*" id="icon-button-file" type="file" />
        <IconButton color="success" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
      <Button variant="outlined"  startIcon={<DeleteIcon/>}>delete</Button>
      <Button variant="outlined" startIcon={<SendIcon/>}>send</Button>
     
    </Stack>
    <div>
      <Autocomplete 
       disablePortal
       id="combo-box-demo"
       options={top100Films}
       sx={{ width: 300 }}
       renderInput={(params) => <TextField {...params} label="Movie" />}
      />
      </div>
      <div>
      <Checkbox {...label} defaultChecked />
      <Checkbox {...label} />
      <Checkbox {...label} disabled />
      <Checkbox {...label} disabled checked />
    </div>
        </div>
    )
}
const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
  { label: 'Monty Python and the Holy Grail', year: 1975 },
];

export default Camera;