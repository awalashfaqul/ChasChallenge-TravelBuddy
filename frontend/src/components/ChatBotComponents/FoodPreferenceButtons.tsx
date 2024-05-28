import { Button } from "../ui/button"
type FoodPreferenceButtonsProps = {
    onFoodChoice: (foodPreference: string) => void
    foodPreference: string
}
export default function FoodPreferenceButtons({
    onFoodChoice,
    foodPreference,
}: FoodPreferenceButtonsProps) {
    return (
        <Button
            variant="greenOutline"
            size="prompt"
            onClick={() => onFoodChoice(foodPreference)}
        >
            {foodPreference}
        </Button>
    )
}
