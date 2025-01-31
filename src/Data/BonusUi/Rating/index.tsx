export const StarRatingData = [
  {
    text: "Use",
    code: "  main-star-rating",
  },
  {
    text: " class to set default rating.",
  },
];

export const StrokeStarRatingData = [
  {
    text: "Use",
    code: "star-box1",
  },
  {
    text: " class to set stroke rating.",
  },
];

export const getRatingText = (rating: number): string => {
  switch (rating) {
    case 1:
      return "Simple and effective";
    case 2:
      return "Great value!";
    case 3:
      return "High-quality product";
    case 4:
      return "Will definitely order again";
    case 5:
      return "Delicious and satisfying";
    default:
      return "";
  }
};

export const StarMessageRatingSpan = [
  {
    text: "Use",
    code: "msg-emojis-wrapper",
  },
  {
    text: "class to set star with message rating.",
  },
];

export const getMessage = (rating: number) => {
  switch (rating) {
    case 5:
      return "Excellent";
    case 4:
      return "Very Good";
    case 3:
      return "Good";
    case 2:
      return "Fair";
    case 1:
      return "Poor";
    default:
      return "Rate the product";
  }
};

export const ResetRatingSpan = [
  {
    text: "Use",
    code: "reset-rating",
  },
  {
    text: "class to set and reset rating.",
  },
];

export const SliderEmojiRatingSpan = [
  {
    text: "Use",
    code: "stars",
  },
  {
    text: "class to set slider emoji ratings.",
  },
];

export const RangeRatingSpan = [
  {
    text: "Use",
    code: " emoji__face",
  },
  {
    text: "class to set all expression of emoji.",
  },
];

export const HalfStarRatingsData = [
  {
    text: "Use",
    code: "half-star-rating",
  },
  {
    text: " class to set a half rating for any star.",
  },
];

export const AnimatedRatingData = [
  {
    text: "Use",
    code: "angry, sad, ok, good, happy",
  },
  {
    text: "classes to set emoji ratings.",
  },
];

export const ratingItems = [
  { className: "angry", eyeClass: true, mouthClass: true },
  { className: "sad", eyeClass: true, mouthClass: true },
  { className: "ok", eyeClass: false, mouthClass: false },
  { className: "good ", eyeClass: true, mouthClass: true },
  { className: "happy", eyeClass: true, mouthClass: false },
];

export const AnimatedHeartRatingData = [
  {
    text: "Use",
    code: "rating-system3",
  },
  {
    text: "class to set heart with message rating.",
  },
];
