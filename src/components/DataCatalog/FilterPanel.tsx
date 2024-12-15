import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface FilterPanelProps {
  columns: Column[];
  activeFilters: Filter[];
  onFilterChange: (filters: Filter[]) => void;
}

interface Column {
  key: string;
  label: string;
}

interface Filter {
  column: string;
  value: string;
}

export function FilterPanel({
  columns,
  activeFilters,
  onFilterChange,
}: FilterPanelProps) {
  const [selectedColumn, setSelectedColumn] = React.useState('');
  const [filterValue, setFilterValue] = React.useState('');

  const addFilter = () => {
    if (selectedColumn && filterValue) {
      const newFilters = [
        ...activeFilters,
        { column: selectedColumn, value: filterValue },
      ];
      onFilterChange(newFilters);
      setSelectedColumn('');
      setFilterValue('');
    }
  };

  const removeFilter = (index: number) => {
    const newFilters = activeFilters.filter((_, i) => i !== index);
    onFilterChange(newFilters);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4">
        <Select value={selectedColumn} onValueChange={setSelectedColumn}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select column" />
          </SelectTrigger>
          <SelectContent>
            {columns.map((column) => (
              <SelectItem key={column.key} value={column.key}>
                {column.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Filter value..."
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
            className="pl-8"
          />
        </div>
        <Button onClick={addFilter} disabled={!selectedColumn || !filterValue}>
          Add Filter
        </Button>
      </div>
      {activeFilters.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {activeFilters.map((filter, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="px-3 py-1"
            >
              {columns.find((c) => c.key === filter.column)?.label}: {filter.value}
              <button
                onClick={() => removeFilter(index)}
                className="ml-2 hover:text-destructive"
              >
                ×
              </button>
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}