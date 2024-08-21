#!/usr/bin/env python3
"""
Module to list all documents in a MongoDB collection.
"""


from pymongo import MongoClient


def list_all(mongo_collection):
    """
    Lists all documents in a collection.

    Args:
        mongo_collection: A pymongo collection object.

    Returns:
        A list of documents in the collection.
    """
    documents = list(mongo_collection.find())
    return documents if documents else []
