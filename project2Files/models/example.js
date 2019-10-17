module.exports = function(sequelize, DataTypes) {
  let ToDoList = sequelize.define("ToDoList", {
    item_name: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,140]
      }
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,140]
      }
    },
    custom_item:{
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  return ToDoList;
};
