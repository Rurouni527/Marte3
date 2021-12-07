const {AdvanceTC} = require("../model/advance");

const AdvanceQuery = {
    advanceById: AdvanceTC.getResolver("findById"),
    advanceOne: AdvanceTC.getResolver("findOne"),
    advanceAll: AdvanceTC.getResolver("findMany")
};

const AdvanceMutation = {
    advanceCreateOne: AdvanceTC.getResolver("createOne"),
    advanceRemoveById: AdvanceTC.getResolver("removeById"),
    advanceUpdateById: AdvanceTC.getResolver("updateById")
}

module.exports = {AdvanceQuery, AdvanceMutation}