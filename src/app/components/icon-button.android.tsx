import { Column, Host, Icon, Text, TextButton } from '@expo/ui/jetpack-compose';
import { AndroidSymbol, SFSymbol } from 'expo-symbols';
import { ImageSourcePropType } from 'react-native';

type Props = {
  label: string;
  icon: {
    android: ImageSourcePropType;
    ios: SFSymbol;
    web: AndroidSymbol;
  };
  onPress: () => void;
};

export default function IconButton({label, icon, onPress}: Props){
  return(
    <Host matchContents>
      <TextButton onClick={onPress} colors={{containerColor: '#fff'}}>
        <Column horizontalAlignment='center' verticalArrangement={{spacedBy:12}}>
          <Icon source={icon.android} size={24} tint="#fff"/>
          <Text color='#fff'>{label}</Text>
        </Column>
      </TextButton>
    </Host>
  );
}