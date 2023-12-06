import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface SidebarSelectProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  name: 'Choose location' | 'Choose industry';
}
