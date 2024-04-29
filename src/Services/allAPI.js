import commonAPI from "./commonAPI"
import SERVER_URL from "./server_url"

// add video called by add componenet
export const addVideoAPI = async (video) =>
{
    return await commonAPI("POST",`${SERVER_URL}/allVideos`,video)
}

// get all video called by view componenet
export const getAllVideoAPI = async () =>
{
    return await commonAPI("GET",`${SERVER_URL}/allVideos`,"")
}

// remove all video called by videocard componenet
export const removeVideoAPI = async (videoId) =>
{
    return await commonAPI("DELETE",`${SERVER_URL}/allVideos/${videoId}`,{})
}

// savehistory called by videoCard component
export const saveHistoryAPI = async (video) =>
{
    return await commonAPI("POST",`${SERVER_URL}/history`,video)
}

// get all video history called by history componenet
export const getVideoHistoryAPI = async () =>
{
    return await commonAPI("GET",`${SERVER_URL}/history`,"")
}