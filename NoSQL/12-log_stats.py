#!/usr/bin/env python3
"""
Script to provide stats about Nginx logs
stored in MongoDB
"""


from pymongo import MongoClient


def log_stats():
    client = MongoClient('mongodb://127.0.0.1:27017')
    db = client.logs
    collection = db.nginx
    # Total number of logs
    total_logs = collection.count_documents({})
    # Count for each HTTP method
    method = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    method_count = {
        method: collection.count_documents(
            {"method": method}) for method in method
        }
    # Count for GET method with path /status
    status_check = collection.count_documents(
        {"method": "GET", "path": "/status"})
    # Print the results
    print(f"{total_logs} logs")
    print("Methods:")
    for method in method:
        print(f"\tmethod {method}: {method_count[method]}")
    print(f"{status_check} status check")


if __name__ == "__main__":
    log_stats()
