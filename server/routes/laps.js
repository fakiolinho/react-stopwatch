import fs from 'fs';
import path from 'path';
import express from 'express';

const router = express.Router();

router
.get('/', (req, res) => {
  fs.readFile(path.resolve(__dirname, '../db.txt'), { encoding: 'utf8' }, (err, data) => {
    if (err) {
      return res
      .status(500)
      .json({
        data: [],
      });
    }

    res
    .status(200)
    .json({
      data: JSON.parse(data),
    });
  });
})
.post('/', (req, res) => {
  const { laps } = req.body;

  fs.writeFile(path.resolve(__dirname, '../db.txt'), JSON.stringify(laps), err => {
    if (err) {
      return res
      .status(500)
      .json({
        data: [],
      });
    }

    res
    .status(200)
    .json({
      data: laps,
    });
  });
});

export default router;
