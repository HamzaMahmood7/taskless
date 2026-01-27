import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext';
import axios from 'axios';

const GroupListPage = () => {

    const { currentUser } = useContext(AuthContext);

  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!currentUser) return;

    const fetchGroups = async () => {
      try {
        const tokenForAuth = localStorage.getItem("authToken");
        const res = await axios.get("http://localhost:5005/group/all-groups", {
          headers: {
            Authorization: `Bearer ${tokenForAuth}`,
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
        <h2>Hi {currentUser.username}</h2>

        <h3>Your Groups</h3>

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
      </div>
    </>
  );
};


export default GroupListPage