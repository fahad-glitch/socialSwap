import axios from "axios";
const queryString = require("query-string");

export const uploadURL = "";
// export const baseURL ="http://192.168.0.108:9000";
export const baseURL = "https://social-swap-backend-66ee5c12998a.herokuapp.com/api";

export const postRequest = async (url, body = {}, headers = {}, token) => {
  let xform = queryString.stringify(body);
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/x-www-form-urlencoded",
      ...headers,
    },
  };

  let returnValue;

  await axios
    .post(baseURL + url, xform, config)
    .then((result) => {
      returnValue = { result: result, error: null };
    })
    .catch((err) => {
      returnValue = { result: null, error: err };
    });
  return returnValue;
};

export const postRequestForm = async (url, token, body = {}, headers = {}) => {

  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
      ...headers,
    },
  };

  let returnValue;

  await axios
    .post(baseURL + url, body, config)
    .then((result) => {
      returnValue = { result: result, error: null };
    })
    .catch((err) => {
      returnValue = { result: null, error: err };
    });
  return returnValue;
};

export const postWithParams = async (url, token, params = {}, headers = {}) => {
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/x-www-form-urlencoded",
      ...headers,
    },
    params: {
      ...params,
    },
  };

  let returnValue;

  await axios
    .post(baseURL + url, {}, config)
    .then((result) => {
      returnValue = { result: result, error: null };
    })
    .catch((err) => {
      returnValue = { result: null, error: err };
    });
  return returnValue;
};

export const getRequest = async (url, token, params = {}, headers = {}) => {
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/x-www-form-urlencoded",
      ...headers,
    },
    params: {
      ...params,
    },
  };

  let returnValue;

  await axios
    .get(baseURL + url, config)
    .then((result) => {
      returnValue = { result: result, error: null };
    })
    .catch((err) => {
      returnValue = { result: null, error: err };
    });
  return returnValue;
};

export const putRequestForm = async (url, token, body = {}, headers = {}) => {
  let config = "";
  if (token) {
    config = {
      headers: {
        Authorization: `Bearer ${token}`,
        ...headers,
      },
    };
  }
  let returnValue;

  await axios
    .put(baseURL + url, body, config)
    .then((result) => {
      returnValue = { result: result, error: null };
    })
    .catch((err) => {
      returnValue = { result: null, error: err };
    });
  return returnValue;
};

export const putRequest = async (
  url,
  token,
  body,
  params = {},
  headers = {}
) => {
  let xform = queryString.stringify(body);
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/x-www-form-urlencoded",
      ...headers,
    },
    params: {
      ...params,
    },
  };

  let returnValue;

  await axios
    .put(baseURL + url, xform, config)
    .then((result) => {
      returnValue = { result: result, error: null };
    })
    .catch((err) => {
      returnValue = { result: null, error: err };
    });
  return returnValue;
};
