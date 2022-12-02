const connect  = require('../config/db.config');
const logger = require('../logger/api.logger');


class StudentRepository {

    db = {};

    constructor() {
        this.db = connect();
        // For Development
        // this.db.sequelize.sync({ force: true }).then(() => {
        //     console.log("Drop and re-sync db.");
        // });
    }

    async getStudents() {

        try {
            const students = await this.db.Students.findAll();
            console.log('students:::', students);
            return students;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async createStudent(student) {
        let data = {};
        try {
            student.createdate = new Date().toISOString();
            data = await this.db.Students.create(student);
            console.log('success data:::', data);
        } catch (err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    // async updateStudent(student) {
    //     let data = {};
    //     try {
    //         student.updateddate = new Date().toISOString();
    //         data = await this.db.students.update({ ...student }, {
    //             where: {
    //                 id: student.id
    //             }
    //         });
    //     } catch (err) {
    //         logger.error('Error::' + err);
    //     }
    //     return data;
    // }

    // async deleteStudent(studentId) {
    //     let data = {};
    //     try {
    //         data = await this.db.students.destroy({
    //             where: {
    //                 id: studentId
    //             }
    //         });
    //     } catch (err) {
    //         logger.error('Error::' + err);
    //     }
    //     return data;
    //     return { status: `${data.deletedCount > 0 ? true : false}` };
    // }

}

module.exports = new StudentRepository();