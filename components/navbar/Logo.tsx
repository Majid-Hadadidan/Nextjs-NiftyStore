import Link from 'next/link';
import { Button } from '../ui/button';
import { VscCode } from 'react-icons/vsc';

function Logo() {
  return (
    <Button size='icon' asChild>
      <Link href='/'>
      <VscCode style={{ width: "1.5rem", height: "1.5rem" }} />
      </Link>
    </Button>
  );
}

export default Logo;