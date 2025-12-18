import { http, HttpResponse } from 'msw'

export const handlers = [
  http.post('https://731xy9c2ak.execute-api.eu-north-1.amazonaws.com/booking', async ({ request }) => {
    const body = await request.json();
    const price = (parseInt(body.people) * 120) + (parseInt(body.lanes) * 100);
    return HttpResponse.json({
      bookingDetails: { ...body, price, bookingId: "STR5678", active: true }
    })
  }),
]