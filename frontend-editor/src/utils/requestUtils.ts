import axios from "axios";

const baseURL = "http://localhost:1000/tree/guide";

export async function getData(path: string) {
  console.log("path", path);
  try {
    console.log(path);
    const url = `${baseURL}/${path}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error: any) {
    console.log("error", error);
    throw new Error(
      error?.message ||
        error.response.data ||
        error.response.statusText ||
        error.response.status ||
        "Error while fetching data"
    );
  }
}

export async function postData(path: string, data: any) {
  try {
    const url = `${baseURL}/${path}`;
    const response = await axios.post(url, data);
    return response.data;
  } catch (error: any) {
    console.log("error", error);
    throw new Error(
      error?.message ||
        error.response.data ||
        error.response.statusText ||
        error.response.status ||
        "Error Adding Data"
    );
  }
}

export async function patchData(path: string, data: Record<string, any>) {
  try {
    const url = `${baseURL}/${path}`;
    const response = await axios.patch(url, data);
    return response.data;
  } catch (error: any) {
    console.log("error", error);
    throw new Error(
      error?.message ||
        error.response.data ||
        error.response.statusText ||
        error.response.status ||
        "Error Updating Data"
    );
  }
}

export async function deleteData(path: string, query = {}) {
  try {
    const url = `${baseURL}/${path}`;
    const response = await axios.delete(url, { params: query });
    return response.data;
  } catch (error: any) {
    console.log("error", error);
    throw new Error(
      error?.message ||
        error.response.data ||
        error.response.statusText ||
        error.response.status ||
        "Error Deleting Data"
    );
  }
}
