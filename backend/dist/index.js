"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// backend/src/index.ts
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const recommendation_1 = require("./controllers/recommendation");
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.post('/recommendation', recommendation_1.recommend);
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`API listening on ${port}`));
