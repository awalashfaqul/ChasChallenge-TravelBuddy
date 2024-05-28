/* /* import Country from "../common/Country"
import Gender from "../common/Gender"
import Language from "../common/Language" */
/* 
type User = {
    id: string | null;
    profile: {
        firstName: string | null;
        lastName?: string | null;
        email?: string | null;
        mobilePhone?: string | null;
        phone?: string | null;
        address?: {
            streetName?: string | null;
            houseNumber?: string | null;
            houseName?: string | null;
            apartmentBlock?: string | null;
            floor?: string | null;
            apartmentNumber?: string | null;
            postOfficeBoxNumber?: string | null;
            city?: string | null;
            postalCode?: string | null;
            state?: string | null;
            country?: string | null;
        };
        facebook?: string | null;
        instagram?: string | null;
        x?: string | null;
        linkedIn?: string | null;
        ticToc?: string | null;
    };

    settings: {
        emailForUserName: string;
        password: string;
        emailForAccountRecovery: string;
        emailForNotifications: string | null;
        publicName: string;
        publicAvatarUrl?: string | null;
        language: "en"; // DEVELOPMENT POTENTIAL
        currency: "USD" | "EUR" | "SEK"; //TODO:
        timezone: string | null; // TODO:
        unitSystem: "metric"; // DEVELOPMENT POTENTIAL
        notificationsAreEnabled: boolean;
        subscriptionsAutoRenew: boolean;
        notificationsViaEmail: boolean;
        notificationViaAppMessage: boolean;
        mode: "light" | "dark";
        // twoFactorAuthentication?: boolean | null
        // accessibilityTextSize?: number | null
        // subscriptionIds?: string[]
    };
    personalInfo: {
        dateOfBirth?: Date | null;
        gender?: "Female" | "Male" | "Non-binary" | "Transgender" | null;
        partnerId?: string | null;
        childrenIds?: string[];
        grandChildrenIds?: string[];
        parentIds?: string[];
        siblingIds?: string[];
        friendIds?: string[];
        colleagueIds?: string[];
    };
    preferences: {
        accomodation: {
            bedAndBreakfast?: boolean;
            boatOrHouseboat?: boolean;
            boutiqueHotel?: boolean;
            cabinOrChalet?: boolean;
            campground?: boolean;
            ecoLodge?: boolean;
            farmStay?: boolean;
            glamping?: boolean;
            guesthouse?: boolean;
            homestay?: boolean;
            hotel?: boolean;
            hostel?: boolean;
            luxuryHotel?: boolean;
            motel?: boolean;
            resort?: boolean;
            safariLodge?: boolean;
            servicedApartment?: boolean;
            treehouseAccommodation?: boolean;
            vacationRental?: boolean;
            youthHostel?: boolean;
        };
        budget: {
            maxAccommodationPricePerNight?: number | null;
            maxFoodExpense?: number | null;
            maxDrinkExpense?: number | null;
            maxTransportationExpense?: number | null;
            maxEntertainmentExpense?: number | null;
            maxTotalBudget?: number | null;
        };
        dietary: {
            vegetarian: boolean;
            lactoVegetarian: boolean;
            ovoVegetarian: boolean;
            lactoOvo: boolean;
            pescatarian: boolean;
            vegan: boolean;
            rawVegan: boolean;
            kosher: boolean;
            halal: boolean;
            jain: boolean;
            hindu: boolean;
            glutenFree: boolean;
            dairyFree: boolean;
            nutFree: boolean;
            soyFree: boolean;
            shellFree: boolean;
            eggFree: boolean;
            sugarFree: boolean;
            lowCarb: boolean;
            lowFat: boolean;
            lowSodium: boolean;
            paleo: boolean;
            ketogenic: boolean;
        };
        allergies: {
            peanutAllergy: boolean;
            treeNutAllergy: boolean;
            shellfishAllergy: boolean;
            dairyAllergy: boolean;
            eggAllergy: boolean;
            soyAllergy: boolean;
            wheatAllergy: boolean;
            glutenAllergy: boolean;
        };
        food: [
            { prefer?: boolean | null; food: string },
            { prefer?: boolean | null; food: string },
            { prefer?: boolean | null; food: string },
            { prefer?: boolean | null; food: string },
            { prefer?: boolean | null; food: string },
            { prefer?: boolean | null; food: string },
            { prefer?: boolean | null; food: string },
            { prefer?: boolean | null; food: string },
            { prefer?: boolean | null; food: string },
            { prefer?: boolean | null; food: string },
            { prefer?: boolean | null; food: string },
            { prefer?: boolean | null; food: string },
            { prefer?: boolean | null; food: string },
            { prefer?: boolean | null; food: string },
            { prefer?: boolean | null; food: string },
            { prefer?: boolean | null; food: string },
            { prefer?: boolean | null; food: string },
            { prefer?: boolean | null; food: string },
            { prefer?: boolean | null; food: string },
            { prefer?: boolean | null; food: string },
            { prefer?: boolean | null; food: string },
            { prefer?: boolean | null; food: string }
        ];
        foodDishes: {
            hamburger?: boolean | null;
            pasta?: boolean | null;
            pizza?: boolean | null;
            seaFood?: boolean | null;
        };
        drinks: {
            beer: boolean;
            cocktails: boolean;
            coffee: boolean;
            energyDrinks: boolean;
            juice: boolean;
            milkshakes: boolean;
            mocktails: boolean;
            smoothies: boolean;
            soda: boolean;
            tea: boolean;
            water: boolean;
            whiskey: boolean;
            wine: boolean;
        };
        transportation: {
            airplane: boolean;
            bicycle: boolean;
            boat: boolean;
            bus: boolean;
            car: boolean;
            motorcycle: boolean;
            publicTransport: boolean;
            recreationalVehicle: boolean;
            rideshare: boolean;
            taxi: boolean;
            train: boolean;
            walking: boolean;
        };
        vacationType: {
            adventureTravel: boolean;
            backpackingAndBudgetTravel: boolean;
            beachVacations: boolean;
            cityBreaks: boolean;
            cruiseVacations: boolean;
            culturalExperiences: boolean;
            ecoTourism: boolean;
            familyFriendlyDestinations: boolean;
            festivalAndEventTourism: boolean;
            foodAndCulinaryTourism: boolean;
            historicalAndHeritageTourism: boolean;
            luxuryTravel: boolean;
            outdoorAndNatureExploration: boolean;
            photographyAndArtFocusedTravel: boolean;
            roadTrips: boolean;
            skiingAndSnowboardingTrips: boolean;
            soloTravel: boolean;
            volunteerAndCommunityBasedTourism: boolean;
            wellnessAndSpaRetreats: boolean;
            wildlifeAndSafariExperiences: boolean;
        };
    };
    disabilities: {
        noDisabilty?: boolean | null;
        visualImpairment?: boolean | null;
        hearingImpairment?: boolean | null;
        speechImpairment?: boolean | null;
        mobilityImpairment?: boolean | null;
        cognitiveDisabilities?: boolean | null;
        neurologicalDisorders?: boolean | null;
        otherDisabilities?: boolean | null;
        commentOnDisabilities?: string | null;
    };
    sessionInfo: {
        isLoggedIn: boolean;
        isLoading: boolean;
        messageToUser: string | null;
    };
};

export default User; */
 