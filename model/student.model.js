module.exports = (sequelize, DataTypes, Model) => {

    class Student extends Model { }

    Student.init({
        // Model attributes are defined here
        UID : {
            type: DataTypes.CHAR,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        FName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        LName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Pronouns: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        PhoneNum: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Major: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ClassStanding: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ExpectGradYEar: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        FirstLanguage: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
    }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'Students' // We need to choose the model name
    });  

    return Student;
}