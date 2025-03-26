import Image from 'next/image';
import WhiteLogo from '@/assets/common/white-logo.png';
import BlackLogo from '@/assets/common/black-logo.png';
import { cn } from '@/lib/utils';

interface Props {
  theme?: 'light' | 'dark';
  className?: string;
  width?: number;
}

export default function DraperyLogo(props: Props) {
  const logo = props.theme === 'dark' ? BlackLogo : WhiteLogo;

  return (
    <Image
      src={logo}
      width={props.width ?? 40}
      alt="drapery logo"
      className={cn(props.className)}
    />
  );
}
