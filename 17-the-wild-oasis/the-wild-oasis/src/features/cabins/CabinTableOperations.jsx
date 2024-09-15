import TableOperations from "../../ui/TableOperations";
import FilterComponent from "../../ui/Filter";

export default function CabinTableOperations() {
  return (
    <TableOperations>
      <FilterComponent
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "With discount" },
        ]}
      />
    </TableOperations>
  );
}
