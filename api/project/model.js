// build your `Project` model here
const db = require("../../data/dbConfig");

function find() {
  return db("projects");
}

async function findById(id) {
  try {
    const project = await db.select("*").from("projects").where({ id });
    project.map((item) => {
      if (item.completed === 1) {
        item.completed = true;
      } else {
        item.completed = false;
      }
      return item.completed;
    });
    return project;
  } catch (error) {
    return error;
  }
}

function insert(newProject) {
  return db("projects").insert(newProject);
}

module.exports = {
  find,
  findById,
  insert,
};
