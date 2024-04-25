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