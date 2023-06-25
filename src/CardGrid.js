import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import CardItem from './CardItem';
import ModalContent from './ModalContent';
import axios from 'axios';
import { Pagination } from '@mui/material';

function CardGrid({ selectedCountry, countryFlags, searchValue, selectedCategory, selectedManufacturer }) {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(12);
  const [totalPages, setTotalPages] = useState(0);
  const [lastSelectedCountry, setLastSelectedCountry] = useState('');

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

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    if (selectedCountry !== lastSelectedCountry) {
      setPage(1);
      setLastSelectedCountry(selectedCountry);
    }
  }, [selectedCountry, lastSelectedCountry]); 

  useEffect(() => {
    let endpoint = 'http://localhost:3001/api/guns/paginated';
    console.log(searchValue)
    console.log(selectedCategory);

    const params = {
      country: selectedCountry,
      offset: page,
      limit: limit,
    };

    if(searchValue) {
      params['title'] = searchValue;
    } 

    if(selectedCategory) {
      params['category'] = selectedCategory;
    }

    axios
      .get(endpoint, { params })
      .then((response) => {
        const { data, totalPages } = response.data;

        const filteredCards = data.filter((card) => {
          return (
            (!selectedCountry || card.country === selectedCountry) &&
            (!searchValue || card.title.toLowerCase().includes(searchValue.toLowerCase())) &&
            (!selectedCategory || card.category === selectedCategory) &&
            (!selectedManufacturer || card.manufacturer === selectedManufacturer)
          );
        });

        const uniqueCards = filteredCards.reduce((acc, curr) => {
          const isTitleExists = acc.find((card) => card.title === curr.title);
          if (!isTitleExists) {
            acc.push(curr);
          }
          return acc;
        }, []);

        setCards(uniqueCards);
        setTotalPages(totalPages);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [selectedCountry, searchValue, selectedCategory, selectedManufacturer, page, limit]);

  return (
    <div>
      <Grid container spacing={4}>
        {cards.map((card) => (
          <Grid item key={card.id} xs={12} sm={6} md={4}>
            <CardItem card={card} onOpenModal={handleOpenModal} />
          </Grid>
        ))}
      </Grid>
      <ModalContent card={selectedCard} onCloseModal={handleCloseModal} onNextClick={handleNextClick} />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination count={totalPages} page={page} onChange={handlePageChange} />
      </div>
    </div>
  );
}

export default CardGrid;