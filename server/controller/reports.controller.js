const ReportsService = require("../service/reports.service");

class StadisticsController {
  static async getUsers(req, res) {
    const { data, error } = await ReportsService.getUsers();
    if (error) {
      return res.status(404).send(error._message);
    }
    res.status(200).send(data);
  }

  static async getUser(req, res) {
    const { error, data } = await ReportsService.getUser(req.params.id);
    if (error) {
      return res.status(404).send(error._message);
    }
    res.status(200).send(data);
  }

  static async searchUser(req, res) {
      const { data, error } = await ReportsService.searchUser(req.params.id);
     
    if (error) {
      return res.status(404).send(error._message);
    }
    res.status(200).send(data);
  }

  static async deleteUser(req, res) {
    console.log("Entró a CONTROLLER",req.params.id)
    const {error, data} = await ReportsService.deleteUser(req.params.id)
    if (error) {
        return res.status(404).send(error._message)
    }
    res.send( data)
}
}

module.exports = StadisticsController;
