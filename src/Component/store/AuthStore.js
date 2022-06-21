//eslint-disable-next-line
import axios from 'axios';
import create from 'zustand';
//eslint-disable-next-line
//const axiosRequest = axios.create();

const useAuthStore = create((set, get) => ({
  users: [],
  user: {},
  token: '',
  isLoggedIn: false,
  setUsers: (data) => set((state) => ({ users: data })),
  setUser: (data) => set((state) => ({ user: data })),
  setToken: (data) => set((state) => ({ token: data })),
  setIsLoggedIn: (data) => set((state) => ({ isLoggedIn: data })),



}));


export default useAuthStore;

// const [users, setUsers] = useState([]);
//   const [user, setUser] = useState({});
//   const [token, setToken] = useState('');
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const login = (Credential) => {
//     axiosRequest
//       .post('https://be.codein.studio/auth/login', Credential)
//       .then((res) => {
//         const { token } = res.data;
//         localStorage.setItem('token', token);
//         setIsLoggedIn(true);
//         setToken(token);
//         setUser(JSON.parse(localStorage.getItem('user')));
//       });
//   };

//   const logout = () => {
//     localStorage.removeItem('token');
//     setIsLoggedIn(false);
//     setToken('');
//     setUser({});
//   };
