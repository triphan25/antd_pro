const WebSocket = require('ws');

const ws = new WebSocket(
  'wss://iot.ebst.tech/api/ws/plugins/telemetry?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiYW9uZ3V5ZW4yNDA5QGdtYWlsLmNvbSIsInNjb3BlcyI6WyJDVVNUT01FUl9VU0VSIl0sInVzZXJJZCI6Ijg5OTUxMTYwLWUwZjUtMTFlYy1iMTNiLTQzNzZlNTMxYTE0YSIsImZpcnN0TmFtZSI6IiBQaGFuIiwibGFzdE5hbWUiOiJOZ3V5ZW4iLCJlbmFibGVkIjp0cnVlLCJpc1B1YmxpYyI6ZmFsc2UsInRlbmFudElkIjoiMjY2ZDNhMTAtZTBmMy0xMWVjLWIzMWItYjExMDczNjU3NjYzIiwiY3VzdG9tZXJJZCI6IjA5Y2I5OGYwLWUwZjUtMTFlYy1iMTNiLTQzNzZlNTMxYTE0YSIsImlzcyI6InRoaW5nc2JvYXJkLmlvIiwiaWF0IjoxNjU3NTMwMjQ0LCJleHAiOjE2NTc1MzkyNDR9.bHFBKyWfgVD1elSB6AGJUwePnKWc-s8yBRJCiw9rH-NUPq-fy11XTWkesQX_aZFENMaFkHIjAPUzWxUiHmeZLw',
);
ws.on('open', function open() {
  console.log('connected');
  //ws.send('something');
  var object = {
    tsSubCmds: [
      {
        entityType: 'DEVICE',
        entityId: 'e7561490-e887-11ec-b13b-4376e531a14a',
        scope: 'LATEST_TELEMETRY',
        cmdId: 1,
      },
    ],
    historyCmds: [],
    attrSubCmds: [],
  };
  var data = JSON.stringify(object);
  ws.send(data);
});

ws.on('message', function message(data) {
  console.log('received: %s', data);
});
