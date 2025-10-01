/**
 * Operating hours for farms
 */
export interface OperatingHours {
  monday?: TimeSlot;
  tuesday?: TimeSlot;
  wednesday?: TimeSlot;
  thursday?: TimeSlot;
  friday?: TimeSlot;
  saturday?: TimeSlot;
  sunday?: TimeSlot;
}

export interface TimeSlot {
  open: string;
  close: string;
  closed?: boolean;
}

/**
 * Product categories for the marketplace
 */
export enum ProductCategory {
  FRUITS = "fruits",
  VEGETABLES = "vegetables",
  HERBS = "herbs",
  GRAINS = "grains",
  LEGUMES = "legumes",
  NUTS = "nuts",
  DAIRY = "dairy",
  EGGS = "eggs",
  MEAT = "meat",
  SEAFOOD = "seafood",
  PREPARED_FOODS = "prepared_foods",
  BEVERAGES = "beverages",
  HONEY = "honey",
  FLOWERS = "flowers",
  PLANTS = "plants",
  OTHER = "other",
}
