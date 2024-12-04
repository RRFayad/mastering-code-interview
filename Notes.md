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
