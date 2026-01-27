import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import axios from "axios";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  const { currentUser } = useContext(AuthContext);

  const [tasks, setTasks] = useState([]);
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!currentUser) return;

    const fetchTasks = async () => {
      try {
        const tokenForAuth = localStorage.getItem("authToken");
        const res = await axios.get("http://localhost:5005/task/dashboard-tasks", {
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

  useEffect(() => {
    if (!currentUser) return;

    const fetchGroups = async () => {
      try {
        const tokenForAuth = localStorage.getItem("authToken");
        const res = await axios.get("http://localhost:5005/group/all-groups", {
          headers: {
            authorization: `Bearer ${tokenForAuth}`,
          },
        });
        setGroups(res.data);
      } catch (error) {
        console.error("Failed to fetch groups", error);
      } finally {
        setLoading(false);
      }
    };
    fetchGroups();
  }, [currentUser]);

  if (loading) {
    return <p>Loading tasks...</p>;
  }
  return (
    <>
      <div>
        <h1>Dashboard</h1>
        <h2>Hi {currentUser.username}</h2>

        <h3>Your Data</h3>

        {tasks.length === 0 ? (
          <p>No tasks yet</p>
        ) : (
          <ul>
            {tasks.map((oneTask) => {
              return (
                <li key={oneTask._id}>
                  <strong>{oneTask.title}</strong>
                  <p>{oneTask.description}</p>
                  <p>{oneTask.status}</p>
                  <span>{oneTask.priority}</span>
                </li>
              );
            })}
          </ul>
        )}
        <Link to={'/task-list'}>All tasks</Link>
        <Link to={'/create-task'}>Create a task</Link>

        {groups.length === 0 ? (
          <p>No groups yet</p>
        ) : (
          <ul>
            {groups.map((oneGroup) => {
              return (
                <li key={oneGroup._id}>
                  <strong>{oneGroup.groupName}</strong>
                  <p>Members: {oneGroup.members.length}</p>
                  <p>Created by: {oneGroup.createdBy?.username}</p>
                </li>
              );
            })}
          </ul>
        )}
        <Link to={'/group-list'}>All groups</Link>
      </div>
    </>
  );
};

export default DashboardPage;
