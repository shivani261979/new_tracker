// // Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
// var bcrypt = require("bcryptjs");
// // Creating Ops model
// module.exports = function (sequelize, DataTypes) {
//     var Operations = sequelize.define("Operations", {
//         email: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             unique: true,
//             validate: {
//                 isEmail: true
//             }
//         },
//         password: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         fname: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             validate: {
//                 min: 1
//             }
//         },
//         lname: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             validate: {
//                 min: 1
//             }
//         },
//     }, {
      
//         // freezeTableName: true,
//     });
//     // Creating a custom method for our Driver model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
//     Operations.prototype.validPassword = function (password) {
//         return bcrypt.compareSync(password, this.password);
//     };
   
//     return Operations;
// };