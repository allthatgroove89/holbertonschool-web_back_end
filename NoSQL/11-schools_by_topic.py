#!/usr/bin/env python3
"""
Module for retrieving schools by topic in a MongoDB collection.
"""


def schools_by_topic(mongo_collection, topic):
    """
    Returns the list of schools having a specific topic.

    :param mongo_collection: pymongo collection object
    :param topic: string, the topic to search for
    :return: list of schools having the specific topic
    """
    return list(mongo_collection.find({"topics": topic}))
