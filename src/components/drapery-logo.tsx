import Image from 'next/image';
import WhiteLogo from '@/assets/common/white-logo.png';
import BlackLogo from '@/assets/common/black-logo.png';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface Props {
  theme?: 'light' | 'dark';
  className?: string;
  withLink?: boolean;
}

export default function DraperyLogo(props: Props) {
  const logo = props.theme === 'dark' ? BlackLogo : WhiteLogo;

  const Logo = (
    <Image
      quality={100}
      src={logo}
      alt="drapery logo"
      className={cn(props.className)}
    />
  );

  if (props.withLink) {
    return <Link href={'/'}> {Logo}</Link>;
  }

  return Logo;
}
