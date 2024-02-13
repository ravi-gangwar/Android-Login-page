import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
const truePage = () => {
  const [state, setState] = useState(true);


  const [email,setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const handletrue = () => {
    console.log("Logging in with:", username, password);
  };

  const handleChangeState = () => {
    setState(!state);
  }

  return (
    <View style={styles.container}>
    <LinearGradient
      colors={['#9e1f63', '#392d91']}
      start={{ x: 0, y: 1 }}
      end={{ x: 0, y: 0 }}   
      style={styles.container}
    >
      <Text style={styles.title}>{state === true ? "LogIn" : "Sign Up"}</Text>
      { state === true ? 
      <>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        /> 
        <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        />
      </>
      :
      <>
        <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
        <TextInput
        style={styles.input}
        placeholder="Email Address"
        value={email}
        onChangeText={(text) => setEmail(text)}
        />
        <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        />
        <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmpassword}
        onChangeText={(text) => setConfirmPassword(text)}
        secureTextEntry
        />
      </> 

    }
      <TouchableOpacity style={styles.button} onPress={handletrue}>
        <Text style={styles.buttonText}>
        {
        state === true ? 
        "Login"
        : 
        "Sign up"
        }
        </Text>
      </TouchableOpacity>
      <View>
      <TouchableOpacity onPress={handleChangeState}>
      {
        state === true ? 
        <Text>
        Have not account <Text style={{ fontWeight: 'bold', color: 'red', textDecorationLine: "underline"}}>Sign Up</Text> here!
      </Text>
        : 
        <Text>Already have account <Text style={{ fontWeight: 'bold', color: 'red', textDecorationLine: "underline"}}>Login</Text>  here</Text>
        }
        </TouchableOpacity>
      </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  containers: {
    height: '100%', 
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    height: '100%', 
    width: '100%',
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "red"
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: "red"
  },
  button: {
    width: "80%",
    height: 40,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default truePage;
