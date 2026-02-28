const Sequelize = require('sequelize')
const { DataTypes} = Sequelize

const sequelize = new Sequelize({
    host: "localhost",
    database: "yale",
    username: "root",
    password: "",
    dialect: "mysql"
})

const Student= sequelize.define('student',{
    fname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    major: {
        type: DataTypes.STRING,
        allowNull:true
    },
    dorm: {
        type: DataTypes.STRING,
        allowNull: true
    }

},{
    timestamps:false
})

Student.sync({alter: true}).then(() =>{
    return Student.bulkCreate([
        { // use bulkCreate([{ for multiple rows
            fname: "Amri",
            lname: "Joyner",
            email: "amri@icloud.com",
            major: "Architecture",
            dorm: "Sanford"
        },
        {
            fname: "Cheryl",
            lname: "Lewis",
            email: "cheryl@gmail.com",
            major: "Art",
            dorm: "Packard House"
        }
        
    ],
    {validate: true}
)
}).then((data)=> {
    data.forEach((element) => {
        console.log(element.toJSON())
    })
    console.log("Student added to database.")
}).catch((err)=>{
    console.log(err)
})
        
