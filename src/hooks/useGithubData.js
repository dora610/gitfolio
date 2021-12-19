import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const useGithubData = (initialuserName = '') => {
  // TODO: add data, isLoading, error
  const [userName, setUserName] = useState(initialuserName);
  const [responseData, setResponseData] = useState({
    data: null,
    error: null,
    isLoading: false,
  });

  let userDataUrl = `https://api.github.com/users/${userName}`;
  let repoDataUrl = `https://api.github.com/users/${userName}/repos`;

  const fetchDataHandler = (url) => axios.get(url);

  useEffect(() => {
    setResponseData({
      ...responseData,
      isLoading: true,
      data: null,
      error: null,
    });
    if (userName) {
      Promise.all([
        fetchDataHandler(userDataUrl),
        fetchDataHandler(repoDataUrl),
      ])
        .then((response) => {
          console.log(response);
          setResponseData({
            ...responseData,
            isLoading: false,
            data: { userData: response[0].data, repoData: response[1].data },
          });
        })
        .catch((error) => {
          console.error(error);
          toast.error(error.message);
          setResponseData({
            ...responseData,
            isLoading: false,
            error: 'Not found',
          });
        });
    }
  }, [userName]);

  return [responseData, setUserName];
};

export default useGithubData;
