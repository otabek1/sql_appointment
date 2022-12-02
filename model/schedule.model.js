module.exports = (sequelize, DataTypes, Model) => {

    class Schedule extends Model { }

    Schedule.init({
        // Model attributes are defined here
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tutor: {
            type: DataTypes.CHAR(9),
            allowNull: false
        },
        start_time: {
            type: DataTypes.DATE,
            allowNull: false
        },
        end_time: {
            type: DataTypes.DATE,
            allowNull: false
        },
        InPerson_Virtual: {
            type: DataTypes.CHAR(1),
            allowNull: false
        }


    }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'Schedule' // We need to choose the model name
    });

    return Schedule;
}