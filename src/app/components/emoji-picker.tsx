import { BottomSheet } from "@expo/ui";
import { PropsWithChildren } from "react";
import { StyleSheet } from "react-native";

type Props = PropsWithChildren<{
  isVisible: boolean;
  onClose: () => void;
}>;
export default function EmojiPicker({isVisible, onClose, children}: Props){
  return(
    <BottomSheet
      isPresented={isVisible}
      
    >

    </BottomSheet>
  );
}

const styles = StyleSheet.create({

});