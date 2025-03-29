// app/api/order/route.js
export async function POST(req) {
  try {
    const body = await req.json()

    // Proveri šta ti stiže
    console.log('ORDER BODY:', body)

    // Logika za slanje emaila, čuvanje u bazi itd. (ako imaš)
    return Response.json({ success: true })
  } catch (error) {
    console.error('ORDER ERROR:', error)
    return new Response('Server error', { status: 500 })
  }
}
