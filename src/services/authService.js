import axios from 'axios';

export const authRegister = async (formRegister) => {
  const res = await axios.post('http://localhost:8080/api/v1/auth/register', formRegister, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res;
};

export const usernameExist = async (username) => {
  const res = await axios.get(
    `http://localhost:8080/api/v1/auth/username/exist?username=${username}`,
  );
  if (res.data.data) {
    return Promise.reject('Username already exist');
  } else {
    return Promise.resolve();
  }
};

/**
 * Promise.all([])
 *
 * Promise.reject(); <-> rejected
 *
 * Promise.resolve(); <-> fulfilled
 *
 */
