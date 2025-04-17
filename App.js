import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const Login = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textinput}
        placeholder="Kullanıcı adı, e-posta ya da telefon"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.textinput}
        placeholder="Şifre"
        secureTextEntry
      />
      <Pressable style={styles.button}>
        <Text style={styles.buttontext}>Giriş</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinput: {
    borderWidth: 1,
    textAlign: 'center',
    width: '90%',
    height: 50,
    marginVertical: 10,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    paddingHorizontal: 5,
  },
  button: {
    borderWidth: 1,
    width: '90%',
    height: 50,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
  },
  buttontext: {
    fontWeight: 'bold', // boş bırakılmıştı, düzeltildi
  },
});

export default Login;
