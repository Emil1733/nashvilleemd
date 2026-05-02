import os
import json
from google.oauth2 import service_account
from googleapiclient.discovery import build
from datetime import datetime, timedelta
import time
import sys

def run_weekly_audit(credentials_path, site_url, output_path):
    scopes = ['https://www.googleapis.com/auth/webmasters.readonly']
    
    try:
        if not os.path.exists(credentials_path):
            print(f"Error: Credentials file not found at {credentials_path}")
            return

        credentials = service_account.Credentials.from_service_account_file(
            credentials_path, scopes=scopes)
        
        service = build('searchconsole', 'v1', credentials=credentials)
        
        # Ensure output directory exists
        os.makedirs(os.path.dirname(output_path), exist_ok=True)
        
        print(f"Starting audit for {site_url}...")
        sys.stdout.flush()

        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(f"Nashville Pool Professionals - GSC Weekly Audit (USA Only)\n")
            f.write(f"Date: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n")
            f.write(f"{'='*60}\n\n")

            # 1. Search Analytics - Last 7 Days, US Only
            print("Fetching search performance data (USA Only)...")
            sys.stdout.flush()
            f.write("--- SEARCH PERFORMANCE (LAST 7 DAYS - USA ONLY) ---\n")
            
            end_date = (datetime.now() - timedelta(days=2)).strftime('%Y-%m-%d')
            start_date = (datetime.now() - timedelta(days=9)).strftime('%Y-%m-%d')
            
            perf_request = {
                'startDate': start_date,
                'endDate': end_date,
                'dimensions': ['query'],
                'dimensionFilterGroups': [
                    {
                        'filters': [
                            {
                                'dimension': 'country',
                                'operator': 'equals',
                                'expression': 'usa'
                            }
                        ]
                    }
                ],
                'rowLimit': 100
            }
            
            perf_response = service.searchanalytics().query(siteUrl=site_url, body=perf_request).execute()
            
            if 'rows' in perf_response:
                f.write(f"{'Query':<40} | {'Clicks':<8} | {'Impressions':<12} | {'Pos':<8}\n")
                f.write("-" * 75 + "\n")
                for row in perf_response['rows']:
                    query = row['keys'][0]
                    clicks = row['clicks']
                    impressions = row['impressions']
                    position = f"{row['position']:.1f}"
                    f.write(f"{query:<40} | {clicks:<8} | {impressions:<12} | {position:<8}\n")
            else:
                f.write("No search data found for the period (USA Only).\n")
            
            f.write("\n\n")

            # 2. URL Inspection
            print("Running URL inspections (Hub & Spoke)...")
            sys.stdout.flush()
            f.write("--- INDEXING STATUS UPDATE (HUB & SPOKE NETWORK) ---\n")
            f.write(f"{'URL':<60} | {'Verdict':<15} | {'Last Crawl'}\n")
            f.write("-" * 90 + "\n")
            
            pages = [
                'https://nashvillepoolremoval.com/',
                'https://nashvillepoolremoval.com/services',
                'https://nashvillepoolremoval.com/cost',
                'https://nashvillepoolremoval.com/blog/guide',
                'https://nashvillepoolremoval.com/limestone-excavation',
                'https://nashvillepoolremoval.com/engineered-backfill',
                'https://nashvillepoolremoval.com/pool-removal-permits',
                'https://nashvillepoolremoval.com/belle-meade',
                'https://nashvillepoolremoval.com/brentwood',
                'https://nashvillepoolremoval.com/green-hills-oak-hill',
                'https://nashvillepoolremoval.com/franklin',
                'https://nashvillepoolremoval.com/nashville-drainage',
                'https://nashvillepoolremoval.com/outdoor-living-prep',
                'https://nashvillepoolremoval.com/hendersonville-gallatin',
                'https://nashvillepoolremoval.com/full-vs-partial-removal',
                'https://nashvillepoolremoval.com/deck-and-coping-removal'
            ]
            
            for url in pages:
                print(f"Inspecting: {url}")
                sys.stdout.flush()
                try:
                    inspect_request = {
                        'inspectionUrl': url,
                        'siteUrl': site_url
                    }
                    response = service.urlInspection().index().inspect(body=inspect_request).execute()
                    result = response.get('inspectionResult', {})
                    index_status = result.get('indexStatusResult', {})
                    
                    verdict = index_status.get('verdict', 'UNKNOWN')
                    last_crawl = index_status.get('lastCrawlTime', 'N/A')
                    
                    f.write(f"{url:<60} | {verdict:<15} | {last_crawl}\n")
                    print(f"Result: {verdict}")
                    sys.stdout.flush()
                    time.sleep(2)
                except Exception as e:
                    f.write(f"{url:<60} | ERROR: {str(e)[:20]}\n")
                    print(f"Error: {e}")
                    sys.stdout.flush()

        return f"Audit complete. Results written to {output_path}"

    except Exception as e:
        print(f"Global error: {e}")
        return f"An error occurred: {e}"

if __name__ == "__main__":
    # Security Hardening: Use environment variable for credentials path
    CREDENTIALS_PATH = os.getenv('GSC_CREDENTIALS_PATH', r'c:\Users\tevat\nashvilleemd\gsc-credentials.json')
    SITE_URL = 'sc-domain:nashvillepoolremoval.com'
    OUTPUT_FILE = r'c:\Users\tevat\nashvilleemd\gsc\05-02-2026\05-02-2026.txt'
    
    status = run_weekly_audit(CREDENTIALS_PATH, SITE_URL, OUTPUT_FILE)
    print(status)
