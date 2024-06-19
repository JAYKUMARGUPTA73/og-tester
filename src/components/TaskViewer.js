import React, { useState } from "react";
import usePageSeo from "../hooks";

export const TaskViewer = () => {



  const initialTaskList = [
    { id: 1, task: "Leetcode daily question", deadline: "11:00am" },
    { id: 2, task: "watch Ai lectures", deadline: "4:00pm" },
  ];

  const [taskList, setTaskList] = useState(initialTaskList);
  const [newTask, setNewTask] = useState("");
  const [newDeadline, setNewDeadline] = useState("");
  const [editMode, setEditMode] = useState(null);

  const addTask = () => {
    if (newTask !== "" && newDeadline !== "") {
      const newId = taskList.length + 1;
      const newTaskItem = { id: newId, task: newTask, deadline: newDeadline };
      setTaskList([...taskList, newTaskItem]);
      setNewTask("");
      setNewDeadline("");
    }
  };

  const deleteTask = (id) => {
    const indexToRemove = taskList.findIndex(task => task.id === id);
    if (indexToRemove !== -1) {
        const updatedTaskList = [...taskList];
        updatedTaskList.splice(indexToRemove, 1);
        setTaskList(updatedTaskList);
    }
};

  const editTask = (id, updatedTask, updatedDeadline) => {
    //if both field will be updated 
    if (updatedTask && updatedDeadline) {
      const updatedTaskList = taskList.map((task) =>
        task.id === id
          ? { ...task, task: updatedTask, deadline: updatedDeadline }
          : task
      );
      setTaskList(updatedTaskList);
      setEditMode(null);
    }
    //if only task is updated
    if (updatedTask) {
        const updatedTaskList = taskList.map((task) =>
          task.id === id
            ? { ...task, task: updatedTask, deadline: task.deadline }
            : task
        );
        setTaskList(updatedTaskList);
        setEditMode(null);
      }
      //if only deadline is updated
      if (updatedDeadline) {
        const updatedTaskList = taskList.map((task) =>
          task.id === id
            ? { ...task, task: task.task, deadline: updatedDeadline }
            : task
        );
        setTaskList(updatedTaskList);
        setEditMode(null);
      }
    setEditMode(null);
  };

  return (
    <div className="task-viewer-container">
      <h1>To Do List Maker</h1>
      <div>
        {taskList.map((item) => (
          <div key={item.id} className="task-item">
            {editMode === item.id ? (
              <>
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder={item.task}
                />
                <input
                  type="text"
                  value={newDeadline}
                  onChange={(e) => setNewDeadline(e.target.value)}
                  placeholder={item.deadline}
                />
                <button onClick={() => editTask(item.id, newTask, newDeadline)}>
                  Save
                </button>
              </>
            ) : (
              <>
                <div style={{ display: "flex" }}>
                  <h3>{item.task}</h3>
                  <h5>{item.deadline}</h5>
                </div>
                <div>
                  <button onClick={() => setEditMode(item.id)}>Edit</button>
                  <button
                    style={{background:'red'}}
                    onClick={() => deleteTask(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <div
        className="task-item button"
        style={{ position: "fixed", bottom: 100, right: 50, width: "90%" }}
      >
        <input
          type="text"
          value={editMode === null ? newTask : ""}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter task"
        />
        <input
          type="text"
          value={editMode === null ? newDeadline : ""}
          onChange={(e) => setNewDeadline(e.target.value)}
          placeholder="Enter deadline"
        />
        <button onClick={addTask}>Add Task</button>
      </div>
    </div>
  );
};
