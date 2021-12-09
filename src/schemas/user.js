const {UserTC} = require("../model/user");

const UserQuery = {
    userById: UserTC.getResolver("findById"),
    userOne: UserTC.getResolver("findOne"),
    userMany: UserTC.getResolver("findMany")
};

const UserMutation = {
    userCreateOne: UserTC.getResolver("createOne"),
    userUpdateById: UserTC.getResolver("updateById")
}

module.exports={
    UserQuery,
    UserMutation
}
