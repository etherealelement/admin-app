import { DetailedHTMLProps, HTMLAttributes } from 'react';
import {DataType} from "@/app/components/dashboard/dashboard.props";

export interface SidebarSelectProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  name: 'Choose location' | 'Choose industry' | 'Choose website';
  websiteData: DataType[];
}
