import { Accordion } from "@/components/ui/accordion"
import { AccordionItem } from "@/components/ui/accordion"
import { AccordionTrigger } from "@/components/ui/accordion"
import { AccordionContent } from "@/components/ui/accordion"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import BudgetPreference from "@/types/user/BudgetPreference"

type BudgetPreferencesSectionProps = {
    budgetPreferenceList: BudgetPreference[]
    handleBudgetPreferenceUpdated: (budgetPreference: BudgetPreference) => void
}

// Komponent för att visa budgetpreferenser
const BudgetPreferencesSection: React.FC<BudgetPreferencesSectionProps> = ({
    budgetPreferenceList,
    handleBudgetPreferenceUpdated,
}) => {
    return (
        <div className="flex w-full flex-col text-secondary">
            <p className="text-xl">My budget preferences</p>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>My budget preferences</AccordionTrigger>
                    <AccordionContent>
                        {budgetPreferenceList.map((item) => (
                            <div
                                className="flex w-full max-w-96 flex-col"
                                key={item.id}
                            >
                                <Label className="gap-2 text-secondary">
                                    {item.label}
                                </Label>
                                <Input
                                    key={item.id}
                                    onChange={() =>
                                        handleBudgetPreferenceUpdated(item)
                                    }
                                    placeholder="Enter the amount here"
                                />
                            </div>
                        ))}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default BudgetPreferencesSection
