const UserService = class {
  constructor(UserModel) {
    this.Model = UserModel
  }

  async create(userData) {

    const newUser = new this.Model(userData)

    console.log('--------------')
    console.log(newUser)
    console.log('--------------')
    newUser.save()
    // delete newUser.password
    return newUser.toObject()
  }
}


module.exports = UserService