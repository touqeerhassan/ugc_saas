const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

// Importing Modules
const Order = require("../models/Order");
const Product = require("../models/Product");
const Campaign = require("../models/Campaign");
const Creator = require("../models/Creator");

// Test route
router.get("/test", (req, res) => {
  res.send("Working");
});

// Orders
// Add a new order
router.post("/add_order", (req, res) => {
  console.log(req.body);

  res.setHeader("Content-Type", "application/json");

  const newOrder = new Order({
    ...req.body,
    createdOn: new Date(),
  });

  newOrder.save((err) => {
    if (err) res.status(400).json(`Error: ${err}`);
    else res.status(200).send("created a new order");
  });
});

// Get all the orders
router.get("/get_orders/:userId", async (req, res) => {
  res.setHeader("Content-Type", "application/json");

  Order.find({ userId: req.params.userId }, (err, orders) => {
    if (err) res.status(400).json(`Error: ${err}`);
    else res.status(200).json(orders);
  });
});

// Get all the orders based on their type
router.get("/get_orders_by_type/:userId/:type", async (req, res) => {
  res.setHeader("Content-Type", "application/json");

  Order.find(
    { userId: req.params.userId, type: parseInt(req.params.type) },
    (err, orders) => {
      if (err) res.status(400).json(`Error: ${err}`);
      else {
        console.log(orders);
        res.status(200).json(orders);
      }
    }
  );
});

// Get all the orders based on their status and type
router.get("/get_orders_by_status/:userId/:status/:type", async (req, res) => {
  res.setHeader("Content-Type", "application/json");

  Order.find(
    {
      userId: req.params.userId,
      status: parseInt(req.params.status),
      type: parseInt(req.params.type),
    },
    (err, orders) => {
      if (err) res.status(400).json(`Error: ${err}`);
      else res.status(200).json(orders);
    }
  );
});

// Delete an order
router.delete("/delete_order/:orderId/:userId", async (req, res) => {
  res.setHeader("Content-Type", "application/json");

  Order.deleteOne(
    { _id: req.params.orderId, userId: req.params.userId },
    (err) => {
      if (err) res.status(400).json(`Error: ${err}`);
      else res.status(200).send("Deleted one order successfully!");
    }
  );
});

// Get a single order
router.get("/get_order_by_id/:orderId/:userId", async (req, res) => {
  res.setHeader("Content-Type", "application/json");

  Order.findOne(
    { _id: req.params.orderId, userId: req.params.userId },
    (err, order) => {
      if (err) res.status(400).json(`Error: ${err}`);
      else res.status(200).send(order);
    }
  );
});

// Patch an order
router.patch("/edit_order/:orderId/:userId", async (req, res) => {
  res.setHeader("Content-Type", "application/json");

  Order.updateOne(
    { _id: req.params.orderId, userId: req.params.userId },
    {
      $set: req.body,
    },
    (err) => {
      if (err) res.status(400).json(`Error: ${err}`);
      else res.status(200).send("Edited an order");
    }
  );
});

// Products
// Add a new product
router.post("/add_product", (req, res) => {
  console.log(req.body);

  res.setHeader("Content-Type", "application/json");

  const newProduct = new Product({
    ...req.body,
  });

  newProduct.save((err) => {
    console.log(err);
    if (err) res.status(400).json(`Error: ${err}`);
    else res.status(200).send("created a new product");
  });
});

// Get all the products
router.get("/get_products/:userId", async (req, res) => {
  res.setHeader("Content-Type", "application/json");

  Product.find({ userId: req.params.userId }, (err, products) => {
    if (err) res.status(400).json(`Error: ${err}`);
    else res.status(200).json(products);
  });
});

// Get all the orders based on their type
// router.get("/get_orders_by_type/:userId/:type", async (req, res) => {
//   res.setHeader("Content-Type", "application/json");

//   Order.find(
//     { userId: req.params.userId, type: parseInt(req.params.type) },
//     (err, orders) => {
//       if (err) res.status(400).json(`Error: ${err}`);
//       else {
//         console.log(orders);
//         res.status(200).json(orders);
//       }
//     }
//   );
// });

// Get all the orders based on their status and type
// router.get("/get_orders_by_status/:userId/:status/:type", async (req, res) => {
//   res.setHeader("Content-Type", "application/json");

//   Order.find(
//     {
//       userId: req.params.userId,
//       status: parseInt(req.params.status),
//       type: parseInt(req.params.type),
//     },
//     (err, orders) => {
//       if (err) res.status(400).json(`Error: ${err}`);
//       else res.status(200).json(orders);
//     }
//   );
// });

// Delete a product
router.delete("/delete_product/:productId/:userId", async (req, res) => {
  res.setHeader("Content-Type", "application/json");

  Product.deleteOne(
    { _id: req.params.productId, userId: req.params.userId },
    (err) => {
      if (err) res.status(400).json(`Error: ${err}`);
      else res.status(200).send("Deleted one product successfully!");
    }
  );
});

// Get a single product
router.get("/get_product_by_id/:productId/:userId", async (req, res) => {
  res.setHeader("Content-Type", "application/json");

  Product.findOne(
    { _id: req.params.productId, userId: req.params.userId },
    (err, order) => {
      if (err) res.status(400).json(`Error: ${err}`);
      else res.status(200).send(order);
    }
  );
});

// Campaigns
// Add a new campaign
router.post("/add_campaign", (req, res) => {
  console.log(req.body);

  res.setHeader("Content-Type", "application/json");

  const newCampaign = new Campaign({
    ...req.body,
  });

  newCampaign.save((err) => {
    if (err) res.status(400).json(`Error: ${err}`);
    else res.status(200).send("created a new campaign");
  });
});

router.get("/get_all_campaigns", async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  Campaign.find()
    .populate("product")
    .then((p) => res.status(200).json(p))
    .catch((error) => res.status(400).json(error));
});
// Get all the campaigns of a user
router.get("/get_campaigns/:userId", async (req, res) => {
  res.setHeader("Content-Type", "application/json");

  Campaign.find({ userId: req.params.userId }, (err, products) => {
    if (err) res.status(400).json(`Error: ${err}`);
    else res.status(200).json(products);
  });
});

// Delete a campaign
router.delete("/delete_campaign/:campaignId/:userId", async (req, res) => {
  res.setHeader("Content-Type", "application/json");

  Campaign.deleteOne(
    { _id: req.params.campaignId, userId: req.params.userId },
    (err) => {
      if (err) res.status(400).json(`Error: ${err}`);
      else res.status(200).send("Deleted one campaign successfully!");
    }
  );
});

// Get a single campaign
router.get("/get_campaign_by_id/:campaignId/:userId", async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  Campaign.findOne({ _id: req.params.campaignId, userId: req.params.userId })
    .populate("product")
    .then((order) => res.status(200).send(order))
    .catch((error) => res.status(400).json(`Error: ${err}`));
});

//Patch a campaign
router.patch("/edit_campaign/:orderId/:userId", async (req, res) => {
  res.setHeader("Content-Type", "application/json");

  Campaign.updateOne(
    { _id: req.params.orderId, userId: req.params.userId },
    {
      $set: req.body,
    },
    (err) => {
      if (err) res.status(400).json(`Error: ${err}`);
      else res.status(200).send("Edited a campaign");
    }
  );
});

module.exports = router;

// Creators
// Add a new creator
router.post("/add_creator", (req, res) => {
  console.log(req.body);

  res.setHeader("Content-Type", "application/json");

  const newCreator = new Creator({
    ...req.body,
  });

  newCreator.save((err) => {
    console.log(err);
    if (err) res.status(400).json(`Error: ${err}`);
    else res.status(200).send("added a new creator");
  });
});

router.get("/get_all_creators", async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  Creator.find()
    .then((p) => res.status(200).json(p))
    .catch((error) => res.status(400).json(error));
});

// Delete a campaign
router.delete("/delete_creator/:campaignId/:userId", async (req, res) => {
  res.setHeader("Content-Type", "application/json");

  Creator.deleteOne(
    { _id: req.params.campaignId, userId: req.params.userId },
    (err) => {
      if (err) res.status(400).json(`Error: ${err}`);
      else res.status(200).send("Deleted one creator successfully!");
    }
  );
});

// Get a single creator
router.get("/get_creator_by_id/:campaignId/:userId", async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  Creator.findOne({ _id: req.params.campaignId, userId: req.params.userId })
    .then((order) => res.status(200).send(order))
    .catch((error) => res.status(400).json(`Error: ${err}`));
});

//Patch a campaign
router.patch("/edit_creator/:orderId/:userId", async (req, res) => {
  res.setHeader("Content-Type", "application/json");

  Creator.updateOne(
    { _id: req.params.orderId, userId: req.params.userId },
    {
      $set: req.body,
    },
    (err) => {
      if (err) res.status(400).json(`Error: ${err}`);
      else res.status(200).send("Edited a campaign");
    }
  );
});

module.exports = router;
