import os
import json
from google.oauth2 import service_account
from googleapiclient.discovery import build
import time

def check_all_pages(credentials_path, site_url, pages):
    scopes = ['https://www.googleapis.com/auth/webmasters.readonly']
    
    try:
        credentials = service_account.Credentials.from_service_account_file(
            credentials_path, scopes=scopes)
        
        service = build('searchconsole', 'v1', credentials=credentials)
        
        print(f"{'URL':<50} | {'Verdict':<15} | {'Last Crawl'}")
        print("-" * 85)
        
        for page in pages:
            full_url = f"https://nashvillepoolremoval.com{page}"
            try:
                inspect_request = {
                    'inspectionUrl': full_url,
                    'siteUrl': site_url
                }
                response = service.urlInspection().index().inspect(body=inspect_request).execute()
                result = response.get('inspectionResult', {})
                index_status = result.get('indexStatusResult', {})
                
                verdict = index_status.get('verdict', 'UNKNOWN')
                last_crawl = index_status.get('lastCrawlTime', 'N/A')
                
                print(f"{full_url:<50} | {verdict:<15} | {last_crawl}")
                
                # Sleep briefly to avoid hitting rate limits too fast (GSC has quotas)
                time.sleep(1)
            except Exception as e:
                print(f"Failed to inspect {full_url}: {e}")

    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    CREDENTIALS_PATH = r'c:\Users\tevat\nashvilleemd\gsc_credentials.json'
    SITE_URL = 'sc-domain:nashvillepoolremoval.com'
    PAGES = [
        '/',
        '/about',
        '/blog',
        '/contact',
        '/cost',
        '/services'
    ]
    check_all_pages(CREDENTIALS_PATH, SITE_URL, PAGES)
