import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "./AppBar";
import HeroUnit from "./HeroUnit";
import CardGrid from "./CardGrid";
import Footer from "./Footer";
import axios from "axios";
import _ from "lodash";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const lightTheme = createTheme();

function App() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [weaponNames, setWeaponNames] = useState([]);
  const [weaponCategory, setWeaponCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [weaponManufacturer, setWeaponManufacturer] = useState([]);
  const [selectedManufacturer, setSelectedManufacturer] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Fetch the unique weapon names from the backend API
    axios
      .get(`http://localhost:3001/api/guns/title`)
      .then((response) => {
        const names = response.data;
        const uniqueNames = Array.from(new Set(names));
        setWeaponNames(uniqueNames);
        //console.log('Weapon Names:', uniqueNames);
        //console.log('Response Data:', response.data);
        //setWeaponNames(names);
      })
      .catch((error) => {
        console.error("Error fetching weapon names:", error);
      });
  }, []);

  useEffect(() => {
    // Fetch the unique weapon category from the backend API
    axios
      .get(`http://localhost:3001/api/guns/category`)
      .then((response) => {
        const category = response.data;
        const uniqueCategory = Array.from(new Set(category));
        setWeaponCategory(uniqueCategory);
        //console.log('Weapon Category:', uniqueCategory);
        //console.log('Response Data:', response.data);
        //setWeaponNames(names);
      })
      .catch((error) => {
        console.error("Error fetching weapon categories:", error);
      });
  }, []);

  useEffect(() => {
    // Fetch the unique weapon category from the backend API
    axios
      .get(`http://localhost:3001/api/guns/manufacturer`)
      .then((response) => {
        const manufacturer = response.data;
        const uniqueManufacturer = Array.from(new Set(manufacturer));
        setWeaponManufacturer(uniqueManufacturer);
        //console.log('Weapon Category:', uniqueCategory);
        //console.log('Response Data:', response.data);
        //setWeaponNames(names);
      })
      .catch((error) => {
        console.error("Error fetching weapon manufacturer:", error);
      });
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleManufacturerSelect = (manufacturer) => {
    setSelectedManufacturer(manufacturer);
  };

  const handleSearch = (value) => {
    setSearchValue(value);
  };
  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <AppBar
        onCountrySelect={handleCountrySelect}
        onDarkModeChange={setIsDarkMode}
      />

      <main>
        <HeroUnit
          onSearch={handleSearch}
          weaponNames={weaponNames}
          weaponCategory={weaponCategory}
          onCategorySelect={handleCategorySelect}
          weaponManufacturer={weaponManufacturer}
          onManufacturerSelect={handleManufacturerSelect}
        />
        <CardGrid
          selectedCountry={selectedCountry}
          searchValue={searchValue}
          selectedCategory={selectedCategory}
          selectedManufacturer={selectedManufacturer}
        />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
