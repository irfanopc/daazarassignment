
const BrandSalesDaily = require('../model/BrandSalesDaily')
const router = require('express').Router()
// GET /api/v1/brand_sales_daily
router.get('/api/v1/brand_sales_daily', async (req, res) => {
    const brandSalesDailys = await BrandSalesDaily.find();
    res.json(brandSalesDailys);
  });
  
  // POST /api/v1/brand_sales_daily
  router.post('/api/v1/brand_sales_daily', async (req, res) => {
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

  module.exports = router