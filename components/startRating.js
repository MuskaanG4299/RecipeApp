import React from 'react';
import { View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const StarRating = () => {
  // Hardcoded default rating value
  const defaultRating = 4.5;

  // Calculate the number of filled stars
  const filledStars = Math.floor(defaultRating);
  // Determine whether to display a half star
  const halfStar = defaultRating - filledStars >= 0.5 ? 1 : 0;

  return (
    <View style={{ flexDirection: 'row' }}>
      {[...Array(filledStars)].map((_, index) => (
        <FontAwesome key={index} name="star" size={24} color="#FFD700" />
      ))}
      {halfStar === 1 && (
        <FontAwesome name="star-half-full" size={24} color="#FFD700" />
      )}
    </View>
  );
};

export default StarRating;
