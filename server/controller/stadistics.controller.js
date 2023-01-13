const StadisticsService = require("../service/stadistics.service");

class StadisticsController {
  static async allUser(req, res) {
    
    const {data, error} = await StadisticsService.allUser();
    if (error) {
      return res.sendStatus(404).send(error._message);
    }
    res.send(data);
    return
  }

  static async newUser(req, res) {
    const { data, error } = await StadisticsService.newUser();
    if (error) {
      return res.sendStatus(404).send(error._message);
    }
    return res.send(data);
  }

  static async signupMonth(req, res) {
    const {data, error} = await StadisticsService.signupMonth();
    if(error) {
      return res.sendStatus(404).send(error._message);
    }
    return res.send(data);
  }
}

module.exports = StadisticsController;
