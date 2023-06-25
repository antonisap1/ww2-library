import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { Grid } from "@mui/material";

function CardItem({ card, onOpenModal }) {
  const getFirstSentence = (text) => {
    const sentences = text.split(". ");
    return sentences[0];
  };

  const handleImageClick = () => {
    onOpenModal(card);
  };

  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Tooltip title="Click for more info" arrow>
        <CardMedia
          component="div"
          sx={{
            // 16:9
            pt: "56.25%",
          }}
          image={card.imagePath}
          onClick={handleImageClick}
        />
      </Tooltip>

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {card.title} - {card.manufacturer}
        </Typography>
        <Typography gutterBottom variant="h6" component="h2">
          Category:
          {card.category}
        </Typography>

        <Typography>{getFirstSentence(card.description)}</Typography>
        <CardActions>
          Used by:
          <Grid container spacing={1}>
            {card.countries.split(',').map((country) => country.trim()).map((country) => (
              <Grid item xs={0}>
                <Tooltip key={country} title={String(country)} arrow>
                  <img
                    src={`/${country}.png`}
                    alt={country}
                    style={{
                      width: "24px",
                      height: "24px",
                      marginRight: "8px",
                    }}
                  />
                </Tooltip>
              </Grid>
            ))}
          </Grid>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default CardItem;
