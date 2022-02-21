import { StyleSheet, Dimensions, FlatList, Text, View, TouchableHighlight, Image} from 'react-native';
//import Palette from 'react-palette'
import { usePalette } from 'react-palette'

import EditScreenInfo from '../components/EditScreenInfo';
import { Grid } from '../components/Themed';

export default function TabTwoScreen() {

// const { data, loading, error } = usePalette(IMAGE_URL)

  const imageData = [
    {id: 'a', value: 'A', uri:'https://www.youhadme.at/wp-content/uploads/2021/11/photo1636478792-1024x576.jpeg',palette:usePalette('https://www.youhadme.at/wp-content/uploads/2021/11/photo1636478792-1024x576.jpeg')},
    {id: 'b', value: 'B', uri:'https://www.youhadme.at/wp-content/uploads/2021/11/photo1636478792-1024x576.jpeg',palette:usePalette('https://www.youhadme.at/wp-content/uploads/2021/11/photo1636478792-1024x576.jpeg')},
    {id: 'c', value: 'C', uri:'https://www.youhadme.at/wp-content/uploads/2021/11/photo1636478792-1024x576.jpeg',palette:usePalette('https://www.youhadme.at/wp-content/uploads/2021/11/photo1636478792-1024x576.jpeg')},
    {id: 'd', value: 'D', uri:'https://www.youhadme.at/wp-content/uploads/2021/11/photo1636478792-1024x576.jpeg',palette:usePalette('https://www.youhadme.at/wp-content/uploads/2021/11/photo1636478792-1024x576.jpeg')},
    {id: 'e', value: 'E', uri:'https://www.youhadme.at/wp-content/uploads/2021/11/photo1636478792-1024x576.jpeg',palette:usePalette('https://www.youhadme.at/wp-content/uploads/2021/11/photo1636478792-1024x576.jpeg')},
    {id: 'f', value: 'F', uri:'https://www.youhadme.at/wp-content/uploads/2021/11/photo1636478792-1024x576.jpeg',palette:usePalette('https://www.youhadme.at/wp-content/uploads/2021/11/photo1636478792-1024x576.jpeg')},
  ];


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
  return (
    <FlatList
      data={imageData.reverse()}
      renderItem={({item}) => (
        <TouchableHighlight
              //onPress={() => props.removeImage(item.id)}
              onPress={() => console.log(item.palette)}
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
