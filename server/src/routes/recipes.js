import express from "express";
import mongoose from "mongoose";
import { RecipeModel } from "../models/Recipes.js";
import { UserModel } from "../models/Users.js";
import { verifyToken } from "./users.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const response = await RecipeModel.find({});
        res.json(response);
    } catch (err) {
        res.json(err);
    }
});

//to create new recipe
router.post("/", verifyToken, async (req, res) => {
    const recipe = new RecipeModel(req.body);
    try {
        const response = await recipe.save();
        res.json(response);
    } catch (err) {
        res.json(err);
    }
});

//save new recipe
router.put("/", verifyToken, async (req, res) => {

    try {
        const recipe = await RecipeModel.findById(req.body.recipeID);
        const user = await UserModel.findById(req.body.userID);
        user.savedRecipes.push(recipe);
        await user.save();

        res.json({ savedRecipes: user.savedRecipes });
    } catch (err) {
        res.json(err);
    }
});

/*const recipe = await RecipeModel.findById(req.body.recipeID);*/

// Save favorite recipe
router.put("/favorite", verifyToken, async (req, res) => {
    console.log("In /favourite endpoint request" + req);
    try {
        const recipe = {
            recipeID: req.body.recipeID,
            title: req.body.title,
            image: req.body.image,
            summary: req.body.summary,
            instructions: req.body.instructions,
            extendedIngredients: req.body.extendedIngredients,
        };
        console.log("In /favourite endpoint" + recipe.title);
        const user = await UserModel.findById(req.body.userID);
        user.favoriteRecipes.push(recipe);
        await user.save();
        console.log("Saved favorite recepie for user");
        res.json({ favoriteRecipes: user.favoriteRecipes });
    } catch (err) {
        res.json(err);
    }
});



router.get("/savedRecipes/ids/:userID", async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.userID);
        res.json({ savedRecipes: user?.savedRecipes });
    } catch (err) {
        res.json(err);
    }

});


router.get("/savedRecipes/:userID", async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.userID);
        const savedRecipes = await RecipeModel.find({
            _id: { $in: user.savedRecipes },
        });
        res.json({ savedRecipes });
    } catch (err) {
        res.json(err);
    }

});

//   const favoriteRecipes = await RecipeModel.find({
//             _id: { $in: user.favoriteRecipes },
//         });
// Get favorite recipes
router.get("/favoriteRecipes/:userID", async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.userID);

        res.json(user.favoriteRecipes);
    } catch (err) {
        res.json(err);
    }
});

export { router as recipesRouter };
