// import React from 'react';
// import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native';

// const { width } = Dimensions.get('window');

// const RegisterForm = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Hey there,</Text>
//       <Text style={styles.subtitle}>Create an Account</Text>
//       <TextInput placeholder="Full Name" style={styles.input} />
//       <TextInput placeholder="Phone Number" style={styles.input} />
//       <TextInput placeholder="Email" style={styles.input} />
//       <TextInput placeholder="Password" secureTextEntry style={styles.input} />
//       <View style={styles.termsContainer}>
//         <Text style={styles.termsText}>By continuing you accept our</Text>
//         <TouchableOpacity>
//           <Text style={styles.termsLink}> Privacy Policy</Text>
//         </TouchableOpacity>
//         <Text style={styles.termsText}> and</Text>
//         <TouchableOpacity>
//           <Text style={styles.termsLink}> Term of Use</Text>
//         </TouchableOpacity>
//       </View>
//       <TouchableOpacity onPress={() => {}} style={styles.button}>
//         <Text style={styles.buttonText}>Register</Text>
//       </TouchableOpacity>
//       <Text style={styles.orText}>Or</Text>
//       <View style={styles.socialContainer}>
//         <TouchableOpacity onPress={() => {}} style={styles.socialButton}>
//           <Text style={styles.socialButtonText}>G</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => {}} style={styles.socialButton}>
//           <Text style={styles.socialButtonText}>F</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     paddingHorizontal: 20,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 10,
//   },
//   subtitle: {
//     fontSize: 18,
//     color: '#aaa',
//     marginBottom: 30,
//   },
//   input: {
//     width: width * 0.8,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: '#f1f1f1',
//     paddingHorizontal: 20,
//     marginBottom: 15,
//   },
//   termsContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//     marginBottom: 20,
//   },
//   termsText: {
//     fontSize: 14,
//     color: '#aaa',
//   },
//   termsLink: {
//     fontSize: 14,
//     color: '#8e44ad',
//   },
//   button: {
//     width: width * 0.8,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: '#8e44ad',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   orText: {
//     fontSize: 16,
//     color: '#aaa',
//     marginBottom: 20,
//   },
//   socialContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: width * 0.4,
//     marginBottom: 20,
//   },
//   socialButton: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: '#f1f1f1',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   socialButtonText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//   },
// });

// export default RegisterForm;
