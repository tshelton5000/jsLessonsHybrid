module.exports = (sequelize, DataTypes) => {
  const Play = sequelize.define('play', {
    nameOfHobby: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    duration: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    funFactor: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    withTeam: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  })

  return Play;
}