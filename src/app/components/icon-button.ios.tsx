import { ImageSource } from "@expo/ui/jetpack-compose";
import { Button, Host, Image, Text, VStack } from '@expo/ui/swift-ui';
import { buttonStyle, font, foregroundStyle } from "@expo/ui/swift-ui/modifiers";
import { AndroidSymbol, SFSymbol } from "expo-symbols";

type Props = {
  label: string;
  icon: {
    android: ImageSource;
    ios: SFSymbol;
    web: AndroidSymbol
  };
  onPress?: () => void;
};

export default function IconButton({label, icon, onPress}: Props){
  return(
    <Host matchContents>
      <Button onPress={onPress} modifiers={[buttonStyle('plain'), foregroundStyle('#fff')]}/>
      <VStack spacing={12}>
        <Image systemName={icon.ios} size={20} />
        <Text modifiers={[font({size: 14})]}>{label}</Text>
      </VStack>
    </Host>
  ); 
}