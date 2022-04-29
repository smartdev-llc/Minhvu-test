import UserModel from '../../../models/User';
import IUser from '../../../interfaces/models/user';
export default class User {
  public  static async getUsers(req, res): Promise<IUser[]> {
    const limit = req.params.limit || 10;
    const users = await  UserModel.find().sort({createdAt: -1}).limit(limit);
    return res.json({users});
  }

  public static async detailUser(req, res): Promise<IUser> {
    try {
      const {id} = req.params;
      const user = await  UserModel.findById(id);
      if (user) {
      return res.json({user});
      }
      return res.status(404).json({message: 'User not found'});
    } catch (err) {
      return res.status(400).json({message: 'User id is invalid'});
    }
  }
}
