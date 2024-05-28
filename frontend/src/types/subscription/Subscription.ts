

type Subscription = {
    
    id: string
    storyId?: string | null
    subscriberId?: string | null
    publisherId?: string | null
    subscriptionStatus?: "Pending" | "Approved-Active" | "Denied-NonActive" | null 
}

export default Subscription