// ==UserScript==
// @name          Account
// @author        s.akhmedoff (S A)
// @description   Some Simple Account Class (Practice-mode)
// ==/UserScript==
//

class Account {
    // id - (int, string); login - (string); name - (string); balance - (int); credit = (bool)
    constructor (id, login, name, balance, credit) {
        this.id = id;
        this.login = login;
        this.name = name;
        this.balance = balance;
        this.credit = credit
    };

    getAllInfo() {
        return [this.id, this.login, this.name, this.balance, this.credit];
    };
};

module.exports = {Account};