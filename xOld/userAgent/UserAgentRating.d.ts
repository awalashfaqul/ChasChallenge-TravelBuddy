import Rating from "../common/Rating"
import User from "../../../../xOld/UserOld"
import Agent from "./Agent"
import QuestionAnswer from "./QuestionAnswer"


type UserAgentRating = {
    userId: string
    interactionAgentId: string
    expertAgentId: string
    questionAnswerId: string
    rating: Rating 
    date: Date
}

export default UserAgentRating