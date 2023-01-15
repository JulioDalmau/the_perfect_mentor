const ProfileService = require("../service/profile.service");

class profileController {
  static async getUser(req, res) {
    const { data, error } = await ProfileService.getUser(req.params.id);
    if (error) {
      return res.status(404).send(error._message);
    }
    res.status(200).send(data);
  }

  static async editUser(req, res) {
    const { data, error } = await ProfileService.editUser(
      req.params.id,
      req.body
    );

    console.log("DATA DEL CONTROLLER -->", data)
    if (error) {
      return res.status(404).send(error._message);
    }
    res.status(200).send(data);
  }
}

module.exports = profileController;
