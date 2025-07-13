"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.recommend = recommend;
const recommendationService_1 = require("../services/recommendationService");
const pool_1 = __importDefault(require("../db/pool")); // pg Pool instance
const sql_template_strings_1 = require("sql-template-strings");
async function recommend(req, res) {
    const { age, income, dependents, risk } = req.body;
    const { plan, explanation } = (0, recommendationService_1.getRecommendation)({ age, income, dependents, risk });
    // persist
    await pool_1.default.query((0, sql_template_strings_1.SQL) `
      INSERT INTO 
      submissions (age,income,dependents,risk,recommended_plan,explanation)
      VALUES (${age}, ${income}, ${dependents}, ${risk}, ${plan}, ${explanation})
      RETURNING *
   `);
    res.json({ plan, explanation });
}
