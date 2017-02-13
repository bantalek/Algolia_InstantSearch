import requests

API_KEY = '031ccd7a28912ed74e0b262b92d9aeab'
APPLICATION_ID = 'FND5QH0PGJ'

headers = {
    'X-Algolia-API-Key': '%(API_KEY)s' % {'API_KEY': API_KEY},
    'X-Algolia-Application-Id': '%(APPLICATION_ID)s' % {'APPLICATION_ID': APPLICATION_ID},
}

def batch(index_name, data): 
    url = 'https://%(APPLICATION_ID)s.algolia.net/1/indexes/%(index_name)s/batch' % {'index_name': index_name, 'APPLICATION_ID': APPLICATION_ID}
    print('attempting to connect to', url)
    requests.post(url, headers=headers, data=data)

def search(): 
    url = 'https://%(APPLICATION_ID)s-dsn.algolia.net/1/indexes' % {'APPLICATION_ID': APPLICATION_ID}
    print('attempting to connect to', url)
    x = requests.get(url, headers=headers)
    print(x.json())