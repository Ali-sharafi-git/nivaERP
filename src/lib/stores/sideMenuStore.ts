import { writable } from "svelte/store";
import type { MenuItem } from "/types/general/sideMenu";

export const sideMenuStore:writable<MenuItem[]> =writable([])
