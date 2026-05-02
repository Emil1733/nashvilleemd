import os
import json
from google.oauth2 import service_account
from googleapiclient.discovery import build
from datetime import datetime, timedelta

def test_queries(credentials_path, site_url):
    scopes = ['https://www.googleapis.com/auth/webmasters.readonly']
    credentials = service_account.Credentials.from_service_account_file(credentials_path, scopes=scopes)
    service = build('searchconsole', 'v1', credentials=credentials)
    
    end_date = (datetime.now() - timedelta(days=2)).strftime('%Y-%m-%d')
    start_date = (datetime.now() - timedelta(days=9)).strftime('%Y-%m-%d')
    
    request = {
        'startDate': start_date,
        'endDate': end_date,
        'dimensions': ['query'],
        'rowLimit': 50
    }
    
    response = service.searchanalytics().query(siteUrl=site_url, body=request).execute()
    print(json.dumps(response, indent=2))

if __name__ == "__main__":
    CREDENTIALS_PATH = r'c:\Users\tevat\nashvilleemd\gsc-credentials.json'
    SITE_URL = 'sc-domain:nashvillepoolremoval.com'
    test_queries(CREDENTIALS_PATH, SITE_URL)
