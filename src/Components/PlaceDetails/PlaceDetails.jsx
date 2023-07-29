import React from "react";
import { Typography,Box,Button,Card,CardMedia,CardContent, CardActions,Chips } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Phone from "@material-ui/icons/Phone";
import Rating from "@material-ui/lab/Rating";

import useStyles from "./style";
import { Height } from "@material-ui/icons";

const PlaceDetails=({place}) =>{

    const classes= useStyles();
    
    return (
        <Card elevation={6}>
            <CardMedia
                style={{height:350}}
                image={place.photo? place.photo.images.large.url:"https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"}
                title={place.name}

            />
            <CardContent>
                <Typography gutterBottom variant="h5">{place.name}</Typography>
                <Box display="flex" justifyContent="space-between">
                <Rating value={Number(place.rating)}  readOnly />
                <Typography gutterBottom variant="subtitle1">Out of {place.num_reviews} reviews</Typography>
                </Box>

                <Box display="flex" justifyContent="space-between">
                <Typography variant="subtitle1">Price</Typography>
                <Typography gutterBottom variant="subtitle1">{place.price_level}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                <Typography variant="subtitle1">Ranking</Typography>
                <Typography gutterBottom variant="subtitle1">{place.ranking}</Typography>
                </Box>
                {place?.address &&(
                    <Typography gutterBottom variant="subtitle2" color="textseccondary" className={classes.subtitle}>
                        <LocationOnIcon />{place.address}
                    </Typography>
                )}

                {place?.phone &&(
                    <Typography gutterBottom variant="subtitle2" color="textseccondary" className={classes.spacing}>
                        <Phone />{place.phone}
                    </Typography>
                )}
            </CardContent>
        </Card>

    )
}

export default PlaceDetails;