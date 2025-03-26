import Image from 'next/image';
import WhiteLogo from '@/assets/common/white-logo.png';
import BlackLogo from '@/assets/common/black-logo.png';
import { cn } from '@/lib/utils';

interface Props {
  theme?: 'light' | 'dark';
  className?: string;
}

export default function DraperyLogo(props: Props) {
  const logo = props.theme === 'dark' ? BlackLogo : WhiteLogo;

  return (
    <Image
      quality={100}
      src={logo}
      alt="drapery logo"
      className={cn(props.className)}
    />
  );
}
