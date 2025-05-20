import { Suspense } from 'react';
import CheckoutClient from './CheckoutClient';

export const dynamic = 'force-dynamic'; // دیگر سعی نمی‌کند استاتیک بسازد

export default function CheckoutPage() {
  return (
    <Suspense fallback={null}>
      {/* این قسمت فقط در مرورگر اجرا می‌شود */}
      <CheckoutClient />
    </Suspense>
  );
}