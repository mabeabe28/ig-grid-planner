import { StyleSheet, Dimensions, FlatList, Text, View, TouchableHighlight, Image, Button} from 'react-native';
//import Palette from 'react-palette'
import { usePalette } from 'react-palette'
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import uuid from 'react-native-uuid';

import EditScreenInfo from '../components/EditScreenInfo';
import { Grid } from '../components/Themed';

export default function TabTwoScreen() {

 

  const imageDataArray = [];

  const [images, setImages] = useState(imageDataArray); // Setting default value

  const handleAddImage = (uri: string) => {
    setImages((images) => [
      ...images.reverse(),
      {
          id: uuid.v4(), // Random age
          value: 'G',
          uri:uri
      },
  ]);
  };


  let runImagePickerAsync = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }
   // props.addImage(pickerResult.uri.toString());
   //imageData.push({id:'g', value: 'G', uri:pickerResult.uri.toString()})
   handleAddImage(pickerResult.uri.toString());
  };


  const numColumns = 3;
  const size = Dimensions.get('window').width/numColumns;
  const styles = StyleSheet.create({
    itemContainer: {
      width: size,
      height: size,
    },
    item: {
      flex: 1,
      margin: 3,
      backgroundColor: 'lightblue',
    },
    thumbnail: {
      height: 129,
      width: 129,
      resizeMode: "cover",
    },
  });
  
{/* <View style={styles.itemContainer}>
          <Text style={styles.item}>{item.value}</Text>
        </View> */}
   console.log('images',images);

  return (
    <View>
      <View >
        <Button title="Add Photo" onPress={runImagePickerAsync}></Button>
      </View>
      <FlatList
      data={images.reverse()}
      renderItem={({item}) => (
        <TouchableHighlight
              //onPress={() => props.removeImage(item.id)}
              onPress={() => console.log('lol')}
              style={styles.itemContainer}
            >
              <Image
                source={{ uri: item.uri}}
                style={styles.item}
              ></Image>
            </TouchableHighlight>
      )}
      keyExtractor={item => item.id}
      numColumns={numColumns} />
    </View>
    
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: '80%',
//   },
// });
