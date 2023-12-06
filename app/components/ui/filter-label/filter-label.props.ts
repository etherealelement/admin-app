import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface FilterLabelProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  type: 'job' | 'location' | 'industry';
  children: ReactNode;
}
