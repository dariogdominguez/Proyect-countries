const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define ('activity', {
name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
},
dificulty: {
    type: DataTypes.INTEGER,
    allowNull: false,
},
duration: {
    type: DataTypes.FLOAT,
    allowNull: false,
},
season: {
    type: DataTypes.STRING,
    allowNull: false,
}},{
    timestamp: false
});
}