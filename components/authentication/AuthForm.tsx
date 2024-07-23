// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import LoginForm from './LoginForm';
// import RegisterForm from './RegisterForm';

// const AuthForm = () => {
//   const [isLogin, setIsLogin] = useState(true);

//   return (
//     <View style={styles.container}>
//       {isLogin ? <LoginForm /> : <RegisterForm />}
//       <TouchableOpacity onPress={() => setIsLogin(!isLogin)} style={styles.switchButton}>
//         <Text style={styles.switchButtonText}>
//           {isLogin ? 'Don’t have an account? Register' : 'Already have an account? Login'}
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   switchButton: {
//     marginTop: 20,
//   },
//   switchButtonText: {
//     color: '#8e44ad',
//     fontWeight: 'bold',
//     marginBottom: 60,

//   },
// });

// export default AuthForm;
