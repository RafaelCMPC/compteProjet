import Compte from "../models/Compte.js";

export const getAllAccounts = async (req, res) => {
    try {
        const comptes = await Compte.findAll();
        res.status(200).json(comptes);
    }
    catch(error) {
        res.status(500).json( { message: error.message });
    }
}

export const getAccount = async (req, res) => {
    try {
        const compte = await Compte.findByPk(req.params.numero);
        if(!compte) {
            return res.status(404).json({ meesage: "Compte introuvable"});
        }
        res.status(200).json(compte);
    }
    catch(error) {
        res.status(500).json({ message: error.message });
    }
}

export const closeAccount = async (req, res) => {
    try {
        const compte = await Compte.findByPk(req.params.numero);
        if(!compte) {
            return res.status(404).json({ meesage: "Compte introuvable"});
        }
        await compte.destroy();
        res.status(200).send("Compte fermé avec succès");
    }
    catch(error) {
        res.status(500).json({ message: error.message });
    }
}