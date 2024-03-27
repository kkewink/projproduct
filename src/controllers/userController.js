
const userRepository = require('../services/userRepository');

exports.listAllUser = async (req, res) => {
    try {
        const users = await userRepository.listAllUser();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({error: err.toString()});
    }
};

exports.listUserID = async (req, res) => {
    try {
        const user = await userRepository.listUserID(req.params.id);
        if(!user) {
            res.status(404).json({ error:'User não encontrado'});
        }else {
            res.status(200).json(user);
        }
    } catch (error) {
        res.status(500).json({error: error.toString ()});
    }
};

exports.createUser = async (req, res) => {
    try {
        const user = await userRepository.createUser(req.body);
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({error: err.toString() });
    }
}

exports.updateUser = async (req, res) => {
    try {
        const user = await userRepository.updateUser(req.params.id, req.body);
        if(!user) {
            res.status(404).json({error: 'user não encontrado'})
        }else {
            res.status(200).json(user);
        }
    } catch (err) {
        res.status(500).json({error: err.toString()});
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const user = await userRepository.deleteUser(req.params.id);
        if (!user) {
            res.status(404).json({error : 'user não encontrado'});
        }else {
            res.status(200).json({msg : 'user deletado com sucesso'});
        }
    } catch (err) {
        res.status(500).json({error : err.toString()});
    }
}