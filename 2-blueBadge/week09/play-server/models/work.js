module.exports = (sequelize, DataTypes) => {
  return sequelize.define('work', {
    businessName: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    positionTitle: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    yearsExp: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    enjoyment: {
      type: DataTypes.INTEGER,
      defaultValue: 5
    }
  })
}