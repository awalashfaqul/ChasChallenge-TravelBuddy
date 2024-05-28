import React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "@/store/store"
import {
    toggleAccommodationPreference,
    toggleDietPreference,
    toggleFoodPreference,
    toggleTransportationPreference,
    toggleVacationPreference,
    updatePreferredCurrency,
    updateBudgetPreference,
} from "@/store/slices/userSlice"
import Currency from "@/types/common/Currency"
import BudgetPreference from "@/types/user/BudgetPreference"
import BudgetPreferencesSection from "./BudgetPreferencesSection"
import ProfileDetailsSection from "./ProfileDetailsSection"
import PreferencesSection from "./PreferencesSection"

const ProfileSettings: React.FC = () => {
    const dispatch = useDispatch()
    const accommodationPreferenceList = useSelector(
        (state: RootState) => state.user.preferences.accomodation,
    )
    const dietPreferenceList = useSelector(
        (state: RootState) => state.user.preferences.diet,
    )
    const foodPreferenceList = useSelector(
        (state: RootState) => state.user.preferences.food,
    )
    const transportationPreferenceList = useSelector(
        (state: RootState) => state.user.preferences.transportation,
    )
    const vacationPreferenceList = useSelector(
        (state: RootState) => state.user.preferences.vacation,
    )
    const budgetPreferenceList = useSelector(
        (state: RootState) => state.user.preferences.budget,
    )
    const preferredCurrency = useSelector(
        (state: RootState) => state.user.settings.preferredCurrency,
    )
    const currencyList = useSelector(
        (state: RootState) => state.common.currencies,
    )

    const handleToggleAccommodationPreference = (id: number) => {
        dispatch(toggleAccommodationPreference(id))
    }
    const handleToggleDietPreference = (id: number) => {
        dispatch(toggleDietPreference(id))
    }
    const handleToggleFoodPreference = (id: number) => {
        dispatch(toggleFoodPreference(id))
    }
    const handleToggleTransportationPreference = (id: number) => {
        dispatch(toggleTransportationPreference(id))
    }
    const handleToggleVacationPreference = (id: number) => {
        dispatch(toggleVacationPreference(id))
    }
    const handlePreferredCurrencySelected = (currency: Currency) => {
        dispatch(updatePreferredCurrency(currency))
    }
    const handleBudgetPreferenceUpdated = (
        budgetPreference: BudgetPreference,
    ) => {
        dispatch(updateBudgetPreference(budgetPreference))
    }

    return (
        <main className="flex min-h-screen items-start justify-center mb-10">
            <div className="relative flex w-11/12 max-w-96 flex-col items-center justify-center gap-6">
                <div className="flex justify-center pt-28">
                    <h1 className="text-2xl font-bold">Profile settings</h1>
                </div>

                {/* Username and Profile Information */}
                <ProfileDetailsSection />
                <p className="self-start text-xl">Preferences</p>
                {/* Preferences Sections */}
                <PreferencesSection
                    title="Accommodation"
                    items={accommodationPreferenceList}
                    handleToggle={handleToggleAccommodationPreference}
                    accordionKey="accommodation"
                />

                <PreferencesSection
                    title="Dietary"
                    items={dietPreferenceList}
                    handleToggle={handleToggleDietPreference}
                    accordionKey="dietary"
                />

                <PreferencesSection
                    title="Food"
                    items={foodPreferenceList}
                    handleToggle={handleToggleFoodPreference}
                    accordionKey="food"
                />

                <PreferencesSection
                    title="Transportation"
                    items={transportationPreferenceList}
                    handleToggle={handleToggleTransportationPreference}
                    accordionKey="transportation"
                />

                <PreferencesSection
                    title="Vacation"
                    items={vacationPreferenceList}
                    handleToggle={handleToggleVacationPreference}
                    accordionKey="vacation"
                />

                {/* Budget Preferences */}
                <BudgetPreferencesSection
                    budgetPreferenceList={budgetPreferenceList}
                    handleBudgetPreferenceUpdated={
                        handleBudgetPreferenceUpdated
                    }
                />

                {/* Select Currency */}
                <div className="flex w-full flex-col text-secondary">
                    <p className="text-xl">Preferred Currency</p>
                    <Select
                        value={preferredCurrency!.code!}
                        /* onValueChange={() => handlePreferredCurrencySelected(currency)} */
                    >
                        <SelectTrigger className="flex h-12 w-full border-outline placeholder:text-onBackground placeholder:opacity-50">
                            <SelectValue placeholder="Select your preferred currency" />
                        </SelectTrigger>
                        <SelectContent>
                            {currencyList.map((currency) => (
                                <SelectItem
                                    key={currency.id}
                                    value={currency.code!}
                                    onChange={() =>
                                        handlePreferredCurrencySelected(
                                            currency,
                                        )
                                    }
                                    /* TODO: selected={preferredCurrency.code === currency.code} TODO:*/
                                >
                                    {currency.code} ({currency.label})
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                {/* Save Changes Button */}
                <Link className="w-full" to="/profilestart">
                    <Button className="flex w-full max-w-96 items-center justify-center gap-2 p-3">
                        Save changes
                    </Button>
                </Link>
            </div>
        </main>
    )
}

export default ProfileSettings
