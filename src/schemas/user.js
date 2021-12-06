const {UserTC} = require("../model/user");

const UserQuery = {
    userById: UserTC.getResolver("findById"),
    userOne: UserTC.getResolver("findOne"),
    userMany: UserTC.getResolver("findMany")
};

const UserMutation = {
    userCreateOne: UserTC.getResolver("createOne"),
    userUpdateById: UserTC.getResolver("updateById"),
    userUpdateOne: UserTC.getResolver("updateOne"),
    userRemoveById: UserTC.getResolver("removeById")
}
