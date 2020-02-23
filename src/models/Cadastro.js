module.exports = (sequelize, DataTypes) => {
  var Cadastro = sequelize.define(
    "Cadastro",
    {
      ativo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false
      },
      dia: {
        type: DataTypes.DATE,
      }
    },
    {

    }
  );

  Cadastro.associate = models => {
    
  }

  return Cadastro;
};