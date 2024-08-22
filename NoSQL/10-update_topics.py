#!/usr/bin/env python3
"""
Module for updating topics in a MongoDB collection.
"""


def update_topics(mongo_collection, name, topics):
    """
    Updates the topics of a document based on the name.
    """
    mongo_collection.update_many(
        # search for whats going to be update/change
        {"name": name},
        # once I got what Im gonna update I "set/update" it.
        {"$set": {"topics": topics}}
    )
