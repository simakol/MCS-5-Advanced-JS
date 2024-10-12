const BASE_URL = 'https://670a1f2baf1a3998baa31c3f.mockapi.io';

const getTasks = () => {
  return fetch(`${BASE_URL}/todos`).then(res => {
    if (!res.ok) {
      throw new Error(`Error while getting tasks: ${res.status}`);
    }

    return res.json();
  });
};

const postNewTask = task => {
  const options = {
    method: 'POST',
    body: JSON.stringify(task),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return fetch(`${BASE_URL}/todos`, options).then(res => {
    if (!res.ok) {
      throw new Error(`Error while posting task: ${res.status}`);
    }

    return res.json();
  });
};

const deleteTask = id => {
  const options = {
    method: 'DELETE',
  };

  return fetch(`${BASE_URL}/todos/${id}`, options).then(res => {
    if (!res.ok) {
      throw new Error(`Error while deleting task ${id}: ${res.status}`);
    }

    return res.json();
  });
};

const updateTask = (id, updatedTask) => {
  const options = {
    method: 'PUT',
    body: JSON.stringify(updatedTask),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return fetch(`${BASE_URL}/todos/${id}`, options).then(res => {
    if (!res.ok) {
      throw new Error(`Error while updating task ${id}: ${res.status}`);
    }

    return res.json();
  });
};

export { getTasks, postNewTask, deleteTask, updateTask };
