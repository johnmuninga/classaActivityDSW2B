import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import { Button, TextInput } from "react-native";

export default function App() {
  // const [ counter, setCounter] = useState(0);
  const [ todo, setToDo ] = useState();
  const [ todos, setToDos ] = useState([]);

  return (
    <SafeAreaView style={styles.container} >
      <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true} >
        {/* create an app to add to to list */}
        <View style={{marginVertical: 10}} >
          <TextInput placeholder='Add to do task' placeholderTextColor={'#555'} 
            onChangeText={text => setToDo(text) } />
        </View>

        <View >
          <Button title={"Add To Do"} onPress={() => setToDos([...todos, todo])  } />
          {/* <Button title={"add To do"} onPress={() => setToDos(todos.push(todo))  } /> */}
        </View>
        {/* show the to dos */}
        <View style={{ marginVertical: 5,  }} >
          {
            todos.map((todo_, index) => (
              <View style={{marginVertical: 10, 
                alignItems:"center", backgroundColor:"#0f0"}} key={index} >
                <Text >{todo_}</Text>
              </View>
            ))
          }
        </View>





      {/* app counter start */}
      {/* <View style={styles.text_container} >
        <Text style={styles.text} >{counter}</Text>
      </View>

      <View >
        <Button title={"Add one"} onPress={() => setCounter(prev => prev + 1)  } />
      </View> */}
      {/* app counter end */}

      {/* {
        [1,2,3,4,5,6,7,8,9,0,11,11,1,14,24,2,5,6,3,46,76,7,7].map((item, index) => (
          <View style={styles.view} key={index} >
            <Text >{item}</Text>
          </View>
        ))
      } */}

      {/* <View >
        <Button title="Press Me" onPress={() => console.log("button was clicked...") } />
      </View> */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text_container: {
    alignItems: 'center',
    marginVertical: 10
  },
  text: {
    fontSize: 40,
  },
  view: {
    backgroundColor: "#0f0",
    paddingHorizontal: 5,
    paddingVertical: 10,
    alignItems: "center",
    marginVertical: 5
    }
})