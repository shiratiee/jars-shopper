const User = require('./user')
const Review = require('./review')
const Product = require('./product')
const Order = require('./order')
const Category = require('./category')
const db = require('../db')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

 const ProductCategory = db.define('product_category', {})
 Review.belongsTo(User);
 Review.belongsTo(Product);
 Product.hasMany(Review);
 Product.belongsToMany(Category, {through: ProductCategory})
 Order.belongsTo(User);
 User.hasMany(Order);
 User.hasMany(Review);

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

module.exports = {
  User,
  Product,
  Order,
  Category,
  Review,
  ProductCategory
}

