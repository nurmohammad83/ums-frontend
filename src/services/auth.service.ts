import { authKey } from "@/constants/authKey";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setToLocalStorage(authKey, accessToken);
};
export const getUserInfo = () => {
  const getLocalStorageData = getFromLocalStorage(authKey);
  console.log(getLocalStorageData);
};
