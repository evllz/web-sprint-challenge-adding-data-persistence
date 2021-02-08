// build your `Task` model here
const db = require("../../data/dbConfig");

function find() {
  return db("tasks");
}

async function findById(id) {
  try {
    const task = await db.select("*").from("tasks").where({ id });
    task.map((item) => {
      if (item.completed === 1) {
        item.completed = true;
      } else {
        item.completed = false;
      }
      return item.completed;
    });
    return task;
  } catch (error) {
    return error;
  }
}

async function insert(newTask) {
  try {
    const taskId = await db("tasks").insert(newTask);
    return findById(taskId);
  } catch (error) {
    return error;
  }
}

module.exports = {
  find,
  findById,
  insert,
};
