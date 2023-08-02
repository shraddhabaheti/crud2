
import React, {useState} from 'react';
import { Container, InputLabel, Button, CssBaseline, Box, TextField, Input  } from '@mui/material';
import { Image } from '@mui/icons-material';
import { Card } from '@mui/material';
import { CardActionArea } from '@mui/material';
import { CardActions } from '@mui/material';
import { CardContent } from '@mui/material';
import { CardMedia } from '@mui/material';
import { Typography } from '@mui/material';
function ImageForm() {
    const [file, setFile] = useState("");
    const [text, setText] = useState("");
  function handleChange(e) {
        let url = URL.createObjectURL(e.target.files[0]);
        setFile(url)
        console.log(url)
    }

    return(
        <Box component="main"  width="auto" height="auto">
            <Box >


                <div >

                    <h1 style={{ margin: 8 }}>
                        Upload an Image
                    </h1>

                    <TextField
                        id="outlined-full-width"
                        label="Text"
                        style={{ margin: 8 }}
                        placeholder="Enter Text For Image"
                        
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"

                        onChange={event => setText(event.target.value)}
                    />

                    <TextField
                        id="outlined-full-width"
                        label="Image Upload"
                        style={{ margin: 8 }}
                        name="upload-photo"
                        type="file"
                       
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        onChange={ handleChange}
                    />
                    {
                        file.length > 0 &&

                        <Card >
                            <CardActionArea>
                                {/* <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="140"
                                    width="100px"
                                    image={file}
                                    title="Contemplative Reptile"
                                /> */}
                                <img src={file} width="300px" height="300px"></img>
                   y         </CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {text}
                                </Typography>
                            </CardContent>
                        </Card>
                    }
                </div>
            </Box>
        </Box>
    )
}

export default ImageForm;
