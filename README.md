## Bug: Empty `id` from `chrome.identity.getProfileUserInfo`

This is the minimum code required to reproduce:
- https://bugs.chromium.org/p/chromium/issues/detail?id=907425
- https://stackoverflow.com/questions/48872747

where we see the response from `chrome.identity.getProfileUserInfo` is:
```
{ email: '', id: '' }
```
