import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import CardItem from './CardItem';
import ModalContent from './ModalContent';
import axios from 'axios';

function CardGrid({ selectedCountry,countryFlags, searchValue, selectedCategory, selectedManufacturer }) {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleOpenModal = (card) => {
    setSelectedCard(card);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  const handleNextClick = () => {
    if (selectedCard !== null) {
      const currentIndex = cards.findIndex((card) => card.id === selectedCard.id);
      const nextIndex = currentIndex + 1;
      if (nextIndex < cards.length) {
        setSelectedCard(cards[nextIndex]);
      } else {
        setSelectedCard(cards[0]);
      }
    }
  };

  useEffect(() => {
    let endpoint = 'http://localhost:3001/api/guns';

    const params = {};

    if (selectedCountry) {
      params.country = selectedCountry;
    }

    axios
      .get(endpoint, { params })
      .then((response) => {
        const filteredCards = response.data.filter((card) => {
          return (!selectedCountry || card.country === selectedCountry) && 
          (!searchValue || card.title.toLowerCase().includes(searchValue.toLowerCase()))
          &&(!selectedCategory||card.category == selectedCategory) 
          &&(!selectedManufacturer||card.manufacturer == selectedManufacturer);

        });

        const uniqueCards = filteredCards.reduce((acc, curr) => {
          const isTitleExists = acc.find((card) => card.title === curr.title);
          if (!isTitleExists) {
            acc.push(curr);
          }
          return acc;
        }, []);

        setCards(uniqueCards);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [selectedCountry, searchValue, selectedCategory,selectedManufacturer]);

  return (
    <Grid container spacing={4}>
      {cards.map((card) => (
        <Grid item key={card.id} xs={12} sm={6} md={4}>
          <CardItem card={card} onOpenModal={handleOpenModal} />
        </Grid>
      ))}
      <ModalContent card={selectedCard} onCloseModal={handleCloseModal} onNextClick={handleNextClick} />
    </Grid>
  );
}

export default CardGrid;