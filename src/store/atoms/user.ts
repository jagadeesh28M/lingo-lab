import { atom } from "recoil";

export const usernameAtom = atom({
  key: "usernameAtom",
  default: "",
});

export const userIdAtom = atom({
  key: "userIdAtom",
  default: "",
});

export const userEmailAtom = atom({
  key: "userEmailAtom",
  default: "",
});
