import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContex } from '../context/AuthContext';
const AccountScreen = () => {
  const { signout } = useContext(AuthContex);
  return (
    <>
      <Text style={style.text}>Account Screen</Text>
      <Spacer />
      <Button title="Sign out" onPress={signout} />
      <Spacer />
    </>
  );
};

const style = StyleSheet.create({
  text: {
    fontSize: 25,
  },
});

export default AccountScreen;
