type CategoryListProps = {
  selectedCategory: string;
  categoryList: {
    [key: string]: number;
  };
};

type CategoryItemProps = {
  active: boolean;
  to: string;
  children: React.ReactNode;
  className?: string;
};

export type { CategoryListProps, CategoryItemProps };