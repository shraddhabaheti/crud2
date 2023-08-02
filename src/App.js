import logo from './logo.svg';
import './App.css';
import { Box } from '@mui/system';
import { Fab, TextField } from '@mui/material';
import Button from './Button';
import Camera from './Camera';
import Fabes from './Fabes';


function App() {
  return (
    <div className="App">
      <h1>How are used to materialUi</h1>
   <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        
      }}
      noValidate
      autoComplete="off"
    >

      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
     
    </Box>
  <Button />
  <Camera />
  <Fabes />
    </div>
  );
}

export default App;
