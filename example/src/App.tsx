import { HomeScreen } from './screens/Home';
import { ShopScreen } from './screens/Shop';
import { ThemeProvider } from './styles';

export default function App() {
    return (
        <ThemeProvider>
            <HomeScreen />
            <ShopScreen />
        </ThemeProvider>
    );
}
