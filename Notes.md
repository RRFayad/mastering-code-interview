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

1. When the interviewer says the question, write down the key points at the top (i.e., sorted array). Make sure you have all the details. Show how organized you are.
   Make sure you double-check: What are the inputs? What are the outputs?

2. What is the most important value of the problem? Do you have time, space, and memory, etc.?

3. What is the main goal?
   Don't be annoying and ask too many questions.

4. Start with the naive/brute force approach. First thing that comes into mind.
   It shows that you’re able to think well and critically (you don't need to write this code, just speak about it).

5. Tell them why this approach is not the best (i.e., O(n^2) or higher, not readable, etc...).

6. Walk through your approach, comment things, and see where you may be able to break things.
   Any repetition, bottlenecks like O(N^2), or unnecessary work? Did you use all the information the interviewer gave you? Bottleneck is the part of the code with the biggest Big O. Focus on that. Sometimes this occurs with repeated work as well.

7. Before you start coding, walk through your code and write down the steps you are going to follow.

8. Modularize your code from the very beginning. Break up your code into beautiful small pieces and add comments if you need to.

9. Start actually writing your code now. Keep in mind that the more you prepare and understand what you need to code, the better the whiteboard will go. So never start a whiteboard interview not being sure of how things are going to work out. That is a recipe for disaster.

10. Keep in mind: A lot of interviews ask questions that you won’t be able to fully answer on time.
    So think: What can I show in order to demonstrate that I can do this and I am better than other coders? Break things up into functions (if you can’t remember a method, just make up a function, and you will at least have it there). Write something, and start with the easy part.

11. Think about error checks and how you can break this code. Never make assumptions about the input.
    Assume people are trying to break your code and that Darth Vader is using your function. How will you safeguard it? Always check for false inputs that you don’t want. Here is a trick: Comment in the code the checks that you want to do... write the function, then tell the interviewer that you would write tests now to make your function fail (but you won't need to actually write the tests).

12. Don’t use bad/confusing names like i and j. Write code that reads well.

13. Test your code: Check for no params, 0, undefined, null, massive arrays, async code, etc...
    Ask the interviewer if we can make assumptions about the code. Can you make the answer return an error? Poke holes into your solution. Are you repeating yourself?

14. Finally, talk to the interviewer about where you would improve the code.
    Does it work? Are there different approaches? Is it readable? What would you google to improve? How can performance be improved? Possibly: Ask the interviewer what was the most interesting solution you have seen to this problem.

15. If your interviewer is happy with the solution, the interview usually ends here.
    It is also common that the interviewer asks you extension questions, such as how you would handle the problem if the whole input is too large to fit into memory, or if the input arrives as a stream. This is a common follow-up question at Google, where they care a lot about scale. The answer is usually a divide-and-conquer approach — perform distributed processing of the data and only read certain chunks of the input from disk into memory, write the output back to disk, and combine them later.
