import { NavigationContainer } from "@react-navigation/native";
import TabRoutes from "./tabs.routes";


export default function Route() {
  return(
    <>
      <NavigationContainer>
        <TabRoutes />
      </NavigationContainer>
    </>
  )


}