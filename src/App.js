import ConfigRoute from './components/ConfigRoute';
import { publicRoutes } from './routes';

function App() {
    return (
        <div className="main">
            <ConfigRoute routes={publicRoutes} />
        </div>
    );
}

export default App;
