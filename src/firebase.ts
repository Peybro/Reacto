import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: import.meta.env.VITE_API_KEY,
	authDomain: 'punto-6e7e1.firebaseapp.com',
	databaseURL: 'https://punto-6e7e1-default-rtdb.europe-west1.firebasedatabase.app',
	projectId: 'punto-6e7e1',
	storageBucket: 'punto-6e7e1.appspot.com',
	messagingSenderId: '35289506336',
	appId: '1:35289506336:web:6c933561bb601fafb2d245'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
