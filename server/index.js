const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;


mongoose.connect('mongodb://localhost/brand_sales_daily', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

const brandSalesDailySchema = new mongoose.Schema({
  date: Date,
  brand: String,
  transactionType: String,
  totalOrders: Number,
  totalOrderValue: Number,
  grossMarginPercentage: Number,
  createdAt: Date,
  updatedAt: Date,
});

const BrandSalesDaily = mongoose.model('BrandSalesDaily', brandSalesDailySchema);

app.use(bodyParser.json());
app.use(express.urlencoded({ extented: true }));
app.use(express.json());
app.use(cors())
// GET /api/v1/brand_sales_daily
app.get('/api/v1/brand_sales_daily', async (req, res) => {
  const brandSalesDailys = await BrandSalesDaily.find();
  res.json(brandSalesDailys);
});

// POST /api/v1/brand_sales_daily
app.post('/api/v1/brand_sales_daily', async (req, res) => {
  const { date, brand, transactionType, totalOrders, totalOrderValue, grossMarginPercentage } = req.body;
  const brandSalesDaily = new BrandSalesDaily({
    date: date || new Date(),
    brand,
    transactionType,
    totalOrders,
    totalOrderValue,
    grossMarginPercentage,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  await brandSalesDaily.save();
  res.json(brandSalesDaily);
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
