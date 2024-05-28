import User from "../../../../xOld/UserOld"
import UserPreferencePrompts from "./UserPreferencesPrompt"
import UserAgentRating from "./UserAgentRating"
import HistoricalQuestionAnswers from "./QuestionAnswers"
import Agent from "./Agent"


type UserAgent = {
    id: string 
    userId: string 
    managerAgentId: string
    expertAgentId: string
    userPreferencesPrompt: UserPreferencesPrompt 
    historicalQuestionAnswers: string[]  // List of 
    userAgentRatings: UserAgentRating[]
}

export default UserAgent