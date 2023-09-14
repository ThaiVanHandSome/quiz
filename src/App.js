import { useState } from 'react';
import Auth from './components/Auth';
import Home from './pages/Home';
import Dialog from './components/Dialog';

function App() {
    const login = JSON.parse(localStorage.getItem('login')) || false;
    const [loginSuccess, setLoginSuccess] = useState(login);
    const [openDialog, setOpenDialog] = useState(false);
    return (
        <div className="main">
            {openDialog && <Dialog setOpen={setOpenDialog} />}
            {!loginSuccess ? <Auth setLoginSuccess={setLoginSuccess} setOpenDialog={setOpenDialog} /> : <Home />}
        </div>
    );
}

export default App;
