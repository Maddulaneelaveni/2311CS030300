export async function fetchNotifications() {
  const response = await fetch(
    "http://4.224.186.213/evaluation-service/notifications",
    {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJtYWRkdWxhbmVlbGF2ZW5pMTI3OTNAZ21haWwuY29tIiwiZXhwIjoxNzgyODkwMjYyLCJpYXQiOjE3ODI4ODkzNjIsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiJiZjFjY2E4Yi03NTRmLTQ2YzAtOGEyZi00NzdhYzIzOWJkMGUiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJtYWRkdWxhIG5lZWxhdmVuaSIsInN1YiI6IjVlN2I2ZTE0LTc1OGMtNGNhZC05ZWMzLTczYTFlOWRiMjViYyJ9LCJlbWFpbCI6Im1hZGR1bGFuZWVsYXZlbmkxMjc5M0BnbWFpbC5jb20iLCJuYW1lIjoibWFkZHVsYSBuZWVsYXZlbmkiLCJyb2xsTm8iOiIyMzExY3MwMzAzMDAiLCJhY2Nlc3NDb2RlIjoieHBRZGRkIiwiY2xpZW50SUQiOiI1ZTdiNmUxNC03NThjLTRjYWQtOWVjMy03M2ExZTlkYjI1YmMiLCJjbGllbnRTZWNyZXQiOiJ4d0dlUk1tVkhHdFhVQ0pmIn0.ydmMROzef7BRckkkFC1K0jwgkmBnfk7RNwe8p8QO7Jw",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch notifications");
  }

  return await response.json();
}