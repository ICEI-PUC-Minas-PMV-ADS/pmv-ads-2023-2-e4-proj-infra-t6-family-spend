import { StatusBar } from 'expo-status-bar';
import Navbar from './src/components/Header'
import Route from './src/routes/index'

export default function App() {
  return (
    <>
      <Navbar/>
      <Route/>
      <StatusBar style="auto" />
    </>
  );
}
