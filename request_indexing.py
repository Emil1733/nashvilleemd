import os
import json
from google.oauth2 import service_account
from googleapiclient.discovery import build
import time

def request_indexing(credentials_path, urls):
    # Indexing API scope
    scopes = ['https://www.googleapis.com/auth/indexing']
    
    try:
        if not os.path.exists(credentials_path):
            print(f"Error: Credentials file not found at {credentials_path}")
            return

        credentials = service_account.Credentials.from_service_account_file(
            credentials_path, scopes=scopes)
        
        # Build the service for the Indexing API
        service = build('indexing', 'v3', credentials=credentials)
        
        print(f"{'URL':<60} | {'Status'}")
        print("-" * 75)
        
        for url in urls:
            body = {
                'url': url,
                'type': 'URL_UPDATED'
            }
            try:
                # Send the indexing request
                response = service.urlNotifications().publish(body=body).execute()
                print(f"{url:<60} | Success")
                # Sleep briefly to avoid hitting rate limits (IndexNow/GSC API limits)
                time.sleep(1)
            except Exception as e:
                print(f"{url:<60} | Failed: {e}")

    except Exception as e:
        print(f"An error occurred during initialization: {e}")

if __name__ == "__main__":
    # Security Hardening: Use environment variable for credentials path
    CREDENTIALS_PATH = os.getenv('GSC_CREDENTIALS_PATH', r'c:\Users\tevat\nashvilleemd\gsc-credentials.json')
    
    # Full list of URLs from sitemap
    URLS_TO_INDEX = [
        'https://nashvillepoolremoval.com/',
        'https://nashvillepoolremoval.com/services',
        'https://nashvillepoolremoval.com/cost',
        'https://nashvillepoolremoval.com/blog/guide',
        'https://nashvillepoolremoval.com/about',
        'https://nashvillepoolremoval.com/contact',
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
    
    request_indexing(CREDENTIALS_PATH, URLS_TO_INDEX)
