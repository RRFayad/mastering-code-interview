# Mastering the Code Interview Course - ZTM

## 1. Intro

- ![Course Structure](/images/1_course-structure.png)

- The course is structured in a non-technical part (such as offers, negotiation etc) and a Technical Part - Which has CS Overview, such as data arrays, algorithms, etc;

## 2. Getting More Interviews

- It's a numbers game (we want a success rate above 1%), and one good offer is enough

- To get the interview:

  - Resume
    - Use pre made templates
    - One Page
    - Relevant Skills
      - Use Key Words the Company Use in the Job Description
    - Look Personalized
      - Changing a Headline or maybe a sentence for why I would fit well to the company
      - Include the company name
      - 1st Item on the resume should be what the company is looking for
    - What if I don't have enough experience?
      - GitHub
        - Make sure there are enough commits
        - Open Source Projects
          - There are some open source projects in ZtM
      - WebSite (mashup template?)
      - 1 ~ 2 Big Projects
      - Blog
  - Linkedin
    - Apply to jobs through LI
    - Keywords
      - Andrei say that it's a nice trick to **update anything** in the profile every couple of days - It may be only a typo
    - Recomendations
      - They are nice to rank the profile
    - Choose the company and check shared connections
  - Portfolio

    - Look for free templates in mashup-template
    - Free templates:
      - [ZTM Board](https://github.com/zero-to-mastery/ZtM-Job-Board)
      - [HTML 5UP](https://html5up.net/) (this is my favourite)
      - [Free css](https://www.free-css.com/template-categories/portfolio)
      - [Cruip](https://cruip.com/)
      - [Bootstrap Templates](https://mdbootstrap.com/freebies/)
      - [Creative Tim Templates](https://www.creative-tim.com/bootstrap-themes/free)
    - [Some Inspiration](https://www.awwwards.com/websites/portfolio/)

  - Email
    - Nothing new here
      - "Hey $BOB,
        I saw your presentation at $CONFERENCE last year on Youtube (rr point to some work they have done).
        Great stuff; loved what you did with $FOO, in particular
        $COMMENT_PROVING_YOU_KNOW_WHAT_YOU'RE_TALKING_ABOUT.
        I'm also a $FOO developer. I noticed that your company is hiring
        or $ROLE. I’d love to be a part of your team. Do you have a
        few minutes to chat on Thursday about what you guys are doing?
        Thanks,
        Yourname
        Your website or any public profile link
        "

- Where to find the jobs
  - Linkedin
  - Hackernews: 'Who's hiring'
  - Wellfound (start ups)
  - Weworkremotely
  - triplebyte
  - meetup - Networking
  - Searchs:
    - in google: 'site:linkedin.com facebook recruiter' (supposing facebook is where I want)
    - in linkedin

## 3. Big O

[TypeScript Solutions](https://github.com/CoffeelessProgrammer/Data-Structures-and-Algorithms-TS)

- Environments:
- glot.io
- repl.it

#### Section Overview

- Big O is one of the most important aspects to know
  - [Big O Cheat Sheet](https://zerotomastery.io/cheatsheets/big-o-cheat-sheet/)

#### 30. What's Good Code?

- Good code is Readable and Scalable
  - Readability - The code has to be clean, understandable
  - Scalabiility - That's where Big O enters in scene

#### 31. Big O and Scalability

- We are testing with performance.now() how long it takes to our code to be ran

- So when we talk about Big O and scalability, the variable is how much the inputs lengths affect the performance of the code
  - The lesser the better

![Big O Chart](images/Big%20O%20Chart.png)

#### 32. O(n)

- "What's the Big O of the findNemo function?'
  - In or case, findNemo is a linear function, in a way that each element (in the arg array) linearly increments the performance time
  - So, its called O(n)

#### 33. O(1)

`const printFirstItem = (boxes) => console.log(boxes[0])`

- This is a constant time or O(1)

#### 38. Simplifying Big O

- 4 Rules:

  1. Worst Case Scenario

  - If it's a loop, consider our element will be the last item

  2. Remove Constants

  - It's only abouy when we have something like O(2 + 3n + 100), it's simply O(n)

  3. Different terms for inputs

  4. Drop Non Dominants

  - If we calculate O(n+n^2) it's simply O(n^2)

#### 42. O(n^2) - Quadratic time

- Nested Loops (for inside a for)

#### 45. What Does This All Mean?

- Imporant to always think in the scalability of the code;

- So we always have to think in the Data Structuce and in the Algorithms we develop

- Data Sctructures + Algorithms = Programs

#### 46. O(n!)

- If the code has this notation, it's certainly wrong
  - It's a nested loop for every element

#### 47. 3 Pillars Of Programming

- WHat is good code? (Getting back to this topic)

  1. Readable (we'll dive deep later)
  2. Scalable

- WHich code is the best?
  - Readable
  - Speed (Time Complexity)
  - Memory (Space complexity)

#### 48. Space Complexity

- What causes Space complexity?
  - Variables
  - Data Structures
  - Function Call
  - Allocations

#### Summary

- Big O says which algorithm is best, considering scalaility

## 4. Interview - How to Solve Coding Problems

#### 53. Section Overview

- Remember: It's not the smartest coder who gets hired, it's the first one who answers good enough the question: "Are you able tosolve the companies problems?"

#### 54. What are companies looking for?

1. Analytic Skills

- Analyze and think about solving problems;

2. Coding Skills

- Readable and Organized code;

3. Technical Skills

- Fundamentals;

4. Communication Skills

- Communication with the team

#### 55. What We Need For Coding Interviews

1. Data Structures

   - Arrays
   - Stacks
   - Queues
   - Linked Lists
   - Trees
   - Tries
   - Graphs
   - Hash Tables

2. Algorithms

   - Sorting
   - Dynamic Programming
   - BFS + DFS (Searching)
   - Recursion

   ![Tech Interview Mind Map](/images/Tech-Inerview-Mind-Map.png)

#### 56. Exercise: Google Interview

- [Google Interview](https://www.youtube.com/watch?v=XKu_SEDAykw)

  - Watch the Google Interview and see the applicatoin of all the steps in our [Cheat Sheet](/4.%20How%20to%20Solve%20Coding%20Problems/cheatsheet.pdf)

- Given problem:

  - You will have 2 args, an list of numbers, and a number. I want you ti find a pair of numbers in the list which adds up to the given number.
    - e.g.: [1,2,4,4], 8 should return 4,4

- My observations about the interviewee:

  1. Receives and understand the Problem
  2. Check the premises (like "Inputs will always be integers?", "Always in an array?", "Will they always be sorted?" etc)
  3. Interviewee is thinking out loud:

  - "I can loop each number, and then loop again. But it will be a quadratic notation solution"
  - "I can use binary search for pairs, but it would be a log solution"
  - "So I can scan the bigger and the smaller, whenever the sum is bigger than the number, I skip the bigger number (backwards) and if the sum is smaller than the number, I skip the smaller number. So it will be a linear solution"

- Summary:

  - Clarification of the problem
  - Before Writing code, think out loud
  - Analytical thinking through different solutions (before the code)
  - Test it in real time

### Cheat Sheet

1. Write down the key points at the top. Make sure you have the Main Goal, Inputs and Outputs.

2. What is the most important value of the problem? Time, space, memory, etc.?

3. Start with the naive/brute force approach.

   - Tell them why this approach is not the best (i.e., O(n^2) or higher, not readable, etc...).

4. Review he naive approach looking for improvment - where you may be able to break things, any repetition, bottlenecks like O(N^2)

- Focus on the Big O and repeated work.

5. Before you start coding, write down the steps of the solution.

6. Modularize your code into beautiful small pieces and add comments if you need to.

7. Start writing your code now. Never start a whiteboard interview not being sure of how things are going to work out. That is a recipe for disaster.

8. If can't answer everything, all the broken steps demonstrates skill

9. Think about error checks and how you can break this code. Never make assumptions about the input.

- Comment in the code the checks that you want to do...
- Rell the interviewer that you would write tests now to make your function fail (but you won't need to actually write the tests).

10. Write code that reads well (good naming).

11. Test your code: Check for no params, 0, undefined, null, massive arrays, async code, etc...

    - Ask the interviewer if we can make assumptions about the code.

12. Finally, talk to the interviewer about where you would improve the code.

    - Are there different approaches? Testing / safe guarding?
    - Maybe ask some feedback or what was the most interesting solution you have seen to this problem.

13. If your interviewer is happy with the solution, the interview usually ends here.
    - A common question is "What if the input is huge?" The answer is usually "perform distributed processing of the data and only read certain chunks of the input from disk into memory, write the output back to disk, and combine them later".

## 5. Data Structures

#### 62. Section Overview

- Data Structures are collections of values

- Algorithms are the processes we put into place to maniputale data

- Libraries and technologies change, these are atemporal fundamentals

#### 63. What Is A Data Structure?

- Data Struture are data collections

- Each data structure has its own finality

  - Considering the trade off in time complexity and space complexity

- **How to Build** and **How to Use** data structures are the main aspect of learning it

#### 64. How computers store data

- CPU (Central Processing Unit)

  - The brain of the computer that executes instructions and processes data.
  - Responsible for running the code and performing computations.
  - Works closely with RAM to fetch, decode, and execute instructions.

- RAM (Random Access Memory)

  - Temporary storage used by the CPU to store variables, states, and intermediate data while programs are running.
  - Non-persistent: Data is lost when the computer is turned off.
  - Acts as high-speed storage compared to regular storage devices (e.g., HDD/SSD).
  - Organized into numbered "shelves" (memory addresses), each capable of holding 8 bits (1 byte) of data.

- How the CPU, RAM, and Storage Work Together

  - The CPU executes code and relies on RAM for quick access to data during execution.
  - When the CPU needs to perform a task:
  - Instructions and data are loaded from persistent storage (e.g., HDD/SSD) into RAM for faster access.
  - The CPU interacts with RAM to read and update the state while the program is running.
  - After execution, data that needs to be saved is written back to persistent storage.

- Storage
  - Persistent storage for files, applications, and operating systems (e.g., HDD, SSD).
  - Slower than RAM but retains data even when the computer is powered off.
  - Used for long-term data storage.

#### 65. Data Structures In Different Languages

- Main Data structures

  - Arrays
  - Stacks
  - Queues
  - Linked Lists
  - Trees
  - Tries
  - Graphs
  - Hash Tables

- Each language has its specific data types
  - JS is mainly arrays and objects, so we have to create our own data structures
