
// category label map for human-readable names
const labelMap: Record<string, string> = {
  machine_sorter: "Optical Sorters",
  machine_dryer: "Dryers",
  machine_roller: "Roller Machines",
  machine_die_casting: "Die Casting Machines",
};

// utility function to get human-readable category label
export function getCategoryLabel(category: string): string {
  return (
    labelMap[category] ||
    category
      .replace("machine_", "")
      .replace(/_/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase())
  );
}
