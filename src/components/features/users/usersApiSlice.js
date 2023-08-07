import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [],
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getAllUsers: state => {
      // return users????
    },
  },
})

export const { getAllUsers } = usersSlice.actions
export default usersSlice.reducer

// import { createSelector, createEntityAdapter } from '@reduxjs/toolkit'
// import { apiSlice } from '../../../app/api/apiSlice'

// const usersAdapter = createEntityAdapter({})

// const initialState = usersAdapter({})

// export const usersApiSlice = apiSlice.injectEndpoints({
//   endpoints: builder => ({
//     getUsers: builder.query({
//       query: () => '/users',
//       validateStatus: (response, result) => {
//         return response.status === 200 && !result.isError
//       },
//       // keepUnusedDataFor: 5,
//       transformResponse: responseData => {
//         const loadedUsers = responseData.map(user => {
//           user.id = user._id
//           return user
//         })
//         return usersAdapter.setAll(initialState, loadedUsers)
//       },
//       provideTags: (result, error, arg) => {
//         if (result?.ids) {
//           return [
//             { type: 'User', id: 'LIST' },
//             ...result.ids.map(id => ({ type: 'User', id })),
//           ]
//         }
//       },
//     }),
//   }),
// })

// export const { useGetUsersQuery } = usersApiSlice

// // returns the query result object
// export const selectUserResult = usersApiSlice.endpoints.getUsers.select()

// // creates a memoized selector
// const selectUserData = createSelector(
//   selectUserResult,
//   usersResult => usersResult.data // normalized state object with ids & entities
// )
// // getSelectors creates these selectors and we rename them with aliases
// export const {
//   selectAll: selectAllUsers,
//   selectById: selectUsersById,
//   selectIds: selectUserIds,
// } = usersAdapter.getSelectors(state => selectUserData(state) ?? initialState)
