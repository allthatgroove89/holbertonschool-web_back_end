#!/usr/bin/env python3
"""
Module to measure the runtime of executing
multiple asynchronous comprehensions concurrently.
"""


import asyncio
import time
from async_comprehension import async_comprehension


async def measure_runtime() -> float:
    """
    Measures the total runtime of running four
    async_comprehension coroutines concurrently.

    Returns:
        float: The total runtime in seconds.
    """
    start_time = time.perf_counter()
    await asyncio.gather(
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
    )
    end_time = time.perf_counter()
    return end_time - start_time
