import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const Compte = sequelize.define("Compte", {
    numero: {
        type: DataTypes.CHAR,
        primaryKey: true
    },
    typeCompte: {
        type: DataTypes.STRING,
        allowNull: false
    },
    solde: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    devise: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: "compte"
});

export default Compte;