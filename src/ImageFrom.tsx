
import React, {useState} from 'react';
import { Container, InputLabel, Button, CssBaseline, Box, TextField, Input  } from '@mui/material';
import { Image } from '@mui/icons-material';
import { Card } from '@mui/material';
import { CardActionArea } from '@mui/material';
import { CardActions } from '@mui/material';
import { CardContent } from '@mui/material';
import { CardMedia } from '@mui/material';
import { Typography } from '@mui/material';
export function ImageForm() {
    const [file, setFile] = useState<any>("");
    const [text, setText] = useState<any>("");
  function handleChange(e:any) {
        let url = URL.createObjectURL(e.target.files[0]);
        setFile(url)
        console.log(url)
    }

    return(
        <Box component="main"  width="auto" height="auto">
            <Box >


                <div >

                    
                    <TextField
                        id="outlined-full-width"
                        label="Text"
                        style={{ margin: 8 }}
                        placeholder="Enter Text For Image"
                        
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        fullWidth
                        variant="outlined"
                     onChange={e => setText(e.target.value)}
                    />

                    <TextField
                        id="outlined-full-width"
                        label="Image Upload"
                        style={{ margin: 8 }}
                        name="upload-photo"
                        type="file"
                        fullWidth
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
                                <img src={file} width="300px" height="300px">
                               
                                </img>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {text}
                                </Typography>
                            </CardActionArea>
                            {/* <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                    {text}
                                </Typography>
                            </CardContent> */}
                        </Card>
                    }
                </div>
            </Box>
        </Box>
    )
}


