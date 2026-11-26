import { SymbolView, type AndroidSymbol, type SFSymbol } from "expo-symbols";
import { Pressable, StyleSheet, Text, type ImageSourcePropType } from "react-native";

type Props = {
  label: string;
  icon: {
    android: ImageSourcePropType;
    ios: SFSymbol;
    web: AndroidSymbol
  },
  onPress?: () => void 
};

export default function iconButton({icon, label, onPress}: Props){
  return(
    <Pressable style={styles.iconButton}>
      <SymbolView name={{web: icon.web}} size={24} tintColor='#fff' />
      <Text style={styles.iconButtonLabel}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    justifyContent:'center',
    alignContent: 'center'
  },
  iconButtonLabel: {
    color: '#fff',
    marginTop: 12
  }
});