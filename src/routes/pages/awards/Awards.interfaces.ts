export interface AwardData {
  id: string;
  title: string;
  description: string;
  date: string;
  organization?: string;
  category?: string;
  imageSrc?: string;
  certificateUrl?: string;
}

export interface AwardsProps {
  awards?: AwardData[];
}

export interface AwardItemProps {
  award: AwardData;
  index: number;
}
