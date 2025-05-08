import styles from './Button.module.css';
import { ButtonIntent, ButtonSize, ButtonVariant } from './types';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';
import type * as React from 'react';

const buttonVariants = cva(styles.base, {
  variants: {
    intent: {
      [ButtonIntent.Neutral]: styles.neutral,
      [ButtonIntent.Accent]: styles.accent,
      [ButtonIntent.Warning]: styles.warning,
      [ButtonIntent.Error]: styles.error,
    },
    variant: {
      [ButtonVariant.Filled]: styles.filled,
      [ButtonVariant.Minimal]: styles.minimal,
    },
    size: {
      [ButtonSize.Default]: styles.medium,
      [ButtonSize.Small]: styles.small,
    },
  },
  defaultVariants: {
    intent: ButtonIntent.Neutral,
    variant: ButtonVariant.Filled,
    size: ButtonSize.Default,
  },
});

export type ButtonProps = React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

export function Button({
  className,
  intent,
  variant,
  size,
  disabled,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={buttonVariants({ intent, variant, size, className })}
      data-disabled={disabled ?? undefined}
      data-slot="button"
      disabled={disabled}
      {...props}
    />
  );
}
