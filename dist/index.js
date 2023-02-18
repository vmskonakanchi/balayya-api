"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 80;
app.use(express_1.default.json());
const slogans = new Set();
app.get("/", (req, res) => {
    try {
        return res.status(200).json({
            message: "Jai Balayya....! , Welcome to the Balayya Babu API...",
            apiEndpoints: {
                add: "/add",
                slogans: "/slogans",
            },
        });
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
});
app.get("/slogans", (req, res) => { });
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
