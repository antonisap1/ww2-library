import express from 'express';
import pool from './db.js';

const router = express.Router();

// Get all cards
router.get('/guns/:title/country', (req, res) => {
  const gunTitle = req.params.title;
  const query = 'SELECT country FROM guns WHERE title = ?';

  pool.query(query, [gunTitle], (error, results) => {
    if (error) {
      console.error('Error executing SQL query:', error);
      res.status(500).json({ error: 'Internal server error' });
    } else if (results.length === 0) {
      res.status(404).json({ error: 'Manufacturer not found' });
    } else {
      const countries = results.map((gun) => gun.country);
      res.json(countries);
    }
  });
});
router.get('/guns', (req, res) => {
  const { country } = req.query;

  let query = 'SELECT * FROM guns';

  if (country) {
    query += ' WHERE country = ?';
  }

  pool.query(query, [country], (error, results) => {
    if (error) {
      console.error('Error executing SQL query:', error);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      res.json(results);
    }
  });
});


router.get('/guns/paginated', (req, res) => {
  const { country, offset: inputOffset, limit } = req.query;
  const offset = Math.max((inputOffset - 1) * limit, 0);

  let query = 'SELECT * FROM guns';

  if (country) {
    query += ' WHERE country = ?';
  }

  query += ` LIMIT ${limit} OFFSET ${offset}`;

  pool.query(query, [country], (error, results) => {
    if (error) {
      console.error('Error executing SQL query:', error);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      res.json(results);
    }
  });
});

router.get('/guns/title', (req, res) => {
  const query = 'SELECT title FROM guns';

  pool.query(query, (error, results) => {
    if (error) {
      console.error('Error executing SQL query:', error);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      const weaponNames = results.map((gun) => gun.title);
      res.json(weaponNames);
    }
  });
});

router.get('/guns/category', (req, res) => {
  const query = 'SELECT category FROM guns';

  pool.query(query, (error, results) => {
    if (error) {
      console.error('Error executing SQL query:', error);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      const weaponCategory = results.map((gun) => gun.category);
      res.json(weaponCategory);
    }
  });
});

router.get('/guns/manufacturer', (req, res) => {
  const query = 'SELECT manufacturer FROM guns';

  pool.query(query, (error, results) => {
    if (error) {
      console.error('Error executing SQL query:', error);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      const weaponManufacturer = results.map((gun) => gun.manufacturer);
      res.json(weaponManufacturer);
    }
  });
});

// Get a specific card


router.get('/guns/:manufacturer', (req, res) => {
  const gunManufacturer = req.params.manufacturer;
  const query = 'SELECT * FROM guns WHERE manufacturer = ?';

  pool.query(query, [gunManufacturer], (error, results) => {
    if (error) {
      console.error('Error executing SQL query:', error);
      res.status(500).json({ error: 'Internal server error' });
    } else if (results.length === 0) {
      res.status(404).json({ error: 'Manufacturer not found' });
    } else {
      res.json(results[0]);
    }
  });
});

router.get('/guns/:category', (req, res) => {
  const gunCategory = req.params.category;
  const query = 'SELECT * FROM guns WHERE category = ?';

  pool.query(query, [gunCategory], (error, results) => {
    if (error) {
      console.error('Error executing SQL query:', error);
      res.status(500).json({ error: 'Internal server error' });
    } else if (results.length === 0) {
      res.status(404).json({ error: 'Category not found' });
    } else {
      res.json(results[0]);
    }
  });
});

router.get('/guns/:title', (req, res) => {
  const gunTitle = req.params.title;
  const query = 'SELECT * FROM guns WHERE title = ?';

  pool.query(query, [gunTitle], (error, results) => {
    if (error) {
      console.error('Error executing SQL query:', error);
      res.status(500).json({ error: 'Internal server error' });
    } else if (results.length === 0) {
      res.status(404).json({ error: 'Gun not found' });
    } else {
      res.json(results[0]);
    }
  });
});



router.get('/guns/:id', (req, res) => {
  const gunId = req.params.id;
  const query = 'SELECT * FROM guns WHERE id = ?';

  pool.query(query, [gunId], (error, results) => {
    if (error) {
      console.error('Error executing SQL query:', error);
      res.status(500).json({ error: 'Internal server error' });
    } else if (results.length === 0) {
      res.status(404).json({ error: 'gun not found' });
    } else {
      res.json(results[0]);
    }
  });
});



export default router;