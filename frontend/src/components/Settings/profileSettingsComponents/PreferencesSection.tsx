import { Accordion } from "@/components/ui/accordion"
import { AccordionItem } from "@/components/ui/accordion"
import { AccordionTrigger } from "@/components/ui/accordion"
import { AccordionContent } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"

type PreferencesSectionProps = {
    title: string
    items: any[] // Använd den specifika typen här
    handleToggle: (id: number) => void
    accordionKey: string
}

// Komponent för att visa preferenser (inkluderar Accordion)
const PreferencesSection: React.FC<PreferencesSectionProps> = ({
    title,
    items,
    handleToggle,
    accordionKey,
}) => {
    return (
        <div className="flex w-full flex-col text-secondary">
            <Accordion type="single" collapsible>
                <AccordionItem value={accordionKey}>
                    <AccordionTrigger>{title}</AccordionTrigger>
                    <AccordionContent>
                        {items.map((item, index) => (
                            <Checkbox
                                key={item.id}
                                checked={item.selected}
                                color="neutral"
                                className={`h-14 border-secondary ${
                                    // Ta bort bottengränsen för sista elementet
                                    index === items.length - 1
                                        ? "border-b-0"
                                        : "border-b"
                                }`}
                                onCheckedChange={() => handleToggle(item.id)}
                            >
                                {item.label}
                            </Checkbox>
                        ))}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default PreferencesSection
