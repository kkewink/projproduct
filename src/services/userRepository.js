const express = require('express');
const fs = require('fs');
const path = require('path');


const fileName = 'users.json';
const filePath = path.join(__dirname,"..","database", fileName);


class userRepository {
    static async getUsers() {
        return new Promise((resolve, reject) => {
            fs.readFile(filePath, 'utf8', (err, data) => {
                if(err) {
                    if (err.code === "ENOENT") {
                        this.writeUsersToFile([]);
                        return [];
                    }else {
                        reject(err);
                    }
                }else {
                    resolve(JSON.parse(data));
                }
            })
        })
}

static async writeUsersToFile(user){
    return new Promise ((resolve, reject) => {
        fs.writeFile(filePath, JSON.stringify(user), (err) => {
            if (err)reject(err);
            console.log(`Data written to file< ${filePath}`);
            resolve(this.getAllUser());
        });

    })
}

static async listAllUser() {
    const users = await this.getUsers();
    return users;
}

static async createUser(user) {
    const users = await this.getUsers();
    user.id = users.length + 1; 
    users.push(user);
    const insertDB = await this.writeUsersToFile(users);
    return insertDB;
}

static async listUserID(id) {
    const users = await this.getUsers();
    return users.find(user => user.id === parseInt(id));
}

static async updateUser(id, user) {
    const users = await this.getUsers();
    const index = users.findIndex(p => p.id == parseInt(id));
    if (index === -1) {
        return null;
    }
    users[index] = user ;
    const updateDB = await this.writeUsersToFile(user);
    return updateDB;
}

static async deleteUser(id) {
    const user = await this.getUsers();
    const index = user.findIndex(p => p.id === parseInt(id));
    if (index === -1){
        return null;
    }else {
        user.splice(index, 1);
    }
    await this.writeUsersToFile(user);
    return index;
}
}

module.exports = userRepository;