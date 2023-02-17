const mongoose = require('mongoose');

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
  module.exports = BrandSalesDaily;