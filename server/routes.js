import express from "express";
import pool from "./db.js";

const router = express.Router();

// Get all cards
router.get("/guns/:title/country", (req, res) => { //getting specific titles
  const gunTitle = req.params.title;
  const query = "SELECT country FROM guns WHERE title = ?";

  pool.query(query, [gunTitle], (error, results) => {
    if (error) {
      console.error("Error executing SQL query:", error);
      res.status(500).json({ error: "Internal server error" });
    } else if (results.length === 0) {
      res.status(404).json({ error: "Manufacturer not found" });
    } else {
      const countries = results.map((gun) => gun.country);
      res.json(countries);
    }
  });
});
router.get("/guns", (req, res) => { //getting all titles based on country..or not
  const { country } = req.query;

  let query = "SELECT * FROM guns";

  if (country) {
    query += " WHERE country = ?";
  }

  pool.query(query, [country], (error, results) => {
    if (error) {
      console.error("Error executing SQL query:", error);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(results);
    }
  });
});

router.get("/guns/paginated", (req, res) => { //query builder for pagination to take all unique titles based on filters,selected country etc
  let { country, offset: inputOffset, limit, category, title, manufacturer } = req.query;
  const offset = (inputOffset - 1) * limit;

  let query = `SELECT * FROM 
            (SELECT id, title, description, category, manufacturer, imagePath, GROUP_CONCAT(DISTINCT country SEPARATOR ', ') 
            AS countries
            FROM guns
            GROUP BY title) resulttable`;

  let countQuery =
    'SELECT COUNT(DISTINCT REPLACE(title, " ", "")) as total FROM guns';

  if (country) {
    country = `%${country}%`;
    query += " WHERE countries LIKE ?";
    countQuery += " WHERE country LIKE ?";
  }

  if (category) {
    category = `%${category}%`;
    query += country ? " AND category LIKE ?" : " WHERE category LIKE ?";
    countQuery += country ? " AND category LIKE ?" : " WHERE category LIKE ?";
  }

  if (title) {
    title = `%${title}%`;
    query += country || category ? " AND title LIKE ?" : " WHERE title LIKE ?";
    countQuery +=
      country || category ? " AND title LIKE ?" : " WHERE title LIKE ?";
  }

  if(manufacturer) {
    manufacturer = `%${manufacturer}%`;
    query += country || category || title ? " AND manufacturer LIKE ?" : " WHERE manufacturer LIKE ?";
    countQuery += country || category || title ? " AND manufacturer LIKE ?" : " WHERE manufacturer LIKE ?";
  }

  query += ` ORDER BY id ASC LIMIT ${limit} OFFSET ${offset} `;

  const queryParams = [];
  if (country) {
    queryParams.push(country);
  }
  if (category) {
    queryParams.push(category);
  }
  if (title) {
    queryParams.push(title);
  }
  if(manufacturer) {
    queryParams.push(manufacturer);
  }

  pool.query(query, queryParams, (error, results) => {
    if (error) {
      console.error("Error executing SQL query:", error);
      res.status(500).json({ error: "Internal server error" });
    } else {
      pool.query(countQuery, queryParams, (countError, countResults) => {
        if (countError) {
          console.error("Error executing SQL query:", countError);
          res.status(500).json({ error: "Internal server error" });
        } else {
          const totalCount = countResults[0].total;
          const totalPages = Math.ceil(totalCount / limit);

          res.json({ data: results, totalPages });
        }
      });
    }
  });
});

router.get("/guns/title", (req, res) => { //get titles
  const query = "SELECT title FROM guns";

  pool.query(query, (error, results) => {
    if (error) {
      console.error("Error executing SQL query:", error);
      res.status(500).json({ error: "Internal server error" });
    } else {
      const weaponNames = results.map((gun) => gun.title);
      res.json(weaponNames);
    }
  });
});

router.get("/guns/category", (req, res) => { //get categories
  const query = "SELECT category FROM guns";

  pool.query(query, (error, results) => {
    if (error) {
      console.error("Error executing SQL query:", error);
      res.status(500).json({ error: "Internal server error" });
    } else {
      const weaponCategory = results.map((gun) => gun.category);
      res.json(weaponCategory);
    }
  });
});

router.get("/guns/manufacturer", (req, res) => { //get manufacturers
  const query = "SELECT manufacturer FROM guns";

  pool.query(query, (error, results) => {
    if (error) {
      console.error("Error executing SQL query:", error);
      res.status(500).json({ error: "Internal server error" });
    } else {
      const weaponManufacturer = results.map((gun) => gun.manufacturer);
      res.json(weaponManufacturer);
    }
  });
});

// Get a specific card

router.get("/guns/:manufacturer", (req, res) => {
  const gunManufacturer = req.params.manufacturer;
  const query = "SELECT * FROM guns WHERE manufacturer = ?";

  pool.query(query, [gunManufacturer], (error, results) => {
    if (error) {
      console.error("Error executing SQL query:", error);
      res.status(500).json({ error: "Internal server error" });
    } else if (results.length === 0) {
      res.status(404).json({ error: "Manufacturer not found" });
    } else {
      res.json(results[0]);
    }
  });
});

router.get("/guns/:category", (req, res) => {
  const gunCategory = req.params.category;
  const query = "SELECT * FROM guns WHERE category = ?";

  pool.query(query, [gunCategory], (error, results) => {
    if (error) {
      console.error("Error executing SQL query:", error);
      res.status(500).json({ error: "Internal server error" });
    } else if (results.length === 0) {
      res.status(404).json({ error: "Category not found" });
    } else {
      res.json(results[0]);
    }
  });
});

router.get("/guns/:title", (req, res) => {
  const gunTitle = req.params.title;
  const query = "SELECT * FROM guns WHERE title = ?";

  pool.query(query, [gunTitle], (error, results) => {
    if (error) {
      console.error("Error executing SQL query:", error);
      res.status(500).json({ error: "Internal server error" });
    } else if (results.length === 0) {
      res.status(404).json({ error: "Gun not found" });
    } else {
      res.json(results[0]);
    }
  });
});

router.get("/guns/:id", (req, res) => {
  const gunId = req.params.id;
  const query = "SELECT * FROM guns WHERE id = ?";

  pool.query(query, [gunId], (error, results) => {
    if (error) {
      console.error("Error executing SQL query:", error);
      res.status(500).json({ error: "Internal server error" });
    } else if (results.length === 0) {
      res.status(404).json({ error: "gun not found" });
    } else {
      res.json(results[0]);
    }
  });
});

export default router;
