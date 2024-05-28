import { Button } from "../ui/button"
type ChatButtonsProps = {
    onFoodChoice: (foodPreference: string) => void
    foodPreference: string
    onCloseButtonContainer: () => void
    key: number
}
export default function ChatButtons({
    onFoodChoice,
    foodPreference,
    onCloseButtonContainer,
}: ChatButtonsProps) {
    return (
        <Button
            variant="greenOutline"
            size="prompt"
            onClick={() => {
                onFoodChoice(foodPreference)
                onCloseButtonContainer()
            }}
        >
            {foodPreference}
        </Button>
    )
}
