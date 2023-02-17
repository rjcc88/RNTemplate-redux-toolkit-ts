import { fetchReducerSlice } from "./fetchActionReducer";

const baseApi = '/api/ec-prints'

// list
export const fetchProjectListQuery = {
  query: () => `${baseApi}`,
  ...fetchReducerSlice
};

// get
export const fetchGetProjectQuery = {
  query: (param:any) => `${baseApi}?${param}`,
  ...fetchReducerSlice
};


export const createProjectMutation = {
  query: (body:any) => ({
    url: `${baseApi}`,
    method: 'post',
    body,
  }),
  ...fetchReducerSlice
};

export const updateProjectMutation= {
  query: ({id, body}: {id:any, body:object}) => ({
    url: `${baseApi}?${id}`,
    method: 'put',
    body: { body },
  }),
  ...fetchReducerSlice
};

export const deleteProjectMutation = {
  query: (id:any) => ({
    url: `${baseApi}?${id}`,
    method: 'delete',
  }),
  ...fetchReducerSlice
};


