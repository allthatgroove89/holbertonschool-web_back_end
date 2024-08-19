# Python - Async Comprehension
## Learning Objectives

By the end of this project, you should be able to explain the following concepts to anyone, without using Google:

    How to write an asynchronous generator
    How to use async comprehensions
    How to type-annotate generators

## General Requirements

    Allowed editors: vi, vim, emacs
    All your files will be interpreted/compiled on Ubuntu 18.04 LTS using Python 3 (version 3.7)
    All your files should end with a new line
    The first line of all your files should be exactly #!/usr/bin/env python3
    A README.md file, at the root of the folder of the project, is mandatory
    Your code should use the pycodestyle style (version 2.5.x)
    The length of your files will be tested using wc
    All your modules should have documentation (use python3 -c 'print(__import__("my_module").__doc__)' to test)
    All your functions should have documentation (use python3 -c 'print(__import__("my_module").my_function.__doc__)' to test)
    Documentation should be a full sentence explaining the purpose of the module, class, or method (length will be verified)
    All your functions and coroutines must be type-annotated

## Tasks
### 0. Async Generator

Write a coroutine called async_generator that takes no arguments.

    The coroutine should loop 10 times, each time asynchronously waiting 1 second, then yield a random number between 0 and 10 using the random module.

Example:

python

#!/usr/bin/env python3

import asyncio

async_generator = __import__('0-async_generator').async_generator

async def print_yielded_values():
    result = []
    async for i in async_generator():
        result.append(i)
    print(result)

asyncio.run(print_yielded_values())

### 1. Async Comprehensions

Import async_generator from the previous task and write a coroutine called async_comprehension that takes no arguments.

    The coroutine should collect 10 random numbers using an async comprehension over async_generator, then return the 10 random numbers.

Example:

python

#!/usr/bin/env python3

import asyncio

async_comprehension = __import__('1-async_comprehension').async_comprehension

async def main():
    print(await async_comprehension())

asyncio.run(main())

### 2. Run Time for Four Parallel Comprehensions

Import async_comprehension from the previous file and write a measure_runtime coroutine that will execute async_comprehension four times in parallel using asyncio.gather.

    measure_runtime should measure the total runtime and return it.

Note: The total runtime is roughly 10 seconds. Try to explain this behavior.

Example:

python

#!/usr/bin/env python3

import asyncio

measure_runtime = __import__('2-measure_runtime').measure_runtime

async def main():
    return await(measure_runtime())

print(asyncio.run(main()))
