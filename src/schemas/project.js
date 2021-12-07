const {ProjectTC} = require("../model/project");

const ProjectQuery = {
    projectById: ProjectTC.getResolver("findById"),
    projectAll: ProjectTC.getResolver("findMany")
}

const ProjectMutation = {
    projectCreateOne: ProjectTC.getResolver("createOne"),
    projectUpdateById: ProjectTC.getResolver("updateById")
}

module.exports = {ProjectQuery, ProjectMutation}