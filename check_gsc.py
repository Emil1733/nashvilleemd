import os
import json
from google.oauth2 import service_account
from googleapiclient.discovery import build
from datetime import datetime, timedelta

def check_gsc(credentials_path, site_url):
    scopes = ['https://www.googleapis.com/auth/webmasters.readonly']
    
    try:
        credentials = service_account.Credentials.from_service_account_file(
            credentials_path, scopes=scopes)
        
        service = build('searchconsole', 'v1', credentials=credentials)
        
        # 1. List sites to verify access
        sites_list = service.sites().list().execute()
        site_entry = None
        if 'siteEntry' in sites_list:
            for entry in sites_list['siteEntry']:
                if entry['siteUrl'] == site_url or entry['siteUrl'] == site_url + '/':
                    site_entry = entry
                    break
        
        if not site_entry:
            print(f"Error: Site {site_url} not found in the account.")
            print("Available sites:", [s['siteUrl'] for s in sites_list.get('siteEntry', [])])
            return

        print(f"Successfully connected to GSC for: {site_url}")
        print(f"Permission Level: {site_entry.get('permissionLevel')}")

        # 2. Search Analytics for last 90 days
        end_date = (datetime.now() - timedelta(days=2)).strftime('%Y-%m-%d')
        start_date = (datetime.now() - timedelta(days=92)).strftime('%Y-%m-%d')
        
        request = {
            'startDate': start_date,
            'endDate': end_date,
            'dimensions': ['query'],
            'rowLimit': 20
        }
        
        response = service.searchanalytics().query(siteUrl=site_url, body=request).execute()
        
        print("\n--- Search Performance (Last 90 Days) ---")
        if 'rows' in response:
            print(f"{'Query':<30} | {'Clicks':<7} | {'Impressions':<12} | {'CTR':<7} | {'Position':<8}")
            print("-" * 75)
            for row in response['rows']:
                query = row['keys'][0]
                clicks = row['clicks']
                impressions = row['impressions']
                ctr = f"{row['ctr']*100:.2f}%"
                position = f"{row['position']:.1f}"
                print(f"{query:<30} | {clicks:<7} | {impressions:<12} | {ctr:<7} | {position:<8}")
        else:
            print("No search data available for this period.")

        # 3. URL Inspection (Homepage)
        print("\n--- URL Inspection (Homepage) ---")
        try:
            inspect_request = {
                'inspectionUrl': 'https://nashvillepoolremoval.com/',
                'siteUrl': site_url
            }
            inspect_response = service.urlInspection().index().inspect(body=inspect_request).execute()
            result = inspect_response.get('inspectionResult', {})
            index_status = result.get('indexStatusResult', {})
            
            print(f"URL: {inspect_request['inspectionUrl']}")
            print(f"Verdict: {index_status.get('verdict')}")
            print(f"Coverage: {index_status.get('coverageState')}")
            print(f"Last Crawl: {index_status.get('lastCrawlTime')}")
            print(f"Robots: {index_status.get('robotsTxtState')}")
            print(f"Sitemap: {index_status.get('sitemaps')}")
        except Exception as e:
            print(f"URL Inspection failed: {e}")

        # 3. Overall stats
        request_totals = {
            'startDate': start_date,
            'endDate': end_date
        }
        totals_response = service.searchanalytics().query(siteUrl=site_url, body=request_totals).execute()
        if 'rows' in totals_response:
            total = totals_response['rows'][0]
            print(f"\nTotal Clicks: {total.get('clicks', 0)}")
            print(f"Total Impressions: {total.get('impressions', 0)}")
            print(f"Average Position: {total.get('position', 0):.1f}")

    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    CREDENTIALS_PATH = r'c:\Users\tevat\nashvilleemd\gsc_credentials.json'
    SITE_URL = 'sc-domain:nashvillepoolremoval.com'
    check_gsc(CREDENTIALS_PATH, SITE_URL)
