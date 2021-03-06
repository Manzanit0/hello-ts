"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const route_1 = require("./route");
class IndexRoute extends route_1.BaseRoute {
    static create(router) {
        router.get("/", (req, res, next) => {
            new IndexRoute().index(req, res, next);
        });
    }
    constructor() {
        super();
    }
    index(req, res, next) {
        this.title = "Home | Hello TS!";
        let options = {
            "message": "This is a small express app made with Typescript!"
        };
        this.render(req, res, "index", options);
    }
}
exports.IndexRoute = IndexRoute;
