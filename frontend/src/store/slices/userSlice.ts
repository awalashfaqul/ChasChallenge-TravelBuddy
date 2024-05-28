import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit" // För att typa action.payload i reducer-funktioner
import User from "../../types/user/User"
import Currency from "@/types/common/Currency"
import BudgetPreference from "@/types/user/BudgetPreference"
import Gender from "@/types/common/Gender"

// Initial state

const initialState: User = {
    id: null,
    profile: {
        firstName: "",
        lastName: "",
        gender: {
            id: 0,
            label: "",
        },
        address: {
            city: "",
            country: "",
        },
    },
    settings: {
        email: "",
        password: "",
        publicName: "",
        publicAvatarUrl: "",
        language: "en",

        preferredCurrency: {
            id: 1,
            label: "US-Dollar",
            code: "USD",
            currencyPerUsd: 1.0,
        },
    },
    preferences: {
        accomodation: [
            {
                id: 1,
                label: "Bed & Breakfast",
                selected: false,
            },
            {
                id: 2,
                label: "Boat or Houseboat",
                selected: false,
            },
            {
                id: 3,
                label: "Boutique Hotel",
                selected: false,
            },
            {
                id: 4,
                label: "Cabin or Chalet",
                selected: false,
            },
            {
                id: 5,
                label: "Campground",
                selected: false,
            },
            {
                id: 6,
                label: "Eco Lodge",
                selected: false,
            },
            {
                id: 7,
                label: "Farm Stay",
                selected: false,
            },
            {
                id: 8,
                label: "Glamping",
                selected: false,
            },
            {
                id: 9,
                label: "Guesthouse",
                selected: false,
            },
            {
                id: 10,
                label: "Homestay",
                selected: false,
            },
            {
                id: 11,
                label: "Hotel",
                selected: false,
            },
            {
                id: 12,
                label: "Hostel",
                selected: false,
            },
            {
                id: 13,
                label: "Luxury Hotel",
                selected: false,
            },
            {
                id: 14,
                label: "Motel",
                selected: false,
            },
            {
                id: 15,
                label: "Resort",
                selected: false,
            },
            {
                id: 16,
                label: "Safari Lodge",
                selected: false,
            },
            {
                id: 17,
                label: "Serviced Apartment",
                selected: false,
            },
            {
                id: 18,
                label: "Treehouse Accommodation",
                selected: false,
            },
            {
                id: 19,
                label: "Vacation Rental",
                selected: false,
            },
            {
                id: 20,
                label: "Youth Hostel",
                selected: false,
            },
        ],
        budget: [
            {
                id: 1,
                label: "Total Vacation Budget per person",
                amount: 1000,
            },
            {
                id: 2,
                label: "Transporation Budget per person",
                amount: 300,
            },
            {
                id: 3,
                label: "Accommodation Budget per person",
                amount: null,
            },
            {
                id: 4,
                label: "Food & Drink Budget per person",
                amount: null,
            },
            {
                id: 5,
                label: "Entertainment Budget per person",
                amount: null,
            },
            {
                id: 6,
                label: "Other Budget per person",
                amount: null,
            },
            {
                id: 7,
                label: "Restaurant Price per meal",
                amount: null,
            },
        ],
        diet: [
            {
                id: 1,
                label: "Vegetarian",
                selected: false,
            },
            {
                id: 2,
                label: "Lacto Vegetarian",
                selected: false,
            },
            {
                id: 3,
                label: "Ovo Vegetarian",
                selected: false,
            },
            {
                id: 4,
                label: "Lacto Ovo",
                selected: false,
            },
            {
                id: 5,
                label: "Pescatarian",
                selected: false,
            },
            {
                id: 6,
                label: "Vegan",
                selected: false,
            },
            {
                id: 7,
                label: "Raw Vegan",
                selected: false,
            },
            {
                id: 8,
                label: "Kosher",
                selected: false,
            },
            {
                id: 9,
                label: "Halal",
                selected: false,
            },
            {
                id: 10,
                label: "Jain",
                selected: false,
            },
            {
                id: 11,
                label: "Hindu",
                selected: false,
            },
            {
                id: 12,
                label: "Gluten Free",
                selected: false,
            },
            {
                id: 13,
                label: "Dairy Free",
                selected: false,
            },
            {
                id: 14,
                label: "Nut Free",
                selected: false,
            },
            {
                id: 15,
                label: "Soy Free",
                selected: false,
            },
            {
                id: 16,
                label: "Shell Free",
                selected: false,
            },
            {
                id: 17,
                label: "Egg Free",
                selected: false,
            },
            {
                id: 18,
                label: "Sugar Free",
                selected: false,
            },
            {
                id: 19,
                label: "Low Carb",
                selected: false,
            },
            {
                id: 20,
                label: "Low Fat",
                selected: false,
            },
            {
                id: 21,
                label: "Low Sodium",
                selected: false,
            },
            {
                id: 22,
                label: "Paleo",
                selected: false,
            },
            {
                id: 23,
                label: "Ketogenic",
                selected: false,
            },
        ],
        food: [
            {
                id: 1,
                selected: false,
                label: "American",
            },
            {
                id: 2,
                selected: false,
                label: "Australian",
            },
            {
                id: 3,
                selected: false,
                label: "Brazilian",
            },
            {
                id: 4,
                selected: false,
                label: "British",
            },
            {
                id: 5,
                selected: false,
                label: "Cajun Creole",
            },
            {
                id: 6,
                selected: false,
                label: "Caribbean",
            },
            {
                id: 7,
                selected: false,
                label: "Chinese",
            },
            {
                id: 8,
                selected: false,
                label: "Ethiopian",
            },
            {
                id: 9,
                selected: false,
                label: "French",
            },
            {
                id: 10,
                selected: false,
                label: "German",
            },
            {
                id: 11,
                selected: false,
                label: "Greek",
            },
            {
                id: 12,
                selected: false,
                label: "Indian",
            },
            {
                id: 13,
                selected: false,
                label: "Italian",
            },
            {
                id: 14,
                selected: false,
                label: "Japanese",
            },
            {
                id: 15,
                selected: false,
                label: "Korean",
            },
            {
                id: 16,
                selected: false,
                label: "Mexican",
            },
            {
                id: 17,
                selected: false,
                label: "Middle Eastern",
            },
            {
                id: 18,
                selected: false,
                label: "Spanish",
            },
            {
                id: 19,
                selected: false,
                label: "Thai",
            },
            {
                id: 20,
                selected: false,
                label: "Vietnamese",
            },
            {
                id: 21,
                selected: false,
                label: "Mediterranean",
            },
        ],
        transportation: [
            {
                id: 1,
                label: "Airplane",
                selected: false,
            },
            {
                id: 2,
                label: "Bicycle",
                selected: false,
            },
            {
                id: 3,
                label: "Boat",
                selected: false,
            },
            {
                id: 4,
                label: "Bus",
                selected: false,
            },
            {
                id: 5,
                label: "Car",
                selected: false,
            },
            {
                id: 6,
                label: "Motorcycle",
                selected: false,
            },
            {
                id: 7,
                label: "Public Transport",
                selected: false,
            },
            {
                id: 8,
                label: "Recreational Vehicle",
                selected: false,
            },
            {
                id: 9,
                label: "Rideshare",
                selected: false,
            },
            {
                id: 10,
                label: "Taxi",
                selected: false,
            },
            {
                id: 11,
                label: "Train",
                selected: false,
            },
            {
                id: 12,
                label: "Walking",
                selected: false,
            },
        ],
        vacation: [
            {
                id: 1,
                label: "Adventure Travel",
                selected: false,
            },
            {
                id: 2,
                label: "Backpacking and Budget Travel",
                selected: false,
            },
            {
                id: 3,
                label: "Beach Vacations",
                selected: false,
            },
            {
                id: 4,
                label: "City Breaks",
                selected: false,
            },
            {
                id: 5,
                label: "Cruise Vacations",
                selected: false,
            },
            {
                id: 6,
                label: "Cultural Experiences",
                selected: false,
            },
            {
                id: 7,
                label: "Eco-Tourism",
                selected: false,
            },
            {
                id: 8,
                label: "Family-Friendly Destinations",
                selected: false,
            },
            {
                id: 9,
                label: "Festival and Event Tourism",
                selected: false,
            },
            {
                id: 10,
                label: "Food and Culinary Tourism",
                selected: false,
            },
            {
                id: 11,
                label: "Historical and Heritage Tourism",
                selected: false,
            },
            {
                id: 12,
                label: "Luxury Travel",
                selected: false,
            },
            {
                id: 13,
                label: "Outdoor and Nature Exploration",
                selected: false,
            },
            {
                id: 14,
                label: "Photography and Art-Focused Travel",
                selected: false,
            },
            {
                id: 15,
                label: "Road Trips",
                selected: false,
            },
            {
                id: 16,
                label: "Skiing and Snowboarding Trips",
                selected: false,
            },
            {
                id: 17,
                label: "Solo Travel",
                selected: false,
            },
            {
                id: 18,
                label: "Volunteer and Community-Based Tourism",
                selected: false,
            },
            {
                id: 19,
                label: "Wellness and Spa Retreats",
                selected: false,
            },
            {
                id: 20,
                label: "Wildlife and Safari Experiences",
                selected: false,
            },
        ],
    },
    disabilities: [
        {
            id: 1,
            label: "No Disability",
            selected: false,
        },
        {
            id: 2,
            label: "Visual Impairment",
            selected: false,
        },
        {
            id: 3,
            label: "Hearing Impairment",
            selected: false,
        },
        {
            id: 4,
            label: "Speech Impairment",
            selected: false,
        },
        {
            id: 5,
            label: "Mobility Impairment",
            selected: false,
        },
        {
            id: 6,
            label: "Cognitive Disabilities",
            selected: false,
        },
        {
            id: 7,
            label: "Neurological Disorders",
            selected: false,
        },
        {
            id: 8,
            label: "Other Disabilities",
            selected: false,
        },
    ],
    sessionInfo: {
        isLoggedIn: false,
        isLoading: false,
        messageToUser: "",
    },
}

// X-Slice med reducer-funktioner
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateUser: (state, action: PayloadAction<User>) => {
            console.log(
                "action.payload in updateUser in slice: ",
                action.payload,
            )
            state.profile = action.payload.profile
            state.preferences = action.payload.preferences
            state.disabilities = action.payload.disabilities
            state.settings = action.payload.settings
            state.sessionInfo = action.payload.sessionInfo
        },
        loginUser: (state) => {
            state.sessionInfo.isLoggedIn = true
        },
        signOutUser: (state) => {
            state.sessionInfo.isLoggedIn = false
        },
        updateUserId: (state, action: PayloadAction<User>) => {
            state.id = action.payload.id
        },
        updateSessionInfo: (
            state,
            action: PayloadAction<User["sessionInfo"]>,
        ) => {
            state.sessionInfo = action.payload
        },
        updateIsLoading: (state, action: PayloadAction<boolean>) => {
            state.sessionInfo.isLoading = action.payload
        },
        updateMessageToUser: (state, action: PayloadAction<string>) => {
            state.sessionInfo.messageToUser = action.payload
        },
        updateIsLoggedIn: (state, action: PayloadAction<boolean>) => {
            state.sessionInfo.isLoggedIn = action.payload
        },
        toggleFoodPreference: (state, action: PayloadAction<number>) => {
            const id = action.payload
            return {
                ...state,
                preferences: {
                    ...state.preferences,
                    food: state.preferences.food.map((item) =>
                        item.id === id
                            ? { ...item, selected: !item.selected }
                            : item,
                    ),
                },
            }
        },
        toggleAccommodationPreference: (
            state,
            action: PayloadAction<number>,
        ) => {
            const id = action.payload
            return {
                ...state,
                preferences: {
                    ...state.preferences,
                    accomodation: state.preferences.accomodation.map((item) =>
                        item.id === id
                            ? { ...item, selected: !item.selected }
                            : item,
                    ),
                },
            }
        },
        toggleDietPreference: (state, action: PayloadAction<number>) => {
            const id = action.payload
            return {
                ...state,
                preferences: {
                    ...state.preferences,
                    diet: state.preferences.diet.map((item) =>
                        item.id === id
                            ? { ...item, selected: !item.selected }
                            : item,
                    ),
                },
            }
        },
        toggleTransportationPreference: (
            state,
            action: PayloadAction<number>,
        ) => {
            const id = action.payload
            return {
                ...state,
                preferences: {
                    ...state.preferences,
                    transportation: state.preferences.transportation.map(
                        (item) =>
                            item.id === id
                                ? { ...item, selected: !item.selected }
                                : item,
                    ),
                },
            }
        },
        toggleVacationPreference: (state, action: PayloadAction<number>) => {
            const id = action.payload
            return {
                ...state,
                preferences: {
                    ...state.preferences,
                    vacation: state.preferences.vacation.map((item) =>
                        item.id === id
                            ? { ...item, selected: !item.selected }
                            : item,
                    ),
                },
            }
        },
        updateBudgetPreference: (
            state,
            action: PayloadAction<BudgetPreference>,
        ) => {
            const budgetPreference = action.payload
            console.log("budgetPreference:", budgetPreference)
            return {
                ...state,
                preferences: {
                    ...state.preferences,
                    budget: state.preferences.budget.map((item) =>
                        item.id === budgetPreference.id
                            ? { ...item, amount: budgetPreference.amount }
                            : item,
                    ),
                },
            }
        },
        updatePreferredCurrency: (state, action: PayloadAction<Currency>) => {
            state.settings.preferredCurrency = action.payload
        },
        addBasicUserProfileInfo: (
            state,
            action: PayloadAction<{
                firstName: string
                lastName: string
                city: string
                country: string
                gender: Gender
            }>,
        ) => {
            // update state
            state.profile.firstName = action.payload.firstName
            state.profile.lastName = action.payload.lastName
            state.profile.address.city = action.payload.city
            state.profile.address.country = action.payload.country
            state.profile.gender = action.payload.gender
        },
    },

    //  extraReducers är en reducer som kan hantera actions från andra slices eller från createAsyncThunk
    // builder är ett objekt som innehåller metoder för att lägga till case reducers
    // med addCase kan vi fånga upp olika action från den asynkrona hämtningen (pending, fulfilled, rejected)
    // https://redux-toolkit.js.org/api/createAsyncThunk
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state) => {
            state = initialState
            state.sessionInfo.isLoading = true
            state.sessionInfo.messageToUser = "Loading user profile data..."
        })
        builder.addCase(
            fetchUser.fulfilled,
            (state, action: PayloadAction<User>) => {
                //console.log("action.payload in fetchJobs.fulfilled:", action.payload);
                //console.log("state.allJobs in fetchJobs.fulfilled ex ante... ",state.allJobs);
                // TODO:
                state = action.payload
                state.sessionInfo.isLoading = false
            },
        )
        builder.addCase(fetchUser.rejected, (state) => {
            state.sessionInfo.isLoading = false
            state.sessionInfo.messageToUser =
                "The user profile cannot be loaded. Please try again later."
            console.error("Error fetching user data")
        })
    },
})

// createAsyncThunk tar två argument, ett namn och en funktion som returnerar en promise
export const fetchUser = createAsyncThunk(
    "user/fetchUser",
    async (urlEndpoint: string) => {
        const response: Response = await fetch(urlEndpoint)
        if (!response.ok) {
            throw new Error("Failed to fetch user")
        } else {
            const data = await response.json()
            console.log("data.hits TODO: in fetchUser function:", data.hits)
            const fetchedUser: User = data.hits // TODO: CHECKA 'hits'
            return fetchedUser
        }
    },
)

// Exporterar alla actionfunktioner
export const {
    updateUser,
    updateUserId,
    updateIsLoggedIn,
    toggleAccommodationPreference,
    toggleDietPreference,
    toggleFoodPreference,
    toggleTransportationPreference,
    toggleVacationPreference,
    updatePreferredCurrency,
    updateBudgetPreference,
    updateSessionInfo,
    addBasicUserProfileInfo,
    updateIsLoading,
    updateMessageToUser,
    loginUser,
    signOutUser,
} = userSlice.actions
// Exporterar reducern
export default userSlice.reducer

/* if (!localStorage.getItem("favouriteJobs")) {
  localStorage.setItem("favouriteJobs", JSON.stringify([]));
}
if (!localStorage.getItem("currentSkillsOperand")) {
  localStorage.setItem("currentSkillsOperand", JSON.stringify("OCH"));
}
if (!localStorage.getItem("currentWorkingHoursTypeLabel")) {
  localStorage.setItem("currentWorkingHoursTypeLabel", JSON.stringify("Heltid"));
}
if (!localStorage.getItem("currentSkillsFilters")) {
  localStorage.setItem("currentSkillsFilters", JSON.stringify([]));
}
if (!localStorage.getItem("currentLocationFilters")) {
  localStorage.setItem("currentLocationFilters", JSON.stringify([]));
}
if (!localStorage.getItem("maxSearchResultsChosen")) {
  localStorage.setItem("maxSearchResultsChosen", JSON.stringify(10));
} */

/* const favouriteJobsFromLocalStorage = JSON.parse(localStorage.getItem("favouriteJobs")!);
const currentSkillsOperand = JSON.parse(localStorage.getItem("currentSkillsOperand")!);
const currentWorkingHoursTypeLabel = JSON.parse(localStorage.getItem("currentWorkingHoursTypeLabel")!);

const currentSkillsFilters = JSON.parse(localStorage.getItem("currentSkillsFilters")!);
const currentLocationFilters = JSON.parse(localStorage.getItem("currentLocationFilters")!);
const maxSearchResultsChosen = Number(JSON.parse(localStorage.getItem("maxSearchResultsChosen")!))
 */

/*     updatePersonalInfo: (state, action: PayloadAction<Job[]>) =>{
      state.favouriteJobs = action.payload
      localStorage.setItem("favouriteJobs", JSON.stringify(action.payload))
    },
    updateCurrentLocationFilters: (state, action: PayloadAction<string[]>) => {
      state.currentLocationFilters = action.payload
      localStorage.setItem("currentLocationFilters", JSON.stringify(action.payload))
      console.log("currentLocationFilters action.payload in searchJobsSlice reducer:", action.payload);
      console.log("currentLocationFilters in searchJobsSlice reducer:", state.currentLocationFilters);
    },
    updateCurrentSkillsFilters: (state, action: PayloadAction<string[]>) => {
      console.log("state.currentSkillsFilters in reducer before updating", state.currentSkillsFilters);
      state.currentSkillsFilters = action.payload
      localStorage.setItem("currentSkillsFilters", JSON.stringify(action.payload))
      console.log("currentSkillsFilters action.payload in searchJobsSlice reducer:", action.payload);
      console.log("currentSkillsFilters in searchJobsSlice reducer:", state.currentSkillsFilters);
    },
    updateCurrentSkillsOperand: (state, action: PayloadAction<SearchJobsState['currentSkillsOperand']>)  => {
      state.currentSkillsOperand = action.payload
      localStorage.setItem("currentSkillsOperand", JSON.stringify(action.payload))
      console.log("action.payload in updateCurrentSkillsOperand in searchJobsSlice:", action.payload);
      console.log("currentSkillsOperand in updateCurrentSkillsOperand in searchJobsSlice:", state.currentSkillsOperand);
    },
    updateCurrentWorkingHoursTypeLabel: (state, action: PayloadAction<string>)  => {
      state.currentWorkingHoursTypeLabel= action.payload
      localStorage.setItem("currentWorkingHoursTypeLabel", JSON.stringify(action.payload))
      console.log("action.payload in updateCurrentWorkingHoursTypeLabel in searchJobsSlice:", action.payload);
      console.log("currentWorkingHoursTypeLabel in updateCurrentWorkingHoursTypeLabel in searchJobsSlice:", state.currentWorkingHoursTypeLabel);
    },
    updateMessageToUser: (state, action: PayloadAction<string>) => {
      state.messageToUser = action.payload
    },
    clearAllCurrentFilters: (state) => {
      state.currentLocationFilters = []
      state.currentSkillsFilters = []
      state.currentSkillsOperand = "ELLER"
    },
    updateMaxSearchResultsChosen: (state, action: PayloadAction<number>) => {
      state.maxSearchResultsChosen = action.payload
    }, */

/* if(state.allJobs.length === 0){
        state.messageToUser = "Sorry, there are no such jobs available."
      } else {
        state.messageToUser = ""
      }
      console.log("state.allJobs after update:", state.allJobs); 
       */
// If all filters are empty, set currentJobs to allJobs
/* const stateCurrentSkillsFilters = [...state.currentSkillsFilters]  
      const stateCurrentLocationFilters = [...state.currentLocationFilters] 
      const stateCurrentSkillsOperand = state.currentSkillsOperand  // no shallow copy needed 
      console.log("stateCurrentSkillsFilters in fetchJobs reducer:",stateCurrentSkillsFilters);
      console.log("stateCurrentLocationFilters in fetchJobs reducer:",stateCurrentLocationFilters)
      console.log("stateCurrentSkillsOperand in fetchJobs-reducer: ",stateCurrentSkillsOperand);
       */
/*  if((!stateCurrentSkillsFilters && !stateCurrentLocationFilters) || (stateCurrentSkillsOperand === "ELLER")){
        state.currentJobs = state.allJobs
        state.numberOfHits = state.allJobs.length
      } else if (stateCurrentSkillsOperand === "OCH"){

          console.log("state.currentSkillsFilters in OCH:",stateCurrentSkillsFilters);
          const newCurrentJobs: Job[] = state.allJobs.filter((job: Job) => {
            return stateCurrentSkillsFilters.every(filterValue => job.description.text?.toLowerCase()!.includes(filterValue.toLowerCase())); 
          });
          state.currentJobs = newCurrentJobs 
          state.numberOfHits = newCurrentJobs.length
      } else {
          console.log("Error: CurrentSkillsOperand is not working");
          throw new Error
      } 
      console.log("state.currentJobs after update:", state.currentJobs);
      */
