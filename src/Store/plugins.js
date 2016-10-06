import { STORAGE_KEY } from './mutations';
// import createLogger from '../../../src/plugins/logger';

const localStoragePlugin = store => {
  store.subscribe((mutation, { unit }) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(unit));
  });
};

// export default process.env.NODE_ENV !== 'production'
//   ? [createLogger(), localStoragePlugin]
//   : [localStoragePlugin];

export default localStoragePlugin;
