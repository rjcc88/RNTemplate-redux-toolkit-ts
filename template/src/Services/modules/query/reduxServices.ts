import { fetchProjectListQuery, fetchGetProjectQuery, createProjectMutation, updateProjectMutation, deleteProjectMutation } from './fetchProjectService';
import { apiSlice } from '@/Services/api/apiSlice'



export const fetchApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    fetchProjectList: build.query(fetchProjectListQuery),
    fetchGetProject: build.query(fetchGetProjectQuery),
    createProject: build.mutation(createProjectMutation),
    updateProject: build.mutation(updateProjectMutation),
    deleteProject: build.mutation(deleteProjectMutation),
  }),
})

 export const { useFetchProjectListQuery, useFetchGetProjectQuery, useCreateProjectMutation, useUpdateProjectMutation, useDeleteProjectMutation } = fetchApi;

