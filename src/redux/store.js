import {createStore} from 'redux';

// const [profile, setProfile] = useState("Ardinata");

// setProfile(""HariSaputra")

const inisialState = {
  loading: false,
  name: 'Ardinata Hari Saputra',
  address: 'Pasar Minggu',
};

const reducer = (state = inisialState, action) => {
  if (action.type === 'SET_LOADING') {
    return {
      ...state,
      loading: action.value,
    };
  }
  if (action.type === 'SET_NAME') {
    return {
      ...state,
      name: 'Indah',
    };
  }
  return state;
};

const store = createStore(reducer);

export default store;
