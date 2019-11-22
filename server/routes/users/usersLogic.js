const mongoUtil = require('../../utils/mongodb');

const addNewUser = async (req, res) => {
    const db = mongoUtil.getDB();
    const fullname = req.body.fullName;
    const username = req.body.userName;
    const password = req.body.password;

    const userObj = {
        fullName: fullname,
        userName: username,
        password: password
    };

    try {
        await db.collection('users').insertOne(userObj);
        res.sendStatus(200);
    } catch (e) {
        res.sendStatus(500);
        throw new Error(e);
    }
};

const checkIfUserExist = async (req, res) => {
    const db = mongoUtil.getDB();
    const username = req.params.userName;
    try {
        const userDocument = await db.collection("users").findOne({ "userName": username });
        if (userDocument) {
            res.send(true);
        } else {
            res.send(false);
        }
    } catch (e) {
        res.sendStatus(500);
        throw new Error(e);
    }
};

const login = async (req, res) => {
    const db = mongoUtil.getDB();
    const username = req.body.userName;
    const password = req.body.password;
    try {
        const userDocument = await db.collection("users").findOne({"userName": username, "password": password});
        if(userDocument) {
            res.send({fullName:userDocument.fullName});
        } else {
            res.send(false);
        }
    } catch (e) {
        res.sendStatus(500);
        throw new Error(e);
    }

};

const addNewUrl = async (req, res) => {
    // todo
};


module.exports = {
    addNewUser,
    checkIfUserExist,
    login
};