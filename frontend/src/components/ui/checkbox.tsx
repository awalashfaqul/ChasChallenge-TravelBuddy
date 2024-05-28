//@ts-nocheck
import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const checkboxVariants = cva(
    "h-9 w-9 shrink-0 rounded-md border border-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
    {
        variants: {
            color: {
                primary:
                    "data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
                destructive:
                    "data-[state=checked]:bg-destructive data-[state=checked]:text-destructive-foreground",
                neutral:
                    "data-[state=checked]:bg-neutral data-[state=checked]:text-primary",
            },
            shape: {
                circle: "border-none",
                square: "rounded-sm w-7 h-7",
            },
        },
        defaultVariants: {
            color: "primary",
            shape: "circle",
        },
    },
)

export interface CheckboxProps
    extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
        VariantProps<typeof checkboxVariants> {
    color?: "primary" | "destructive" | "neutral"
    shape?: "circle" | "square"
    children?: React.ReactNode
}

const Checkbox = React.forwardRef<
    React.ElementRef<typeof CheckboxPrimitive.Root>,
    CheckboxProps
>(({ className, children, color, shape, ...props }, ref) => {
    const checked = props.checked

    return (
        <label
            className={cn(
                "flex flex-row-reverse items-center justify-between",
                className,
            )}
        >
            <CheckboxPrimitive.Root
                ref={ref}
                className={cn(
                    checkboxVariants({ color, shape, state: checked }),
                    "flex-none",
                )}
                {...props}
            >
                <CheckboxPrimitive.Indicator className="flex items-center justify-center text-current">
                    <Check className="h-5 w-5" />
                </CheckboxPrimitive.Indicator>
            </CheckboxPrimitive.Root>
            {children && (
                <span
                    className={cn(
                        "cursor-pointer select-none",
                        checked ? "text-primary" : "text-neutral",
                    )}
                >
                    {children}
                </span>
            )}
        </label>
    )
})

Checkbox.displayName = "Checkbox"

export { Checkbox, checkboxVariants }
