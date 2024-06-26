import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    count: 0,
    message: 0,
    order: 0,
    notification: 0,
}

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        clearNotification: (state) => {
            state.count = 0
            state.message = 0
            state.order = 0
            state.notification = 0
        },
        setNotification: (state, action) => {
            state.notification = action.payload.notification ?? 0
            state.message = action.payload.message ?? 0
        },
        updateNotification: (state, action) => {
            if (action?.payload?.message) {
                if (action?.payload?.message == -1) {
                    state.message = null
                } else {
                    state.message++
                }
            }
            if (action?.payload?.book) {
                if (action?.payload?.book == -1) {
                    state.book = 0
                } else {
                    state.book++
                }
            }

            if (action?.payload?.order) {
                if (action?.payload?.order == -1) {
                    state.order = 0
                } else {
                    state.order++
                }
            }
            if (action?.payload?.notification) {
                if (action?.payload?.notification == -1) {
                    state.notification = 0
                } else {
                    state.notification++
                }
            }
            let count = state.book + state.order + state.message + state.notification
            state.count = count > 0 ? count : 0
        },
    },
})

export const { updateNotification, clearNotification, setNotification } = notificationSlice.actions

export default notificationSlice.reducer