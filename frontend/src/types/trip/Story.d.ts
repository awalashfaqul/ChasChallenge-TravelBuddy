import Rating from "../common/Rating"


type Story = {
    id: string
    tripId: string
    heading?: string | null,
    initialComment?: string | null,
    sectionIds?: string[],
    finalComment?: string | null, 
    rating?: Rating,
    review?: string | null,
    recipientIds?: string[],  // userIds
    likesNumber?: number,
}

export default Story

