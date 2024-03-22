# Polling Telegram
## results layout:
- end of the first command sent
- start of the second command sent
- end of the second command sent

TEST 1
 - 2024-03-20T20:24:53.545Z
 - 2024-03-20T20:24:53.949Z
 - 2024-03-20T20:24:53.950Z

difference: 405ms

TEST 2
 - 2024-03-20T20:30:05.150Z
 - 2024-03-20T20:30:05.551Z
 - 2024-03-20T20:30:05.552Z

difference: 402ms

TEST 3
 - 2024-03-20T20:32:04.770Z
 - 2024-03-20T20:32:05.177Z
 - 2024-03-20T20:32:05.177Z

difference: 407ms

# Webhook Telegram
## results layout:
- end of the first command sent
- start of the second command sent
- end of the second command sent

TEST 1
 - 2024-03-20T20:44:59.723Z
 - 2024-03-20T20:44:59.863Z
 - 2024-03-20T20:45:00.175Z

difference: 452ms

TEST 2
 - 2024-03-20T20:46:26.879Z
 - 2024-03-20T20:46:27.097Z
 - 2024-03-20T20:46:27.439Z

difference: 560ms

TEST 3
 - 2024-03-20T20:47:55.234Z
 - 2024-03-20T20:47:55.368Z
 - 2024-03-20T20:47:55.752Z

difference: 518ms


This test was ran by putting the sendHelpCommandScript into the browser console twice, so we could get an accurate depiction of the performace chances of polling into webhooks.
