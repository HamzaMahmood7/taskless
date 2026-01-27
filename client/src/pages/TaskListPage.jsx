import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import axios from "axios";
import { Link } from "react-router-dom";

const TaskListPage = () => {
  const { currentUser } = useContext(AuthContext);

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!currentUser) return;

    const fetchTasks = async () => {
      try {
        const tokenForAuth = localStorage.getItem("authToken");
        const res = await axios.get("http://localhost:5005/task/all-tasks", {
          headers: {
            authorization: `Bearer ${tokenForAuth}`,
          },
        });
        setTasks(res.data);
      } catch (error) {
        console.error("Failed to fetch tasks", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, [currentUser]);

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  return (
    <>
      <div>
        <h2>Hi {currentUser.username}</h2>

        <h3>Your tasks</h3>

        {tasks.length === 0 ? (
          <p>No tasks yet</p>
        ) : (
          <ul>
            {tasks.map((oneTask) => {
              return (
                <div key={oneTask._id}>
                  <li>
                    <strong>{oneTask.title}</strong>
                    <p>{oneTask.description}</p>
                    <p>{oneTask.status}</p>
                    <span>{oneTask.priority}</span>
                  </li>

                  <Link to={`/update-task/${oneTask._id}`}>Update Task</Link>
                  <button>Delete Task</button>
                </div>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
};

export default TaskListPage;
