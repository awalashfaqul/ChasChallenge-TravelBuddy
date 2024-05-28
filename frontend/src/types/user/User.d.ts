
import Language from "../common/Language" 
import Gender from "../common/Gender"
import CurrencyCode from "../common/Currency"
import BudgetPreference from "./BudgetPreference"

type User = {
    id: string | null
    profile: Profile
    settings: Settings
    preferences: Preferences
    disabilities: Disabilities
    sessionInfo: SessionInfo
}

type Address = {
    city?: string | null
    country?: string | null
}


type AccommodationPreference = {
    id: number
    label: string
    selected: boolean
}

type AccommodationPreferences = AccommodationPreference[]




type BudgetPreferences = BudgetPreference[]


type DietPreference = {
    id: number
    label: string
    selected: boolean
}

type DietPreferences = DietPreference[]


type FoodPreference = {
    id:number
    selected: boolean
    label: string
}


type FoodPreferences = FoodPreference[]


type TransportationPreference = {
    id: number
    label: string
    selected: boolean
}

type TransportationPreferences = TransportationPreference[]


type VacationPreference = {
    id: number
    label: string
    selected: boolean
}

type VacationPreferences = VacationPreference[]


type Disability = {
    id: number
    label: string
    selected: boolean
}

type Disabilities = Disability[]


type SessionInfo = {
    isLoggedIn: boolean
    isLoading: boolean
    messageToUser: string | null
}

type Profile = {
    firstName: string | null
    lastName?: string | null
    gender: Gender
    address: Address
}

type Settings = {
    email: string | null
    password: string
    publicName: string
    publicAvatarUrl?: string | null
    language: "en"
    preferredCurrency: Currency | null
}

// TODO:  update gender type below
type PersonalInfo = {
    dateOfBirth?: Date | null
    gender?: Gender | null
    partnerId?: string | null
    childrenIds?: string[]
    grandChildrenIds?: string[]
    parentIds?: string[]
    siblingIds?: string[]
    friendIds?: string[]
    colleagueIds?: string[]
}

type Preferences = {
    accomodation: AccommodationPreferences
    budget: BudgetPreferences
    diet: DietPreferences
    food: FoodPreferences
    transportation: TransportationPreferences
    vacation: VacationPreferences
}




export default User



