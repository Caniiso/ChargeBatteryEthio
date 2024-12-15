import React from 'react';
import { Database } from 'lucide-react';

export function Header() {
  return (
    <div className="flex items-center justify-between pb-6">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-primary/10">
          <Database className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Data Catalog</h1>
          <p className="text-sm text-muted-foreground">
            Browse and filter time series data across your organization
          </p>
        </div>
      </div>
    </div>
  );
}