chrome.identity.getProfileUserInfo(userInfo => {
  console.log(userInfo);
  if (userInfo.id === '') throw new Error('userInfo.id is empty');
})
