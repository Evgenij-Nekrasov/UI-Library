import { cn } from '@/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { ComponentProps, forwardRef } from 'react';

const buttonStyles = cva(
  [
    'w-full',
    'rounded-md',
    'font-semibold',
    'focus:outline-none',
    'disabled:cursor-not-allowed',
  ],
  {
    variants: {
      variant: {
        solid: '',
        outline: 'border-2',
        ghost: 'transition-colors duration-300',
      },
      size: {
        sm: 'px-4 py-2 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
      },
      colorscheme: {
        primary: 'text-white',
      },
    },
    compoundVariants: [
      {
        variant: 'solid',
        colorscheme: 'primary',
        className: 'bg-blue-500 hover:bg-blue-600 cursor-pointer',
      },
      {
        variant: 'outline',
        colorscheme: 'primary',
        className:
          'text-blue-600 border-blue-500 bg-transparent hover:bg-blue-100 cursor-pointer',
      },
      {
        variant: 'ghost',
        colorscheme: 'primary',
        className:
          'text-blue-600 bg-transparent hover:bg-blue-100 cursor-pointer',
      },
    ],
    defaultVariants: {
      variant: 'solid',
      size: 'md',
      colorscheme: 'primary',
    },
  }
);

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof buttonStyles>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, colorscheme, className, ...props }, ref) => {
    // генерим только «системные» классы
    const base = buttonStyles({ variant, size, colorscheme });
    // а потом мёржим с «пользовательским»
    return <button ref={ref} className={cn(base, className)} {...props} />;
  }
);
