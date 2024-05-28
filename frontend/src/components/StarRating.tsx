import React, { useState } from "react"

interface StarRatingProps {
    onChange: (rating: number) => void
}

const StarRating: React.FC<StarRatingProps> = ({ onChange }) => {
    const [rating, setRating] = useState<number>(0)
    const totalStars = 5

    const handleStarClick = (value: number) => {
        if (value === rating) {
            setRating(0)
        } else {
            setRating(value)
        }
        if (onChange) {
            onChange(value)
        }
    }

    const renderStars = () => {
        const stars = []
        for (let i = 1; i <= totalStars; i++) {
            const filled = i <= rating
            stars.push(
                <img
                    key={i}
                    src={
                        filled
                            ? "./icons/Icon-star-filled.svg"
                            : "./icons/Icon-star-empty.svg"
                    }
                    alt={`Star ${i}`}
                    className="cursor-pointer"
                    onClick={() => handleStarClick(i)}
                />,
            )
        }
        return stars
    }

    return (
        <div className="flex flex-col items-center gap-2 py-4">
            <div className="flex gap-1">{renderStars()}</div>
            <div className="text-secondary">
                {rating} / {totalStars}
            </div>
        </div>
    )
}

export default StarRating
