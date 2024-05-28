import Role from '../../frontend/src/types/chat/Role'
import Capability from './Capability'
import KnowledgeBase from './KnowledgeBase'
import QuestionAnswer from './QuestionAnswer'


type Agent = {
    id: string
    name?: string | null
    role?: Role | null
    /* capability?: Capability | null */
    /* knowledgeBase?: KnowledgeBase | null */
    questionAnswersIds: string[]   
}

export default Agent