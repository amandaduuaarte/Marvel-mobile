import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Character = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text> Personagem tal </Text>
      <TouchableOpacity onPress={() => navigation.navigate('home')}>
        <Text> Voltar para home</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Character;
