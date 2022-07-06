function getMobileStatus(state) {
  return state.navBar.mobileStatus;
}

function getNavbarOpenedStatus(state) {
  return state.navBar.openedStatus;
}

function getNavBarSectionList(state) {
  return state.navBar.sectionList;
}

export { getMobileStatus, getNavbarOpenedStatus, getNavBarSectionList };
