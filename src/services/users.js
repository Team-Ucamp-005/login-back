const UserService = class {
  constructor(UserModel) {
    this.Model = UserModel
  }

  async create(userData) {
    const newUser = new this.Model(userData)
    await newUser.save()
    // delete newUser.password
    return newUser.toObject()
  }
}


module.exports = UserService