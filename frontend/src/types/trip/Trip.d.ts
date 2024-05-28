

type Trip = {
    id: string
    tripStatus?:    "Dreaming" |
                    "Researching" |
                    "Planning" |
                    "Booking" |
                    "Booked" |
                    "Travelling to destination" |
                    "At destination" |
                    "Travelling home" |     
                    "Trip done" 
    destinationIds: string[],   // addressIds
    travellerIds: string[],     // userIds
    fromDate?: Date | null,
    toDate?: Date | null,
}

export default Trip