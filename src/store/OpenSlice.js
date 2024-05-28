/**
 * Open/Save Controls store.
 *
 * @param {Function} set
 * @param {Function} get
 * @return {object} Zustand slice.
 */
export default function createOpenSlice(set, get) {
  return {
    isOpenEnabled: true,
    setIsOpenEnabled: (is) => set(() => ({isOpenEnabled: is})),
    currentTab: 0,
    setCurrentTab: (currentTab) => set(() => ({currentTab: currentTab})),
  }
}
