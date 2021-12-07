const {InscriptionTC} = require("../model/inscription");

const InscriptionQuery = {
    inscriptionById: InscriptionTC.getResolver("findById"),
    inscriptionAll: InscriptionTC.getResolver("findMany")
}

const InscriptionMutation = {
    inscriptionCreateOne: InscriptionTC.getResolver("createOne"),
    inscriptionUpdateById: InscriptionTC.getResolver("updateById")
}

module.exports = {InscriptionQuery, InscriptionMutation}