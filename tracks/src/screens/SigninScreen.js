import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../context/AuthContext';

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText="Sign in to your account"
        errorMessage={state.errorMessage}
        submitButtonText="Sign In"
        // onSubmit={({ email, password }) => signup({ email, password })}
        onSubmit={signin}
      />
      <NavLink
        routeName="Signup"
        text="Don't have an account? Sign up instead"
      />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 220,
  },
});

export default SigninScreen;
