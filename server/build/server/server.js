"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var morgan_1 = __importDefault(require("morgan"));
dotenv_1.default.config();
var app = express_1.default();
app.use(express_1.default.json());
if (process.env.NODE_ENV === 'development') {
    app.use(morgan_1.default('dev'));
}
app.get('/', function (req, res) {
    res.send('API is running...');
});
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
    console.log(("Server running in " + process.env.NODE_ENV + " mode on PORT " + PORT).yellow.bold);
});
