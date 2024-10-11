import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { deleteBooking as deleteBookingAPI } from '../../services/apiBookings';

export function useDeleteBooking() {
    const queryClient = useQueryClient(); // access to the query client instance

    const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
        mutationFn: deleteBookingAPI,
        onSuccess: () => {
            toast.success('Booking successfully deleted');
            // when a query is invalidated it will fetch the data again
            queryClient.invalidateQueries({
                queryKey: ['bookings'],
            });
        },
        onError: (err) => toast.error(err.message),
    });
    return { isDeleting, deleteBooking };
}
