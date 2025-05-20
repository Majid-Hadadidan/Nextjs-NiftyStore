import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
import { redirect } from 'next/navigation';

import { type NextRequest } from 'next/server';
import db from '@/utils/db';

export const GET=async (req:NextRequest)=>{
  const { searchParams } = new URL(req.url);
  const sessionId = searchParams.get('session_id') as string;


  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    // console.log(session);

    const orderId = session.metadata?.orderId;
    const cartId = session.metadata?.cartId;

    if (session.status === 'complete') {
      await db.order.update({
        where: {
          id: orderId,
        },
        data: {
          isPaid: true,
        },
      });
      await db.cart.delete({
        where: {
          id: cartId,
        },
      });
    }
  } catch (err) {
    console.log(err);
    return Response.json(null, {
      status: 500,
      statusText: 'Internal Server Error',
    });
  }
  redirect('/orders');
};

