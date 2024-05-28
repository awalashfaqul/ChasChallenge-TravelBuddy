import Rating from '../common/Rating'

type Section = {
    id: string
    storyId: string | null,
    mediaUrl?: string | null,
    mediaCaption?: string | null,
    text?: string | null,
    rating?: Rating | null,
    likesNumber?: number,
}

export default StorySection