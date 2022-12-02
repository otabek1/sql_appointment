const studentService = require('../service/student.service');
const logger = require('../logger/api.logger');

class StudentController {

    async getStudents() {
        logger.info('Controller: getStudents')
        return await studentService.getStudents();
    }

    async createStudent(student) {
        logger.info('Controller: createStudent', student);
        return await studentService.createStudent(student);
    }

    // async updateStudent(student) {
    //     logger.info('Controller: updateStudent', student);
    //     return await studentService.updateStudent(student);
    // }

    // async deleteStudent(studentId) {
    //     logger.info('Controller: deleteStudent', studentId);
    //     return await studentService.deleteStudent(studentId);
    // }
}

module.exports = new StudentController();