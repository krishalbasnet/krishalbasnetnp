---
description: Update broker holding data with new floorsheet
---

# Update Broker Holding Data

This workflow describes how to add new floorsheet data to the broker holding analysis page.

## Data Update Options

### Option 1: Single Date

Run the scraper for a specific single date:

```bash
python TEST/floorsheet_scraper.py --date 2026/01/30
```

By default, this will save to `NEPSE/data/30-Jan-2026.csv`. You can specify a custom output path with `--output`:

```bash
python TEST/floorsheet_scraper.py --date 2026/01/30 --output NEPSE/data/custom_name.csv
```

### Option 2: Date Range (Batch Processing)

// turbo
To scrape multiple days at once, specify a start and end date:

```bash
python TEST/floorsheet_scraper.py --start-date 2026/01/20 --end-date 2026/01/25 --output-dir NEPSE/data
```

This will automatically:

- Generate separate CSV files for each day (e.g., `20-Jan-2026.csv`, `21-Jan-2026.csv`...)
- Skip dates with no trading data (weekends/holidays)
- Save all files to the specified directory

## Update File Manifest

After downloading new data (either single or batch), you **must** update the file manifest:

```bash
python NEPSE/generate_file_list.py
```

## Combined Workflow

To scrape a date range and update the manifest in one go:

```bash
python TEST/floorsheet_scraper.py --start-date 2026/01/20 --end-date 2026/01/25 && python NEPSE/generate_file_list.py
```

## Refresh Page

Refresh the Broker Holding Analysis page to see the new data in the date selectors.
