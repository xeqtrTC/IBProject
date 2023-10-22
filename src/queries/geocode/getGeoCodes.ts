import axiosSettings from "../axiosSettings"
export const getGeoCodes = async (address: string) => {
    const response = await axiosSettings.get(`geocode/json`, {
        params: {
            address: address
        }
    })
    return response
}

