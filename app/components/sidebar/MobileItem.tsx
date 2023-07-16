import clsx from "clsx";
import Link from "next/link";


interface MobileItemProps {
  href: string;
  icon: any;
  active?: boolean;
  onClick?: () => void;
}

const MobileItem: React.FC<MobileItemProps> = ({
  href,
  icon: Icon,
  active,
  onClick
}) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={clsx(`
        group
        flex
        justify-center
        w-full
        p-4
        text-sm
        leading-6
        font-semibold
        text-gray-500
        hover:bg-gray-100
        hoverL:text-black
      `,
        active && `bg-gray-100 text-black`
      )}
    >
      <Icon className="h-6 w-6"></Icon>
    </Link>
  )
}

export default MobileItem;
