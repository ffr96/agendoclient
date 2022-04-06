import AppBar from '../components/appbar';
import AuthStorageContext from '../context/authStorage';
import AuthStorage from '../utils/authStorage';

import '../styles/globals.css';
import 'tui-calendar/dist/tui-calendar.css';
import 'tui-calendar/node_modules/tui-date-picker/dist/tui-date-picker.css';
import 'tui-calendar/node_modules/tui-time-picker/dist/tui-time-picker.css';

const authStorage = new AuthStorage();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthStorageContext.Provider value={authStorage}>
        <AppBar/>
        <Component {...pageProps} />
      </AuthStorageContext.Provider>
    </>
  );
}

export default MyApp;
