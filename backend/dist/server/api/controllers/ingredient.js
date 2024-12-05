"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = __importDefault(require("typedi"));
const ingredient_1 = __importDefault(require("../services/ingredient"));
exports.default = {
    async getIngredients(req, res) {
        try {
            console.log("RUNNING CONTROLLER FUNCTION");
            const ingredientService = typedi_1.default.get(ingredient_1.default);
            console.log("FIRST CONTAINER PASSED");
            const result = await ingredientService.getIngredients();
            console.log("SECOND CONTAINER PASSED");
            console.log(result);
            res.status(200).json({ result });
        }
        catch (e) {
            console.log(e);
        }
    },
};
