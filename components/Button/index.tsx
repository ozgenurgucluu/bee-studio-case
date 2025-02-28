import classNames from 'classnames/bind';

const cn = classNames.bind({
  small: 'p-2 h-[30px] text-xs',
  medium: 'p-3 w-[114px] h-[40px] text-sm',
  large: 'p-5 w-[125px] h-[50px]',
  white: 'bg-white text-sm text-[#6EB800]  shadow-[#6EB800]',
});

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'large';
  color?: 'white';
  className?: string;
  title: string;
}

const Button = ({
  size = 'medium',
  color = 'white',
  className,
  title,
}: Props) => {
  return (
    <button
      className={cn(
        'rounded-4xl  flex items-center justify-center',
        size,
        color,
        className
      )}
    >
      {title}
    </button>
  );
};

export default Button;
