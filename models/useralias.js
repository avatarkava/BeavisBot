module.exports = function (sequelize, DataTypes) {
  var UserAlias = sequelize.define(
    "UserAlias",
    {
      id: { type: DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true },
      username: { type: DataTypes.STRING, allowNull: false },
    },
    {
      underscored: true,
      tableName: "user_aliases",
    }
  );

  UserAlias.associate = function (models) {
    UserAlias.belongsTo(models.User);
  };

  return UserAlias;
};
