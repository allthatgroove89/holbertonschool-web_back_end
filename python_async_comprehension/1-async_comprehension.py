#!/usr/bin/env python3
"""
Module demonstrating asynchronous comprehensions.
"""


from typing import List
from async_generator import async_generator


async def async_comprehension() -> List[float]:
    """
    Collects 10 random numbers from an async generator.

    Returns:
        List[float]: List of 10 random numbers.
    """
    result = [number async for number in async_generator()]
    return result
