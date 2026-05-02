import os
import json
from google.oauth2 import service_account
from googleapiclient.discovery import build
from datetime import datetime, timedelta
import time

def run_full_audit(credentials_path, site_url, output_path):
    scopes = ['https://www.googleapis.com/auth/webmasters.readonly']
    
    try:
        if not os.path.exists(credentials_path):
            return f"Error: Credentials file not found at {credentials_path}"

        credentials = service_account.Credentials.from_service_account_file(
            credentials_path, scopes=scopes)
        
        service = build('searchconsole', 'v1', credentials=credentials)
        
        # Ensure output directory exists
        os.makedirs(os.path.dirname(output_path), exist_ok=True)
        
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(f"Nashville Pool Professionals - GSC Audit Report\n")
            f.write(f"Date: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n")
            f.write(f"{'='*60}\n\n")

            # 1. Search Analytics
            f.write("--- SEARCH PERFORMANCE (LAST 30 DAYS) ---\n")
            end_date = (datetime.now() - timedelta(days=2)).strftime('%Y-%m-%d')
            start_date = (datetime.now() - timedelta(days=32)).strftime('%Y-%m-%d')
            
            perf_request = {
                'startDate': start_date,
                'endDate': end_date,
                'dimensions': ['query'],
                'rowLimit': 50
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
                f.write("No search data found for the period.\n")
            
            f.write("\n\n")

            # 2. URL Inspection (Hub & Spoke Audit)
            f.write("--- INDEXING STATUS (HUB & SPOKE NETWORK) ---\n")
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
                    # GSC Inspection API is much stricter on quotas
                    time.sleep(1.5)
                except Exception as e:
                    f.write(f"{url:<60} | ERROR: {str(e)[:20]}\n")

        return f"Audit complete. Results written to {output_path}"

    except Exception as e:
        return f"An error occurred: {e}"

if __name__ == "__main__":
    CREDENTIALS_PATH = r'c:\Users\tevat\nashvilleemd\gsc-credentials.json'
    SITE_URL = 'sc-domain:nashvillepoolremoval.com'
    OUTPUT_FILE = r'c:\Users\tevat\nashvilleemd\gsc\04-26-2026.txt'
    
    status = run_full_audit(CREDENTIALS_PATH, SITE_URL, OUTPUT_FILE)
    print(status)
