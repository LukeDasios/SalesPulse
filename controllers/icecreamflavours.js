import { v4 as uuid4 } from "uuid";

let icecreamFlavours = [];

export const getIcecreamFlavour = (req, res) => {
  const { id } = req.params;
  res.send(
    icecreamFlavours.find((icecreamFlavour) => icecreamFlavour.id === id)
  );
};

export const getIcecreamFlavours = (req, res) => {
  res.send(icecreamFlavours);
};

export const createIcecreamFlavour = (req, res) => {
  icecreamFlavours.push({ ...req.body, id: uuid4() });
  res.sendStatus(200);
};

export const deleteIcecreamFlavour = (req, res) => {
  const { id } = req.params;
  icecreamFlavours = icecreamFlavours.filter(
    (icecreamFlavour) => icecreamFlavour.id !== id
  );

  res.sendStatus(200);
};

export const updateIcecreamFlavour = (req, res) => {
  const { id } = req.params;
  const { name, rating, creator } = req.body;
  const icecreamFlavour = icecreamFlavours.find(
    (icecreamFlavour) => icecreamFlavour.id === id
  );

  if (name) icecreamFlavour.name = name;
  if (rating) icecreamFlavour.rating = rating;
  if (creator) icecreamFlavour.creator = creator;

  res.sendStatus(200);
};
