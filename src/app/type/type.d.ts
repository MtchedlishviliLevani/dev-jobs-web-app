export interface JobPosting {
  id: number;
  company: string;
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  website: string;
  apply: string;
  description: string;
  requirements: {
    content: string;
    items: string[];
  };
  role: {
    content: string;
    items: string[];
  };
}
export interface JobDescriptionHeaderProps {
  data: JobPosting;
}

export interface CardProps {
  position: string;
  location: string;
  company: string;
  postedAt: string;
  contract: string;
  logo: string;
  logoBackground: string;
}

export interface CheckBoxProps {
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface Context {
  pageMode: boolean;
  setPageMode: React.Dispatch<React.SetStateAction<boolean>>;
  dataJson: typeof data;
  setDataJson: React.Dispatch<React.SetStateAction<typeof data>>;
  cardsAmount: number;
  setCardsAmount: React.Dispatch<React.SetStateAction<number>>;
  isFilterActive: boolean;
  setIsFilterActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SearchBarProps {
  icon: string;
  placeholder: string;
  flexWidth: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}
