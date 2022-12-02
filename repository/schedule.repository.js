const connect = require('../config/db.config');
const logger = require('../logger/api.logger');


class ScheduleRepository {

    db = {};

    constructor() {
        this.db = connect();
        // For Development
        // this.db.sequelize.sync({ force: true }).then(() => {
        //     console.log("Drop and re-sync db.");
        // });
    }

    async getSchedules() {

        try {
            const schedules = await this.db.Schedule.findAll();
            // console.log('schedules:::', schedules);
            return schedules;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    // async createSchedule(schedule) {
    //     let data = {};
    //     try {
    //         schedule.createdate = new Date().toISOString();
    //         data = await this.db.Schedule.create(schedule);
    //         console.log('success data:::', data);
    //     } catch (err) {
    //         logger.error('Error::' + err);
    //     }
    //     return data;
    // }

    // async updateSchedule(schedule) {
    //     let data = {};
    //     try {
    //         schedule.updateddate = new Date().toISOString();
    //         data = await this.db.schedules.update({ ...schedule }, {
    //             where: {
    //                 id: schedule.id
    //             }
    //         });
    //     } catch (err) {
    //         logger.error('Error::' + err);
    //     }
    //     return data;
    // }

    // async deleteSchedule(scheduleId) {
    //     let data = {};
    //     try {
    //         data = await this.db.schedules.destroy({
    //             where: {
    //                 id: scheduleId
    //             }
    //         });
    //     } catch (err) {
    //         logger.error('Error::' + err);
    //     }
    //     return data;
    //     return { status: `${data.deletedCount > 0 ? true : false}` };
    // }

}

module.exports = new ScheduleRepository();