import {
  DISABLE_BALANCE_ON_ADD,
  DISABLE_BALANCE_ON_EDIT,
  ALLOWED_REGISTRATION
} from './types';

export const setDisableBalanceOnAdd = () => {
  //Get settings from localStorage
  const settings = JSON.parse(localStorage.getItem('settings'));
  //Toggle
  settings.disableBalanceOnAdd = !settings.disableBalanceOnAdd;
  //set back to local storage
  localStorage.setItem('settings', JSON.stringify(settings));
  return {
    type: DISABLE_BALANCE_ON_ADD,
    payload: settings.disableBalanceOnAdd
  };
};

export const setDisableBalanceOnEdit = () => {
  //Get settings from localStorage
  const settings = JSON.parse(localStorage.getItem('settings'));
  //Toggle
  settings.disableBalanceOnEdit = !settings.disableBalanceOnEdit;
  //set back to local storage
  localStorage.setItem('settings', JSON.stringify(settings));
  return {
    type: DISABLE_BALANCE_ON_EDIT,
    payload: settings.disableBalanceOnEdit
  };
};

export const setAllowRegistration = () => {
  //Get settings from localStorage
  const settings = JSON.parse(localStorage.getItem('settings'));
  //Toggle
  settings.allowRegistration = !settings.allowRegistration;
  //set back to local storage
  localStorage.setItem('settings', JSON.stringify(settings));
  return {
    type: ALLOWED_REGISTRATION,
    payload: settings.allowRegistration
  };
};
