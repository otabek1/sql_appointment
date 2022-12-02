const studentRepository = require('../repository/student.repository');

class StudentService {

    constructor() { }

    async getStudents() {
        return await studentRepository.getStudents();
    }

    async createStudent(student) {
        return await studentRepository.createStudent(student);
    }

    // async updateStudent(student) {
    //     return await studentRepository.updateStudent(student);
    // }

    // async deleteStudent(studentId) {
    //     return await studentRepository.deleteStudent(studentId);
    // }

}
module.exports = new StudentService();