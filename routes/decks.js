const express = require("express");
const router = express.Router();
const setController = require("../controllers/decks.js");

router.get("/showdeck/:name", deckController.showDeck);
router.get("/", deckController.index);
router.get("/id/:id", deckController.getById);
router.get("/name/:name", deckController.getByName);
router.post("/", deckController.create);
router.put("/:name", deckController.edit);
router.delete("/:name", deckController.delete);

module.exports = router;