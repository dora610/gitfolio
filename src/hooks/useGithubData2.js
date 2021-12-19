import axios from 'axios';
import { useEffect, useState } from 'react';

const useGithubData2 = (userName = '') => {
  // TODO: add data, isLoading, error
  const [userData, setUserData] = useState(null);
  const [repoData, setRepoData] = useState(null);

  let userDataUrl = `https://api.github.com/users/${userName}`;
  let repoDataUrl = `https://api.github.com/users/${userName}/repos`;

  let startTime = 0;

  const fetchDataHandler = async (url, fn) => {
    try {
      let response = await axios.get(url);
      console.log(response);
      fn(response.data);
      console.log(Date.now() - startTime);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (userName) {
      startTime = Date.now();
      console.log(startTime);
      fetchDataHandler(userDataUrl, setUserData);
      fetchDataHandler(repoDataUrl, setRepoData);
    }
  }, [userName]);

  return [userData, repoData];
};

export default useGithubData2;
