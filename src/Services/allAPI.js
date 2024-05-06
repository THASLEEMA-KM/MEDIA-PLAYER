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

// removehistory called by history Component
export const removeHistoryAPI = async (videoId) =>
{
    return await commonAPI("DELETE",`${SERVER_URL}/history/${videoId}`,{})
}

// add category called by category component
export const addCategoryAPI = async (categoryDeatils) =>
{
    return await commonAPI("POST",`${SERVER_URL}/allCategory`,categoryDeatils)
}

// get category called by category component
export const getCategoryAPI = async () =>
{
    return await commonAPI("GET",`${SERVER_URL}/allCategory`,"")
}


// delete category calledby category component
export const removeCategoryAPI = async (categoryId) =>
{
    return await commonAPI("DELETE",`${SERVER_URL}/allCategory/${categoryId}`,{})
}


// get video from videocard called by category component
export const getVideoAPI = async (videoId)=>
{
    return await commonAPI("GET",`${SERVER_URL}/allVideos/${videoId}`,"")
}

// updating category called by category Component
export const updateCategoryAPI = async (categoryId,categoryDeatils) =>
{
    return await commonAPI("PUT",`${SERVER_URL}/allCategory/${categoryId}`,categoryDeatils)
}

// get a category called by category component
export const getSingleCategoryAPI = async (categoryId) =>
{
    return await commonAPI("GET",`${SERVER_URL}/allCategory/${categoryId}`,"")
}