import os
import json
from google.oauth2 import service_account
from googleapiclient.discovery import build
import time

def request_indexing(credentials_path, urls):
    # Indexing API scope
    scopes = ['https://www.googleapis.com/auth/indexing']
    
    try:
        credentials = service_account.Credentials.from_service_account_file(
            credentials_path, scopes=scopes)
        
        # Build the service for the Indexing API
        service = build('indexing', 'v3', credentials=credentials)
        
        print(f"{'URL':<50} | {'Status'}")
        print("-" * 65)
        
        for url in urls:
            body = {
                'url': url,
                'type': 'URL_UPDATED'
            }
            try:
                # Send the indexing request
                response = service.urlNotifications().publish(body=body).execute()
                print(f"{url:<50} | Success")
                # Sleep briefly to avoid hitting rate limits
                time.sleep(1)
            except Exception as e:
                print(f"{url:<50} | Failed: {e}")

    except Exception as e:
        print(f"An error occurred during initialization: {e}")

if __name__ == "__main__":
    CREDENTIALS_PATH = r'c:\Users\tevat\nashvilleemd\gsc_credentials.json'
    # Only pending pages + homepage just to be safe
    URLS_TO_INDEX = [
        'https://nashvillepoolremoval.com/',
        'https://nashvillepoolremoval.com/about',
        'https://nashvillepoolremoval.com/blog',
        'https://nashvillepoolremoval.com/contact',
        'https://nashvillepoolremoval.com/cost',
        'https://nashvillepoolremoval.com/services'
    ]
    request_indexing(CREDENTIALS_PATH, URLS_TO_INDEX)
