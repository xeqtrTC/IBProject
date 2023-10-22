import { AxiosResponse } from "axios"
import { getGeoCodes } from "../queries/geocode/getGeoCodes"

interface validStopsProps {
    destinationLat: number,
    destinationLng: number
}

const useGeoGode = () => {

    const handleGeoCodeStops = async (stops: string[]): Promise<validStopsProps[]> => {
        const validStops: Set<string> = new Set();
    
        try {
            for (const markerStops of stops) {
                if (markerStops.length > 3) {
                    const response = await getGeoCodes(markerStops);
    
                    if (response.data.status === 'OK' && response.data.results.length > 0) {
                        const { lng: destinationLng, lat: destinationLat } = response.data.results[0].geometry.location;
                        
                        // Use a unique key for the Set (e.g., a concatenated string of lat and lng)
                        const key = `${destinationLat}-${destinationLng}`;
    
                        validStops.add(key);
                    }
                }
            }
    
            // Convert the Set back to an array of validStopsProps
            const uniqueValidStops = Array.from(validStops).map((key) => {
                const [destinationLat, destinationLng] = key.split('-');
                return {
                    destinationLat: parseFloat(destinationLat),
                    destinationLng: parseFloat(destinationLng),
                };
            });
    
            return uniqueValidStops;
        } catch (error: unknown) {
            throw error;
        }
    };

    const handleGeoCodeSingle = async (address: string): Promise<AxiosResponse<any, any>> => {
        try {
            const response = await getGeoCodes(address);
            return response
        } catch (error: unknown) {
            throw error
        }
    }

    return {
        handleGeoCodeStops,
        handleGeoCodeSingle
    }
}

export default useGeoGode