/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import { Text as DefaultText,StyleSheet, View as DefaultView, Dimensions} from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}


export function Grid(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
  });
  const DeviceWidth = Dimensions.get('window').width

  return <DefaultView style={{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }}>
    <DefaultView style={{
      flexDirection: 'row',
      backgroundColor: "grey"}}>
      <DefaultView>
        <DefaultView style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, backgroundColor: 'powderblue'}} />
        <DefaultView style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, backgroundColor: 'skyblue'}} />
        <DefaultView style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, backgroundColor: 'yellow'}} />
      </DefaultView>
      <DefaultView>
        <DefaultView style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, marginLeft:1, backgroundColor: 'powderblue'}} />
        <DefaultView style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, marginLeft:1, backgroundColor: 'skyblue'}} />
        <DefaultView style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginLeft:1, backgroundColor: 'yellow'}} />
      </DefaultView>
      <DefaultView>
        <DefaultView style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, marginLeft:1, backgroundColor: 'powderblue'}} />
        <DefaultView style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginBottom:1, marginLeft:1, backgroundColor: 'skyblue'}} />
        <DefaultView style={{width: DeviceWidth*0.2, height: DeviceWidth*0.2, marginLeft:1, backgroundColor: 'yellow'}} />
      </DefaultView>    
    </DefaultView>
  </DefaultView>

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
