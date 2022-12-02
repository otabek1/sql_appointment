const scheduleService = require('../service/schedule.service');
const logger = require('../logger/api.logger');

class ScheduleController {

    async getSchedules() {
        logger.info('Controller: getSchedules')
        return await scheduleService.getSchedules();
    }

    // async createSchedule(schedule) {
    //     logger.info('Controller: createSchedule', schedule);
    //     return await scheduleService.createSchedule(schedule);
    // }

    // async updateSchedule(schedule) {
    //     logger.info('Controller: updateSchedule', schedule);
    //     return await scheduleService.updateSchedule(schedule);
    // }

    // async deleteSchedule(scheduleId) {
    //     logger.info('Controller: deleteSchedule', scheduleId);
    //     return await scheduleService.deleteSchedule(scheduleId);
    // }
}

module.exports = new ScheduleController();