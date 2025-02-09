import { ImageBackground, Text, View } from "react-native";
import beachImage from "@/assets/meditation-images/beach.webp";
import { Heading } from "@/components/ui/heading";

export default function Index() {
  return (
    <View className="flex-1">
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        className="flex-1"
      >
        <Heading className="text-center mt-5">Zenflow</Heading>
      </ImageBackground>
    </View>
  );
}
