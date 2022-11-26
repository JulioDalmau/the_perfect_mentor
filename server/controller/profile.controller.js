const ProfileService = require("../service/profile.service");

class profileController {
  static async getUser(req, res) {
    const { data, error } = await ProfileService.getUser(req.params.id);
    if (error) {
      return res.status(404).send(error._message);
    }
    res.status(200).send(data);
  }
}

module.exports = profileController;
