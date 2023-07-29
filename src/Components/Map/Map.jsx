import React from "react";
import GoogleMapReact from "google-map-react";
import {Paper,Typography,useMediaQuery  } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";

import useStyles from "./style";




const Map=({setCoordinates,setBounds,coordinates,places}) =>{
    const classes= useStyles();
    const isDesktop = useMediaQuery("(min-width:600px)");
    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyAV_nunqvw8FAv_6kSo_D1i5tRn2ALc0fk'}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50,50,50,50]}
                options={""}
                onChange={(e) =>{

                        // console.log(e);
                        setCoordinates({lat:e.center.lat, lng:e.center.lng});
                        setBounds({ne: e.marginBounds.ne,sw: e.marginBounds.sw});
                }}
                onChildClick={""}
            >
                {places?.map((place,i)=>(
                        <div
                        className={classes.markerContainer}
                        lat={Number(place.latitude)}
                        lng={Number(place.longitude)}
                        key={i}
                        >
                            {
                                !isDesktop ? (
                                    <LocationOnOutlinedIcon color="primary" fontSize="large" />
                                ) : (
                                    <Paper elevation={3} className={classes.paper}>
                                        <Typography className={classes.typography} variant="subtitle2" gutterbottom>{place.name}</Typography>
                                        <img
                                            className={classes.pointer}
                                            src={place.photo? place.photo.images.large.url:"https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"}
                                            alt={place.name}
                                    
                                        />
                                        <Rating size="small" value={Number(place.rating)}  readOnly />
                                    </Paper>

                                )
                            }

                        </div>
                ))}

            </GoogleMapReact>
           
        </div>
    )
}

export default Map;