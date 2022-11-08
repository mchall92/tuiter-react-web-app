import { createAsyncThunk } from "@reduxjs/toolkit"
import * as service from "./tuits-service"

export const findTuitsThunk = createAsyncThunk(
    'tuits/findTuits', async () =>
    await service.findTuits()
)

export const deleteTuitThunk = createAsyncThunk(
    'tuits/deleteTuit',
    async (tuitId) => {
        await service.deleteTuit(tuitId)
        return tuitId
    })

export const createTuitThunk = createAsyncThunk(
    'tuits/createTuit',
    async (tuit) => {
        const currentUser = {
            "userName": "MASA",
            "handle": "masa",
            "image": "javascript.png",
        };
        const templateTuit = {
            ...currentUser,
            "topic": "Space",
            "time": "Now",
            "liked": false,
            "disliked": false,
            "replies": 0,
            "retuits": 0,
            "likes": 0,
            "dislikes": 0,
        }
        const newtuit = {
            ...tuit,
            ...templateTuit,
            _id: (new Date()).getTime(),
        }
        await service.createTuit(newtuit)
        return newtuit
    })

export const updateTuitThunk = createAsyncThunk(
    'tuits/updateTuit',
    async (tuit) =>
        await service.updateTuit(tuit)
)
