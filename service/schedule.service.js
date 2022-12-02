const scheduleRepository = require('../repository/schedule.repository');

class ScheduleService {

    constructor() { }

    async getSchedules() {
        return await scheduleRepository.getSchedules();
    }

    async createSchedule(schedule) {
        return await scheduleRepository.createSchedule(schedule);
    }

    // async updateSchedule(schedule) {
    //     return await scheduleRepository.updateSchedule(schedule);
    // }

    // async deleteSchedule(scheduleId) {
    //     return await scheduleRepository.deleteSchedule(scheduleId);
    // }

}
module.exports = new ScheduleService();