"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mocha_typescript_1 = require("mocha-typescript");
const user_1 = require("../schemas/user");
const mongoose = require("mongoose");
let UserTest = UserTest_1 = class UserTest {
    constructor() {
        this.data = {
            email: "foo@bar.com",
            firstName: "Brian",
            lastName: "Love"
        };
    }
    static before() {
        const MONGODB_CONNECTION = "mongodb://localhost:27017/hello-ts";
        let connection = mongoose.createConnection(MONGODB_CONNECTION);
        UserTest_1.User = connection.model("User", user_1.userSchema);
        let chai = require("chai");
        chai.should();
    }
    create() {
        return new UserTest_1.User(this.data).save().then(result => {
            result._id.should.exist;
            result.email.should.equal(this.data.email);
            result.firstName.should.equal(this.data.firstName);
            result.lastName.should.equal(this.data.lastName);
        });
    }
};
__decorate([
    mocha_typescript_1.test("should create a new User")
], UserTest.prototype, "create", null);
UserTest = UserTest_1 = __decorate([
    mocha_typescript_1.suite
], UserTest);
var UserTest_1;
