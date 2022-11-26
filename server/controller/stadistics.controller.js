const StadisticsService = require("../service/stadistics.service");

class StadisticsController {
  static async allUser(req, res) {
    const { data, error } = await StadisticsService.allUser();
    // console.log(pepe)
    if (error) {
      return res.sendStatus(404).send(error._message);
    }
    res.sendStatus(200).send(data);
  }

  static async newUser(req, res) {
    const { data, error } = await StadisticsService.newUser();
    if (error) {
      return res.sendStatus(404).send(error._message);
    }
    res.sendStatus(200).send(data);
  }

  static async signupMonth(req, res) {}
}

module.exports = StadisticsController;
