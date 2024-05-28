import Rating from "../../frontend/src/types/common/Rating"
import User from "../UserOld"
import Agent from "./Agent"

type QuestionAnswer = {
    id: string
    date: Date
    userId: string
    managerAgentId: string 
    expertAgentId: string
    userQuestion1?: string | null
    expertAgentQuestion1?: string | null
    userAnswer1?: string | null
    expertAgentQuestion2?: string | null
    userAnswer2?: string | null
    expertAgentQuestion3?: string | null
    userAnswer3?: string | null
    expertAgentQuestion4?: string | null
    userAnswer4?: string | null
    expertAgentQuestion5?: string | null
    userAnswer5?: string | null
    expertAgentAnswer?: string  | null
    userRating?: Rating | null
}

export default QuestionAnswer