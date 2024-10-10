import { useQuery } from '@tanstack/react-query';

import { useParams } from 'react-router-dom';
import { getBooking } from '../../services/apiBookings';

export function useBooking() {
    //Get booking id from query parameters
    const { bookingId } = useParams();
    const {
        isLoading,
        data: booking,
        error,
    } = useQuery({
        queryKey: ['booking', bookingId],
        queryFn: () => getBooking(bookingId),
        retry: false, //prevent react query to try to fetch 3 times when doesn't exist
    });

    return { isLoading, booking, error };
}
