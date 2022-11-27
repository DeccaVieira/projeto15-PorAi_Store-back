import { catalogueCollection } from "../database/db.js";

export async function createPackage(req, res) {
  const travelPackage = res.locals.travelPackage;

  try {
    await catalogueCollection.insertOne(travelPackage);

    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function fetchPackages(req, res) {
  const { from, price, stay, daysamount } = req.query;

  try {
    const catalogue = await catalogueCollection.find().toArray();

    if (from) {
      const filterFrom = catalogue.filter(
        (travel) => travel.from.toLowerCase().indexOf(from.toLowerCase()) >= 0
      );
      res.send(filterFrom);
      return;
    }

    if (stay) {
      const filterStay = catalogue.filter(
        (travel) => travel.stay.toLowerCase().indexOf(stay.toLowerCase()) >= 0
      );
      res.send(filterStay);
      return;
    }

    if (price) {
      const filterPrice = catalogue.filter(
        (travel) => travel.price.replace("R$", "").indexOf(price) >= 0
      );

      res.send(filterPrice);
      return;
    }

    res.send(catalogue);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
