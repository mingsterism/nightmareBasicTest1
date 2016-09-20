# nightmareBasicTest1
1) Run nightProxy.js to test proxy is working. Taken from nightmarejs examples

2) run rxNightmare.js for main script run

## Issues
1) clearCache() causes electron to run , but it leaves a blank white screen
2) The site seems to be providing unpredictable responses. Currently, it fails at .click('.ui-searchbar-submit').
 it will take me to the login screen for no apparent reason.

## Attempts to fix
1) I have tried using Proxy IP Rotation. The proxy works, but seems to no effect
2) Using clearCahce() but with issue above
2) Using custom useragent. 