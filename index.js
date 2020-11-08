function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    // Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
    completeTask: function() {
      task.complete = true;
    },

    // Print the state of a task to the console in a nice readable way
    // prints out the provided task's details
    logTaskState: function(task) {
      console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
    }
  };
  return task;
}

// DRIVER CODE CHANGES BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed
