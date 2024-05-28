import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

type ProfileDetailsSectionProps = {}

// Komponent för att visa användarinformation och profildetaljer
const ProfileDetailsSection: React.FC<ProfileDetailsSectionProps> = () => {
    return (
        <div className="flex w-full flex-col items-start gap-4 text-secondary">
            <p className="text-xl text-primary">Username</p>
            <div className="flex w-full max-w-96 flex-col">
                <Label className="gap-2 text-secondary">Name *</Label>
                <Input placeholder="Enter Your Public Name" />
            </div>
            <div className="flex w-full max-w-96 flex-col">
                <Label className="gap-2 text-secondary">Name *</Label>
                <Input placeholder="Enter Your Name" />
            </div>
            <div className="flex w-full max-w-96 flex-col">
                <Label className="gap-2 text-secondary">Phone number *</Label>
                <Input placeholder="Enter Your Phone Number" />
            </div>
            <div className="flex w-full max-w-96 flex-col">
                <Label className="gap-2 text-secondary">Email *</Label>
                <Input placeholder="Enter Your Email" />
            </div>
        </div>
    )
}

export default ProfileDetailsSection
