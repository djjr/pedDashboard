const questions = [
    {
      "number": "0001",
      "question": " In connection with a program that provides alternatives for youth who have a run in with the criminal justice system, a colleague mentions that the program could be more effective if there were an easy way to predict who might benefit from the alternative program.  The data suggests that about 75% of the youth in Ourtown are \"good kids\" who would benefit from the alternative program and 25% are \"bad kids\" who will not.  Your supervisor also says you should come up with some more acceptable terms than \"good\" and \"bad.\" It turns out that when a kid is, in fact, \"bad,\" the test gets it right 90% of the time, wrong 10%.  But when the kid is, in fact, \"good,\" the test says \"bad\" 30% of the time.12. Sketch an event tree that captures this and then flip the tree to evaluate the test and provide guidance on how to interpret its results.  ",
      "soln": "<h3>SOLUTION</h3>First we set up the [[[event tree]]] to represent the information we have in hand -- what the test can tell us if we already know the reality.  The \"reality\" node is to the left and the \"test\" nodes are to the right.  The known probabilities are assigned to the different branches. <br /><img src=\"https://djjr.us/images/qbank/tree-flip-solution-00.gif\"><br />Next we flip the tree -- not worrying about the numbers at first.<br /><img src=\"https://djjr.us/images/qbank/tree-flip-solution-01.gif\"><br />Then we transfer the path probabilities from the right end of the paths in the original tree to the corresponding paths in the flipped tree.<br /><img src=\"https://djjr.us/images/qbank/tree-flip-solution-02.gif\"><br />Next we add up all the probability that comes off the top branch of the new test node -- the path probabilities on the two upper branches.  And then repeat for the lower test branch.<br /><img src=\"https://djjr.us/images/qbank/tree-flip-solution-03.gif\"><br />Finally, we calculate the probabilities coming off the R nodes.  What numbers would produce the given path probabilities given the computed test probabilities (in green) from step 2?  The formula is \\(\frac {path probability} {test probability}\\)<br /><img src=\"https://djjr.us/images/qbank/tree-flip-solution-04.gif\"><br />If we agree to talk about the test as detecting \"good\" kids who will benefit from the alternative program then we would say that a \"positive\" test result is when the test says a kid is \"good.\"  These results suggest that this test is solid when it indicates a \"good\" kid -- only 5% of the time will it give a [[[false positive]]].  On the other hand, when the test indicates a negative result it is right only half the time.Our policy suggestion, then, would probably be to accept positive test results, but to refer negative results for a more in-depth investigation.",
      "tags": [
        "computational thinking",
        "social network analysis",
        "research methods"
      ]
    },
    {
      "number": "0002",
      "question": " Sketch, anew, the decision tree for the embassy party described in the text book.<blockquote> \"The officer in charge of a United States Embassy recreation program has decided to replenish the employees club funds by arranging a dinner. It rains nine days out of ten at the post and he must decide whether to hold the dinner indoors or out. An enclosed pavilion is available but uncomfortable, and past experience has shown turnout to be low at indoor functions, resulting in a 60 per cent chance of gaining $100 from a dinner held in the pavilion and a 40 per cent chance of losing $20. On the other hand, an outdoor dinner could be expected to earn $500 unless it rains, in which case the dinner would lose about $10\" (Stokey & Zeckhauser 1977, 202).</blockquote>",
      "soln": "<h3>SOLUTION</h3><br /><img src=\"https://djjr.us/images/qbank/decision-tree-problems-03.gif\"><br />",
      "tags": [
        "policy modeling"
      ]
    },
    {
      "number": "0003",
      "question": " What is the expected value of a two dice toss if the payoff is whatever comes up on the dice, in dollars?  Sketch this as a decision tree with just chance nodes.",
      "soln": "<h3>SOLUTION</h3>There are many different ways to visualize this solution.  Here is one.  The tree starts out from a chance node representing the first die roll.  The six things that can happen are shown as a pink die coming up 1, 2, 3, 4, 5, 6.  From each of these chance nodes we have another even -- the second roll.  Each of these has six possible outcomes as well.<br /><img src=\"https://djjr.us/images/qbank/decision-tree-problems-04.gif\"><br />",
      "tags": [
        "policy modeling"
      ]
    },
    {
      "number": "0004",
      "question": "Along with the alternative arrest program, a town is considering a mix of extra community policing, after school programs and evening youth programs as a part of their comprehensive efforts.Proposals are on the table for three interventions, each of which can be implemented at different levels.  Costs and benefits have been calculated by our crack accounting team and are shown in table form and chart form.<table><tr><td><br /><img src=\"https://djjr.us/images/qbank/cba-mnb-table.gif\"><br /></td><td><br /><img src=\"https://djjr.us/images/qbank/cba-mnb-chart.gif\"><br /></td></tr></table>",
      "soln": "<h3>SOLUTION</h3>We assume we are spending $25,000 \"at a time,\" at each step choosing the next available opportunity with the highest marginal net benefit.  Before we have done anything at all the best first investment is in the after school program which promises a MNB of 0.6 at that point.  After that investment's been made, the best available opportunity is another \"dose\" of the same program.  In going from a $25k program to a $50k program it promises MNB of 0.8.  We continue two more investments of $25k in this program as they are still higher MNB than the next best (which is an initial investment in police or evening programs, both of which have MNB of 0.5).  Thus, steps 1 through 4 are after school.Technically we could go for either policing or evening program here.  Our options?  We can choose one or the other but we notice that the sequence that follows depends on which one.  Since the next investments in police offer higher MNB, you could argue that we should just start with police (this would allow us to follow a rule of \"maximize NB all along the way\").  Or, perhaps the better decision is \"both\" -- that is, our 5th and 6th investments would be to get started with police and evening programs.  Each of these is arguable.  Here we'll choose the option that says start with police since it offers the higher immediately following opportunities. (in practice this approach does not always work as a fail safe, step-by-step program: faced with funky up and down MNB curves that we don't know how far down we will get, we'd probably do a systematic comparison of different scenarios)Thus, the next three investments (#5, #6, #7) are police.  Then the next opportunities are after school (MNB=0.25), police (MNB=0.4), and evening program (MNB=0.5).  Thus, the 8th investment is is evening program.At this point, the best next investments are the evening program.  And for the next three steps -- which exhaust our $300k budget -- this is the best program to invest in.  All these are shown below.<br /><img src=\"https://djjr.us/images/qbank/cba-mnb-chart-solution.gif\"><br /><table class=\"wikitable\"><tr><td>Step</td><td>Project</td><td>Cumulative Allocation</td><td>Step</td><td>Project</td><td>Cumulative Allocation</td></tr><tr><td>1st</td><td>After School</td><td>25k</td><td>7th</td><td>Police</td><td>175k</td></tr><tr><td>2nd</td><td>After School</td><td>50k</td><td>8th</td><td>Evening</td><td>200k</td></tr><tr><td>3rd</td><td>After School</td><td>75k</td><td>9th</td><td>Evening</td><td>225k</td></tr><tr><td>4th</td><td>After School</td><td>100k</td><td>10th</td><td>Evening</td><td>250k</td></tr><tr><td>5th</td><td>Police</td><td>125k</td><td>11th</td><td>Evening</td><td>275k</td></tr><tr><td>6th</td><td>Police</td><td>150k</td><td>12th</td><td>Evening</td><td>300k</td></tr></table>",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0005",
      "question": "The community is also trying to create a neighborhood resident association.  Ten members are recruited each month through posters put up in the community.  In addition, each member typically recruits 1 new member every five months (that is, about 0.2 new members per member per month).  And finally, attrition seems to run at about 40% per month.<ul><li>What are the \"rates\"?  What are the \"amounts\"?</li><li>Write the difference equation in general form (Pn+1=aPn + b)</li><li>Label the diagram below as fully as you can.</li></ul><br /><img src=\"https://djjr.us/images/qbank/pn%2B1vspn.gif\"><br /><ul><li>What is the equilibrium value?  Is it a stable or unstable equilibrium?  How can you tell?</li><li>Label this chart as fully as possible and then explain what it shows.</li></ul><br /><img src=\"https://djjr.us/images/qbank/pnvst.gif\"><br />",
      "soln": "<h3>SOLUTION</h3><blockquote> Start by identifying rates and amounts:</blockquote><blockquote></blockquote><blockquote> **Rates:** 0.2 new members per member per month; 40% attrition per month</blockquote><blockquote> **Amounts:** 10 new members each month</blockquote><blockquote></blockquote><blockquote> The general form of the difference equation here is</blockquote><blockquote></blockquote><blockquote> \\(members_{n+1} = (1 + 0.2 - 0.4) \\times members_{n} + 10 = 0.8 \\times members_{n} + 10\\)</blockquote><blockquote></blockquote><blockquote> We can plot this on a P_{n+1} vs. P_{n} chart:</blockquote><blockquote></blockquote><blockquote> <br /><img src=\"https://djjr.us/images/qbank/pn%2B1vspn-key.gif\"><br /></blockquote><blockquote></blockquote><blockquote> We calculate the equilibrium value in the normal way:</blockquote><blockquote> \\(P_{E} = \frac {b} {1-a} = \frac {10}{1 - 0.8} = 50\\)</blockquote><blockquote> We could also read this off the chart.  And we can tell it is a stable equilibrium from the P_{n+1} vs. P_{n} diagram since the difference equation line is shallower than the 45 degree line.</blockquote><blockquote></blockquote><blockquote> Finally, we should plot membership vs time for various starting values to see how this system behaves -- we see that for initial values above 50 there is a gradual decline to 50 and for numbers below there is a gradual growth that tapers off at 50.</blockquote><blockquote> <br /><img src=\"https://djjr.us/images/qbank/pnvst-key.gif\"><br /></blockquote><blockquote></blockquote><blockquote> [[file q:0005/difference-equation-exam-question.xlsx| Excel File]]</blockquote>",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0006",
      "question": " It's the end of the semester and it's time to optimize.  I have a sociology final exam and a public policy final exam on the same day and I can only allocate 16 hours total to exam preparation.I estimate that if I do not study at all, I'll get C- in public policy and a C+ in sociology.  But, experience has shown that studying pays off.  In sociology, each hour of study raises my grade by 1/3 (0.33) of a letter grade (C- to C, for example).  In public policy, the payoffs are not as quick: each 2 hours yields 1/3 of a letter grade (0.167 grade per hour).Thus, 3 hours of sociology study would take me from C+ to B+<table class=\"wikitable\"><tr><td>C</td><td>> 1 hour ></td><td>B-</td><td>> 1 hour ></td><td>B</td><td>> 1 hour ></td><td>B+</td></tr></table>Our plans are subject to a number of constraints:<ul><li>There is a four hour public policy study session planned with the professor and it would be unwise and impolitic not to attend.  Thus, PPOL hours has to be at least 4.</li><li>Since the top grade is A, sociology will top out at 5 study hours since these will take me from C+â€¦B-â€¦Bâ€¦B+â€¦A-â€¦A and in public policy my max is correspondingly 14 with each 2 hours taking me one grade of the seven steps from C- to A.</li><li>Total study hours must be 16 or less.</li><li>Since I am a public policy major, I feel strongly that I have to study more for PPOL than for SOCIOLOGY</li></ul>I translate these into five inequalities<ul><li>(Only 16 hours )     PPOL = -SOC + 16</li><li>(More PPOL than SOCIOLOGY)     PPOL â‰¥ SOC</li><li>(PPOL Study Group)     PPOL â‰¥ 4</li><li>(SOCIOLOGY max)     SOC â‰¤ 5</li><li>(PPOL max)     PPOL â‰¤ 14</li></ul>I want to know how to divide my study time so as to maximize my grades.  Let's start with a typical Excel layout for a simple LP problem.<br /><img src=\"https://djjr.us/images/qbank/LP-setup-1.gif\"><br /><br /><img src=\"https://djjr.us/images/qbank/LP-chart-01.gif\"><br />Identify the lines in this chart, indicate the feasible set, and find the optimal value of the variables and the resulting value of the objective function.",
      "soln": "<h3>SOLUTION</h3><br /><img src=\"https://djjr.us/images/qbank/LP-chart-02.gif\"><br />We can identify the optimum by sketching the \"iso-lines\" for the objective function and noting which vertex of the feasible set touches the highest objective function value.  Or we can use solver to compute the maximum.  Or, if we have to do it by hand we can proceed systematically as follows:<ol><li>Solution will be at a vertex of feasible set: (0,14), (2,14), (5,11), (5,5), (4,4), or 0,4)</li><li>Some of these can be ruled out as they are clearly dominated by another option</li></ol> * (2,14) > (0,14) * (5,11) > (5,5) > (4,4) > (0,4)<ol><li>And so we just need to compute the objective function for (2,14) and (5,11)</li></ol> * grade_boost(2,14) = 0.333*2 + 0.167*14 = 3.0 * grade_boost(5,11) = 0.333*5 + 0.167*11 = 3.5<br /><img src=\"https://djjr.us/images/qbank/LP-chart-03.gif\"><br />Download [[file http://djjr-courses.wikidot.com/local--files/q:0006/LP-soc-ppol-study-allocation.xlsx| Excel File]]",
      "tags": [
        "policy modeling",
        "design",
        "research methods"
      ]
    },
    {
      "number": "0007",
      "question": ".  Blank",
      "soln": "<h3>SOLUTION</h3>This is the solution.",
      "tags": []
    },
    {
      "number": "0008",
      "question": ".  Blank",
      "soln": "<h3>SOLUTION</h3>solution for 8",
      "tags": []
    },
    {
      "number": "0009",
      "question": ".  Blank",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": []
    },
    {
      "number": "0010",
      "question": " It is plausible to assume that the higher the ticket for speeding the fewer people will speed (assuming, for the moment, that there is a fixed likelihood of getting caught).  Suppose the following curve represents how we expect drivers react (in the aggregate) to the size of speeding tickets.<br /><img src=\"https://djjr.us/images/qbank/driving-deterrence-graph.gif\"><br /> Which point (A, B, C, D) on the graph reflects the fact that some people will take their chances and speed no matter how high the fines are?",
      "soln": "<h3>SOLUTION</h3>Normative is the most likely choice -- they just think you should follow the rules.",
      "tags": [
        "social network analysis"
      ]
    },
    {
      "number": "0011",
      "question": " â€œZero toleranceâ€ is a popular cry these days, but does it always make sense? It is certainly a powerful symbolic statement, but it presents problems. Consider the diagram below and discuss the idea of zero tolerance in terms of marginal costs and benefits.<br /><img src=\"https://djjr.us/images/qbank/zero-tolerance.gif\"><br />",
      "soln": "<h3>SOLUTION</h3>TBA",
      "tags": []
    },
    {
      "number": "0012",
      "question": " Erikson writes â€œâ€¦the very expression â€˜he is a thiefâ€™ or â€˜he is an addictâ€™ seems to provide at once a description of his position in society and a profile of his character.â€ How is this relevant for understanding one of the main points of the Rosenhan article?",
      "soln": "<h3>SOLUTION</h3>TBA",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0013",
      "question": " Even the worst \"deviant\" is mostly a conformer. Explain what this means and what itâ€™s relevance is fora theory of social control.",
      "soln": "<h3>SOLUTION</h3>TBA",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0013",
      "question": " Even the worst \"deviant\" is mostly a conformer. Explain what this means and what itâ€™s relevance is fora theory of social control.",
      "soln": "<h3>SOLUTION</h3>TBA",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0014",
      "question": " Fill in the focus column of the table below and try to find an example of each in your file. Write a sentence or two explaining how the example illustrates the focus of this style of social control.<table class=\"wikitable\"><tr><td>Style</td><td>Focus</td><td>Example</td></tr><tr><td>Penal</td></tr><tr><td>Compensatory</td></tr><tr><td>Conciliatory</td></tr><tr><td>Therapeutic</td></tr><tr><td>Reform</td></tr><tr><td>Prevention</td></tr></table>",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0015",
      "question": " Write a few paragraphs (&lt; 400 words) explaining what makes these two situations a pair.By the late 1630s and 1640s the population of Massachusetts Bay was no longer just the original â€œtrue believerâ€ settlers.  Some of the disputes that arose at this time were around the question of who is â€œreallyâ€ a Puritan, whether people who arenâ€™t â€œsavedâ€ should be voting members and so on.andâ€œPolitical correctnessâ€ became an issue in the 1980s and 1990s ten to twenty years after the major social value shifts which occurred in the late 1960s around issues of race, gender, and politics.  People became increasingly concerned about appearing to be on the right side of various debates even when they didnâ€™t wholeheartedly agree with a given position.  ",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": [
        "policy modeling",
        "social theory",
        "social network analysis"
      ]
    },
    {
      "number": "0016",
      "question": " In some countries (and in some parts of this country) bus queues are more orderly and more common than in others. In other words, in some places people actually form a nice neat line starting at the spot where the bus will pull up so that people can board in exactly the order they arrived at the stop. Whatâ€™s a common phrase for the norm used in such cases? Under what kinds of conditions would you expect strict queuing vs. more nonchalant â€œstanding aroundâ€? Can you express the plusses and minuses in terms of deadweight loss and transaction costs?",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": []
    },
    {
      "number": "0017",
      "question": " Coser described several theorists whose work looked at \"social control from the inside.\" What's the \"technical term\" for \"social control from the inside\"? Name three of these theorists and provide some identifying information (e.g., \"Tongan psychotherapist who wrote in 1920s\").",
      "soln": "<h3>SOLUTION</h3><ul><li>Internalization (of norms)</li><li>William Graham Sumner â€“ U.S. sociologist (1840-1910)and economist, prolific publicist of Social Darwinism. Introduced idea of mores and folkways.</li><li>Emile Durkheim â€“ French sociologist (1858-1917) â€“ wrote that societies move from external control toward internal control</li><li>Sigmund Freud â€“ Austrian neurologist (1856-1939), founder of psychoanalysis.  Superego as \"internal policeman.\"</li><li>Jean Piaget (1896-1980) Swiss psychologist who was the first to make a systematic study of the acquisition of understanding in children.</li><li>Talcott Parsons (1902-1979) -- American sociologist and scholar whose theory of social action influenced the intellectual bases of several disciplines in modern sociology. His work is concerned with a general theoretical system for the analysis of society rather than with narrower empirical studies.</li></ul>",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0018",
      "question": " Deviance has multiple functions.  Give a examples of deviation as (1) a pressure release valve; (2) innovation.",
      "soln": "<h3>SOLUTION</h3>Pressure release valve: celebrations, festivals, dances.Innovation:  art, music, fashion, science. Civil rights activists who broke laws but who are now considered forward thinking and courageous heroes.",
      "tags": []
    },
    {
      "number": "0018",
      "question": " Deviance has multiple functions.  Give a examples of deviation as (1) a pressure release valve; (2) innovation.",
      "soln": "<h3>SOLUTION</h3>Pressure release valve: celebrations, festivals, dances.Innovation:  art, music, fashion, science. Civil rights activists who broke laws but who are now considered forward thinking and courageous heroes.",
      "tags": []
    },
    {
      "number": "0019",
      "question": " Explain what Durkheim meant when he wrote that crime is a normal rather than a pathological condition of a society using, as an example, a political group which very carefully screens members to be sure that they agree with all the attitudes that the group stands for so that the group is quite homogeneous. Would Durkheim expect deviance to arise in this group? How so? What kind?",
      "soln": "<h3>SOLUTION</h3>Durkheim argued that deviance is inevitable in any society â€“ even one in which all members are carefully chosen. Eventually someone will step slightly out of bounds of the accepted norms and be seen as deviant. In this political group, someone will have a slightly different point of view that will cause either his/her dismissal, or a split into new factions (B00205201)Durkheim regarded crime as normal because it has existed in every society and in every stage of society's development. It serves many purposes and cannot be eradicated. A group screening members may provide their organization w/a relatively similar set of norms, but they will not avoid deviation. Instead, there will arise a type of \"hypersensitivity,\" further and further narrowing the boundaries of normalcy, leaving someone to be picked as closest to the boundary. (B00196321).",
      "tags": [
        "policy modeling",
        "social theory"
      ]
    },
    {
      "number": "0020",
      "question": " Explain what is meant by \"social control as a dependent variable.\"",
      "soln": "<h3>SOLUTION</h3>Social control is a dependent variable because it is dependent on factors such as status (where located in social space), prestige (place of social honor), location in symbolic space (liberal nonliberal), & vertical space (high low status). B00165275Social control will vary (how much gets used, which kind, who uses it, etc.) depending on several factors: where it is located in social space (vertical, horizontal, etc.) B002133834The style, form, & quantity of social control will varyâ€¦ B00197628Critical things here: Social control varies (say what that means). If we understand it, we can predict HOW it varies (according to location of conflict in social space).",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0021",
      "question": " <a href=\"http://djjr-lib.net/soc112/coser-notion-of-control.pdf\" target=\"_blank\">Coser</a> combines the insight that sometimes deviance is functional (as well as harmful) with the insight that groups donâ€™t always reject rule breakers to form a typology of four social control scenarios. Label the rows and columns of the 2x2 table to the right with the appropriate values.<table class=\"wikitable\"><tr><td>A</td><td>B</td></tr><tr><td>C</td><td>D</td></tr></table>",
      "soln": "<h3>SOLUTION</h3><table style=\"color:green; font-family:courier;\" class=\"wikitable\"><tr><td></td><td>Beneficial to Group</td></tr><tr><td style=\"vertical-align: middle;\">Actiontowarddeviant</td><td><table style=\"border-collapse:collapse;\" class=\"wikitable\"><tr><td></td><td style=\"text-align:center;\">YES</td><td style=\"text-align:center;\">NO</td></tr><tr><td style=\"text-align:center;\">Accept</td><td style=\"border:solid; text-align:center;\">A</td><td style=\"border:solid; text-align:center;\">B</td></tr><tr><td style=\"text-align:center;\">Reject</td><td style=\"border:solid; text-align:center;\">C</td><td style=\"border:solid; text-align:center;\">D</td></tr></table></td></tr></table>",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0022",
      "question": " What does Donald Black mean by â€œcorporate spaceâ€?  In what sense is \"corporateness\" a variable?  Give an example of a conflict in which one party has â€œhighâ€ corporateness and the other has â€œlowâ€ corporateness.",
      "soln": "<h3>SOLUTION</h3>The level of organization within a group indicates place in corporate space.  When a group of high school students gets together to plan a walk-out in response to conditions at school they have low corporateness compared to the school administration they are fighting.  B00205171",
      "tags": []
    },
    {
      "number": "0023",
      "question": " Both Donald Black and Robert Ellickson take care to distinguish between first, second, and third party social control.  Most of this course has focused on one particular type of third party control â€“ informal control through social norms.  Using marriage/married life as an example, briefly demonstrate that you understand that control varies from personal ethics (first party, self control), promisee enforced contracts (second party), and the three types of third party control (organizational rules, law, and social norms) by describing ways each might come up in association with marriage, married relationships, etc..",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": [
        "social theory",
        "social network analysis"
      ]
    },
    {
      "number": "0024",
      "question": " Donald Black described 6 styles of social control â€“ penal, conciliatory, therapeutic, compensatory, prevention, and reform.  Show that you understand what these are and how they fit into this course by considering the different styles of social control that might be employed in conflicts that could emerge between employee and employer or in the workplace in general..",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0025",
      "question": ".  Use NodeXL to reproduce the organizational chart below.  Take note of the appearance of the network with various layout options.  Try changing the type to \"directed\" in the chart panel of the NodeXL ribbon.  What do you say about organizational charts as networks from examining the different layouts?<table><tr><td><br /><img src=\"https://djjr.us/images/qbank/orgchart01.gif\"><br /></td><td style=\"vertical-align: middle;\"><table class=\"wikitable\"><tr><td>President</td><td>VP1</td></tr><tr><td>President</td><td>VP2</td></tr><tr><td>VP1</td><td>Mgr1</td></tr><tr><td>VP1</td><td>Mgr2</td></tr><tr><td>VP2</td><td>Staff1</td></tr><tr><td>Mgr2</td><td>Staff2</td></tr><tr><td>Mgr2</td><td>Staff3</td></tr><tr><td>Mgr2</td><td>Staff4</td></tr></table></td></tr></table>",
      "soln": "<h3>SOLUTION</h3>Enter the information from the table above on the edges worksheet.On the vertices worksheet, copy the vertex names in the first column to the Label column.Press the Refresh Graph button.  The result will almost certainly NOT look like an organizational chart.  We'll fix that momentarily.  <br /><img src=\"https://djjr.us/images/qbank/ch01-ex01-01.gif\"><br />On the vertices worksheet, select the cell range containing the vertices and adjust their appearance using the buttons on the NodeXL ribbon.(if you have trouble seeing your vertices and/or labels try setting vertex size to 3.5 and pushing zoom all the way to the left and scale all the way to the right)Click on the select cursor in the graph window<br /><img src=\"https://djjr.us/images/qbank/ch01-ex01-02.gif\"><br />Drag the vertices one by one until they look something like this:<br /><img src=\"https://djjr.us/images/qbank/ch01-ex01-03.gif\"><br />One layout you might have seen is shown below.  The **topology** (what is connected to what) is the same as above but this layout makes it appear that VP1 is at the middle of the organization -- the four people on either side have to go through her and this might make her some sort of \"gatekeeper.\"  <br /><img src=\"https://djjr.us/images/qbank/ch01-ex01-04.gif\"><br />But we've left something out.  The vertical dimension in a \"normal\" organizational chart implies a relationship of \"gives orders to\" or \"takes orders from\" or \"is the supervisor of\" or \"is the subordinate of.\"  Each of these is an **asymmetric relationship** and the network (graph) they produce is a **directed** one (also known as a directed graph or **digraph**).  In NodeXL we can switch the type of the graph in the graph panel of the NodeXL ribbon.  To make the lines and arrows easier to see we go to the edges worksheet and then use the edgewidth button in the visual properties panel.<br /><img src=\"https://djjr.us/images/qbank/ch01-ex01-05.gif\"><br />Download the [[file /q:0025/chapter01-exercise01-orgchart.xlsx| NodeXL file]] here.",
      "tags": [
        "social network analysis"
      ]
    },
    {
      "number": "0026",
      "question": ".  Amir likes Bashir.  Chastity is liked by Danica.  Chastity likes Ellen.  Amir likes Danica and Ellen.  Franke likes everyone.  Gillian likes Danica.  Ellen likes Bashir.  Sketch this directed network.",
      "soln": "<h3>SOLUTION</h3><br /><img src=\"https://djjr.us/images/qbank/ch01-q0026-01.gif\"><br />solution",
      "tags": [
        "social network analysis"
      ]
    },
    {
      "number": "Q27",
      "question": "  Consider the imaginary bibliographies shown below for 7 classic works of sociology.  <ul><li>Aron, Raymond. 1967. //Les Ã‰tapes de la pensÃ©e sociologique//</li><li>Bourdieu, Pierre. 1972. //Esquisse d'une thÃ©orie de la pratique, prÃ©cÃ©dÃ© de trois Ã©tudes d'ethnologie kabyle// (Outline of a Theory of Practice)</li><li>Crozier, Michel.  1964. //The Bureaucratic Phenomenon//</li><li>Durkheim, Emile.  1912. //Elementary Forms of the Religious Life//</li><li>Erikson, Kai. 1967. //Wayward Puritans//</li><li>Frazier, E. Franklin. 1955. //Bourgeoisie noire//</li><li>Geiger, Theodore. 1963. //Demokratie ohne Dogma: Die Gesellschaft zwischen Pathos und Niichternheit//.</li></ul><table style=\"width: 900px;\" class=\"wikitable\"><tr style=\"vertical-align: top;\"><td>**Aron 1967**CrozierDurkheimFrazierGeiger</td><td>**Bourdieu 1972**AronCrozierDurkheimFrazierGeiger</td><td>**Crozier 1964**DurkheimGeiger</td><td>**Durkheim 1912**</td><td>**Erikson 1967**AronDurkheimFrazierGeiger</td><td>**Frazier 1955**Durkheim</td><td>**Geiger 1963**DurkheimFrazier</td></tr></table>(a) Sketch the directed network of citations.  (b) For each pair of authors count up how many times they cite the same other author.[[collapsible show=\"+ Click to show sample data table\" hide=\"- Hide\"]]<table class=\"wikitable\"><tr><td class=\"tdheader\">Author 1</td><td class=\"tdheader\">Author 2</td><td class=\"tdheader\">Shared Bibliographic Entries</td></tr><tr><td>Aron</td><td>Bourdieu</td></tr><tr><td>Aron</td><td>Crozier</td></tr><tr><td>Aron</td><td>Durkheim</td></tr><tr><td>Aron</td><td>Erikson</td></tr><tr><td>Aron</td><td>Frazier</td></tr><tr><td>Aron</td><td>Geiger</td></tr><tr><td>Bourdieu</td><td>Crozier</td></tr><tr><td>Bourdieu</td><td>Durkheim</td></tr><tr><td>Bourdieu</td><td>Erikson</td></tr><tr><td>Bourdieu</td><td>Frazier</td></tr><tr><td>Bourdieu</td><td>Geiger</td></tr><tr><td>Crozier</td><td>Durkheim</td></tr><tr><td>Crozier</td><td>Erikson</td></tr><tr><td>Crozier</td><td>Frazier</td></tr><tr><td>Crozier</td><td>Geiger</td></tr><tr><td>Durkheim</td><td>Erikson</td></tr><tr><td>Durkheim</td><td>Frazier</td></tr><tr><td>Durkheim</td><td>Geiger</td></tr><tr><td>Erikson</td><td>Frazier</td></tr><tr><td>Erikson</td><td>Geiger</td></tr><tr><td>Frazier</td><td>Geiger</td></tr></table>(c) Next, for each pair of authors, count how many books cite both of them.  For example, Crozier and Durkheim are cited by Aron, Bourdieu, and Erikson so the count would be 3.[[collapsible show=\"+ Click to show sample data table\" hide=\"- Hide\"]]<table class=\"wikitable\"><tr><td class=\"tdheader\">Author 1</td><td class=\"tdheader\">Author 2</td><td class=\"tdheader\">Times Cited Together</td></tr><tr><td>Aron</td><td>Bourdieu</td></tr><tr><td>Aron</td><td>Crozier</td></tr><tr><td>Aron</td><td>Durkheim</td></tr><tr><td>Aron</td><td>Erikson</td></tr><tr><td>Aron</td><td>Frazier</td></tr><tr><td>Aron</td><td>Geiger</td></tr><tr><td>Bourdieu</td><td>Crozier</td></tr><tr><td>Bourdieu</td><td>Durkheim</td></tr><tr><td>Bourdieu</td><td>Erikson</td></tr><tr><td>Bourdieu</td><td>Frazier</td></tr><tr><td>Bourdieu</td><td>Geiger</td></tr><tr><td>Crozier</td><td>Durkheim</td></tr><tr><td>Crozier</td><td>Erikson</td></tr><tr><td>Crozier</td><td>Frazier</td></tr><tr><td>Crozier</td><td>Geiger</td></tr><tr><td>Durkheim</td><td>Erikson</td></tr><tr><td>Durkheim</td><td>Frazier</td></tr><tr><td>Durkheim</td><td>Geiger</td></tr><tr><td>Erikson</td><td>Frazier</td></tr><tr><td>Erikson</td><td>Geiger</td></tr><tr><td>Frazier</td><td>Geiger</td></tr></table>",
      "soln": "<h3>SOLUTION</h3><table class=\"wikitable\"><tr><td class=\"tdheader\">Author 1</td><td class=\"tdheader\">Author 2</td><td class=\"tdheader\">Shared Bibliographic Entries</td></tr><tr><td>Aron</td><td>Bourdieu</td><td>4</td></tr><tr><td>Aron</td><td>Crozier</td><td>2</td></tr><tr><td>Aron</td><td>Durkheim</td><td>0</td></tr><tr><td>Aron</td><td>Erikson</td><td>3</td></tr><tr><td>Aron</td><td>Frazier</td><td>1</td></tr><tr><td>Aron</td><td>Geiger</td><td>2</td></tr><tr><td>Bourdieu</td><td>Crozier</td><td>2</td></tr><tr><td>Bourdieu</td><td>Durkheim</td><td>0</td></tr><tr><td>Bourdieu</td><td>Erikson</td><td>4</td></tr><tr><td>Bourdieu</td><td>Frazier</td><td>1</td></tr><tr><td>Bourdieu</td><td>Geiger</td><td>2</td></tr><tr><td>Crozier</td><td>Durkheim</td><td>0</td></tr><tr><td>Crozier</td><td>Erikson</td><td>2</td></tr><tr><td>Crozier</td><td>Frazier</td><td>1</td></tr><tr><td>Crozier</td><td>Geiger</td><td>1</td></tr><tr><td>Durkheim</td><td>Erikson</td><td>0</td></tr><tr><td>Durkheim</td><td>Frazier</td><td>0</td></tr><tr><td>Durkheim</td><td>Geiger</td><td>0</td></tr><tr><td>Erikson</td><td>Frazier</td><td>1</td></tr><tr><td>Erikson</td><td>Geiger</td><td>2</td></tr><tr><td>Frazier</td><td>Geiger</td><td>1</td></tr></table>Next, for each pair of authors, count how many books cite both of them.  For example, Crozier and Durkheim are cited by Aron, Bourdieu, and Erikson so the count would be 3.<table class=\"wikitable\"><tr><td class=\"tdheader\">Author 1</td><td class=\"tdheader\">Author 2</td><td class=\"tdheader\">Times Cited Together</td></tr><tr><td>Aron</td><td>Bourdieu</td><td>0</td></tr><tr><td>Aron</td><td>Crozier</td><td>1</td></tr><tr><td>Aron</td><td>Durkheim</td><td>2</td></tr><tr><td>Aron</td><td>Erikson</td><td>0</td></tr><tr><td>Aron</td><td>Frazier</td><td>2</td></tr><tr><td>Aron</td><td>Geiger</td><td>2</td></tr><tr><td>Bourdieu</td><td>Crozier</td><td>0</td></tr><tr><td>Bourdieu</td><td>Durkheim</td><td>0</td></tr><tr><td>Bourdieu</td><td>Erikson</td><td>0</td></tr><tr><td>Bourdieu</td><td>Frazier</td><td>0</td></tr><tr><td>Bourdieu</td><td>Geiger</td><td>0</td></tr><tr><td>Crozier</td><td>Durkheim</td><td>2</td></tr><tr><td>Crozier</td><td>Erikson</td><td>0</td></tr><tr><td>Crozier</td><td>Frazier</td><td>2</td></tr><tr><td>Crozier</td><td>Geiger</td><td>2</td></tr><tr><td>Durkheim</td><td>Erikson</td><td>0</td></tr><tr><td>Durkheim</td><td>Frazier</td><td>4</td></tr><tr><td>Durkheim</td><td>Geiger</td><td>4</td></tr><tr><td>Erikson</td><td>Frazier</td><td>0</td></tr><tr><td>Erikson</td><td>Geiger</td><td>0</td></tr><tr><td>Frazier</td><td>Geiger</td><td>3</td></tr></table><br /><img src=\"https://djjr.us/images/qbank/ch01-q0027-01-cite.gif\"><br /><br /><img src=\"https://djjr.us/images/qbank/ch01-q0027-01-cocitation.gif\"><br /><br /><img src=\"https://djjr.us/images/qbank/ch01-q0027-01-bib.gif\"><br />Download NodeXL files: https://djjr-courses.wdfiles.com/local--files/q:0027/chapter01-q0027-01.xlsx, https://djjr-courses.wdfiles.com/local--files/q:0027/chapter01-q0027-02-bib.xlsx, https://djjr-courses.wdfiles.com/local--files/q:0027/chapter01-q0027-02-cocitation.xlsx.",
      "tags": []
    },
    {
      "number": "Q28",
      "question": "  Consider the three networks in the figure below.  For each one, calculate the ratio of actual number of edges to the most maximum number of edges possible (assuming the graphs are simple).  <br /><img src=\"https://djjr.us/images/qbank/sampleNetworks01.gif\"><br />",
      "soln": "<h3>SOLUTION</h3>No edges can be added to the network on the left.  It currently has 10 edges and so the ratio is \\(\frac {10} {10} = 1.0\\).  The middle network has 5 edges out of a possible 10; the ratio is \\(\frac {5} {10} = 0.5\\).  The network on the right has zero edges so the ratio is 0.0.",
      "tags": []
    },
    {
      "number": "Q29",
      "question": " Consider the series below showing the maximum number of edges (**m**) possible in networks with different numbers of vertices (**n**).  Come up with a general formula for m in terms of n (that is, for a network with n vertices, what is the maximum number of edges -- assuming no self-edges and no multi-edges?).<br /><img src=\"https://djjr.us/images/qbank/ch01-q0028-01.gif\"><br />",
      "soln": "<h3>SOLUTION</h3>Each time we add a vertex, we can add an edge from all the existing vertices, that is, we add (n-1) new edges.  And the number added last time was (n-2) and before that (n-3) all the way down to when we added 1 edge going from 1 vertext to 2.  text}\n$$m (n) = 1 + 2 + 3 + ... + (n-2) + (n-1)$$Using the method supposedly invented by a young Gauss, we can take two copies of 1+2+...+(n-1), reverse one of them and then add up the corresponding elements in each to get<table style=\"width: 750px;\" class=\"wikitable\"><tr style=\"color:green;\"><td style=\"text-align: center; color:green;\"></td><td style=\"text-align: center; color:green;\">1</td><td style=\"text-align: center;\"><h1></td></h1><td style=\"text-align: center;\">2</td><td style=\"text-align: center;\"><h1></td></h1><td style=\"text-align: center;\">...</td><td style=\"text-align: center;\"><h1></td></h1><td style=\"text-align: center;\">(n-1)</td><td style=\"text-align: center;\"></td><td style=\"text-align: center;\"></td></tr><tr style=\"color:green;\"><td style=\"text-align: center;\"></td><td style=\"text-align: center;\">(n-1)</td><td style=\"text-align: center;\"><h1></td></h1><td style=\"text-align: center;\">(n-2)</td><td style=\"text-align: center;\"><h1></td></h1><td style=\"text-align: center;\">...</td><td style=\"text-align: center;\"><h1></td></h1><td style=\"text-align: center;\">1</td><td style=\"text-align: center;\"></td><td style=\"text-align: center;\"></td></tr><tr style=\"color:green;\"><td style=\"text-align: center;\"></td><td style=\"text-align: center;\">n</td><td style=\"text-align: center;\"><h1></td></h1><td style=\"text-align: center;\">n</td><td style=\"text-align: center;\"><h1></td></h1><td style=\"text-align: center;\">...</td><td style=\"text-align: center;\"><h1></td></h1><td style=\"text-align: center;\">n</td><td style=\"text-align: center;\">=</td><td style=\"text-align: center;\">(n-1) * n</td></tr></table>so the number we want is\n$$m (n) = \frac {(n-1) \\times n} {2}$$",
      "tags": []
    },
    {
      "number": "0030",
      "question": " Write out your responses to the following.<ul><li>Lists</li></ul># Name at least ten areas of human, social, natural phenomena that have been explored by network researchers.<ol><li>Identify/describe three networks you have encountered this week.</li><li>Name at least five academic disciplines in which the study of networks has become a big deal.</li></ol><ul><li>Meta</li></ul># Newman, et al. mention \"theoretical\" work, \"empirical\" work, and modeling as activities associated with network science.  What do you understand by each of these?<ol><li>Hansen, et al. (and to a lesser extent other authors here) suggest some grandiose assessments of network science's place in the history of science.  Newman et al. hint at some tensions between the kind of data social scientists collect and the tools they have for analyzing them and the kind of data used in the \"new science of networks\" and the tools brought to the task by physicists and computer scientists.  Can you zero in on the passages and identify some of the issues?</li><li>In sections 1.6-8, Hansen et al. describe applications of social media to public problems, crowdsourcing, and problems of engagement, mentioning, eventually, the term \"sociotechnical systems.\" Meditate a bit on the dual answers this suggests to the question \"how can I use my degree in sociology (or whatever your major is)?\" -- either studying how technology changes the world or being actively involved in designing things that can change the world.</li></ol><ul><li>Real World</li></ul># From how many realms do your facebook friends come?  Estimate the macro-structure of your facebook network just based on thinking about it.  How does it show the different social circles you are a member of?  How does it show your different \"sides\"?  How does it show your personal biography?  How big do you think the different clusters are?  Can you think of people who link the different clusters together?",
      "soln": "<h3>SOLUTION</h3>The information for the first several questions is found in the reading so we won't bother to re-type it here.  For the final question, here is an example of my Facebook network circa 2009.  In this visualization I've labeled the clusters.  The goal for this assignment is for you to sketch out what you expect yours looks like not to use software to show the actual network (you might have guessed that part of the purpose of this exercise is to contrast our mental map of our social network with its real world manifestations.<br /><img src=\"https://djjr.us/images/qbank/djjrfb2009.jpg\"><br />",
      "tags": [
        "policy modeling",
        "social theory",
        "computational thinking",
        "design",
        "social network analysis",
        "research methods"
      ]
    },
    {
      "number": "0031",
      "question": " Demonstrate basic familiarity with email, wikis, Twitter, Facebook, newsgroups, listserves.",
      "soln": "<h3>SOLUTION</h3>Follow the instructor on Twitter (@djjr) (copy paste a tweet)Join the <a href=\"http://www.insna.org/pubs/socnet.html\" target=\"_blank\">socnet listserve</a> (copy paste a received email)Become a member of Wikipedia and note your user ID",
      "tags": []
    },
    {
      "number": "0032",
      "question": " In addition to replicating the material in the text, we'll have a \"and now try it with this\" exercise.  Self test at end.  Can I : enter vertices and display graph?  select an edge ? move the graph plane around? switch graph type between directed and undirected? change data and update graph?  move vertices around \"manually\"? set vertex colors and sizes? use the autofill tool?  add vertex labels?  add tool tips?  save a layout?  save a data file?",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": [
        "computational thinking",
        "design",
        "social network analysis",
        "research methods"
      ]
    },
    {
      "number": "0033",
      "question": " Practice Gephi exercises.[[=image http://djjr-courses.wikidot.com/local--files/soc180:images/djjrfb2009.jpg width=\"450\"]][[=image http://djjr-courses.wikidot.com/local--files/soc180:images/djrFB2012.gif width=\"450\"]]",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": []
    },
    {
      "number": "0034",
      "question": " Write out the data for the undirected network below in node list, edge list and full matrix format.[[<image /soc180:images/q34-01.gif size=\"medium\"]][[<image /soc180:images/q34-02.gif size=\"medium\"]]",
      "soln": "<h3>SOLUTION</h3>**Node list**Amir Bashir Danica Ellen FrankeBashir Ellen Franke GillianChastity Danica Ellen Franke GillianDanica Franke GillianEllen FrankeNote that we do not need to repeat and list the edges \"in both directions\" since this is an undirected network.  The same is true in the **edge list**:Amir BashirAmir DanicaAmir EllenAmir FrankeBashir EllenBashir FrankeBashir GillianChastity DanicaChastity EllenChastity FrankeChastity GillianDanica FrankeDanica GillianEllen FrankeFor the full matrix, we'll abbreviate the names with their initial letter.  Note two things: (1) the diagonal entries (AA, for example) are zero; (2) the table is symmetrical around the downward diagonal.  Make sure you understand why this is so.<br&gt;_ A B C D E F G&lt;br&gt;A 0 1 0 1 1 1 0&lt;br&gt;B 1 0 0 0 1 1 1&lt;br&gt;C 0 0 0 1 1 1 1&lt;br&gt;D 1 0 1 0 0 1 1&lt;br&gt;E 1 1 1 0 0 1 0&lt;br&gt;F 1 1 1 1 1 0 0&lt;br&gt;&lt;br&gt;G 0 1 1 1 0 0 0&lt;br&gt;For the directed graph we have:&lt;br&gt;**Node list**&lt;br&gt;Amir Bashir Ellen&lt;br&gt;Bashir Gillian&lt;br&gt;Chastity Ellen Gillian&lt;br&gt;Danica Chastity Gillian&lt;br&gt;Ellen Amir Bashir&lt;br&gt;Franke Amir Ellen&lt;br&gt;Gillian Danica&lt;br&gt;&lt;br&gt;**Edge list** -- this time, each direction gets its own edge:&lt;br&gt;Amir Bashir&lt;br&gt;Bashir Gillian&lt;br&gt;Chastity Ellen&lt;br&gt;Chastity Gillian&lt;br&gt;Danica Gillian&lt;br&gt;Ellen Amir&lt;br&gt;Ellen Bashir&lt;br&gt;Franke Amir&lt;br&gt;Franke Ellen&lt;br&gt;Gillian Danica&lt;br&gt;&lt;br&gt;**Full matrix**&lt;br&gt;&lt;br&gt;_ A B C D E F G&lt;br&gt;A 0 1 0 0 0 0 0&lt;br&gt;B 0 0 0 0 0 0 1&lt;br&gt;C 0 0 0 0 1 0 1&lt;br&gt;D 0 0 0 0 0 0 1&lt;br&gt;E 0 1 0 0 0 0 0&lt;br&gt;F 1 0 0 0 1 0 0&lt;br&gt;G 0 0 0 1 0 0 0&lt;br&gt;&lt;br&gt;",
      "tags": [
        "computational thinking",
        "social network analysis",
        "research methods"
      ]
    },
    {
      "number": "0035",
      "question": " A researcher asks a respondent, Maria, to list her six closest friends.  She says A, B, C, D, E, and F.  The researcher then asks which of these friends have you had dinner with in the last week? A, C, D.  Which ones have you texted today? A, B, D, F.  Which ones did you know before you came to this school?  C, D.  On whose wall have you posted in the last week?  D, E, F.Show how this information would be recorded in your field notes.",
      "soln": "<h3>SOLUTION</h3>Lots of ways to record this: here's one:<br /><img src=\"https://djjr.us/images/qbank/q35-data-03.png\"><br />",
      "tags": []
    },
    {
      "number": "0036",
      "question": " Consider the graph matrix below<table class=\"wikitable\"><tr><td>A</td><td>B</td><td>C</td><td>D</td><td>E</td></tr><tr><td>A</td><td>-</td><td>0</td><td>1</td><td>0</td><td>1</td></tr><tr><td>B</td><td>0</td><td>-</td><td>0</td><td>1</td><td>1</td></tr><tr><td>C</td><td>0</td><td>1</td><td>-</td><td>1</td><td>1</td></tr><tr><td>D</td><td>0</td><td>0</td><td>1</td><td>-</td><td>0</td></tr><tr><td>E</td><td>0</td><td>1</td><td>1</td><td>1</td><td>-</td></tr></table><ol><li>We use \\(n\\) for the number of vertices.  What is \\(n\\) here?</li><li>What is \\(sum _{ i=1 }^{ n }{ { A }_{ i4 } }\\)?</li><li>What is \\(sum _{ j=1 }^{ n }{ { A }_{ 3j } }\\)?</li></ol>\n$$sum _{ i=1 }^{ n }{ { A }_{ i4 } }$$",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": [
        "social network analysis"
      ]
    },
    {
      "number": "0037",
      "question": " Centrality Problems",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": []
    },
    {
      "number": "0038",
      "question": " Homophily Problems",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": []
    },
    {
      "number": "0039",
      "question": " Cohesive subgroups problems",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": []
    },
    {
      "number": "0040",
      "question": " Structural equivalence problems",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": []
    },
    {
      "number": "0041",
      "question": " TEXT",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": []
    },
    {
      "number": "0041",
      "question": " TEXT",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": []
    },
    {
      "number": "0043",
      "question": " Based on your reading of Erikson, Becker, et al., write a short essay addressing one of the following.<ol><li>A 50 year old social scientist says \"when I was in college, there was no date rape.\"  Explain what a sociologist would mean by this.</li><li>Consider the comments below about the experience of a patient in a mental hospital.</li><li>Is the medical clarification of heretofore \"invisible\" disabilities an unqualified good?</li></ol>",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0043",
      "question": " Based on your reading of Erikson, Becker, et al., write a short essay addressing one of the following.<ol><li>A 50 year old social scientist says \"when I was in college, there was no date rape.\"  Explain what a sociologist would mean by this.</li><li>Consider the comments below about the experience of a patient in a mental hospital.</li><li>Is the medical clarification of heretofore \"invisible\" disabilities an unqualified good?</li></ol>",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0044",
      "question": " Media analysis of SOPA wars.",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": [
        "computational thinking",
        "research methods"
      ]
    },
    {
      "number": "0045",
      "question": "Essay QuestionThe thinkers and theories we have briefly visited have taken a number of basic starting points: people basically good, bad, mixed; people never change; a small defect defines the entire person; biology is destiny.  Whatâ€™s your take on human nature? What kind of a thing is a person for the purposes of thinking about social control?  Which readings or thinkers do you feel you line up with?  Which ones do you seem to reject?",
      "soln": "<h3>SOLUTION</h3>Include, if you are visually inclined a sketch or diagram of how you think humans work.No more than 500 words.  Submit both your first and your final draft of the essay. Topic sentences. Proofread",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0046",
      "question": " Play with <a href=\"http://www.yasiv.com\" target=\"_blank\">Yasiv's Amazon Recommendation Visualizer</a>.  After you have played with it for a bit, carry out some specific \"analyses\" (we use the term loosely here).Select a book -- my example will be //The Fountainhead// by Ayn Rand, a favorite of libertarians and right wingers.  Jostle the network around until you get a nice layout that has settled down.  You might want to zoom in or out (mouse wheel if you have one).Copy screen image to clipboard with alt-F14 or alt-PrtScn, open a Word document and paste.  Crop the picture (Picture Tools>Format>Crop), unselect it, reselect it and stretch to fill page.Examine clusters.  Now select the picture and Cut it (control-X) and then Insert>Shapes>New Drawing Canvas, expand the canvas to be page-sized, and paste the picture.  Then use the circle tool to draw circles around the identifiable clusters.<br /><img src=\"https://djjr.us/images/qbank/q0046-001.gif\"><br />Now let's create a new drawing canvas and sketch this network of clusters.<br /><img src=\"https://djjr.us/images/qbank/q0046-005.gif\"><br />And then we will examine the books qualitatively -- back on the web interface -- to come up with coarse descriptions of the clusters.<br /><img src=\"https://djjr.us/images/qbank/q0046-009.gif\"><br />Finally, we inquire as to what connections the inter-cluster edges represent, like this:<br /><img src=\"https://djjr.us/images/qbank/q0046-010.gif\"><br />And ueber-finally, let's prepare this network for data entry in NodeXL<table class=\"wikitable\"><tr><td class=\"tdheader\">Vertex1</td><td class=\"tdheader\">Vertex2</td></tr><tr><td>creativity</td><td>innovation</td></tr><tr><td>innovation</td><td>Pirsig-education</td></tr><tr><td>innovation</td><td>Rand-novels</td></tr><tr><td>Rand-novels</td><td>Rand-videos-etc</td></tr><tr><td>Rand-novels</td><td>Rand-philosophy</td></tr></table><h3>Enter Data into NodeXL</h3><ol><li>Start on the vertices tab and enter vertex 1 in column A, vertex 2 in column B.</li><li>Click on refresh graph.</li><li>Moving nodes and graph.</li><li>Set layout to none.</li><li>Vertex labels, vertex size. Refresh.</li><li>Add edge labels for an edge or two. Refresh.</li><li>Vertex label position.</li><li>Copy to clipboard. Paste into writeup document.</li></ol><br /><img src=\"https://djjr.us/images/qbank/q0046--fountainhead.png\"><br /><h4>Suggestions</h4>The hot book in higher education, //<a href=\"http://www.yasiv.com/#/Search?q=academically%20adrift&category=Books\" target=\"_blank\">Academically Adrift</a>.//<a href=\"http://www.yasiv.com/#/Search?q=the%20real%20romney&category=Books\" target=\"_blank\">The Real Mitt Romney</a>]<a href=\"http://www.yasiv.com/#/Search?q=steve%20jobs&category=Books\" target=\"_blank\">Steve Jobs' biography</a><a href=\"http://www.yasiv.com/#/Search?q=moneyball&category=Books\" target=\"_blank\">Moneyball</a> by Michael Lewis<a href=\"http://www.yasiv.com/#/Search?q=Easy%20Riders%2C%20Raging%20Bulls&category=Books\" target=\"_blank\">Easy Riders, Raging Bulls: How the Sex-Drugs-and-Rock 'N' Roll Generation Saved Hollywood</a><a href=\"http://www.yasiv.com/#/Search?q=Deleted%20Scenes%20From%20The%20Cutting%20Room%20Floor&category=Music\" target=\"_blank\">Caro Emerald's album</a> Scenes from the Cutting Room Floor<a href=\"http://www.yasiv.com/#/Search?q=omnivores%20dilemma&category=Books\" target=\"_blank\">Omnivores Dilemma</a><a href=\"http://www.yasiv.com/#/Search?q=fast%20food%20nation&category=Books\" target=\"_blank\">Fast Food Nation</a><a href=\"http://www.yasiv.com/#/Search?q=City:%20Urbanism%20and%20Its%20End&category=Books\" target=\"_blank\">City: Urbanism and Its End</a><a href=\"http://www.yasiv.com/#/Search?q=audacity%20of%20hope&category=Books\" target=\"_blank\">President Obama's Audacity of Hope</a><a href=\"http://www.yasiv.com/#/Search?q=The%20Art%20of%20Computer%20Programming&category=Books\" target=\"_blank\">The Art of Computer Programming</a> by Donald Knuth<a href=\"http://www.yasiv.com/#/Search?q=C%20Programming%20Language&category=Books\" target=\"_blank\">C Programming</a><a href=\"http://www.yasiv.com/#/Search?q=the%20future%20of%20the%20internet&category=Books\" target=\"_blank\">The Future of the Internet</a> and How to Stop It",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": [
        "computational thinking",
        "social network analysis",
        "research methods"
      ]
    },
    {
      "number": "0047",
      "question": " Use NodeXL to visualize the following networks**Node List**{{A, B, C, EB, A, C, FC, A, DD, B, E, FE, B, FF, A, D, E}}**Edge List**{{A, BA, CA, EB, AC, AC, B,C, DD, BD, ED, FE, FF, BF, CF, D}}**Full Matrix**<pre>@@  @@A B C D E F</pre><pre>A - 1 0 0 0 1</pre><pre>B   - 0 0 1 1</pre><pre>C \t- 1 1 1</pre><pre>D   \t- 1 0</pre><pre>E     \t- 0</pre><pre>F       \t-</pre> ",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": [
        "social network analysis"
      ]
    },
    {
      "number": "0048",
      "question": " Convert the information below - data on four organizations, listing the members of their boards of directors - into a network data format and then use a network visualization program to show the 2 mode network laid out nicely with nodes labeled.<table class=\"wikitable\"><tr><td class=\"tdheader\">Acme Association</td><td class=\"tdheader\">Boothwyn Foundation</td><td class=\"tdheader\">The Cannalo Organization</td><td class=\"tdheader\">Dynamic Educational Consulting</td></tr><tr><td class=\"tdcentered\">Allen</td><td class=\"tdcentered\">Allen</td><td class=\"tdcentered\">Barb</td><td class=\"tdcentered\">Chris</td></tr><tr><td class=\"tdcentered\">Barb</td><td class=\"tdcentered\">Ethan</td><td class=\"tdcentered\">Chris</td><td class=\"tdcentered\">Dante</td></tr><tr><td class=\"tdcentered\">Chris</td><td class=\"tdcentered\">Fran</td><td class=\"tdcentered\">Ethan</td><td class=\"tdcentered\">Ethan</td></tr><tr><td class=\"tdcentered\">Dante</td><td class=\"tdcentered\">Gent</td><td class=\"tdcentered\">Fran</td><td class=\"tdcentered\">Kelly</td></tr><tr><td class=\"tdcentered\">Harri</td><td class=\"tdcentered\">Ishtar</td><td class=\"tdcentered\">Lori</td></tr><tr><td class=\"tdcentered\">Jack</td><td class=\"tdcentered\">Miguel</td></tr></table>",
      "soln": "<h3>SOLUTION</h3>This is a two-mode network with vertices that are organizations and vertices that are board members.  The relationship (edges) is \"is a member of the board of directors of.\"  The data looks like this in edge list format{{Acme    DanteAcme    ChrisAcme    BarbAcme    AllenBoothwyn    HarriBoothwyn    GentBoothwyn    FranBoothwyn    EthanBoothwyn    AllenCannalo    JackCannalo    IshtarCannalo    FranCannalo    EthanCannalo    ChrisCannalo    BarbDynamic    MiguelDynamic    LoriDynamic    KellyDynamic    EthanDynamic    DanteDynamic    Chris}}And here are two visualizations of this network:<br /><img src=\"https://djjr.us/images/qbank/q0048a.gif\"><br /><br /><img src=\"https://djjr.us/images/qbank/q0048b.gif\"><br />[[module files]]",
      "tags": [
        "computational thinking",
        "social network analysis",
        "research methods"
      ]
    },
    {
      "number": "0049",
      "question": " Convert this 2-mode data into 1-mode data<table class=\"wikitable\"><tr><td class=\"tdheader\">Flavor</td><td class=\"tdheader\">Who Likes It</td></tr><tr><td>Chocolate</td><td>Abe, Bertha, Cyndra, Dalia</td></tr><tr><td>Vanilla</td><td>Abe, Cyndra, Eve, Faisel, Gerd</td></tr><tr><td>Strawberry</td><td>Bertha, Cyndra, Hettie, Iolantha</td></tr><tr><td>Pistachio</td><td>Cyndra, Dalia, Gerd, Hettie, Iolantha</td></tr></table>",
      "soln": "<h3>SOLUTION</h3>This problem requires us to convert a 2 mode affiliation network into 1-mode co-membership and membership-overlap networks[((bibcite borgatti))].  We first convert the raw data into a rectangular affiliation matrix<table style=\"width: 100%;\" class=\"wikitable\"><tr><td style=\"vertical-align: top; width: 50%;\"><table class=\"wikitable\"><tr><td class=\"tdheader\">Flavor</td><td class=\"tdheader\">Who Likes It</td></tr><tr><td>Chocolate</td><td>Abe, Bertha, Cyndra, Dalia</td></tr><tr><td>Vanilla</td><td>Abe, Cyndra, Eve, Faisel, Gerd</td></tr><tr><td>Strawberry</td><td>Bertha, Cyndra, Hettie, Iolantha</td></tr><tr><td>Pistachio</td><td>Cyndra, Dalia, Gerd, Hettie, Iolantha</td></tr></table></td><td style=\"vertical-align: top; width: 50%;\"><table class=\"wikitable\"><tr><td>Chocolate</td><td>Vanilla</td><td>Strawberry</td><td>Pistachio</td></tr><tr><td>Abe</td><td class=\"tdcentered\">1</td><td class=\"tdcentered\">1</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">0</td></tr><tr><td>Bertha</td><td class=\"tdcentered\">1</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">1</td><td class=\"tdcentered\">0</td></tr><tr><td>Cyndra</td><td class=\"tdcentered\">1</td><td class=\"tdcentered\">1</td><td class=\"tdcentered\">1</td><td class=\"tdcentered\">1</td></tr><tr><td>Dalia</td><td class=\"tdcentered\">1</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">1</td></tr><tr><td>Eve</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">1</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">0</td></tr><tr><td>Faisel</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">1</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">0</td></tr><tr><td>Gerd</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">1</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">0</td></tr><tr><td>Hettie</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">1</td><td class=\"tdcentered\">1</td></tr><tr><td>Iolantha</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">1</td><td class=\"tdcentered\">1</td></tr></table></td></tr></table><table style=\"width: 100%;\" class=\"wikitable\"><tr><td style=\"vertical-align: top; width: 50%;\">**The Person by Person Matrix**<table class=\"wikitable\"><tr><td class=\"tdcentered\">Abe</td><td class=\"tdcentered\">Bertha</td><td class=\"tdcentered\">Cyndra</td><td class=\"tdcentered\">Dalia</td><td class=\"tdcentered\">Eve</td><td class=\"tdcentered\">Faisel</td><td class=\"tdcentered\">Gerd</td><td class=\"tdcentered\">Hettie</td><td class=\"tdcentered\">Iolantha</td></tr><tr><td>Abe</td><td class=\"tdcentered\">2</td><td class=\"tdcentered\">1</td><td class=\"tdcentered\">2</td><td class=\"tdcentered\">1</td><td class=\"tdcentered\">1</td><td class=\"tdcentered\">1</td><td class=\"tdcentered\">1</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">0</td></tr><tr><td>Bertha</td><td class=\"tdcentered\">1</td><td class=\"tdcentered\">2</td><td class=\"tdcentered\">2</td><td class=\"tdcentered\">1</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">1</td><td class=\"tdcentered\">1</td></tr><tr><td>Cyndra</td><td class=\"tdcentered\">2</td><td class=\"tdcentered\">2</td><td class=\"tdcentered\">4</td><td class=\"tdcentered\">2</td><td class=\"tdcentered\">1</td><td class=\"tdcentered\">1</td><td class=\"tdcentered\">1</td><td class=\"tdcentered\">2</td><td class=\"tdcentered\">2</td></tr><tr><td>Dalia</td><td class=\"tdcentered\">1</td><td class=\"tdcentered\">1</td><td class=\"tdcentered\">2</td><td class=\"tdcentered\">2</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">1</td><td class=\"tdcentered\">1</td></tr><tr><td>Eve</td><td class=\"tdcentered\">1</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">1</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">1</td><td class=\"tdcentered\">1</td><td class=\"tdcentered\">1</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">0</td></tr><tr><td>Faisel</td><td class=\"tdcentered\">1</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">1</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">1</td><td class=\"tdcentered\">1</td><td class=\"tdcentered\">1</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">0</td></tr><tr><td>Gerd</td><td class=\"tdcentered\">1</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">1</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">1</td><td class=\"tdcentered\">1</td><td class=\"tdcentered\">1</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">0</td></tr><tr><td>Hettie</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">1</td><td class=\"tdcentered\">2</td><td class=\"tdcentered\">1</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">2</td><td class=\"tdcentered\">2</td></tr><tr><td>Iolantha</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">1</td><td class=\"tdcentered\">2</td><td class=\"tdcentered\">1</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">2</td><td class=\"tdcentered\">2</td></tr></table></td><td style=\"vertical-align: top; width: 50%;\">**The Flavor by Flavor Matrix**<table class=\"wikitable\"><tr><td class=\"tdcentered\">Chocolate</td><td class=\"tdcentered\">Vanilla</td><td class=\"tdcentered\">Strawberry</td><td class=\"tdcentered\">Pistachio</td></tr><tr><td>Chocolate</td><td class=\"tdcentered\">4</td><td class=\"tdcentered\">2</td><td class=\"tdcentered\">2</td><td class=\"tdcentered\">2</td></tr><tr><td>Vanilla</td><td class=\"tdcentered\">2</td><td class=\"tdcentered\">5</td><td class=\"tdcentered\">1</td><td class=\"tdcentered\">1</td></tr><tr><td>Strawberry</td><td class=\"tdcentered\">2</td><td class=\"tdcentered\">1</td><td class=\"tdcentered\">4</td><td class=\"tdcentered\">3</td></tr><tr><td>Pistachio</td><td class=\"tdcentered\">2</td><td class=\"tdcentered\">1</td><td class=\"tdcentered\">3</td><td class=\"tdcentered\">4</td></tr></table></td></tr></table>Here's the work flow if we want to carry this out \"smart\":<ol><li>Enter affiliation network data in rectangular matrix format in Excel (here it will be a 9 rows by 4 columns matrix -- plus labels). Let's call this matrix **A**.</li><li>Create the square matrices -- persons by persons and flavors by flavors -- by multiplying the matrix and its inverse</li></ol> * In matrix multiplication of A*B the number columns of A has to match the number of rows of B * The result is a matrix with the number of rows of A and the number of columns of B * Our rectangular matrix has 9 rows and 4 columns.  We want to produce a 9x9 persons matrix and a 4x4 flavors matrix. * The matrix transpose(A) is just A with columns and rows interchanged.  It has 4 columns and 9 rows. * 9x9 persons matrix **P** = 9x4 matrix **A** TIMES 4x9 matrix **transpose(A)** * 4x4 flavors matrix **F** = 4x9 matrix **transpose(A)** TIMES 9x4 matrix **A**<ol><li>We place these each in its own worksheet starting in cell A1</li></ol> * <br /><img src=\"https://djjr.us/images/qbank/q0049a.gif\"><br /> * <br /><img src=\"https://djjr.us/images/qbank/q0049b.gif\"><br /><ol><li>We might want to eliminate the entries on the main diagonal to prevent self-edges</li><li>In NodeXL we go to the Import menu and select \"From Open Matrix Notebook\"</li></ol> * <br /><img src=\"https://djjr.us/images/qbank/q0049c.gif\"><br /><ol><li>With these specifications since we DO have vertex names in the first row and first column</li></ol> * <br /><img src=\"https://djjr.us/images/qbank/q0049d.gif\"><br />And then we can tweak the images -- copying vertex names for labels, using Autofill Columns to set edge width to the edge weight column, and playing with colors as we like.<table style=\"width: 100%;\" class=\"wikitable\"><tr><td style=\"vertical-align: top; width: 50%;\">**The Person by Person Network**<br /><img src=\"https://djjr.us/images/qbank/q0049e.gif\"><br /></td><td style=\"vertical-align: top; width: 50%;\">**The Flavor by Flavor Matrix**<br /><img src=\"https://djjr.us/images/qbank/q0049f.gif\"><br /></td></tr></table>[[module files]][[bibliography]]: borgatti : Borgatti, Stephen P. and Daniel S. Halgin <a href=\"http://www.steveborgatti.com/papers/bhaffiliations.pdf\" target=\"_blank\">Analyzing Affiliation Networks</a>[[/bibliography]]",
      "tags": [
        "computational thinking",
        "research methods"
      ]
    },
    {
      "number": "0050",
      "question": " What kind of network data might emerge from: tweets, retweets, hashtags?  Assume we have powerful access to the Twitter stream (meaning we can grab all the tweets in a given time frame, all the tweets by a set of users, all the tweets that mention a hashtag or a user, etc.  And assume we have access to the API and so can take a user name and get a list of who she follows or who follows her.Describe five different networks we might construct from this data.",
      "soln": "<h3>SOLUTION</h3><ol><li>Who retweets whom.  Network of users with directed edges meaning A retweets B.  In one direction it's a sort of recommendation.  In the other direction a sort game of telephone (I repeat to my audience what you said to yours)</li><li>Hashtags that are co-mentioned in tweets.  Vertices are hashtags and they are more or less connected depending on how often they appear together.  Network represents relatedness of ideas/issues/topics?</li><li>Users who are mentioned (@ symbol) in tweets.  Could be taken as suggesting both are known by the tweeter?</li><li>Who mentions/responds to whom.  Vertices are users, one is the tweeter and the other is the mention.  Each tweet could generate multiple directed edges (or none if tweet mentions no one).</li><li>Either users and hashtags or mentions and hashtags.  Edges would suggest thought communities -- who is talking about (or in connection with) what.</li></ol>",
      "tags": [
        "computational thinking",
        "social network analysis",
        "research methods"
      ]
    },
    {
      "number": "0051",
      "question": " To **transpose** a matrix we simply swap its rows and columns:<table><tr><td>{{A B CD E FG H I}}</td><td style=\"vertical-align: middle;\"> > > > ></td><td>{{A D GB E HC F I}}</td></tr></table>or<table><tr><td>{{A B CD E F}}</td><td style=\"vertical-align: middle;\"> > > > ></td><td>{{A DB EC F}}</td></tr></table>If the matrix is called \\(M\\) then we write the transpose of M as \\(tr(M)\\).Transpose these three matrices<table style=\"width: 600px;\" class=\"wikitable\"><tr><td style=\"width: 200px;\">A</td>[[cell  style=\"width: 200px; vertical-align: middle;\"]]B</td><td style=\"width: 200px;\">C</td></tr><tr><td>{{A B C DD E F G}}</td><td style=\"vertical-align: middle;\">{{0 1 0 21 0 3 10 3 0 42 1 4 0}}</td><td>{{1 1 00 1 11 0 1}}</td></tr></table>",
      "soln": "<h3>SOLUTION</h3><table style=\"width: 600px;\" class=\"wikitable\"><tr><td style=\"width: 200px;\">A</td>[[cell  style=\"width: 200px; vertical-align: middle;\"]]B</td><td style=\"width: 200px;\">C</td></tr><tr><td>{{A DB EC FD G}}</td><td style=\"vertical-align: middle;\">{{0 1 0 21 0 3 10 3 0 42 1 4 0}}</td><td>{{1 0 11 1 00 1 1}}</td></tr></table>",
      "tags": []
    },
    {
      "number": "0052",
      "question": " If necessary, review the <a href=\"http://en.wikipedia.org/wiki/Matrix_multiplication\" target=\"_blank\">Wikipedia page \"matrix multiplication.\"</a>  Then practice with the following<table><tr><td><h3>A =</h3></td><td style=\"vertical-align: middle; width: 40px; text-align: center;\">{{a bc de f}}</td><td style=\"vertical-align: middle; width: 100px; text-align: center;\"></td><td><h3>B =</h3></td><td style=\"vertical-align: middle; width: 40px; text-align: center;\">{{e f gh i j}}</td><td style=\"vertical-align: middle; width: 100px; text-align: center;\"></td><td><h3>C =</h3></td><td style=\"vertical-align: middle; width: 60px; text-align: center;\">{{1 1 1 00 1 0 1}}</td><td style=\"vertical-align: middle; width: 100px; text-align: center;\"></td><td><h3>D =</h3></td><td style=\"vertical-align: middle; width: 50px; text-align: center;\">{{1 11 11 01 0}}</td></tr></table><h3>What is (1) AxB (2) CxD  (3) AxC (4) DxB (5) BxC</h3>",
      "soln": "<h3>SOLUTION</h3><h3>AxB</h3>{{ae+bh  af+bi  ag+bjce+dh  cf+di  eg+fj}}<h3>CxD</h3>{{3 22 1}}<h3>AxC</h3>{{a  a+b  a  bc  c+d  c  de  e+f  e  f}}<h3>DxB</h3>{{e+h  f+i  g+je+h  f+i  g+j e\tf\tg e\tf\tg}}<h3>BxC</h3>not allowed because columns of B not equal to rows of C",
      "tags": []
    },
    {
      "number": "0053",
      "question": " Practice constructing network survey instrument (\"by hand\"), administering and recording data.<ol><li>Sketch out (paper and pencil mode) a brief network questionnaire that includes</li></ol> # Respondent name and a few demographics (e.g., sex and age) # List of R's \"confidantes\"<ol><li>For each confidante we want to collect a bit of demographic info (e.g., sex and age)</li><li>For each confidante we want to know whether R has particular activity tie (e.g., have you had dinner in the last week).</li><li>Construct a grid that will let you record R's answers to whether for each pair of confidantes she has Xd with the two.</li><li>Construct a grid that will let you record R's assessment of whether a particular relationship exists between each pair of confidantes.</li></ol>",
      "soln": "<h3>SOLUTION</h3><br /><img src=\"https://djjr.us/images/qbank/q0053-1.gif\"><br />Edge Lists<table style=\"width: 600px;\" class=\"wikitable\"><tr><td style=\"text-align: center; vertical-align: top; width: 100px;\">**Confidantes**K MK SK LK V</td><td style=\"text-align: center; vertical-align: top; width: 100px;\">**Telephone**K MK SK LK V</td><td style=\"text-align: center; vertical-align: top; width: 100px;\">**See**K MK SK LK V</td><td style=\"text-align: center; vertical-align: top; width: 100px;\">**Email**--</td><td style=\"text-align: center; vertical-align: top; width: 100px;\">**Face to Face (KXY)**M SS L</td><td style=\"text-align: center; vertical-align: top; width: 100px;\">**Mutual Confidantes**M SS VV M</td></tr></table>",
      "tags": [
        "computational thinking",
        "social network analysis",
        "research methods"
      ]
    },
    {
      "number": "0054",
      "question": " Use the data you generated in [[[q:0053|Q53]]] to produce simple visualizations of these networks in NodeXL and import these into a Word document to report your results.",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": [
        "computational thinking",
        "social network analysis",
        "research methods"
      ]
    },
    {
      "number": "0055",
      "question": " Consider this adjacency matrix.  Following standard conventions, calculate in- and out-degree for each vertex.<table class=\"wikitable\"><tr><td>A</td><td>B</td><td>C</td><td>D</td><td>E</td></tr><tr><td>A</td><td>-</td><td>0</td><td>1</td><td>0</td><td>1</td></tr><tr><td>B</td><td>0</td><td>-</td><td>0</td><td>1</td><td>1</td></tr><tr><td>C</td><td>0</td><td>1</td><td>-</td><td>1</td><td>1</td></tr><tr><td>D</td><td>0</td><td>0</td><td>1</td><td>-</td><td>0</td></tr><tr><td>E</td><td>0</td><td>1</td><td>1</td><td>1</td><td>-</td></tr></table>",
      "soln": "<h3>SOLUTION</h3>Our convention is to see directed links as going FROM column vertex TO row vertex (so that A_{ij}=1 means an edge from vertex j to vertex i).  This means that we can compute the out-degree of a vertex by summing its column in the matrix and the in-degree by summing its row.<table class=\"wikitable\"><tr><td class=\"tdheader\">Out-Degree</td><td class=\"tdheader\">In-Degree</td></tr><tr><td>A</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">2</td></tr><tr><td>B</td><td class=\"tdcentered\">2</td><td class=\"tdcentered\">2</td></tr><tr><td>C</td><td class=\"tdcentered\">3</td><td class=\"tdcentered\">3</td></tr><tr><td>D</td><td class=\"tdcentered\">3</td><td class=\"tdcentered\">1</td></tr><tr><td>E</td><td class=\"tdcentered\">3</td><td class=\"tdcentered\">3</td></tr></table>",
      "tags": []
    },
    {
      "number": "0056",
      "question": "<ul><li>Go to <a href=\"http://apps.facebook.com/namegenweb/\" target=\"_blank\">NameGenWeb</a> and select output in the form of a GraphML file.  You may have to sign into to Facebook to make this work.  When the program comes back and says \"Thank you for waiting. Your network is now available\" you can click and save or right click the link and save the file (to a directory where you will be doing your work).  If you click the button you will see a .graphml.XML file that looks like this which you can Save as...:</li></ul><blockquote> <pre>&lt;graphml xmlns=\"http://graphml.graphdrawing.org/xmlns\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:schemaLocation=\"http://graphml.graphdrawing.org/xmlns http://graphml.graphdrawing.org/xmlns/1.0/graphml.xsd\"&gt;</pre></blockquote><blockquote> <pre>&lt;key id=\"uid\" for=\"node\" attr.name=\"uid\" attr.type=\"double\"/&gt;</pre></blockquote><blockquote> <pre>&lt;key id=\"sex\" for=\"node\" attr.name=\"sex\" attr.type=\"string\"/&gt;</pre></blockquote><blockquote> <pre>&lt;key id=\"pic\" for=\"node\" attr.name=\"pic\" attr.type=\"string\"/&gt;</pre></blockquote><blockquote> <pre>&lt;graph id=\"G\" edgedefault=\"undirected\"&gt;</pre></blockquote><blockquote> <pre>&lt;node id=\"name of a friend\"&gt;</pre></blockquote><blockquote> <pre>&lt;data key=\"uid\"&gt;219655&lt;/data&gt;</pre></blockquote><blockquote> <pre>&lt;data key=\"sex\"&gt;female&lt;/data&gt;</pre></blockquote><blockquote> <pre>&lt;data key=\"pic\"&gt;http://profile.ak.fbcdn.net/hprofile-ak-snc4/174207_219655_1563807427_s.jpg&lt;/data&gt;</pre></blockquote><blockquote> <pre>&lt;/node&gt;</pre></blockquote><blockquote> etc.</blockquote>* If you right click you will save a .graphml file.  Either file can be opened by NodeXL using **<pre>File>Import GraphML file...</pre>**<ul><li>In the Vertices worksheet, set the shape to 3 (disk).  Double-click lower right corner of cell to auto-fill down.</li><li>Use Graph Metrics to compute all metrics except In- and Out-degree.</li><li>Use Autofill Columns to set vertex size to degree.  Adjust sizes in Autofill Columns > Vertex Size Options as you like.</li><li>Use Groups>Find Clusters (Girvan-Newman) to create groups of vertices.</li><li>Under Layout Options (in Graph window at bottom of layout selection pull-down) select \"Layout each of the graphs groups in its own box and ...\"</li><li>For layout type try Harel-Koren[[footnote]] See <a href=\"http://en.wikipedia.org/wiki/Force-based_algorithms_(graph_drawing)\" target=\"_blank\">Wikipedia: Force Based Algorithms</a>.  Also <a href=\"http://gephi.org/tag/force-atlas/]\" target=\"_blank\">[[/footnote</a>]</li><li>Use Dynamic filters to drop \"leaves\" or \"pendants\" by setting degree to greater than or equal to 2</li><li>To figure out what your clusters are, click on sample nodes.  NodeXL will highlight rows in the vertices worksheet.</li><li>Click on Graph Metrics>Average Overall Metrics.  Look on the Overall Metrics worksheet to find</li></ul> * Number of connected components * Number of single vertex components * Maximum geodesic distance * Average geodesic distance (the \"degrees of separation\" in your ego network) * How many nodes does your network have?  How many edges?  What is the number of possible edges?  What is the ratio of actual edges to possible edges?  How does this compare to the graph density calculated by NodeXL?",
      "soln": "<h3>SOLUTION</h3><br /><img src=\"https://djjr.us/images/qbank/DJR-FB-1.gif\"><br /><br /><img src=\"https://djjr.us/images/qbank/q0056-00.gif\"><br />The program tells me I have 32 total connected components, of which 26 are single vertices.  Thus, 26/343 or about 7.5% of my Facebook friends are singletons -- not friends with any of my other friends.  And then the rest of my friends are divided among 6 connected components.The \"giant component\" contains 300 of my 343 friends.  The other five connected components are five friends from my graduate dorm, two students from the class of ~2004 (one who is Czech and one who studied there), two folks I who worked in New Haven city government when I lived there, a married couple who also lived in the graduate dorm, and my two college physics teachers.   These last three do not show up on the visualization because I set the visibility threshold to degree 2 and above and the members of these dyads each have degree 1.<br /><img src=\"https://djjr.us/images/qbank/q0056-01.gif\"><br />My 343 friends could have a maximum of \\(\frac {343 \\times (343-1)} {2} = 58,653\\) edges.  In fact they have 1,578.  Therefore, the density of the network is \\(\frac {1,578} {58,653} = 0.0269\\).The maximum \"degrees of separation\" among my connected friends is 10 and the average distance between any two friends (not including me - that would always be 2) is 3.6.<br /><img src=\"https://djjr.us/images/qbank/q0056-02.gif\"><br /><h3>See Also</h3>[http://grupsderecerca.uab.cat/egolab/sites/grupsderecerca.uab.cat.egolab/files/Beagephi.pdf]",
      "tags": [
        "GIS",
        "computational thinking",
        "social network analysis",
        "research methods"
      ]
    },
    {
      "number": "0057",
      "question": " Facebook Ego Network with Gephi",
      "soln": "<h3>SOLUTION</h3><br /><img src=\"https://djjr.us/images/qbank/ryan-fb-friends-20120222.gif\"><br />",
      "tags": [
        "social network analysis"
      ]
    },
    {
      "number": "0058",
      "question": " Consider these examples of claimsmaking...",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": []
    },
    {
      "number": "0059",
      "question": " Consider the following things[[footnote]] Examples come from Borgatti, Stephen P. 2005. \"<a href=\"http://www.analytictech.com/borgatti/papers/centflow.pdf\" target=\"_blank\">Centrality and network flow</a>.\" //Social Networks 27// (2005) 55â€“71 [[/footnote]] that can flow or move on a network:Used booksMoneySmilesGossipTaught knowledgeMooching friends/relativesEmailAttitudesWorkers (flowing among jobs)InfectionPackagesGreetingsTips/how-to-infoHelp/favors/acts of kindnessCategorize these in terms of four characteristics:<ol><li>The mechanics of diffusion: does diffusion occur via replication (copy mechanism) or transfer (move mechanism)?</li><li>(applicable only to replication-based flows) Is the duplication is one at a time (serial), like giving a paperback to a friend, or simultaneous (parallel), like a radio broadcast.</li><li>Does the traffic flow deliberately or blindly/randomly?</li><li>Does the traffic revisit places it's already been?  That is, is the flow on paths (no node repeats), trails (no edge repeats), or walks (visiting nodes and edges perhaps repeatedly).</li></ol>",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": [
        "social theory",
        "social network analysis"
      ]
    },
    {
      "number": "0060",
      "question": " Use NodeXL to compute betweenness, closeness, and Eigenvector centralities of the network shown below ([[file centrality-example-04.xlsx| Excel file here]]).  Label the vertices with these.<ol><li>Rearrange the edges so as to get the largest value for betweenness centrality for vertex A</li><li>Rearrange the edges so as to get the largest value for closeness centrality for vertex A</li><li>Rearrange to get largest Eigenvector centrality</li></ol><br /><img src=\"https://djjr.us/images/qbank/q0060-a.gif\"><br />",
      "soln": "<h3>SOLUTION</h3><br /><img src=\"https://djjr.us/images/qbank/q0060-b.gif\"><br /><br /><img src=\"https://djjr.us/images/qbank/q0060-c.gif\"><br /><br /><img src=\"https://djjr.us/images/qbank/q0060-d.gif\"><br />",
      "tags": [
        "computational thinking",
        "social network analysis"
      ]
    },
    {
      "number": "0061",
      "question": " Donald Black wrote of two ways that social control can be a variable.  Answer three questions about this:<ol><li>In what sense can SC be a variable?  What does that mean?</li><li>What kinds of questions do we ask when we look at social control as an independent variable?</li><li>What kinds of questions do we ask when we look at social control as a DEPENDENT variable?</li></ol>",
      "soln": "<h3>SOLUTION</h3><ol><li>answer1</li><li>answer2</li><li>answer3</li></ol>",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0062",
      "question": " Using the course page on [[<a href=\"http://djjr-courses.wikidot.com/soc112:corporate-persons|\" target=\"_blank\">Corporate Persons</a>]] as your jumping off point, search for information on the current state of the \"overturn citizens united\" or \"anti-corporate person\" campaign in each of your states.  The first installment of the assignment is a very quick overview of each state.You might include<ol><li>Name and party of current governor</li><li>Makeup of state legislature</li><li>Party makeup of congressional delegation</li><li>Weblinks to any Occupy organizations in the state?</li><li>Do any of the national efforts appear to have a base in the state?</li><li>Is there a homegrown effort.</li></ol>In all cases, document as much as you can with URLS, etc.<table class=\"wikitable\"><tr><td>NLA</td><td>West Virginia (WV)</td><td>Wisconsin (WI)</td><td>Wyoming (WY)</td></tr><tr><td>ANB</td><td>Alabama (AL)</td><td>Pennsylvania (PA)</td><td>Vermont (VT)</td></tr><tr><td>REB</td><td>Illinois (IL)</td><td>Maryland (MD)</td><td>Massachusetts (MA)</td></tr><tr><td>RKB</td><td>Rhode Island (RI)</td><td>Washington D.C (DC)</td><td>South Carolina (SC)</td></tr><tr><td>VGB</td><td>Georgia (GA)</td><td>New Hampshire (NH)</td><td>New Jersey (NJ)</td></tr><tr><td>AJC</td><td>Connecticut (CT)</td><td>Virginia (VA)</td><td>Washington (WA)</td></tr><tr><td>KAD</td><td>Montana (MT)</td><td>New York (NY)</td><td>North Carolina (NC)</td></tr><tr><td>AGO</td><td>Indiana (IN)</td><td>Iowa (IA)</td><td>Missouri (MO)</td></tr><tr><td>MTI</td><td>Alaska (AK)</td><td>North Dakota (ND)</td><td>Ohio (OH)</td></tr><tr><td>CAM</td><td>Arizona (AZ)</td><td>Arkansas (AR)</td><td>Texas (TX)</td></tr><tr><td>AEM</td><td>Utah (UT)</td><td>Oklahoma (OK)</td><td>Oregon (OR)</td></tr><tr><td>NRR</td><td>Colorado (CO)</td><td>Delaware (DE)</td><td>Florida (FL)</td></tr><tr><td>DJR</td><td>South Dakota (SD)</td><td>Tennessee (TN)</td><td>Nebraska (NE)</td></tr><tr><td>DNS</td><td>Minnesota (MN)</td><td>Kansas (KS)</td><td>Kentucky (KY)</td></tr><tr><td>LJT</td><td>Michigan (MI)</td><td>New Mexico (NM)</td><td>Nevada (NV)</td></tr><tr><td>CEW</td><td>Hawaii (HI)</td><td>Idaho (ID)</td><td>California (CA)</td></tr><tr><td>PYW</td><td>Louisiana (LA)</td><td>Maine (ME)</td><td>Mississippi (MS)</td></tr></table><h3>Reference Material</h3>[[[soc180:occupy-data-project-ows-sites|Occupy Sites]]][[file NYTimes%20on%20CitizensUnitedDecision20100121.pdf| NYTimes on CU Decision]] 21 Jan 2010<a href=\"http://www.aclu.org/files/pdfs/scotus/citizensunited_v_fec_acluamicus.pdf\" target=\"_blank\">ACLU Amicus Brief</a>Click <a href=\"https://docs.google.com/document/d/1MIZZljdZmobBx45djBKkdX9qTxX287ZoKbikUP607CA/edit\" target=\"_blank\">HERE</a> to edit our googledoc or you can do it in the window below (though that might be a bit klunky).----",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": [
        "policy modeling",
        "computational thinking",
        "research methods"
      ]
    },
    {
      "number": "0063",
      "question": " Imagine a 10\\times10 square grid.  Each cell can be empty...",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": []
    },
    {
      "number": "0064",
      "question": " We'll use data on early 20th century Scottish industries to investigate interlocking directorates.<blockquote> (From <a href=\"http://vlado.fmf.uni-lj.si/pub/networks/data/esna/scotland.htm\" target=\"_blank\">Pajek data online</a>) This dataset contains the corporate interlocks in Scotland in the beginning of the twentieth century (1904-5). In the nineteenth century, the industrial revolution brought Scotland railways and industrialization, especially heavy industry and textile industry. The amount of capital needed for these large scale undertakings exceeded the means of private families, so joint stock companies were established, which could raise the required capital. Joint stock companies are owned by the shareholders, who are represented by a board of directors. This opens up the possibility of interlocking directorates. By the end of the nineteenth century, joint stock companies had become the predominant form of business enterprise at the expense of private family businesses. Families, however, still exercised control through ownership and directorships.</blockquote><blockquote></blockquote><blockquote> The data are taken from the book The Anatomy of Scottish Capital by John Scott and Michael Hughes. It lists the (136) multiple directors of the 108 largest joint stock companies in Scotland in 1904-5: 64 non-financial firms, 8 banks, 14 insurance companies, and 22 investment and property companies (Scotland.net). In this dataset, which was compiled from the Appendix of Scott & Hughes' book, note that two multiple directors (W.S. Fraser and C.D. Menzies) are affiliated with just one board so they are not multiple directors in the strict sense.</blockquote><blockquote> The companies are classified according to industry type: 1 - oil & mining, 2 - railway, 3 - engineering & steel, 4 - electricity & chemicals, 5 - domestic products, 6 - banks, 7 - insurance, and 8 - investment. In addition, there is a vector specifying the total capital or deposits of the firms in 1,000 pound sterling.</blockquote><blockquote></blockquote><blockquote> References</blockquote><blockquote></blockquote><blockquote> John Scott & Michael Hughes, The anatomy of Scottish capital: Scottish companies and Scottish capital, 1900-1979 (London: Croom Helm, 1980).</blockquote><blockquote> W. de Nooy, A. Mrvar, & V. Batagelj, Exploratory Social Network Analysis with Pajek (Cambridge: Cambridge University Press, 2004), Chapter 5.</blockquote><blockquote></blockquote><blockquote> History</blockquote><blockquote></blockquote><blockquote> Original authors: are John Paul Scott (1949) (scottj@essex.ac.uk, University of Essex) & Michael Hughes (1947, University of Lancaster in 1980, not listed now).</blockquote><blockquote> Data compiled into Pajek data files by W. de Nooy, 2001</blockquote>Use NodeXL to visualize this data.  The data is in three network datasets: a bipartite network of people and companies (edges represent a person being a director of a company); a network of people (the edges are co-membership in companies); and a network of companies (edges are sharing a director).Task 1: Create a preliminary two mode visualization that shows people as small circles and companies as larger squares.  Try different layouts (including manually assisted) and produce the best visualization you can (in a reasonable amount of time).  Can you color the companies by industry?  Are there individuals who appear to be bridges between industries?  Or who appear to be kingpins in a particular industry?Task 2: Do a quick exploration of the people by people network.  Try different visualizations.  Calculate graph metrics.  It might clarify the visualization if you use dynamic filtering to discard barely connected individuals.  Change node size by graph metric.  Can you identify a class of apparently important people?  Try clustering.Task 3: Now look at company by company network.  Cluster, color, explore.  How much do network clusters follow industry?  Are there cluster bridging companies?  Are you surprised at what they are.Turn in short paper that shows your explorations.The data is in the following Excel files.[[module files]]",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": [
        "social theory",
        "computational thinking",
        "social network analysis",
        "research methods"
      ]
    },
    {
      "number": "0065",
      "question": " Consider the document, \"<a href=\"http://www.economicsnetwork.ac.uk/handbook/printable/plagiarism.pdf\" target=\"_blank\">Plagiarism: Deterrence, Detection and Prevention</a>\" (a teaching manual for economics and business) by Jeremy B. Williams as an artifact.  How would you classify the strategies for plagiarism prevention that it describes?",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": []
    },
    {
      "number": "0066",
      "question": " The chart below could easily figure in an argument that the death penalty does not deter murder.  It shows that since 1990 the murder rate per 100,000 population has been higher in states WITH the death penalty than in those without it.What is an obvious \"correlation is not causation\" counter-argument?<br /><img src=\"https://djjr.us/images/qbank/murder-rate-vs-death-penalt.gif\"><br />",
      "soln": "<h3>SOLUTION</h3>Law could be the dependent variable and crime the independent variable.  It could be that states with more violence and more murder are the ones that implement capital punishment laws.  These laws keep murder rates near the rates in other states although they are still higher.",
      "tags": []
    },
    {
      "number": "0067",
      "question": " Work through the first half of chapter 7 of the NodeXL book using the [[file http://djjr-courses.wikidot.com/local--files/soc180:data/Senate_Raw.xlsx|senate data]].Let's see if we can find some structure within either or both of the parties.  The last exercise the text book suggests -- changing the edge filtering threshold (basically eliminating edges below some threshold so that we only count it as a similarity edge if, say, two senators vote together 75% of the time) -- let's us see some variation.But what if we look only at Republican-Republican edges?=VLOOKUP([@[Vertex 1]],Vertices[[Vertex]:[Party]],28)&\"-\"&VLOOKUP([@[Vertex 2]],Vertices[[Vertex]:[Party]],28)",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": [
        "policy modeling",
        "computational thinking",
        "design",
        "research methods"
      ]
    },
    {
      "number": "0068",
      "question": " STUDENTS AND CLASSES[[MODULE FILES]]",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": []
    },
    {
      "number": "0069",
      "question": " Define \"coordination\" and give five examples of coordination problems that you dealt with today.",
      "soln": "<h3>SOLUTION</h3>Coordination refers to people being able to maintain stable expectations about one another's behavior.  Some everyday examples include clocks, driving, language, stores being open and stocked, this class starting on time, etiquette.",
      "tags": []
    },
    {
      "number": "0070",
      "question": " If social order equals coordination and cooperation, provide some illustrations that support the authors' contention that \"the problem of social order underlies questions of central concern to sociologists in substantive areas as diverse as crime and deviance, social movements, organizations, politics, religion, international relations, and the family\" (xiii.1). Use this an opportunity to show you can distinguish cooperation and coordination and in general \"get\" the course.  Perhaps add a category or two of your own.",
      "soln": "<h3>SOLUTION</h3><ul><li>crime and deviance</li></ul> * coordination: norm followers have to agree on what constitutes infractions * cooperation: norm followers need to engage in punishment even if not in their self interest<ul><li>social movements</li></ul> * coordination: agreeing on a target * cooperation: showing up, even when it is inconvenient<ul><li>organizations</li></ul> * coordination * cooperation<ul><li>politics</li></ul> * coordination * cooperation<ul><li>religion</li></ul> * coordination * cooperation<ul><li>international relations</li></ul> * coordination * cooperation<ul><li>the family</li></ul> * coordination * cooperation",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0071",
      "question": " Consider this little bit of logic that describes a tourist's thinking process (taken from the title of a 1970s movie): â€œif itâ€™s Tuesday, this must be Belgium. Otherwise, I have no idea where we are.â€  Sketch a flowchart that represents this flow of thought.",
      "soln": "<h3>SOLUTION</h3><br /><img src=\"https://djjr.us/images/qbank/problem-71.png\"><br />",
      "tags": []
    },
    {
      "number": "0072",
      "question": " Sketch a flowchart that represents this  bit of logic: â€œif you are a woman then if you are over 40 you should have this test no matter what but if either parent had diabetes women should have the test no matter what.  Men only need to take the test if they are overweight.â€",
      "soln": "<h3>SOLUTION</h3>This medical advice protocol has two top level parts: one for women and one for men.For women, it says those over 40 should have the test.  And it says no matter what your age, if either parent had diabetes you should have the test.  For men, it says only take the test if you are overweight.We might be tempted to distraction by phrases like \"no matter what\" and \"only\" but a little bit of parsing and rephrasing helps to clarify.<br /><img src=\"https://djjr.us/images/qbank/probs-charts-solution-01.gif\"><br /><h4>COMMENTS</h4><ol><li>If you have crossing lines in your flow chart something is wrong.</li><li>You can have more than one action box for a single action -- here \"take the test\" -- in order to keep the chart well ordered.</li><li>Remember, single entry and single exit for each logical subunit.</li></ol>",
      "tags": []
    },
    {
      "number": "0073",
      "question": " Sketch a flowchart that represents this  bit of logic: â€œif cell E$3 is greater than cell G$12 then value is G$12;  otherwise, value is G$12-E$3.â€",
      "soln": "<h3>SOLUTION</h3><br /><img src=\"https://djjr.us/images/qbank/probs-charts-solution-02.gif\"><br />",
      "tags": []
    },
    {
      "number": "0074",
      "question": " Sketch a flowchart that represents this  bit of logic: â€œif the balance is less than the minimum alternative payment then just pay the balance, otherwise, pay the minimum alternative payment.â€",
      "soln": "<h3>SOLUTION</h3><br /><img src=\"https://djjr.us/images/qbank/probs-charts-solution-03.png\"><br />",
      "tags": []
    },
    {
      "number": "0075",
      "question": " Sketch a flowchart that represents this  bit of logic: â€œIf you can get a direct flight for under $1500 take it unless it leaves from SFO before 9 am.  Otherwise, see if anything is available on frequent flier miles no matter what the routing.  If you canâ€™t find anything, use Expedia to find the cheapest flight out of OAK.â€",
      "soln": "<h3>SOLUTION</h3><br /><img src=\"https://djjr.us/images/qbank/probs-charts-solution-04.gif\"><br />",
      "tags": []
    },
    {
      "number": "0076",
      "question": " Sketch a flowchart that represents this  bit of logic: If I have anything that is due tomorrow then if I am acing the class already and if I have some money Iâ€™ll go out drinking by myself (since all my friends will be busy), but if I donâ€™t have any money Iâ€™ll stay home and watch reruns on cable.  If, on the other hand, Iâ€™m not acing this class, Iâ€™ll stay home and study.  If I donâ€™t have anything due tomorrow, then if I have some money Iâ€™ll see if some friends are around and if so Iâ€™ll party with them.  Otherwise, Iâ€™ll drink alone.  If I donâ€™ t have any money Iâ€™ll just stay home and watch reruns on cable.",
      "soln": "<h3>SOLUTION</h3><br /><img src=\"https://djjr.us/images/qbank/probs-charts-solution-05.gif\"><br />",
      "tags": [
        "research methods"
      ]
    },
    {
      "number": "0077",
      "question": " Draw a flow charts that represents \"Do A until B\" and \"While B do A. Then do C\".",
      "soln": "<h3>SOLUTION</h3><br /><img src=\"https://djjr.us/images/qbank/while-and-until.gif\"><br />",
      "tags": []
    },
    {
      "number": "0078",
      "question": " Sketch a flow chart that represents the following writing protocol: (1) Edit your essay until it is perfect. (2) While the essay still needs work, edit your essay.",
      "soln": "<h3>SOLUTION</h3><br /><img src=\"https://djjr.us/images/qbank/flow-chart-simple-editing-process.gif\"><br />",
      "tags": []
    },
    {
      "number": "0079",
      "question": " Use stepwise refinement to create a flow chart for this set of instructions:  Do A and then B. If C, then while E do F and after that do G, otherwise do H. Do I.",
      "soln": "<h3>SOLUTION</h3>Start by looking at the syntax of the logic to make sure we understand it.Step 1: do AStep 2: do BStep 3: If C, then while E do F and after that do G, otherwise do HStep 4: do IDo a first draft that treats step three as a black box.<br /><img src=\"https://djjr.us/images/qbank/chart-4-solution-a.gif\"><br />Next, starting from the outside and working in, we draw the flow chart for \"if C do something (the while stuff) otherwise do something else (H)\":<br /><img src=\"https://djjr.us/images/qbank/chart-4-solution-b.gif\"><br />And now, let's leave the \"while loop\" as a black box and fill in a few more details.  It's now \"if C do the while thing and then do G.[[=image  ppol225:images/chart-4-solution-c.gif size=\"medium\"]]And finally, we'll insert the conditional diamond for the E of the while and a rectangle for the action F.[[=image  ppol225:images/chart-4-solution-d.gif size=\"small\"]]And then put it all together<br /><img src=\"https://djjr.us/images/qbank/chart-4-solution.gif\"><br />",
      "tags": []
    },
    {
      "number": "0080",
      "question": " If A: until B do C and then, do D if E, otherwise do F while G. Otherwise if H, then if I do J else do K. Do L.",
      "soln": "<h3>SOLUTION</h3>Again, we need to begin by clarifying the syntax: If A: until B do C and then do D if E otherwise do F while G. Otherwise if H, then if I do J else do K. Do L. If A do\\timesotherwise Y<br /><img src=\"https://djjr.us/images/qbank/problem09-a.gif\"><br />where\\times= until B do C and then do D if E otherwise do F while G.and Y = if H, then if I do J else do K. Do L.<br /><img src=\"https://djjr.us/images/qbank/problem09-b.gif\"><br />Next, we expand (refine) W and V -- note that we insert some of the letters from the question and one more \"black box\" which we label T.<br /><img src=\"https://djjr.us/images/qbank/problem09-c.gif\"><br />And then U<br /><img src=\"https://djjr.us/images/qbank/problem09-d.gif\"><br />And finally, let's get inside the blackbox T<br /><img src=\"https://djjr.us/images/qbank/problem09-e.gif\"><br />And then it can all come together:<br /><img src=\"https://djjr.us/images/qbank/probs-charts-solution-09.gif\"><br />",
      "tags": []
    },
    {
      "number": "0081",
      "question": " Is a picture worth 548 words? Convert the Rock County, Wisconsin \"Drug Court Flow Chart\" from text form to diagram form.<ol><li>District Attorney and Defense Attorney present to Judge in assigned Criminal Court a completed Rock County Drug Court Contract and a copy of the defendantâ€™s criminal history (either NCIC Report or CCAP Record of Convictions).</li><li>Criminal Court Judge determines the defendant may be eligible for Drug Court so the matter is continued for two (2) weeks before the same court. Judge orders defendant to attend an initial screening at the offices of the Rock County Community RECAP Program, 303 W. Court Street, Janesville, WI on the following Tuesday.</li><li>Court Attendant for the Criminal Court will then immediately photocopy the completed Drug Court Contract, the defendantâ€™s criminal record (either NCIC or CCAP), and the criminal complaint in the present matter and place them in an envelope and put it in the mailbox of the Community RECAP Program that is located in the Courthouse mailroom.</li><li>The Court Attendant will daily FAX a list of the defendants referred the Community RECAP Program, providing the defendantâ€™s name, date of birth, and case number. This will be FAXed daily to (608)743-1759 to provide that office with a list of the defendants they should expect the following Tuesday for the initial screening.</li><li>Upon completion of the initial screening the Community RECAP office will FAX to the Criminal Court a document indicating the completion of the initial screening and whether the defendant is qualified for the Drug Court. If the defendant is eligible, the Community RECAP office will provide the defendant with an appointment date (scheduled after his next scheduled return to the Criminal court) for completion of the intake process and to complete a full assessment of the defendants needs. The defendant will also be scheduled with an initial date for first appearance at Drug Court. This information will also be contained in the FAX sent to the Criminal court.</li><li>After the initial screening, the defendant returns to the Criminal Court. If the Community RECAP FAX (from #5 above) has been received by the court and it indicates that the defendant is eligible for the Drug Court, then the Criminal Court will take the plea to the original charge but will withhold a finding of guilt. The Court will then order the clerk to place the file in status â€œDeferred Pendingâ€, continue bond and order the defendant to the Drug Court appearance indicated on that FAX.</li><li>The Court Attendant will then photocopy the following documents, place them in an envelope, and forward them to Judge John Roethe of the Drug Court as these documents will constitute the Drug Court file:</li></ol> # Criminal complaint, # Completed Drug Court Contract, # NCIC or CCAP criminal history of the defendant, # Community RECAP Program FAX indicating the completion of the initial screening and initial date for first appearance before the Drug Court.<ol><li>The matter will not return to the Criminal Court until the defendant either successfully completes the program or is removed from the program. If the defendant successfully completed the program the court will implement the agreement outlined in the Drug Court Contract. If for any reason the defendant fails to complete the program the defendantâ€™s original plea will be perfected the entry of a finding of guilt and the matter will proceed to sentencing on the original charge.</li></ol>",
      "soln": "<h3>SOLUTION</h3>[[image ppol225:images/wisconsin-court-flow-chart.gif width=\"100%\"]]",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0082",
      "question": " Flow chart the following protocols.  (a) Record youth name and address. Check in system to see if already there. If there, pull up record and verify information. If not, create new record and ask for information. When done, send record to orientation staff, give youth a number and instruct to wait until number is called.  (b) Once stage three in the treatment regimen is completed, clients are not eligible for the next stage in treatment until they have had three consecutive clean weekly drug tests. If they have one failed test they are given a warning. Two failed tests in a row and they have to meet with a counselor.  Three failed tests and they are out of the program.",
      "soln": "<h3>SOLUTION</h3>(b) This \"system\" sorts clients into three categories â€“ either you are between steps 3 and 4 (working on drug tests), you are ready to do step 4, or you are out of the program. We need a black box that will sort clients into one of two categories: on to step four or out of program.<br /><img src=\"https://djjr.us/images/qbank/prob11b-002.gif\"><br />The main test for being out of the program is failing three tests.  Otherwise you are still in until you pass three in a row.  So, in English it might be \"while you haven't failed thrice, keep testing until you get three in a row clean.\"<br /><img src=\"https://djjr.us/images/qbank/prob11b-001a.gif\"><br />How do we combine these?  To get our heads around it we need to NOT think about most of the system and focus only on these two features.  Let's try this and see if it represents the system logic we want:<br /><img src=\"https://djjr.us/images/qbank/prob11b-001b.gif\"><br />What does \"All the Rest\" have to accomplish?  Drug tests.  Count successes and failures.  Warn on one failure, counseling on two.  Reset success to zero after a failure.  To think clearly about this, I want to remember that all I need to do is design logic that has a single entry point and a single exit point and that at the exit point we'll be ready to apply these tests about whether we are in the 3 passes in a row state, the 3 failures state, or the try again state.Let's write out the logic in English:<ol><li>Take a drug test.</li><li>If you pass, add one to the number of passed tests.</li><li>If you fail, set number of passed tests to zero (start over) and add one to the number of failed tests.</li></ol> #  If you have one failed test, get a warning #  If you have two failed tests, get counselingI have an urge to follow this up with the next two tests, but remember I've got my \"repeat while until\" logic outside this black box.  Let's see what this might look like.<br /><img src=\"https://djjr.us/images/qbank/prob11b-004.gif\"><br />",
      "tags": []
    },
    {
      "number": "0083",
      "question": " Weimer & Vining (1989) characterize policy problems in terms of market failure and government failure.  Any given problem, they suggest, can be placed in one of four categories: (1) market AND government failure; (2) government works (policy corrects for market failure); (3) market works; (4) government failure to correct for market failure. Their suggested strategy is to start by asking whether there is a market failure and then whether there is government failure.  Using the two conditionals, \"Is there evidence of market failure?\" and \"Is there evidence of government failure?\" construct a flowchart that would permit you to classify any given situation into one of the four aforementioned categories.",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": [
        "policy modeling"
      ]
    },
    {
      "number": "0084",
      "question": " If the weather is nice, plant a garden. Otherwise paint the office. For the garden, make a decision between flowers and vegetables. If you go for vegetables, buy compost, seeds, and stakes; till the soil, and hook up the irrigation. If it's flowers this year, go to the garden store and if they have 4 inch plants buy enough for the plot and plant them. If they don't then get flats of smaller plants and bring them home and let them get acclimated for a week and then plant them next week. To till the soil, if the ox is healthy, do it with the animal plow, otherwise get out the rototiller.",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": [
        "policy modeling",
        "design"
      ]
    },
    {
      "number": "0085",
      "question": " A regimen consists of three mandatory sessions, followed by an optional weekend retreat and then, monthly sessions until standard test indicates absence of symptoms.",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": []
    },
    {
      "number": "0086",
      "question": " Sort clients into four categories promising, troubling, recalcitrant, hopeless on the basis of two tests which can be passed or failed.",
      "soln": "<h3>SOLUTION</h3>This is an example of a classic use of flow chart logic to describe a sorting process.  Basically we are using two tests to create a 2x2 taxonomy (classification system).  It might look like this<table class=\"wikitable\"><tr><td class=\"tdheader\">Diagnosis</td><td class=\"tdheader\">Test 1</td><td class=\"tdheader\">Test 2</td></tr><tr><td>Promising</td><td class=\"tdcentered\">Pass</td><td class=\"tdcentered\">Pass</td></tr><tr><td>Troubling</td><td class=\"tdcentered\">Pass</td><td class=\"tdcentered\">Fail</td></tr><tr><td>Recalcitrant</td><td class=\"tdcentered\">Fail</td><td class=\"tdcentered\">Pass</td></tr><tr><td>Hopeless</td><td class=\"tdcentered\">Fail</td><td class=\"tdcentered\">Fail</td></tr></table>Our logic is thenIf pass test 1, then if pass test test then \"promising\" otherwise \"troubling.\"  On the other hand, if fail test 1 then if pass test 2 then \"recalcitrant\" otherwise \"hopeless.\"<br /><img src=\"https://djjr.us/images/qbank/q0086-001.png\"><br />",
      "tags": []
    },
    {
      "number": "0087",
      "question": " Sketch a flow chart to represent the following scenario.  The Alameda County Waste Management Authority (ACWMA) has decided to spend some money on a public relations campaign to increase the level of composting (\"green bin\") recylcing.   Data on hand says that current levels are 4 kg per household of four per week.  The plan is to spend $10,000 on advertising each month until the level has gone over 6 kg per week for four weeks in a row.Prefatory concern â€“ what does 4 kg / household of 4 / week mean?  The amount of compost likely depends on the number of people in a household.  We don't want to get the numbers wrong by failing to take this into account.  So, in our data collection, we double the number for households of 2, halve it for households of 8, etc.  Why not just express it as \"kg/person/week\"?  That would work fine mathematically.  Perhaps the PR folks had wanted to focus on households (and families) so as to induce a greater sense of collective responsibility.",
      "soln": "<h3>SOLUTION</h3>Version 1We know current level is 4 kg/household/weekUnit of time is month.Spend 10,000 on public awareness campaignMeasure amount of compostingIf it has reached 6 kg / household / week halt the campaign, otherwise continue.<br /><img src=\"https://djjr.us/images/qbank/recycling-flow-chart-01.gif\"><br />picIf we assume PR and measurement and decision making are done by separate departments we might have something like this:<br /><img src=\"https://djjr.us/images/qbank/recycling-flow-chart-02.gif\"><br />",
      "tags": [
        "policy modeling",
        "computational thinking",
        "design",
        "research methods"
      ]
    },
    {
      "number": "0088",
      "question": " Convert the following statement to â€œpseudo-Excelâ€ formulas (follow the example to see what we mean by that).Example.  \"If it is Tuesday, this must be Belgium, otherwise it is France\" would become something like<pre>= if(day=\"Tuesday\",\"Belgium\",\"France\")</pre>If the calculated payment (CALC_PMT) is less than the alternative monthly minimum payment (ALT_MIN_PMT) then the payment is the alternative monthly payment otherwise it is the calculated payment.",
      "soln": "<h3>SOLUTION</h3><pre>= if (CALC_PMT &lt; ALT_MIN_PMT, ALT_MIN_PMT, CALC_PMT)</pre>",
      "tags": []
    },
    {
      "number": "0089",
      "question": " Convert the following statement to â€œpseudo-Excelâ€ formulas (follow the example to see what we mean by that).Example.  \"If it is Tuesday, this must be Belgium, otherwise it is France\" would become something like<pre>= if(day=\"Tuesday\",\"Belgium\",\"France\")</pre>If the current balance (BAL) is less than the calculated payment then pay the balance off, otherwise, pay the calculated payment.",
      "soln": "<h3>SOLUTION</h3><pre>=if(current_balance<calculated_payment,current_balance,calculated_payment)</pre>",
      "tags": []
    },
    {
      "number": "0090",
      "question": " Convert the following statement to â€œpseudo-Excelâ€ formulas (follow the example to see what we mean by that).Example.  \"If it is Tuesday, this must be Belgium, otherwise it is France\" would become something like<pre>= if(day=\"Tuesday\",\"Belgium\",\"France\")</pre>If the calculated payment is less than the alternative minimum monthly payment then pay the alternative monthly minimum unless it is more than the remaining balance in which case just pay the balance off. Otherwise pay the calculated payment.",
      "soln": "<h3>SOLUTION</h3><pre>=if(calculated_payment<alternative_monthly_minimum,if(alternative_monthly_minimum&gt;current_balance,current_balance,alternative_monthly_minimum),calculated_payment)</pre>",
      "tags": []
    },
    {
      "number": "0091",
      "question": " Sketch flow chart that captures logic of the following process.Organization consists of intake personnel, counselors, followup social workers, and clerical staff.When a new client contacts the organization intake personnel determine which of four types of case it is by asking two questions. If a client is returning having already been \"typed\" she is sent to the appropriate waiting room. Types 1 and 3 are referred to counselor A, type 2 to counselor B, type 4 to counselor C.Client goes to waiting room until counselor is free.  Sessions take 1 hour so the wait can be long.  If more than one person waiting client is advised to go away and come back later.In session, if the client is over 18 they get treatment protocol 1 otherwise they get treatment protocol 2.",
      "soln": "<h3>SOLUTION</h3><br /><img src=\"https://djjr.us/images/qbank/P0091-a.png\"><br /><br /><img src=\"https://djjr.us/images/qbank/P0091-b.png\"><br /><br /><img src=\"https://djjr.us/images/qbank/P0091-c.png\"><br /><br /><img src=\"https://djjr.us/images/qbank/P0091-d.png\"><br /><br /><img src=\"https://djjr.us/images/qbank/P0091-e.png\"><br /><br /><img src=\"https://djjr.us/images/qbank/P0091-f.png\"><br /><br /><img src=\"https://djjr.us/images/qbank/P0091.png\"><br />",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0092",
      "question": " What is wrong with the decision tree here?  I need to decide whether to work at home or go down to Stanford today. At home, because of distractions, I work at about 75% efficiency. If I go to my research office at Stanford I work at 100% efficiency. If I work at home I will get 8 hours to work. If I decide to drive down to Stanford, I will get 8 hours minus driving time to work. The normal drive is 60 minutes each way. But about 20% of the time it is extra light and the round trip takes just 90 minutes. About 30% of the time, though, traffic is awful and round trip is 180 minutes.  I made a decision tree to figure out where I should work if I am trying to maximize my output, but I did something wrong. Fix the tree and tell me what I should do.[[=image https://djjr-courses.wdfiles.com/local--files/ppol225:images/decision-tree-problems-01.gif]]",
      "soln": "<h3>SOLUTION</h3>[[span style=\"color:green\"]]  The tree above has chance branches coming out of node 1 that do not add up to 100.  Remember, the branches coming out of a chance node must be exhaustive -- all the possibilities -- and the probabilities will add to 1.0.<br /><img src=\"https://djjr.us/images/qbank/decision-trees-problems-08.jpg\"><br />",
      "tags": [
        "policy modeling",
        "research methods"
      ]
    },
    {
      "number": "0093",
      "question": " A new device at your favorite big box store costs $200.  It has a one year guarantee from the manufacturer.  The cashier offers you a special deal on a three year replacement warranty (assume it's good, will be honored, etc.) -- $40.  You estimate that the chances of the device failing during second and third years is 25% and that the price of replacement by then will be $150.  Should you buy the service plan?  What  are the parameters of this decision model?",
      "soln": "<h3>SOLUTION</h3>[[iframe http://www.youtube.com/embed/9ZjMe6iQQCE width=\"420\" height=\"315\" frameborder=\"0\"[[/iframe]]<br /><img src=\"https://djjr.us/images/qbank/decision-tree-problems-05.gif\"><br />",
      "tags": [
        "policy modeling",
        "design"
      ]
    },
    {
      "number": "0094",
      "question": " Assuming you are self-interested, what makes more sense: buy a $1.00 lottery ticket with a 1 in five million chance of winning a million dollars, buying a twenty dollar raffle ticket for a local fundraiser with a 1 in 2500 chance of winning a $500 jackpot, or playing a $1 stake game of rock-scissors-paper with the person next to you.",
      "soln": "<h3>SOLUTION</h3>TBA",
      "tags": []
    },
    {
      "number": "0095",
      "question": " You never know what the weather is going to be around here.  Somedays you need a sweater and some days you need sunglasses.  The smart person, they say, always brings both.  But suppose there is a definite hassle involved in bringing either (e.g., you ride a bike and space is tight).  Sketch a decision tree that takes into account a cost to bringing either and a cost to not having either when you need them and the possibility that on a given day you might need one, the other, or both.  Use plausible numbers of your own choice.",
      "soln": "<h3>SOLUTION</h3> Here is one version of the tree without any numbers.  It is also reasonable to collapse the two sequential weather contingencies into one with four options (that is, \"sunny and warm, sunny and cold, cloudy and warm, cloudy and cold) rather two with two options.<br /><img src=\"https://djjr.us/images/qbank/decision-tree-problems-weat.gif\"><br />",
      "tags": [
        "policy modeling"
      ]
    },
    {
      "number": "0096",
      "question": " A college enrolls two types of students.  Full-pay students pay $40K tuition and half-pay students pay $20K.  At present the school spends $1 million per year to recruit 200 students about 75% of whom are half-pay and 25% full-pay.  A consultant submits a proposal to shift resources around and use GIS to target recruitment at zip codes that are more likely to yield full-pay students.  She says there is a 75% chance that the results will be a slightly smaller class (190) but one with 40% full-pay and 60% half-pay.  Unfortunately there is also a risk things won't turn out so well.  There's a 25% chance that enrollment will drop to 170 and only 30% will be full pay. Use a decision tree to advise the college as to its best course of action.",
      "soln": "<h3>SOLUTION</h3>[[iframe http://www.youtube.com/embed/-7bXikWgKwg width=\"560\" height=\"315\" frameborder=\"0\"[[/iframe]][!--<br /><img src=\"https://djjr.us/images/qbank/decision-tree-problesms-07-fix.jpg\"><br />--]",
      "tags": [
        "policy modeling"
      ]
    },
    {
      "number": "0097",
      "question": " There's an idea in philosophy called \"Pascal's Wager\" that describes a way of thinking about the existence of god.  It goes like this.  I have a choice to believe or not believe.  And there is a chance that god exists and a chance that there is no god.  If I believe and there is a god, I have a chance at eternal salvation.  If I don't believe but there is a god, I suffer eternal damnation.  If I do believe and it turns out there is no god, I will feel a bit of a chump, but the atheists can feel smug if opposite is the case. Sketch this situation as a decision tree.  Should you believe in god?",
      "soln": "<h3>SOLUTION</h3>We don't really have scientific basis for assigning a cost in dollars to damnation nor a benefit in dollars to salvation.  So, as usual, we make something up.  Here our requirement is just something along the lines of \"should be relatively pretty big (small/negative).\"<br /><img src=\"https://djjr.us/images/qbank/decision-tree-problems-07.gif\"><br />[[module files]]",
      "tags": [
        "policy modeling"
      ]
    },
    {
      "number": "0098",
      "question": " Sketch the decision tree for the following scenario.  I want to buy a used car.  The car I am looking at is being offered at $4000.  The seller says it is in good shape all around.  I look it over and agree, but you never know for sure.  Suppose there is a 10% chance that it is a total dog and that buying it will be a $2000 mistake.  I know a mechanic who will give it a very thorough inspection, for a price.  If my assumptions are correct, what's the most I should pay my mechanic?",
      "soln": "<h3>SOLUTION</h3>New solution based on excellent in-class comments 27 September 2012.  Strong point made that unless the car was more useful to the buyer than the $4000 then it would an almost trivial problem: the existence of any risk at all that the car is a lemon would make me not buy it.I think we can take this into account and still present a simple and elegant solution.  Let us simply recognize that the motivation to do the exchange (that is, buy the car), suggests that the value TO THE BUYER is at least $4000 and almost certainly at least $4000 plus a little bit more.  This based on the idea that the market exchange happens when the exchange is somehow mutually beneficial.<ol><li>If I am willing to buy this car in good working condition for $4000 then we can assume the value to me of having this car in good working condition is **at least** $4000.  One way to write this is \\(V = 4000 + xquad wherequad xge 0\\).</li><li>As usual, we use the accounting principle of figuring out what all of our assets and liabilities are at a specific moment in time.</li><li>This will yield the following possible outcomes situations (we ignore the \"impossible\" situations such as the car is a known lemon but I buy it anyway)</li></ol><table class=\"wikitable\"><tr><td>Mechanic</td><td>Car Passed Test</td><td>Bought Car</td><td>Car Needed Repair</td><td>Cost of Mechanic</td><td>Cost of Repair</td><td>Value of Car</td><td>Cash</td></tr><tr><td class=\"tdcentered\">YES</td><td class=\"tdcentered\">YES</td><td class=\"tdcentered\">YES</td><td class=\"tdcentered\">NO</td><td class=\"tdcentered\">-T</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">4000+x</td><td>0</td></tr><tr><td class=\"tdcentered\">YES</td><td class=\"tdcentered\">NO</td><td class=\"tdcentered\">NO</td><td class=\"tdcentered\">NO</td><td class=\"tdcentered\">-T</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">4000</td></tr><tr><td class=\"tdcentered\">NO</td><td class=\"tdcentered\">@@--@@</td><td class=\"tdcentered\">YES</td><td class=\"tdcentered\">NO</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">4000+x</td><td class=\"tdcentered\">0</td></tr><tr><td class=\"tdcentered\">NO</td><td class=\"tdcentered\">@@--@@</td><td class=\"tdcentered\">YES</td><td class=\"tdcentered\">YES</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">-2000</td><td class=\"tdcentered\">4000+x</td><td class=\"tdcentered\">0</td></tr><tr><td class=\"tdcentered\">NO</td><td class=\"tdcentered\">@@--@@</td><td class=\"tdcentered\">NO</td><td class=\"tdcentered\">NO</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">4000</td></tr></table>There are, as you probably have discovered, different ways of thinking about this problem.  Let's try to find the simplest one.The main thing we want to determine is how much it would make sense to pay a mechanic to eliminate the uncertainty about buying a lemon.<br /><img src=\"https://djjr.us/images/qbank/DT-prob-09.jpg\"><br />",
      "tags": [
        "policy modeling"
      ]
    },
    {
      "number": "0099",
      "question": " We want to apply for a home equity line of credit.  The bank says it has to know what your house is worth (It has to be worth a certain amount over what we still owe on the mortgage to get a loan at a good rate).  A loan at a bad rate will cost $10,000 more than a loan at a good rate.  We think there is a 60:40 chance that our house is in fact worth enough to get a good rate.  We have a choice between a cheap appraisal ($100) and an expensive appraisal ($1000).  A cheap appraisal, we have learned, has a 40% chance of correctly valuing a property.  An expensive appraisal is right 70% of the time. Draw a decision tree that will help us figure out what to do.",
      "soln": "<h3>SOLUTION</h3>Let's start by putting the facts down.<ol><li>Two kinds of loan may be offered, \"good\" and \"bad.\"  Price on \"bad\" is $10k higher than \"good.\"</li><li>Actual house value may be \"high\" or \"low.\"</li><li>An appraisal will estimate the value of the house (this is a test).</li><li>Good loan is offered if house is appraised \"high.\"</li><li>There is 60% chance that house value is actually high.</li><li>Cheap appraisal gets it right 40% of the time.  Cost is 100.</li><li>Expensive appraisal gets it right 70% of the time.</li></ol>Note: in the real world, it gets even more interesting.  Sometimes, if the house appraises high, the bank pays for the appraisal.Let's look at the DT<h3>What is the main decision?  Which appraisal to use.</h3><br /><img src=\"https://djjr.us/images/qbank/DT-prob-10a.gif\"><br />This might feel counter-intuitive.  Let's look more closely and ask what is tilting us in the direction of the cheaper appraisal.  First of all, we said that there is only a 60 percent chance that the house really IS worth the high value.  This is just a little more likely than 50/50.  And the expensive appraisal can be wrong even if the house IS worth a lot.  And then we have to look at the other end.  The cheap appraisal could work in our favor: during the 40% of the time where the house is not of high value this appraisal will get it wrong, call the value high and get us the cheap loan, about 60% of the time.  Note that along the way we ended up looking at several \"AND\" probabilities\n$$P(mbox{IS high AND appraises high}) = P(mbox{high}) \\times P(mbox{appraises high} | mbox{high})$$[[module files]]",
      "tags": [
        "policy modeling"
      ]
    },
    {
      "number": "0100",
      "question": " How much would you be willing to pay for a forecast that would resolve the contingency in [[[q:0095|problem 95]]]?",
      "soln": "<h3>SOLUTION</h3>The actual numbers depend, of course, on the numbers you chose for the previous problem.  In principle, we solve this problem as we would any \"add a perfect test\" problem:<ol><li>draw the original DT and set aside.</li><li>draw a DT that starts with a choice node, \"to test or not to test.\"</li><li>on the \"yes, test\" branch we add a chance node with branches for each of the possible test results.</li><li>label these branches with the actual probabilities of the outcomes \"in the actual world\" (the numbers we used for the different weather scenarios).</li><li>put a copy of your original DT on each of these branches (and one on the \"no test\" branch)</li><li>change the probabilities to reflect the perfect forecast</li><li>add a forecast cost to all the outcomes on the \"yes, test\" branches</li><li>recalculate</li></ol>",
      "tags": []
    },
    {
      "number": "0101",
      "question": " If the farmer plants early and the spring is warm, she can get a 20% increase in her harvest.  But if she plants early and there's a late frost she can lose 50% of her harvest.  Historically, these late frosts happen one year in four (25% of the time).  Use a decision tree to determine how much she would be willing to invest in a perfect forecast.",
      "soln": "<h3>SOLUTION</h3>Step 1 is to layout the choices and chances.<ul><li>Choose to plant early or not.</li><li>The weather then happens.</li></ul><br /><img src=\"https://djjr.us/images/qbank/DT-prob-12a.jpg\"><br />Next we can fill in the rest of the information, but let's remember that we are ultimately interested in how much the forecast information will be worth.Let's say the value of the regular harvest is 1.  That means the extra bountiful harvest will be 1.20 (120% of normal) and the disaster harvest will be 0.5 (50% of normal).<br /><img src=\"https://djjr.us/images/qbank/DT-prob-12b.jpg\"><br />And then we put in the test (forecast) branches on the left and do the math.  We call the cost of the forecast T as we have for other tests.  We assume that it's a perfect forecast; if the forecast says warm, it will be warm.  For completeness we show a decision node after the forecast but since the probabilities to the right are 1 and 0 or 0 and 1, the decision is clear:  if the weather will be warm, we plant early; if cold, late.The final (or rather first) choice node is now a comparison of 1.15-T and 1.025.  Thus, for any T &lt; 0.125 we would prefer to get the forecast.  Knowing what the weather will be is worth about 1/8 of the value of the annual harvest.<br /><img src=\"https://djjr.us/images/qbank/DT-prob-12c.jpg\"><br />[[module files]]",
      "tags": [
        "policy modeling",
        "design"
      ]
    },
    {
      "number": "0102",
      "question": " Kids these days!  Of those who get into trouble, it turns out, about 30% are \"real trouble-makers\" who need some help.  The other 70% are normal adolescents who will age out of their trouble-making under normal care.   A social worker friend introduces you to a test that you can give to kids who are referred to you to determine which category they are in.  Research has suggested the test is 75% accurate.  Use tree flipping to describe what to make of the test's results.",
      "soln": "<h3>SOLUTION</h3>&gt; Up became down, down up; in becomes out, here becomes there; what where and certainty doubt; a cat is a dog and a kitten is a pup.  Maples are oaks, and a palm is a birch.  These are all just preparations, for reading research and working in organizations.We'll use our tree-flipping Excel tool:<br /><img src=\"https://djjr.us/images/qbank/DT-prob-13a.gif\"><br />What do we make of this?  The flipped tree says that when this test says a kid is NOT a trouble maker, it's about 90% likely that she really is a good kid.  On the other hand, a positive result still leaves a lot of room for doubt.  Almost half (44%) of the positive results will be false.  If mis-diagnosing \"real trouble makers\" were a big concern this may not be the test for us.[[module files]]",
      "tags": [
        "social theory",
        "research methods"
      ]
    },
    {
      "number": "0103",
      "question": " Suppose we are running a program to which we want to accept only individuals in the top 25% of the population (on some measurable trait).  Unfortunately, our test for measuring the trait is only 80% accurate.  Draw event tree and flip to show what kind of faith we can have in the test results.  Which test result appears more worthy of taking at face value?  Which group would you be inclined to develop a second test for?",
      "soln": "<h3>SOLUTION</h3>Again, we use our tree flipping tool.  Imagine this is the Mensa test.  What does it make you think about Mensa now?<br /><img src=\"https://djjr.us/images/qbank/DT-prob-14a.gif\"><br />Apparently the test does a good job at detecting the average dolt.  On the other hand, it seems to provide a lot of folks with an overinflated view of themselves.  What are the policy implications if this sort of thing were true of credentialing systems in general?  How likely do you think it is?[[module files]]",
      "tags": []
    },
    {
      "number": "0104",
      "question": " House gets another case.  There's this funny rash.  We won't say where it appears, but it's a funny rash.  In 1% of the cases, it means something really, really bad -- anxoreisis.  Fortunately, there's  a test.  Unfortunately, it's not a perfect test.  Fortunately, it's a pretty good test.  Unfortunately, it is wrong 2% of the time.  Work it out.  ",
      "soln": "<h3>SOLUTION</h3><br /><img src=\"https://djjr.us/images/qbank/DT-prob-15.jpg\"><br />[[module files]]",
      "tags": []
    },
    {
      "number": "0105",
      "question": " Following on [[[q:0104| problem 104]]], suppose the test is not painless or without its own risks.  Suppose the \"cost\" of the test is 5.  And suppose the treatment is also not so nice and the cost of the treatment is 15.  But if you have the disease and you are not treated, the results are nasty : 50.  Do we have enough information to recommend a course of action?  What should we do?  ",
      "soln": "<h3>SOLUTION</h3><br /><img src=\"https://djjr.us/images/qbank/DT-prob-16.jpg\"><br />[[module files]]",
      "tags": []
    },
    {
      "number": "0106",
      "question": " She may love you or she may not.  It turns out there is a 40% chance she does.  You decide to use the buttercup test to find out (hold a buttercup under chin and see if it reflects yellow).  The test is 90% accurate.  Draw tree and flip to determine what conclusions we can draw from positive and negative buttercup test results.",
      "soln": "<h3>SOLUTION</h3><br /><img src=\"https://djjr.us/images/qbank/DT-prob-17.jpg\"><br />[[module files]]",
      "tags": []
    },
    {
      "number": "0107",
      "question": " Our neighborhood association has a ten member board. Each year it plans to add four members. Write the difference equations that describe the size of the board (S) each year.",
      "soln": "<h3>SOLUTION</h3>p_{0}=10p_{1}=p_{0}+4p_{n+1}=p_{n}+4And the first few numbers are 10, 14, 18, 22, ...",
      "tags": [
        "design"
      ]
    },
    {
      "number": "0108",
      "question": " You are a small non-profit.  Your sole funder says that each year it will double what you have as your balance at the end of the year. Each year you project spending 20,000 for programs. Ignore interest. Write difference equations describing your balance (B).What special situations can you imagine we might get into?  What, for example, happens if B_{0}=$32,000? What happens if it is 50,000?  40,000?",
      "soln": "<h3>SOLUTION</h3>Let's assume we start with balance \\(B_{0}\\) .  The first year we spend 20,000 and so at the end of the year have \\(B_{0}-20,000\\) which the funder will double.  Thus, our new balance will be\n$$B_{1} = 2 \\times (B_{0}-20,000)$$And, in general,\n$$B_{n+1} = 2 \\times (B_{n}-20,000)$$The other questions are left as an exercise.",
      "tags": []
    },
    {
      "number": "0109",
      "question": " Each year the feral cat population grows by 3%. Let C_{n} be the number of cats n years from now. Assume there are presently 350. Write a difference equation that describes the cat population from year to year.",
      "soln": "<h3>SOLUTION</h3>C_{n} = 1.03^^n-1^^*C_{1}<table class=\"wikitable\"><tr><td>Year</td><td>C_{n}</td></tr><tr><td>1</td><td>C_{1} = 350</td></tr><tr><td>2</td><td>C_{2} =  1.03*C_{1} = C_{1} + 0.03C_{1}</td></tr><tr><td>3</td><td>C_{3} = 1.03*C_{2} = 1.03(1.03*C,,1,)</td></tr><tr><td>n</td><td>C_{n} = 1.03^^n-1^^*C_{1}</td></tr></table>",
      "tags": []
    },
    {
      "number": "0110",
      "question": " Each year the feral cat population grows by 3%. Let C_{n} be the number of cats n years from now. Assume there are presently 350. Suppose that each year we catch and euthanize or place in homes 20 cats. Write the equations for this situation.",
      "soln": "<h3>SOLUTION</h3>TBSBY",
      "tags": []
    },
    {
      "number": "0111",
      "question": " Let's say we have a 2 year graduate program. The first year class is growing at a rapid rate 5% per year. Between the first and second years, 25% of the students change their minds or get jobs and leave the program. Among the second years, 10% leave before graduation. The program currently has 20 first year and 12 second year. Write difference equations to describe population in future years.",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": []
    },
    {
      "number": "0112",
      "question": " Sketch a causal loop diagram representing this logic:Being sad...<ol><li>...makes you frown...</li><li>...which makes people avoid you...</li><li>...which makes you lonely...</li><li>...which makes you sad...</li></ol>",
      "soln": "<h3>SOLUTION</h3><blockquote> <br /><img src=\"https://djjr.us/images/qbank/causal-loop-001.jpg\"><br /></blockquote>",
      "tags": []
    },
    {
      "number": "0113",
      "question": " Sketch a causal loop diagram for this system (be sure to label each link and the overall loop).  Comment on the long term equilibrium of this system.<ul><li>Being happy...</li></ul> # ...makes you to smile... # ...makes people approach you... # ...makes you feel social... # ...makes you happy...",
      "soln": "<h3>SOLUTION</h3>[[image http://djjr-courses.wikidot.com/local--files/ppol225:images/causal-loop-002.jpg]]",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0114",
      "question": " A totalitarian country that prohibits migration has a birth rate **b** and a death rate **d**.  How does the population change from one year to the next?We can interpret \"birth rate\" or \"death rate\" in two ways -- as a rate, for example, deaths per 100 people -- or as an absolute number, for example, 5 people per year.  In general, we will mean the former.Let \\(P_{i}\\) be the population in year **i**.  Write an expression for the population in year i+1.  If the population in a given year is 100 and birth rate, b, is 5% and the death rate, d, is 6%, write out the population for the next 5 years.",
      "soln": "<h3>SOLUTION</h3>\n$$P_{(i+1)} = (1+b-d) P_{i}$$<table class=\"wikitable\"><tr><td>Year</td><td>Population</td></tr><tr><td>0</td><td>100</td></tr><tr><td>1</td><td>99.00</td></tr><tr><td>2</td><td>98.01</td></tr><tr><td>3</td><td>97.03</td></tr><tr><td>4</td><td>96.06</td></tr><tr><td>5</td><td>95.10</td></tr></table>",
      "tags": []
    },
    {
      "number": "0115",
      "question": " There are no births in a Shaker community, only **R** recruits per year.  The death rate is **d**.  What is the difference equation that describes this situation?",
      "soln": "<h3>SOLUTION</h3>Let \\(P_{i}\\) be the population in year **i**.  Then\n$$P_{(i+1)} = (1-d) P_{i} + R$$",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0116",
      "question": " The Eastville School Committee is agrees to an annual $200 per year salary increase for each Eastville teacher.  Express this as a difference equation.",
      "soln": "<h3>SOLUTION</h3>We assume that this means this increase will occur every year.  Let Si be the teacher salary in year '''i'''.\n$$S_{(i+1)} = S_{i} + 200$$",
      "tags": []
    },
    {
      "number": "0117",
      "question": " The Westtown School committee is more generous.  It agrees to a 5.5% cost-of-living increase per year, plus a one time only $200 adjustment for past sins of omission.  Express this as a difference equation.",
      "soln": "<h3>SOLUTION</h3>Let \\(S_{0}\\) be the starting salary.  Let's assume that the \"adjustment\" is added after last year's salary is increased for cost of living.  Then\n$$S_{1} = (1+0.055) S_{0} + 200$$In year 2 we have\n$$S_{2} = (1 + 0.055) S_{1}  = (1 + 0.055) (1 + 0.055) S_{0} + (1 + 0.055) 200$$And then, in year '''i''',\n$$S_{i}  = (1 + 0.055) ^{(i -1)} ((1 + 0.055)S_{0} + 200)$$",
      "tags": []
    },
    {
      "number": "0118",
      "question": " The Westtown School committee is more generous. It agrees to a 5.5% cost-of-living increase per year, plus a one time only $200 adjustment for past sins of omission.  How much would it be worth to teachers if the one time adjustment were made before the first COLA rather than after.",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": []
    },
    {
      "number": "0119",
      "question": " Mills public policy program recruits **R** new students each fall.  In the spring 0.0G (i.e., G%) students graduate.  At the end of a typical year 0.0L (i.e., L%) of active students leave for personal or other reasons. Express the current student population, **P**, in terms of these figures.",
      "soln": "<h3>SOLUTION</h3><blockquote> Let \\(P_{i}\\) be the number of students in the program at the start of year i</blockquote><blockquote> During that year a fraction 0.0G+0.0L exit while R new students appear.</blockquote><blockquote> P_{i+1}=P_{i}(1-0.0g-0.0L)+R</blockquote>",
      "tags": [
        "policy modeling"
      ]
    },
    {
      "number": "0120",
      "question": " My bathtub fills at 10 gallons per minute.  It has a leak, though, whereby it loses 10% of it's volume per minute.  It's a neat rectangular tub in which each 10 gallons is 2 inches of depth.  How does it behave over time?",
      "soln": "<h3>SOLUTION</h3>solution<blockquote> In = 10 gal/min</blockquote><blockquote> Leak = 10%/min</blockquote><blockquote> Depth = 2 inches/gallon</blockquote><blockquote></blockquote><blockquote> Height = volume / 2</blockquote><blockquote> Volume_{n+1} = 0.9\\timesVolume_{n} + 10</blockquote><blockquote> Volume_{n} = Height_{n}\\times2</blockquote><blockquote></blockquote><blockquote> Height_{n+1} = Volume_{n+1} / 2 = (0.9\\timesVolume_{n} + 10) / 2 = (0.9\\timesHeight_{n}\\times2 + 10) / 2</blockquote><blockquote></blockquote><blockquote> 0 0</blockquote><blockquote> 1 10 5</blockquote><blockquote> 2 19 9.5</blockquote><blockquote> 3 27.1 13.55</blockquote><blockquote> etc.</blockquote>",
      "tags": []
    },
    {
      "number": "0121",
      "question": " Consider a \"leaky\" reservoir.  Current volume 1,200 million gallons.  Inflow 200 million gallons per month.  Consumption 150 million gallons per month.  Leakage 5% of current volume per month.<ol><li>Draw a stock and flow diagram of the situation.</li><li>Draw a causal loop diagram showing the relationship between reservoir volume and the net in/out flow.</li><li>Identify amount(s) and rate(s).</li><li>Write the difference equation in the form \\(P_{n+1} = a \\times P_n + b\\).</li><li>Calculate the expected equilibrium.</li><li>Set up Excel model.</li><li>Chart reservoir volume vs. time.</li></ol>",
      "soln": "<h3>SOLUTION</h3>The Excel worksheet version of this solution [[file Problem0121.xlsx|is available here]].Here is the full stock and flow diagram.  Note that we have included three variables/parameters: the amounts for inflow and consumption and the rate for leakage and we have connected these with arrows to the valves on the corresponding flows.  Note too that we have an arrow going from the reservoir to the valve on the leakage flow.  This is because this flow depends on the rate parameter AND the volume in the reservoir at any given time.<br /><img src=\"https://djjr.us/images/qbank/P121-SnFdiagram.png\"><br />**The causal loop** diagram is pretty simple.  One approach is to see that we can combine the inflow and the consumption and leakage into a single \"net in/out flow\":<br /><img src=\"https://djjr.us/images/qbank/P121-CausalLoop.png\"><br />A more complete/explicit treatment can include these as separate variables but note that the only causal loop is the one with the leakage:<br /><img src=\"https://djjr.us/images/qbank/P121-CausalLoop2.png\"><br />Amounts are INFLOW (200 million gallons per month) and OUTFLOW (-150 million gallons per month)Rate is 5% of current volume LEAKAGE per month.  Put another way, 95% (i.e., 100% - 5%) does not leak each month.The net amount, **b**, is 200-150=50 (we will assume our units are millions of gallons).  The rate, **a**, is 0.95.  Thus we have\n$$Volume_{n+1} = Volume_n - LEAKAGE_n + INFLOW - CONSUMPTION$$\n$$LEAKAGE_n = 0.05 \\times VOLUME_n$$\n$$Volume_{n+1} = (Volume_n - 0.05 \\times VOLUME_n) + (INFLOW - CONSUMPTION)$$\n$$Volume_{n+1} = (1 - 0.05)  \\times Volume_n + (INFLOW - CONSUMPTION)$$\n$$Volume_{n+1} = 0.95 \\times Volume_n + 50$$The Excel solution would look like this:<br /><img src=\"https://djjr.us/images/qbank/P121-solution.png\"><br />Here are the formulas behind this:<br /><img src=\"https://djjr.us/images/qbank/P121-formulas.png\"><br />Here's the chart set up:<br /><img src=\"https://djjr.us/images/qbank/p121-chart-data.png\"><br />If we extend the model out to 100 or so time periods we can see the asymptotic equilibrium that is reached as leakage just exactly balances inflow minus consumption.<br /><img src=\"https://djjr.us/images/qbank/reservoir01.gif\"><br />",
      "tags": [
        "social network analysis"
      ]
    },
    {
      "number": "0122",
      "question": " The most basic opportunity cost incurred when undertaking a project is the simple value of investing the money instead of spending it.  A first step toward figuring out what that cost is is understanding compound interest.  Show what happens to $1000 if the annual interest rate is 5%.",
      "soln": "<h3>SOLUTION</h3>At year zero we have P_{0}=1000.  After one year we have P_{1}=(1+0.05)\\times1000.  And after n years we have p_{n}=(1+0.05)^^n^^\\times1000.",
      "tags": []
    },
    {
      "number": "0123",
      "question": " --Suppose I am sitting on $20,000 and I am trying to figure out whether or not to use it to buy a car.  I have a very limited life and have determined that if I buy the car I will have to pay $800 insurance and about 10 cents per mile to operate it and I drive 2500 miles per year.  If I own a car I'll drive rather than take the bus on approximately 300 local commutes (saving $1000 and 150 hours net).  My time is worth $50 per hour.  An alternative would be to put the $20,000 into an investment vehicle (so to speak) that would pay me 7.5% annually.--",
      "soln": "<h3>SOLUTION</h3>--P_{0}=20,000.  Annual costs 800 + 250.  Or I take the bus.  Cost is 1000 for fares, 150 hours at 50/hour = 7,500.  Missing information: how long do I expect to keep the car?  Let's guess 10 years.  Then my total costs for the car are 20,000 + 10*1050 = 30,500.  Total costs for bus are 75,000.  And if I just put the money in the bank?  P_{10} = (1+0.07)^^10^^\\times20,000 = 1.97\\times20,000 =39,343--",
      "tags": []
    },
    {
      "number": "0124",
      "question": " On the grid below ......draw the line \\(y=2x + 1\\) ...shade the area for \\(x>5\\) and the area for \\(y &lt; 3\\)...shade the area for y &gt;= 2x + 1<br /><img src=\"https://djjr.us/images/qbank/chart-paper.gif\"><br />",
      "soln": "<h3>SOLUTION</h3>",
      "tags": []
    },
    {
      "number": "0125",
      "question": " Write an equation for the line passing through the points (3,2) and (0,5).",
      "soln": "<h3>SOLUTION</h3>We use the <a href=\"http://en.wikipedia.org/wiki/Linear_equation#Point.E2.80.93slope_form\" target=\"_blank\">point-slope form</a> (or, more properly, the <a href=\"http://en.wikipedia.org/wiki/Linear_equation#Two-point_form\" target=\"_blank\">two-point form</a> of the equation for a line.Slope is change in Y divided by change in X.  That would be 5-2 divided by 0-3 or 3 over -3 or -1.Next we identify the y-intercept which is the y value that corresponds to x=0.  Lucky for us, we're given that as one of the end points, (0,5), so the y-intercept is 5.We can put m, the slope, and b, the y-intercept, in the equation y=mx+b to get y=(-1)x + 5.",
      "tags": []
    },
    {
      "number": "0126",
      "question": " Why do people scream into cell phones? Answer in terms of feedback.",
      "soln": "<h3>SOLUTION</h3>The speaker's voice is not fed into her earpiece so she does not get any feedback about how loudly she is speaking.  See also <a href=\"http://www.nytimes.com/2000/06/22/technology/l-cell-phone-feedback-885126.html\" target=\"_blank\">Cell Phone Feedback</a> (New York Times 2000) and <a href=\"http://www.ideo.com/work/social-mobiles/\" target=\"_blank\">Ideo's Social Mobiles</a> project.",
      "tags": []
    },
    {
      "number": "0127",
      "question": " Consider the singles bar scene. Develop a model along the lines of the <a href=\"http://en.wikipedia.org/wiki/The_Market_for_Lemons\" target=\"_blank\">market for lemons</a> (Wikipedia), that would suggest that information asymmetries could possibly kill the scene. What institutional interventions prevent this from happening?.",
      "soln": "<h3>SOLUTION</h3><blockquote>  Assume that we begin with a set fraction of the bar population being creepy.  Some of the nice people will put up with this fraction, but some find it unsettling.  The latter decide, over the next time period, to stay home.  The creepy people are unperturbed.  Now the ratio of creepy to nice goes up.  Some of the people who were OK with how it was last time period find the new level of creepiness unpalatable and they decide to stay home next time.  Once again, the ratio goes up and now still more nice people start to feel like there are just too many creepy people in the bar scene.  If the creepy people continue to be undeterred, the scene spirals into nothingness and eventually there are no more nice people to be found in bars.</blockquote><blockquote></blockquote><blockquote> Institutional solution.  We might institute an inspection program -- allow nice people to get certified and then give them a signalling mechanism (good dating seal of approval?).  Or, institute a custom whereby people had to somehow show their cards before a serious encounter occurred (maybe have trivia contests so you see who seems smart).</blockquote><blockquote></blockquote><blockquote> ++++ See also</blockquote><blockquote> Akerlof, George A.  1970.  \"<a href=\"http://www.jstor.org/stable/1879431\" target=\"_blank\">The Market for \"Lemons\": Quality Uncertainty and the Market Mechanism.</a>\"  //The Quarterly Journal of Economics Vol. 84,// No. 3 (Aug., 1970), pp. 488-500</blockquote><blockquote> [http://www.stanford.edu/~jdlevin/Papers/Lemons.pdf]</blockquote>",
      "tags": []
    },
    {
      "number": "0128",
      "question": " Consider the act of filling up a bathtub for a baby (or yourself!). You have a faucet that you can turn more towards hot or toward cold.  List out the flows, the stocks, the sources of information, the \"valves,\" and the rules that govern the valves in this system.",
      "soln": "<h3>SOLUTION</h3><blockquote> ++++ Flows</blockquote><blockquote> * water flow</blockquote><blockquote> * hot water</blockquote><blockquote> ++++ Stocks</blockquote><blockquote> * water in tub</blockquote><blockquote> * temperature</blockquote><blockquote> ++++ Sources of information</blockquote><blockquote> * current water temperature</blockquote><blockquote> * target water temperature</blockquote><blockquote> * current water height</blockquote><blockquote> * target water height</blockquote><blockquote> ++++ Valves</blockquote><blockquote> * Turning water on or off</blockquote><blockquote> * Adjusting temperature</blockquote><blockquote> ++++ Valve Rules</blockquote><blockquote> * Water should be turned off if tub is full.</blockquote><blockquote> * Temperature should be turned up if current temp is below target, down if current temp is above.</blockquote>",
      "tags": []
    },
    {
      "number": "0129",
      "question": " Draw a stock and flow diagram for filling up a bathtub for a baby (or yourself!). You have a faucet that you can turn more towards hot or toward cold.  Be sure to show the flows, the stocks, the sources of information, the \"valves,\" and the rules that govern the valves in this system.",
      "soln": "<h3>SOLUTION</h3><blockquote> Here is one solution.  It assumes that we have an information source on water temperature and that the size of the tub stock (amount of water in tub) is referred to as \"level.\"  Another version might try having volume of water and temperature as two different stocks but I think that would over complicate things even if it would be interesting.</blockquote><blockquote> <br /><img src=\"https://djjr.us/images/qbank/stock-flow-tub-001.jpg\"><br /></blockquote>",
      "tags": []
    },
    {
      "number": "0130",
      "question": " In a \"bathtub problem,\" why don't we include the water company or the sewer system to be stocks?",
      "soln": "<h3>SOLUTION</h3>Both are considered \"infinite\" sources or sinks. Their levels are not affected by the flows to or from our system.  In other problems we refer to them as \"the cloud.\"",
      "tags": []
    },
    {
      "number": "0131",
      "question": " Draw a causal loop diagram that illustrates the process of feeling hungry, eating, becoming satisfied, stopping, getting hungry again.",
      "soln": "<h3>SOLUTION</h3><blockquote>  Start with simple: hunger leads to eating leads to satisfaction which inhibits eating.  Or perhaps a cleaner way to say it would be hunger leads to eating which then inhibits eating.  What then?  One way to think of it is that time then has the effect of increasing hunger.</blockquote><br /><img src=\"https://djjr.us/images/qbank/hunger-loop.gif\"><br />",
      "tags": []
    },
    {
      "number": "0132",
      "question": " Create both a causal loop and a stock and flow diagram for a thermostat, heater, and house.  The house is a stock of air.  When its temperature goes below some threshold, hot air is added.  All along though, hot air is subtracted (or cold air is added) through leaky windows and the like.  But the temperature does not change immediately upon introduction of the hot air.  What are the challenges of modeling this phenomenon discretely and how can we solve them?",
      "soln": "<h3>SOLUTION</h3><blockquote>  Let's think (and write) before we draw.  What are the stocks here?  Really just the warmth in the house.  What are the flows?  When the heat is on, warmth gets added to this stock, and all the time warmth is removed by the leakage due to poor insulation and the conduction loss due to cold outside.  What is the information?  The thermostat can measure the current temperature and it knows the set temperature.  And how is time involved?  The measured temperature of the house probably does not change immediately as soon as more warm air is added.</blockquote><blockquote> <br /><img src=\"https://djjr.us/images/qbank/thermostat-stock-flow.gif\"><br /></blockquote><blockquote> <br /><img src=\"https://djjr.us/images/qbank/thermostatcausal-loop.gif\"><br /></blockquote><blockquote></blockquote><blockquote> There are different ways of incorporating time.  Sometimes it is just shown by sketching two short lines across an arrow in a loop.  Or, in a stock and flow we can add an extra stock (air on one side of the room, air on the other side of the room with time implied in the step between when a volume is one side and when it gets to the next -- the school and organizing army models below incorporate time as \"stages\" in this manner).  In equations we sometimes sneak delay in by having, say, \\(F_{t+2}\\) depend on both \\(F_{t+1}\\) and \\(F_t\\).</blockquote>",
      "tags": [
        "computational thinking"
      ]
    },
    {
      "number": "0133",
      "question": " College is a more or less four year endeavor but students come and go on different schedules.  Sketch a stock and flow model that shows freshwomen applicants coming from the cloud, admitted students from applicants, and freshwomen from the admittees.  Then freshwomen become sophomores, mostly, but there is some attrition.  And so on through the other years.  Sketch a stock and flow diagram that follows students through four years and think up some variables that might affect the flows between the different years.  For this problem, you should try wearing the hat of an academic administrator who is interested in the problems of \"retention\" and \"degree completion.\"",
      "soln": "<h3>SOLUTION</h3><blockquote> Here is one version that captures the general picture of year to year promotion and attrition.  It does not show the funnel from applicants to enrolling students.</blockquote><blockquote>  <br /><img src=\"https://djjr.us/images/qbank/admissions-stock-flow.jpg\"><br /></blockquote><blockquote></blockquote><blockquote> Here is another, in not quite standard stock and flow form, showing factors that might effect the flows between stages.  Note that in this case the attrition flows are not shown -- the partial flow to the next state is listed as a probability on each of the arrows.</blockquote><blockquote> <br /><img src=\"https://djjr.us/images/qbank/retention-lifecycle.jpg\"><br /></blockquote>",
      "tags": []
    },
    {
      "number": "0134",
      "question": " Consider a system for a flu vaccine clinic.  People arrive at some random or fixed rate and queue up.  Our first station (F) has to get them to fill out a form, sign some papers, etc.  After this they get in the line for the actual shots (at station V).  We have a fixed number of staff whom we will divide between the two stations, depending on the size of the queues.  Draw the stock and flow diagram for the system and write the equations for Q1, Q2, F and V.",
      "soln": "<h3>SOLUTION</h3><blockquote> <br /><img src=\"https://djjr.us/images/qbank/vaccine-stock-flow.gif\"><br /></blockquote><blockquote></blockquote><blockquote> Suppose total staff is \\(S = F + V\\) and that the rate at which staff can serve people in either queue is one per time period.  This means, for example, that \\(Q1_{t+1}= Q1_t + arrivals - F_t\\).  And how should we allocate staff?  One way would be to make the staff at each station proportional to the number of people in that queue.  Thus, the number of staff at the sign in table should be \\(F_{t+1} = \frac {Q1_t} {(Q1_t + Q2_t}\\).  Thus:</blockquote><blockquote></blockquote><blockquote> \\(Q1_{t+1}= Q1_t + arrivals - F_t\\)</blockquote><blockquote></blockquote><blockquote> \\(Q2_t+1 = Q2_t + F_t - V_t\\)</blockquote><blockquote></blockquote><blockquote> \\(F_{t+1} = \frac {Q1_t} {(Q1_t + Q2_t)}\\)</blockquote><blockquote></blockquote><blockquote> \\(V_{t+1} = \frac {Q2_t} {(Q1_t + Q2_t)}\\)</blockquote><blockquote></blockquote><blockquote> Note that these equations would need some tweaking in practice to deal with situations where one or the other queues would be empty to avoid silly things like negative queues and dividing by zero.</blockquote>",
      "tags": []
    },
    {
      "number": "0135",
      "question": " Walk us through this diagram[[=image http://www.systemdynamics.org/DL-IntroSysDyn/feed10.gif]](http://www.systemdynamics.org/DL-IntroSysDyn/feed10.gif)",
      "soln": "<h3>SOLUTION</h3><blockquote>  </blockquote><blockquote> Let's look at loop 3 first.  The more people who are taking drugs the more peer pressure there is to take drugs and then even more people take drugs.</blockquote><blockquote></blockquote><blockquote> And loop 2: As drug use increases, rules get stricter; as rules get stricter, more people rebel through drugs; more people use drugs.</blockquote><blockquote>  </blockquote><blockquote> And loop 1: The more drug taking, the more serious users; users need money to buy drugs; more people turn to dealing; the more dealers, the easier it is go get drugs; the easier it is to get them, the more folks will use.</blockquote><blockquote></blockquote><blockquote> All three reinforcing loops describe mechanisms that tend to increase drug use.</blockquote><blockquote></blockquote>",
      "tags": []
    },
    {
      "number": "0136",
      "question": " Write out the difference equation that represents the following scenario and the first five terms of the corresponding sequence given the stated starting value.<ol><li>Membership in a club goes up by 4 people each year.  At year one it has 21 members.</li><li>A community's population increases by 4% each year.  At year one it is 350.</li><li>A swimming pool, currently containing 100,000 gallons of water, is leaking at the rate of 2% per day but is being filled at the rate of 1,000 gallons per day.</li><li>A retirement account which stands at $120,000 earns 3% interest annually.  The owner needs to withdraw $1500 per month to pay for eldercare.</li></ol>For each of these, graph P_{n} vs. time.For each of these, graph P_{n+1} vs. P_{n}",
      "soln": "<h3>SOLUTION</h3><br /><img src=\"https://djjr.us/images/qbank/DE-Q0136-a.gif\"><br /><br /><img src=\"https://djjr.us/images/qbank/DE-Q0136-b.gif\"><br /><br /><img src=\"https://djjr.us/images/qbank/DE-Q0136-c.gif\"><br /><br /><img src=\"https://djjr.us/images/qbank/DE-Q0136-d.gif\"><br />",
      "tags": [
        "social theory",
        "social network analysis"
      ]
    },
    {
      "number": "0137",
      "question": " Derive the equation for the equilibrium value of a difference equation from a formula that shows how P_{n+1} relates to P_{n}.",
      "soln": "<h3>SOLUTION</h3>[[span style=\"color:green;\"]]The general form for a difference equation involves a rate term (a) and an amount term (b) so we can write[[span style=\"color:green;\"]]\\({ P }_{ n+1 }quad =quad a{ P }_{ n }quad +quad b\\)[[span style=\"color:green;\"]]When we reach equilibrium we are in a situation where the state of the system does not change. Thus, \\({ P }_{ n } ={ P }_{ n  + 1 }\\).  We can substitute this fact in the previous equation to get[[span style=\"color:green;\"]]\\({ P }_{ n } = a{ P }_{ n } + b\\)[[span style=\"color:green;\"]]and then we can solve for P_{n}:[[span style=\"color:green;\"]]\\({ P }_{ n } - a{ P }_{ n }= b\\)[[span style=\"color:green;\"]]\\({ P }_{ n } left( 1 - a \right)  = b\\)[[span style=\"color:green;\"]]\\({ P }_{ n } = \frac {b}{ left(1 - a \right)}\\)",
      "tags": []
    },
    {
      "number": "0138",
      "question": " Suggest rewrite of the following text:<blockquote> For example, Goffman uses front to distinguish and label the different parts of front as he sets a scene that consist of three components by using setting, appearance, and manner. In which an actor has the ability to choose his stage and props, as well as the costume he would wear in front of his audience (p.22-24).</blockquote>",
      "soln": "<h3>SOLUTION</h3>[[span style=\"color:green; font-family:arial;\"]]Core of the sentence seems to be saying that front can be divided into several subparts.<blockquote> --For example,-- Goffman --uses front to-- distinguish**es** --and label the different parts of front as he sets a scene that consist of-- three components **of front:** --by using-- setting, appearance, and manner.</blockquote>[[span style=\"color:green; font-family:arial;\"]]The above edit follows the idea of cutting words whenever you can and the idea of zeroing in on a strong verb phrase so the sentence says A does B.Last section is a sentence fragment.  Hard to know what the writer is trying to do here.  Could be an explanation of \"manner\" or could be related to \"front.\"<blockquote> In which an actor has the ability to choose his stage and props, as well as the costume he would wear in front of his audience (p.22-24).</blockquote>",
      "tags": []
    },
    {
      "number": "0139",
      "question": " Wordsmith the following passage from the first paragraph of a paper about Erving Goffman's //Presentation of Self in Everyday Life.//<blockquote> In //Presentation of Self//, Erving Goffman states that a front is \"that part of the individual's performance which regularly functions in a general and fixed fashion to define the situation for those who observe the performance\" (p.22). In other words, you need to have an image of how you want people to see you at a certain point in time.</blockquote>",
      "soln": "<h3>SOLUTION</h3>[[span style=\"color:green; font-family:arial;\"]]This is a typical \"quote and explicate\" passage.  The overall structure is fine, though will want to tweak it a bit.  The main problem is that the paraphrase doesn't really convey what the quote says.Here is our first fix:<blockquote> In //Presentation of Self//, Erving Goffman --states that a-- **defines** front **as** --is-- \"that part of the individual's performance which regularly functions in a general and fixed fashion to define the situation for those who observe the performance\" (--p.--22)[[footnote]] Technically we'd be correct to put (1961: 22) here since this is the first mention of the book.  We do not need to use (Goffman 1961:22) because the author is named in the sentence. [[/footnote]]. grey|In other words, you need to have an image of how you want people to see you at a certain point in time.</blockquote>[[span style=\"color:green; font-family:arial;\"]]Now on to the paraphrase.  What the author wrote sounds a lot like the looking glass self; the author says actors envision how they'll be seen by others and implies that they can target their performance accordingly.  But what Goffman said was different: performances have many parts, one of which he wants to call \"front.\"  This will designate those parts of the performance which send generic signals about what's going on (that is, define the situation).   The distinction that Goffman wants to make is between the framing stuff you bring to the performance to set the scene and the stuff you do as you carry out the performance.  We might try this<blockquote> grey|In //Presentation of Self//, Erving Goffman --states that a-- **defines** front **as** --is-- \"that part of the individual's performance which regularly functions in a general and fixed fashion to define the situation for those who observe the performance\" (--p.--22). In other words, **front includes the paraphernalia and stock actions you bring to a performance as a way of framing it for the audience so they know what's going on** --you need to have an image of how-- .</blockquote>",
      "tags": [
        "social network analysis"
      ]
    },
    {
      "number": "0140",
      "question": " Identify and fix the main problem in the following passages.<blockquote> In which an actor has the ability to choose his stage and props, as well as the costume he would wear in front of his audience (p.22-24).  </blockquote><blockquote></blockquote><blockquote> I believe by using the above example is an illustration of the â€œfrontâ€ by describing the clinic as the social setting and the lobby as the stage for the performers.</blockquote>",
      "soln": "<h3>SOLUTION</h3>[[span style=\"color:green; font-family:arial;\"]]Both are sentence fragments.  Nothing happens; there is no verb.  Here is one attempt at a rewrite:<blockquote> --In which a--**A**n actor has the ability to choose his stage and props, as well as the costume he would wear in front of his audience (p.22-24).  </blockquote><blockquote> </blockquote><blockquote> --I believe by using the above-- **This** example is an illustration of the â€œfrontâ€ --by describing-- **with** the clinic as the social setting and the lobby as the stage for the performers.</blockquote>",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0141",
      "question": " Wordsmith the following<blockquote> When the performer is playing her role as society expects her to it is called idealization. Goffmanâ€™s definition of idealization is â€œwhen the individual presents himself towards others, his performance will tend to incorporate and exemplify the officially accredited values of the society, more so in fact, than does his behavior as a wholeâ€ (p.35).</blockquote>",
      "soln": "<h3>SOLUTION</h3><blockquote> TBA</blockquote>",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0142",
      "question": " Improve this sentence from a paper on Goffman<blockquote> Many things can create a distraction during a performance, which is an example of maintenance of expressive control.</blockquote>",
      "soln": "<h3>SOLUTION</h3>[[span style=\"color:green; font-family:arial;\"]]Things that threaten a performance may create a need for \"maintenance of expressive control\" but one is not an example of the other.  Try this<blockquote> --Many t--**T**hings can create a distraction during a performance--, which is an example of-- **creating a need for** maintenance of expressive control.  </blockquote>[[span style=\"color:green; font-family:arial;\"]]And then maybe<blockquote> --Things can create a d--**D**istraction**s** during a performance --creating a need for-- **may require an actor to display** \"maintenance of expressive control.\"  </blockquote>[[span style=\"color:green; font-family:arial;\"]]And finally<blockquote> Distractions during a performance may require an actor to --display-- \"--maintenance of--**maintain** expressive control.\" **In other words, ...**</blockquote>",
      "tags": []
    },
    {
      "number": "0143",
      "question": " Wordsmith this opening sentence:<blockquote> I will discuss some of the concepts discussed by Erving Goffman in his book //The Presentation of Self in Everyday Life,// which he elaborates face to face interactions, and the different roles that everyone takes in presenting themselves.</blockquote>",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0144",
      "question": " Wordsmith this passage<blockquote> In the second chapter of his book Goffman elaborates on the concept of teams. He refers to â€œteam performanceâ€ as â€œteamsâ€ and it is â€œto refer to any set of individuals who co-operate in staging a single routineâ€ (Goffman, 1959, 79). In other words Goffmanâ€™s concept of a team is a group of people that are adhering and working towards the same goal.</blockquote>",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": []
    },
    {
      "number": "0145",
      "question": " Wordsmith:<blockquote> There are different types of secrets, in this situation the secret is a dark secret which has to be kept from the audience forever. â€œThese consist of facts about a team which it knows and conceals and which are incompatible with the image of self that the team attempts to maintain before its audienceâ€ (Goffman, 1959, p. 141).</blockquote>",
      "soln": "<h3>SOLUTION</h3><blockquote> There are different types of secrets**;**--,-- in this situation the secret is a dark --secret-- **one** which --has to be-- **must** kept **forever** from the audience --forever--. â€œ--These--**[Dark sectrets] consist of facts about a team which it knows and conceals and which are incompatible with the image of self that the team attempts to maintain before its audienceâ€ (Goffman, 1959, --p.-- 141).</blockquote>",
      "tags": []
    },
    {
      "number": "0146",
      "question": " Tweak:<blockquote> Although there are many components to his theory of performativity, in this essay I will focus on the use of â€œfrontsâ€ and â€œdramatic realizationâ€ in face-to-face interactions â€“ two concepts from his first chapter (Goffman 22, 30).</blockquote>",
      "soln": "<h3>SOLUTION</h3>[[span style=\"color:green; font-family:arial;\"]]The opening gambit, \"Although there are many components to his theory of performativity,\" is arguably unnecessary throat-clearing.  It is not inaccurate but it doesn't add much to the sense of the sentence.<blockquote> --Although there are many components to his theory of performativity, i--**I**n this essay I will focus on the use of â€œfrontsâ€ and â€œdramatic realizationâ€ in face-to-face interactions â€“ two concepts from his first chapter (Goffman 22, 30).</blockquote>[[span style=\"color:green; font-family:arial;\"]]The purpose of this sentence is to tell the reader what this essay will focus on.  What's the crucial information?  Fronts and dramatic realization. Do we need to add \"face-to-face\" interaction?  Probably not since we've probably already said \"Goffman's book is about face-to-face interaction.\"<blockquote> In this essay I will focus on **two concepts from** --his first-- **Goffman's first chapter :** the use of â€œfrontsâ€ and â€œdramatic realizationâ€ in face-to-face interaction--s--  --two concepts from his first chapter (Goffman 22, 30)--.</blockquote>[[span style=\"color:green; font-family:arial;\"]]We can drop the reference here because we are not so much using Goffman's ideas as just mentioning they are there.  If we had not before this given a reference for the book we might have included it here (Goffman 1959).  In any case, \"Goffman 22, 30\" is not correct reference form for anything.We've dropped the final S on interactions because Goffman's book is generically about the phenomenon of interaction not about a bunch of different interactions.<blockquote> In this essay I will focus on two concepts from Goffman's first chapter : the use of â€œfrontsâ€ and â€œdramatic realizationâ€ in face-to-face interaction.</blockquote>[[span style=\"color:green; font-family:arial;\"]]A strong editor might suggest we go a little further and cut unnecessary verbiage:<blockquote> In this essay I will focus on two concepts from his first chapter : â€œfrontsâ€ and â€œdramatic realization.â€</blockquote>",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0147",
      "question": " Identify and fix problems of diction in these examples.",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": [
        "social theory",
        "social network analysis"
      ]
    },
    {
      "number": "0147",
      "question": " Edit these sentences.<blockquote> Yet, what is unique about the flight attendantâ€™s setting is that it actually follows their performance.</blockquote><blockquote> When an individual inhabits the social role of airline attendant, their ability to successfully convey to their audience the validity of their performance also relies the use of a personal front (i.e. the second component of Goffmanâ€™s understanding of front).</blockquote><blockquote> Additionally, because some flight attendant-to-passenger interactions are not necessarily specific to this relationship (i.e. â€œhelloâ€™sâ€ and â€œgood-byesâ€), it is necessary for the flight attendant to enhance their communication as to confirm and reaffirm the role (Goffman 30).</blockquote>",
      "soln": "<h3>SOLUTION</h3>[[span style=\"color:green; font-family:arial;\"]]The first thing that catches our eye is the mixing of singular \"flight attendant's\" and plural \"their.\"  Although this method of being gender neutral is being seen more and more, it's technically incorrect and still sounds lazy to many ears.<blockquote> Yet, what is unique about the flight attendantâ€™s setting is that it actually follows --their-- **her/his** performance.</blockquote>[[span style=\"color:green; font-family:arial;\"]]If we want to give the sentence a makeover, we might try dealing with this \"what is\" construction.  One strategy is to make a simple declarative sentence:<blockquote> --Yet, what is unique about t--**T**he **setting for the flight attendantâ€™s **performance** --setting is that it actually follows-- has the unique characteristic of actually following **him/her around** --her/his performance--.</blockquote>[[span style=\"color:green; font-family:arial;\"]]We can solve the gender problem another way, by switching the reference to plural:<blockquote> The setting for flight attendants' performances has the unique characteristic of actually following them around.</blockquote>[[span style=\"color:green; font-family:arial;\"]]And here...<blockquote> When an individual inhabits the social role of airline attendant, their ability to successfully convey to their audience the validity of their performance also relies the use of a personal front (i.e. the second component of Goffmanâ€™s understanding of front).</blockquote>[[span style=\"color:green; font-family:arial;\"]]And here...<blockquote> Additionally, because some flight attendant-to-passenger interactions are not necessarily specific to this relationship (i.e. â€œhelloâ€™sâ€ and â€œgood-byesâ€), it is necessary for the flight attendant to enhance their communication as to confirm and reaffirm the role (Goffman 30).</blockquote>",
      "tags": [
        "social theory",
        "social network analysis"
      ]
    },
    {
      "number": "0149",
      "question": " Diction, etc.<blockquote> Individuals seek perpetual information about how they present themselves in their current social position and how to meaningfully readjust themselves based on their circumstances. Goffman illustrates this presentation adjustment by stating that people engage in â€œâ€¦ performance which regularly functions in a general and fixed fashion to define the situation for those who observe the performanceâ€ (p.22).</blockquote><blockquote> Goffmans argues that the front is made up of two main parts: the setting and the personal front.</blockquote><blockquote> Goffman writes that a part of an individualâ€™s performance is established in the â€œfrontâ€. This includes the setting, appearance of self, and manner.</blockquote><blockquote> Goffman describes the necessity for a player to believe in the part one is playing.</blockquote>",
      "soln": "<h3>SOLUTION</h3><blockquote> Individuals seek **perpetual** information about how they present themselves in their current social position and how to meaningfully readjust themselves based on their circumstances. Goffman **illustrates** this presentation adjustment by stating that people engage in â€œâ€¦ performance which regularly functions in a general and fixed fashion to define the situation for those who observe the performanceâ€ (p.22).</blockquote><blockquote> Goffman--s-- --argues that-- **breaks** the front **into** --is made up of-- two main parts: the setting and the personal front.</blockquote><blockquote> Goffman writes that a part of an individualâ€™s performance is **established** in the â€œfrontâ€. This includes the setting, appearance of self, and manner.</blockquote><blockquote> Goffman describes the necessity for a player to believe in the part **one** is playing.</blockquote>",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0150",
      "question": " Consider this passage and draft explication[[footnote]] Problem 150 based on collaboration of PT and DR. [[/footnote]].  Work through it and suggest how you might improve it.<table class=\"wikitable\"><tr><td class=\"tdheader\">Text</td><td class=\"tdheader\">Explication</td></tr><tr><td>In \"The Production of Consciousness,\" Marx (1845-1846) writes,â€œMen can be distinguished from the animals by consciousness, by religion, or by whatever one wants. They begin to distinguish themselves from the animals as soon as they begin to produce their means of life, a step which is determined by their physical organisation. In producing their means of life they indirectly produce their material life itselfâ€ (46).</td><td>In other words, Marx is saying that the difference between a human being and an animal is that human beings have consciousness and work and contribute to production that allow them to produce their means of life; therefore, work is essential to humansâ€™ interactions.</td></tr></table>",
      "soln": "<h3>SOLUTION</h3>What is the point here?  It's not just to distinguish animals and humans; Marx is also laying down a foundation for his \"anthropology\" beginning with the point that material precedes ideal.Let's look carefully at the Marx quote:<table class=\"wikitable\"><tr><td class=\"tdheader\">Marx</td><td class=\"tdheader\">Notes and Attempt at Explication</td></tr><tr><td>//Men can be distinguished from the animals by consciousness, by religion, or by whatever one wants.//</td><td>Perhaps Marx is saying that there are lots of ways that humans are different from animals but that just identifying these misses the point?  Note too that the things he mentions here are in the realm of ideas.  _</td></tr></table> _Recalling that Marx \"turned Hegel on his head\" and substituted the material for the ideal, we note that this first phrase is the first half of a point being made.||<table class=\"wikitable\"><tr></tr><tr><td>//They begin to distinguish themselves from the animals as soon as they begin to produce their means of life,//</td><td>It is making things that sustain us that sets us apart.  We might ponder where Marx would draw the line: a lion is surely working when she chases down prey, no?  If we assume Marx was thinking a little like an historical anthropologist, perhaps we can assume that he means work that is oriented toward creating a means of life that goes beyond the next meal?</td></tr><tr></tr><tr><td>//a step which is determined by their physical organisation.//</td><td>Does Marx mean that human physiology makes us become producers of our means of life?  Or does he mean the physical organization of humans (what we might call the social organization - into families, tribes, teams, etc.)?  If he means the latter, doesn't this already presume the very social order we are trying to explain?  This may not be a problem here because in these sentences Marx is not actually addressing that question.</td></tr><tr></tr><tr><td>//In producing their means of life they indirectly produce their material life itself.//</td><td>What is our \"material life\"?  I think you can take this as saying that the material conditions of our existence - the conditions of being human in a particular time and place, are (at least \"indirectly\") created by the way we produce our sustenance.</td></tr></table>So, the points we have are these<ol><li>We often distinguish humans from animals on the basis of psychological stuff</li><li>But the real difference is that humans have to produce their \"means of life\"</li><li>This activity produces the material conditions of human existence (implied: out of which other stuff comes)</li></ol>And so we try again:<table class=\"wikitable\"><tr><td class=\"tdheader\">Text</td><td class=\"tdheader\">Explication</td></tr><tr><td>//In \"The Production of Consciousness,\" Marx (1818-1873) writes,â€œMen can be distinguished from the animals by consciousness, by religion, or by whatever one wants. They begin to distinguish themselves from the animals as soon as they begin to produce their means of life, a step which is determined by their physical organisation. In producing their means of life they indirectly produce their material life itselfâ€ (46).//</td><td>In other words, Marx says that consciousness and social institutions might distinguish human beings and animals, but they are not where the difference starts.  The origin lies in the fact that humans have to produce their means of life.  This creates the \"material conditions of human existence\" out of which emerges their consciousness.</td></tr></table>",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0151",
      "question": " A cinema has a marquee with lots and lots of light bulbs.  In any given week 1% of the light bulbs burn out.  Unfortunately, between being busy and being sloppy, replacement is a little bit sporadic.  Of all the bulbs that are burnt out, about 95% get replaced each week.  Draw the state diagram for this system.",
      "soln": "<h3>SOLUTION</h3><br /><img src=\"https://djjr.us/images/qbank/p0151-diagram.gif\"><br />",
      "tags": []
    },
    {
      "number": "0152",
      "question": " Translate this description into a state diagram. A population consists of people who play it safe, and daredevils. From year to year, most (97%) safe-players stay that way, but 2% turn into daredevils. About 1% of the safe-players die each year. By contrast, 10% of daredevils die each year and another 10%, seeing that, switch to playing it safe. All the other daredevils stick with the program.Label each of the states in as //transient// or //absorbing//.",
      "soln": "<h3>SOLUTION</h3><br /><img src=\"https://djjr.us/images/qbank/p0152-diagram.gif\"><br />",
      "tags": []
    },
    {
      "number": "0153",
      "question": " A criminologist and an activist decide to collaborate on a project designed to reduce prison population.  In the spirit of starting simple, they identify 4 states in which people can find themselves: never imprisoned; incarcerated; on parole; post-parole.  The period of time in their analysis will be one year.  Suppose 70% of the population has never been incarcerated.  Each year 2% of these people are imprisoned.  Of those currently incarcerated, 20% are released each year onto parole.  Average parole is 5 years so that a person on parole has a 20% chance of finishing parole.  Those on parole have a 10% chance of finding themselves back in prison in any given year.  Individuals who are post parole have a 4% chance of returning to prison in any given year.   Draw a state diagram and matrix representing this information.",
      "soln": "<h3>SOLUTION</h3><table class=\"wikitable\"><tr><td><br /><img src=\"https://djjr.us/images/qbank/p0153-solution.gif\"><br /></td></tr><tr><td>[[iframe http://www.youtube.com/embed/LrBh_SCP1NE width=\"420\" height=\"315\"]]</td></tr></table><h4>References</h4>[[file q:0153/p0153-markov-prison.xlsx| p0153-markov-prison.xlsx]]See http://www.cdcr.ca.gov/Reports_Research/Offender_Information_Services_Branch/Annual/TIME6/TIME6d2011.pdf",
      "tags": [
        "computational thinking",
        "design",
        "research methods"
      ]
    },
    {
      "number": "0154",
      "question": " Suppose a given housing market has a 10% turnover rate each year. How many houses will typically be in the first, second, third, etc. year of their mortgage at any given time? Assume 10 year mortgages to keep things simple. Draw the diagram that would be the first step in solving this problem.",
      "soln": "<h3>SOLUTION</h3>What states can homes be in?  They can be in the first year of a ten year mortgage, the second, the third, and so on.  After ten years they would be in the state \"owned free and clear.\"  Each state has a 90% chance of transition to the following year and a 10% of transitioning back to a first year mortgage if the house is sold and bought.  Even houses that are owned free and clear have a 10% chance of being resold in this model.<br /><img src=\"https://djjr.us/images/qbank/P0154-diagram.gif\"><br />",
      "tags": []
    },
    {
      "number": "0155",
      "question": " Suppose 25% of the mortgages written in the first years of this century were subprime (meaning the borrowers were not very credit-worthy) and all were 5 year adjustable such that after the fifth year the monthly payments would go way up. In the market in question there is approximately 5% turnover housing each year. The housing stock in the market consists of one million units. Research has shown that 33 1/3% of subprime adjustable mortgages go into default under current conditions when they go past their five year mark (and these conditions are expected to continue for some time) when they adjust.",
      "soln": "<h3>SOLUTION</h3>Let's start by organizing what we know.What states can a housing unit be in?  There are regular mortgages and subprime mortgages.  Some subprimes are in their lower payment first five years, some are in the post five year larger payment zone. Mortgages can be in good standing or in default.A Regular Good StandingB Regular Default (problem suggests there are none of these)C Subprime Pre-AdjustmentD Subprime Post-Adjustment Good standingE Subprime Post-Adjustment DefaultF For SaleWhat transitions do we know about?  These are not final numbers, just a first attempt to translate the above.A > A 100%A > B 0%C > DorE 20%C > D 20%\\times67.7% = 13.33%C > E 20%\\times33.3% = 6.67%C > C 50%Any state > F 5%Since nothing ever goes into state B we can just eliminate it.A regular mortgage in good standing is likely to stay that way (95%) or be sold (5%) in this model.  <table class=\"wikitable\"><tr><td class=\"tdheader\">A</td><td class=\"tdheader\">C</td><td class=\"tdheader\">D</td><td class=\"tdheader\">E</td><td class=\"tdheader\">F</td></tr><tr><td class=\"tdheader\">A</td><td>0.95</td><td>0</td><td>0</td><td>0</td><td>0.05</td></tr></table>A subprime mortgage, other things equal, also has a 5% chance of going back on the market.  Of those that do not go on the market, assuming they were made at a steady rate, has a 1 in 5 chance of hitting its adjustable year and a 1 in 3 chance of defaulting when it does.0.95\\times0.2\\times0.33 = 0.0627 default0.95\\times0.2\\times0.67 = 0.1254 not default0.05 for sale0.95\\times0.8 = 0.76 pre-adjustment<table class=\"wikitable\"><tr><td class=\"tdheader\">A</td><td class=\"tdheader\">C</td><td class=\"tdheader\">D</td><td class=\"tdheader\">E</td><td class=\"tdheader\">F</td></tr><tr><td class=\"tdheader\">C</td><td>0.0</td><td>0.76</td><td>0.1254</td><td>0.0627</td><td>0.05</td></tr></table>Each year, a subprime mortgage that is past its adjustment year has a 1 in 3 chance of going into default.  Thus<table class=\"wikitable\"><tr><td class=\"tdheader\">A</td><td class=\"tdheader\">C</td><td class=\"tdheader\">D</td><td class=\"tdheader\">E</td><td class=\"tdheader\">F</td></tr><tr><td class=\"tdheader\">D</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">0.67</td><td class=\"tdcentered\">0.33</td><td class=\"tdcentered\">0</td></tr></table>In the current model, E is an absorbing state: we are not modeling how housed come out of default.<table class=\"wikitable\"><tr><td class=\"tdheader\">A</td><td class=\"tdheader\">C</td><td class=\"tdheader\">D</td><td class=\"tdheader\">E</td><td class=\"tdheader\">F</td></tr><tr><td class=\"tdheader\">E</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">1</td><td class=\"tdcentered\">0</td></tr></table>Finally, based on the information we have, we should assume that all houses that are for sale will be sold and that there is a 1 in 4 chance they'll be sold with a subprime mortgage (our model implies that no one has woken up to the scale of the problem)<table class=\"wikitable\"><tr><td class=\"tdheader\">A</td><td class=\"tdheader\">C</td><td class=\"tdheader\">D</td><td class=\"tdheader\">E</td><td class=\"tdheader\">F</td></tr><tr><td class=\"tdheader\">F</td><td class=\"tdcentered\">0.75</td><td class=\"tdcentered\">0.25</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">0</td></tr></table>And finally we can put it all together like this:<table class=\"wikitable\"><tr><td class=\"tdheader\">A</td><td class=\"tdheader\">C</td><td class=\"tdheader\">D</td><td class=\"tdheader\">E</td><td class=\"tdheader\">F</td></tr><tr><td class=\"tdheader\">A</td><td class=\"tdcentered\">0.95</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">0.05</td></tr><tr><td class=\"tdheader\">B</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">0</td></tr><tr><td class=\"tdheader\">C</td><td>0.0</td><td>0.76</td><td>0.1254</td><td>0.0627</td><td>0.05</td></tr><tr><td class=\"tdheader\">D</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">0.67</td><td class=\"tdcentered\">0.33</td><td class=\"tdcentered\">0</td></tr><tr><td class=\"tdheader\">E</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">1</td><td class=\"tdcentered\">0</td></tr><tr><td class=\"tdheader\">F</td><td class=\"tdcentered\">0.75</td><td class=\"tdcentered\">0.25</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">0</td><td class=\"tdcentered\">0</td></tr></table><br /><img src=\"https://djjr.us/images/qbank/p0155-solution.gif\"><br />",
      "tags": [
        "research methods"
      ]
    },
    {
      "number": "0156",
      "question": " A state corrections system has established a new drug treatment facility for first offenders. The center has a capacity of 1000.Inmates may leave the facility in either of two ways. In any period, there is a 10 percent probability that an inmate will be judged rehabilitated, in which case s/he will be released at the beginning of the following period.. There is also a 5 percent chance that an inmate will escape during each period. Rehabilitated addicts have a 20 percent chance of relapsing in each period; escapees have a 10 percent chance of being recaptured each period. Both recidivists and recaptured escapees are returned to the facility and have priority over new offenders.QuestionsIf it operates at full capacity, how many of the original inmates will be resident at the facility 10 periods later?How many new offenders can be admitted during each of the next 2 periods?What happens if we modify the model to allow for a small possibility of death or a change in the probability of relapse?",
      "soln": "<h3>SOLUTION</h3>First we draw the state diagram.<br /><img src=\"https://djjr.us/images/qbank/p0156-markov-state-diagram.jpg\"><br />Next we translate this into a transition matrix, T.<br /><img src=\"https://djjr.us/images/qbank/p0156-transition-matrix.jpg\"><br />Let's make sure we remember what the rows, columns, and elements of this matrix represent.<br /><img src=\"https://djjr.us/images/qbank/p0156-transition-matrix-represents.jpg\"><br />    To calculate the populations of each of the states at the next time period, we multiply current populations by all the relevant transition rates. This gets a little messy, but we can handle it if we proceed systematically.<br /><img src=\"https://djjr.us/images/qbank/p0156-equations.jpg\"><br />These equations represent an operation we call \"matrix multiplication.\" What we are doing here is multiplying the four-tuple that represents the current populations of the four states times four sets of transition rates, one for each destination state. This amounts to multiplying each column of the transition matrix times the four-tuple of current population numbers.<br /><img src=\"https://djjr.us/images/qbank/p0156-mmult-1.jpg\"><br />",
      "tags": []
    },
    {
      "number": "0157",
      "question": " Sketch the transition matrix that corresponds to the following diagram<br /><img src=\"https://djjr.us/images/qbank/p0157-markov-01.jpg\"><br />",
      "soln": "<h3>SOLUTION</h3><table class=\"wikitable\"><tr><td>A</td><td>B</td><td>C</td></tr><tr><td>A</td><td>0.2</td><td>0.5</td><td>0.3</td></tr><tr><td>B</td><td>0.0</td><td>0.7</td><td>0.3</td></tr><tr><td>C</td><td>0.6</td><td>0.4</td><td>0.0</td></tr></table>",
      "tags": []
    },
    {
      "number": "0158",
      "question": " Suppose the following statements are true about the local housing market.<ol><li>On a month to month basis, 90% of mortgage payments are on time, 10% are late or missed.</li><li>Of all the late/missed payments, 25% are back on track the following month.  65% are late again.  10% go into default.</li><li>Of all mortgages in default in a given month, 20% have a work-out and return to good standing.  70% remain in default and 10% move into foreclosure.</li><li>Of all houses in foreclosure each month, the banks manage to get 20% back on the market and resold.</li></ol>Draw the transition diagram and write out the transition matrix.",
      "soln": "<h3>SOLUTION</h3><br /><img src=\"https://djjr.us/images/qbank/p0158-diagram.gif\"><br /><br /><img src=\"https://djjr.us/images/qbank/p0158-matrix.gif\"><br />",
      "tags": []
    },
    {
      "number": "0159",
      "question": " Implement the model from problem [[[q:0158|158]]] using [[file q:0159/p0159-markov-foreclosure-excel.xlsx | this Excel spreadsheet]].",
      "soln": "<h3>SOLUTION</h3><br /><img src=\"https://djjr.us/images/qbank/p0159-formula.gif\"><br /><br /><img src=\"https://djjr.us/images/qbank/p0159-chart.gif\"><br /><br /><img src=\"https://djjr.us/images/qbank/p0159-table.gif\"><br />",
      "tags": []
    },
    {
      "number": "0160",
      "question": " Comment on and improve upon the following text explication<table class=\"wikitable\"><tr><td class=\"tdheader\">Text</td><td class=\"tdheader\">Explication</td></tr><tr><td>In â€˜Genesis and the Development of a Scientific Factâ€™, Fleck refers to language as a key form of interaction. He writes, â€œThoughts pass from one individual to another, each time a little transformed, for each individual can attach to them somewhat different associationsâ€ (55).</td><td>That is, thoughts that are submitted through language can inspire new and different meanings once shared through spoken word.</td></tr></table>",
      "soln": "<h3>SOLUTION</h3>I don't think the focus for Fleck is necessarily the //spoken// word so much as language as a medium through which ideas are passed around, shared, \"participated in\" together.  Think about how we might describe the mechanism by which a group reaches consensus.  We each take a shot at explaining how we see something and each of us listens to the other, each adjusts her mental picture slightly to take into account the insights that reside in the differences between how we see things.Or think about how we pass along a theoretical insight.  Each of us is thinking about some problem.  Someone puts forth a theory or an explanation.  Another person hears it, understands it, and then explains it to the next person.  But when she does so, she does it in a manner that reflects how she understood the new theory in terms of things she's seen, things she \"knows.\"  This gets repeated.  Sometimes multiple thinkers collaborate and produce a version that makes sense to all them.  Sometimes someone who already grasped the idea hears it repeated back and gets a little new insight from the subtle changes the idea has undergone.  Sometimes a whole bunch of thinkers hear or read about a version of the idea from the same source at the same time.  They use the idea to design research or build products or to interpret other events.  Over time, the idea takes on a life of its own, something that people can both know and know about.<table class=\"wikitable\"><tr><td>blue|Thus, Fleck argues, language creates thought collectives.</td><td>Not, actually, in this passage.  Thus, we might not want to say \"thus\" here.</td></tr><tr><td class=\"tdheader\">Text</td><td class=\"tdheader\">Explication</td></tr><tr><td>In â€˜Genesis and the Development of a Scientific Factâ€™, Fleck refers to language as a key form of interaction. He writes, â€œThoughts pass from one individual to another, each time a little transformed, for each individual can attach to them somewhat different associationsâ€ (55).</td></tr><tr><td>blue|That is, thoughts that are submitted through language</td><td>**Right**: the key is that idea has to go out in the world via interaction</td></tr><tr><td>blue|can inspire new and different meanings</td><td>**Point**: the ideas change/evolve.  Add that it is people's experience/knowledge that causes this.</td></tr><tr><td>blue|once shared through spoken word.</td><td>**Question**: not sure it's limited to spoken.</td></tr></table><h4>Suggestion</h4><blockquote> As ideas get passed around among members of a thought community they are slightly transformed by each thinker's own experiences and knowledge.  One can imagine the idea gets reshaped and tagged with bits of each member's thought/experience/perspective/world.</blockquote>",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0161",
      "question": " Comment on and improve upon the following text explication<table class=\"wikitable\"><tr><td class=\"tdheader\">Text</td><td class=\"tdheader\">Explication</td></tr><tr><td>â€œWhether an individual construes (language) as truth or error, understands it correctly or not, a set of findings meander throughout the community, becoming polished, transformed, reinforced or attenuated, while influencing other findings, concept formation, opinions, and habits of thoughtâ€ (56).</td><td>blue|Thus, Fleck argues, language creates thought collectives. A thought collective is defined as a community of persons mutually exchanging ideas or maintaining intellectual interaction. Fleck believes that through the use of language, humanâ€™s form thought collectives with others whom they wish to share ideas with. With a sense of shared meaning evolves a sense of coordination.</td></tr></table>",
      "soln": "<h3>SOLUTION</h3>This passage is from Ludwik Fleck's Genesis and Development of a Scientific Fact.  Let's break it up into the points it is making:<ol><li>Independent of truth and correct understanding, ideas float around.</li><li>Findings are passed from person to person to person</li><li>They get changed along the way.</li><li>They get reinforced along the way.</li><li>They change how people see the world.</li><li>This affects how people see other ideas.</li></ol>Two important elements of what Fleck is saying are that (1) once people start passing it around, a \"fact\" has a life of its own independent of whether it is right or wrong, unconnected, as it were, from the reality it represents; and (2) the people who pass it around can change it and the act of receiving an idea and passing it on changes people's take on the world.<table class=\"wikitable\"><tr><td>blue|Thus, Fleck argues, language creates thought collectives.</td><td>Not, actually, in this passage.  Thus, we might not want to say \"thus\" here.</td></tr><tr><td>blue|A thought collective is defined as a community of persons mutually exchanging ideas or maintaining intellectual interaction.</td><td>Again, not this passage.  OK to keep both of these insofar as they are correct restatements of what Fleck means by thought community (but it would be good to have a quote specifically on this).</td></tr><tr><td>blue|Fleck believes that through the use of language, human--â€™--s form thought collectives with others whom they wish to share ideas --with--. With a sense of shared meaning evolves a sense of coordination.</td><td>This is more or less it, but let's explore some re-phrasing.  Fleck believes humans use language to exchange and circulate ideas. These ideas become \"averaged out,\" changed slightly by each thinker/speaker and form  the basis of the lens through which they view the world.  Groups that are engaged in more and more mutual exchange of ideas think more and more alike one another.  They evolve toward having more and more similar social cognitions - ways of thinking and processing information that are rooted in the community of people with whom they speak.  This is Fleck's story of how we get to \"shared meaning.\"  He doesn't address the mechanism from there to cooperation and coordination; we have to add that part.</td></tr></table>",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0161",
      "question": " Comment on and improve upon the following text explication<table class=\"wikitable\"><tr><td class=\"tdheader\">Text</td><td class=\"tdheader\">Explication</td></tr><tr><td>â€œWhether an individual construes (language) as truth or error, understands it correctly or not, a set of findings meander throughout the community, becoming polished, transformed, reinforced or attenuated, while influencing other findings, concept formation, opinions, and habits of thoughtâ€ (56).</td><td>blue|Thus, Fleck argues, language creates thought collectives. A thought collective is defined as a community of persons mutually exchanging ideas or maintaining intellectual interaction. Fleck believes that through the use of language, humanâ€™s form thought collectives with others whom they wish to share ideas with. With a sense of shared meaning evolves a sense of coordination.</td></tr></table>",
      "soln": "<h3>SOLUTION</h3>This passage is from Ludwik Fleck's Genesis and Development of a Scientific Fact.  Let's break it up into the points it is making:<ol><li>Independent of truth and correct understanding, ideas float around.</li><li>Findings are passed from person to person to person</li><li>They get changed along the way.</li><li>They get reinforced along the way.</li><li>They change how people see the world.</li><li>This affects how people see other ideas.</li></ol>Two important elements of what Fleck is saying are that (1) once people start passing it around, a \"fact\" has a life of its own independent of whether it is right or wrong, unconnected, as it were, from the reality it represents; and (2) the people who pass it around can change it and the act of receiving an idea and passing it on changes people's take on the world.<table class=\"wikitable\"><tr><td>blue|Thus, Fleck argues, language creates thought collectives.</td><td>Not, actually, in this passage.  Thus, we might not want to say \"thus\" here.</td></tr><tr><td>blue|A thought collective is defined as a community of persons mutually exchanging ideas or maintaining intellectual interaction.</td><td>Again, not this passage.  OK to keep both of these insofar as they are correct restatements of what Fleck means by thought community (but it would be good to have a quote specifically on this).</td></tr><tr><td>blue|Fleck believes that through the use of language, human--â€™--s form thought collectives with others whom they wish to share ideas --with--. With a sense of shared meaning evolves a sense of coordination.</td><td>This is more or less it, but let's explore some re-phrasing.  Fleck believes humans use language to exchange and circulate ideas. These ideas become \"averaged out,\" changed slightly by each thinker/speaker and form  the basis of the lens through which they view the world.  Groups that are engaged in more and more mutual exchange of ideas think more and more alike one another.  They evolve toward having more and more similar social cognitions - ways of thinking and processing information that are rooted in the community of people with whom they speak.  This is Fleck's story of how we get to \"shared meaning.\"  He doesn't address the mechanism from there to cooperation and coordination; we have to add that part.</td></tr></table>",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0163",
      "question": " Work through this passage by Durkheim:<blockquote> ...it is with the people of his clan that he has most in common, and it is the influence of this group that he feels most immediately, and so it is also this influence, more than any other, that was bound to find expression in religious symbolsâ€ (55).</blockquote>Can you make any connections to Mead's generalized other? Or the generic idea of having some of our mental content being social?",
      "soln": "<h3>SOLUTION</h3>What is Durkheim explaining here?  The question on the table is why do we make the leap that what the totemic symbol symbolizes is the group (clan) itself.  On the one hand, there's the superficial point that the turtle people use a stylized turtle as their totem and so, //de facto//, the turtle stands for the turtle clan.  But we want a mechanism of sorts.Durkheim offers two observations:<ol><li>others in the clan are people with whom an individual has most in common</li><li>group influence is the force with which a person experiences most immediately</li></ol>What do we mean by this latter observation?  Durkheim seems to be suggesting that people who live in groups experience the mysterious \"pressure\" of similarity as the most palpable force in their lives.  This short passage does not do all the work of associating group/clan and totem.  Its focus is on possible origin of the idea of the power of the clan totem to \"want\" members to behave in certain ways.CAN you make any connections to Mead's generalized other? Or the generic idea of having some of our mental content being social?",
      "tags": [
        "social theory",
        "social network analysis"
      ]
    },
    {
      "number": "0164",
      "question": " Sketch a flowchart that represents the logic of setting up a Schelling \"tipping model\":To Create Schelling Model<ol><li>Set up the model.</li><li>Run the model until everyone is content to stay where they are.</li></ol>To Set Up<ol><li>Start with an NxN grid.</li><li>Identify a number of type A residents and a number of type B residents such that A+B is less than N^^2^^.</li><li>Randomly place As and Bs on grid.</li></ol>To Run the Model<ol><li>For each resident, evaluate move/stay choices</li><li>For each resident, find new location for all those that choose move.</li></ol>To Evaluate choice<ol><li>Identify the resident</li><li>Count all neighbors</li><li>Count similars</li><li>Compute ratio</li><li>If larger than threshold, mark as stay, otherwise mark as move</li></ol>To Move<ol><li>Select a random square</li><li>If empty, move there.  Otherwise try again.</li></ol>",
      "soln": "<h3>SOLUTION</h3><br /><img src=\"https://djjr.us/images/qbank/p0164-agent-model-schelling.gif\"><br />",
      "tags": [
        "GIS",
        "computational thinking"
      ]
    },
    {
      "number": "0165",
      "question": " What's the difference between an \"equation-based model\" and an \"agent model\"?  What are some other synonyms we might hear for these terms?",
      "soln": "<h3>SOLUTION</h3>An equation based model or aggregate model or wholistic model is one in which the quantities of interest are about the behavior of the system as a whole rather than the behavior of the parts.  In a stock and flow model, for example, we talk about the total amount of water in the reservoir or students still enrolled in school, rather than looking at the behavior of individual water molecules or students.  In an agent model, we \"model\" the individual units, allow them to interact, and then measure the system level outcomes.",
      "tags": []
    },
    {
      "number": "0166",
      "question": " Consider a one dimensional cellular automata that looks like this:<table class=\"wikitable\"><tr><td>Generation 1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><td>Generation 2</td></tr></table>Show what the next few generations would look like subject to \"rule 93\":<table class=\"wikitable\"><tr><td>Rule 93</td></tr><tr><td class=\"tdheader\">0</td><td class=\"tdheader\">0</td><td class=\"tdheader\">0</td><td class=\"tdheader\">0</td><td class=\"tdheader\">0</td><td class=\"tdheader\">1</td><td class=\"tdheader\">0</td><td class=\"tdheader\">1</td><td class=\"tdheader\">0</td><td class=\"tdheader\">0</td><td class=\"tdheader\">1</td><td class=\"tdheader\">1</td><td class=\"tdheader\">1</td><td class=\"tdheader\">0</td><td class=\"tdheader\">0</td><td class=\"tdheader\">1</td><td class=\"tdheader\">0</td><td class=\"tdheader\">1</td><td class=\"tdheader\">1</td><td class=\"tdheader\">1</td><td class=\"tdheader\">0</td><td class=\"tdheader\">1</td><td class=\"tdheader\">1</td><td class=\"tdheader\">1</td></tr><tr><td class=\"tdheader\">0</td><td class=\"tdheader\">1</td><td class=\"tdheader\">0</td><td class=\"tdheader\">1</td><td class=\"tdheader\">1</td><td class=\"tdheader\">1</td><td class=\"tdheader\">0</td><td class=\"tdheader\">1</td></tr></table>",
      "soln": "<h3>SOLUTION</h3>To compute the new \"generation\" we look at the three predecessors of each cell (the one above to the left, above, and above to the right).   Note that there are a total of 8 possible patterns:<table class=\"wikitable\"><tr><td class=\"tdheader\">0</td><td class=\"tdheader\">0</td><td class=\"tdheader\">0</td><td class=\"tdheader\">0</td><td class=\"tdheader\">0</td><td class=\"tdheader\">1</td><td class=\"tdheader\">0</td><td class=\"tdheader\">1</td><td class=\"tdheader\">0</td><td class=\"tdheader\">0</td><td class=\"tdheader\">1</td><td class=\"tdheader\">1</td><td class=\"tdheader\">1</td><td class=\"tdheader\">0</td><td class=\"tdheader\">0</td><td class=\"tdheader\">1</td><td class=\"tdheader\">0</td><td class=\"tdheader\">1</td><td class=\"tdheader\">1</td><td class=\"tdheader\">1</td><td class=\"tdheader\">0</td><td class=\"tdheader\">1</td><td class=\"tdheader\">1</td><td class=\"tdheader\">1</td></tr></table>For each of these, we need to know whether the \"child\" cell will be a 1 or a 0.  A conventional way of displaying the rules is this:<table class=\"wikitable\"><tr><td class=\"tdheader\">0</td><td class=\"tdheader\">0</td><td class=\"tdheader\">0</td><td class=\"tdheader\">0</td><td class=\"tdheader\">0</td><td class=\"tdheader\">1</td><td class=\"tdheader\">0</td><td class=\"tdheader\">1</td><td class=\"tdheader\">0</td><td class=\"tdheader\">0</td><td class=\"tdheader\">1</td><td class=\"tdheader\">1</td><td class=\"tdheader\">1</td><td class=\"tdheader\">0</td><td class=\"tdheader\">0</td><td class=\"tdheader\">1</td><td class=\"tdheader\">0</td><td class=\"tdheader\">1</td><td class=\"tdheader\">1</td><td class=\"tdheader\">1</td><td class=\"tdheader\">0</td><td class=\"tdheader\">1</td><td class=\"tdheader\">1</td><td class=\"tdheader\">1</td></tr><tr><td class=\"tdheader\">x_{1}</td><td class=\"tdheader\">x_{2}</td><td class=\"tdheader\">x_{3}</td><td class=\"tdheader\">x_{4}</td><td class=\"tdheader\">x_{5}</td><td class=\"tdheader\">x_{6}</td><td class=\"tdheader\">x_{7}</td><td class=\"tdheader\">x_{8}</td></tr></table>The X_{i}s are either 0 or 1 and the so the sequence X_{1} X_{2} X_{3} X_{4} X_{5} X_{6} X_{7} X_{8} can be taken as an expression of the rule.EXTRA: Since this set of eight digits are all zeroes and ones we can interpret is as a binary number between 0 (that is, 00000000) and 255 (that is, 11111111).  And so we can think of the rules as Rule 1, Rule 2, etc.  Here's what rule 93 looks like: 01011101<table class=\"wikitable\"><tr><td>Rule 93</td></tr><tr><td class=\"tdheader\">0</td><td class=\"tdheader\">0</td><td class=\"tdheader\">0</td><td class=\"tdheader\">0</td><td class=\"tdheader\">0</td><td class=\"tdheader\">1</td><td class=\"tdheader\">0</td><td class=\"tdheader\">1</td><td class=\"tdheader\">0</td><td class=\"tdheader\">0</td><td class=\"tdheader\">1</td><td class=\"tdheader\">1</td><td class=\"tdheader\">1</td><td class=\"tdheader\">0</td><td class=\"tdheader\">0</td><td class=\"tdheader\">1</td><td class=\"tdheader\">0</td><td class=\"tdheader\">1</td><td class=\"tdheader\">1</td><td class=\"tdheader\">1</td><td class=\"tdheader\">0</td><td class=\"tdheader\">1</td><td class=\"tdheader\">1</td><td class=\"tdheader\">1</td></tr><tr><td class=\"tdheader\">0</td><td class=\"tdheader\">1</td><td class=\"tdheader\">0</td><td class=\"tdheader\">1</td><td class=\"tdheader\">1</td><td class=\"tdheader\">1</td><td class=\"tdheader\">0</td><td class=\"tdheader\">1</td></tr></table><table class=\"wikitable\"><tr><td>Generation 1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td class=\"tdheader\">1</td><td>0</td><td class=\"tdheader\">1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><td>Generation 2</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td class=\"tdheader\">1</td><td>0</td><td class=\"tdheader\">1</td><td>0</td><td class=\"tdheader\">1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><td>Generation 3</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td class=\"tdheader\">1</td><td>0</td><td class=\"tdheader\">1</td><td>0</td><td class=\"tdheader\">1</td><td>0</td><td class=\"tdheader\">1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><td>Generation 4</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td class=\"tdheader\">1</td><td>0</td><td class=\"tdheader\">1</td><td>0</td><td class=\"tdheader\">1</td><td>0</td><td class=\"tdheader\">1</td><td>0</td><td class=\"tdheader\">1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr></table>",
      "tags": []
    },
    {
      "number": "0167",
      "question": " Suppose we have a diffusion process in which all susceptibles who are in contact with an infected in a given time period become infected in the next time period.  On the grids below color in squares to indicate what happens over the first six time periods beginning with one infected.  Then fill in the table and chart the data.<br /><img src=\"https://djjr.us/images/qbank/p0167-grid.gif\"><br /><br /><img src=\"https://djjr.us/images/qbank/p0167-table.gif\"><br /><br /><img src=\"https://djjr.us/images/qbank/p0167-chart.gif\"><br />",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": [
        "computational thinking",
        "research methods"
      ]
    },
    {
      "number": "0168",
      "question": " Suppose we have a diffusion process in which susceptibles who are in contact with an infected in a given time period have a 50% chance of becoming infected in the next time period.  Now play the â€œgameâ€ again except this time flip a coin each time (or use a random number chart for probabilities other than 50:50) to see whether neighbors become infected or not.  Note: You might not want to play all the way out to time period 5! On the grids below color in squares to indicate what happens over the first six time periods beginning with one infected.  Then fill in the table and chart the data.    <br /><img src=\"https://djjr.us/images/qbank/p0167-grid.gif\"><br /><br /><img src=\"https://djjr.us/images/qbank/p0167-table.gif\"><br /><br /><img src=\"https://djjr.us/images/qbank/p0167-chart.gif\"><br />",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": [
        "computational thinking",
        "research methods"
      ]
    },
    {
      "number": "0169",
      "question": " Consider the 12 block neighborhood bounded by parks on the north and south and major thoroughfares on the east and west. Green houses are supporting Obama, purple houses Romney.<br /><img src=\"https://djjr.us/images/qbank/p0169-segregation.gif\"><br />Using the facing blocks delineated by the red dashed lines as units (it yields 15 of them), calculate the index of dissimilarity.",
      "soln": "<h3>SOLUTION</h3>Let's number the blocks following a raster pattern from upper left<table class=\"wikitable\"><tr><td class=\"tdcentered\">1</td><td class=\"tdcentered\">2</td><td class=\"tdcentered\">3</td></tr><tr><td class=\"tdcentered\">4</td><td class=\"tdcentered\">5</td><td class=\"tdcentered\">6</td></tr><tr><td class=\"tdcentered\">7</td><td class=\"tdcentered\">8</td><td class=\"tdcentered\">9</td></tr><tr><td class=\"tdcentered\">10</td><td class=\"tdcentered\">11</td><td class=\"tdcentered\">12</td></tr><tr><td class=\"tdcentered\">13</td><td class=\"tdcentered\">14</td><td class=\"tdcentered\">15</td></tr></table>Total circles is 48. Squares, 48\n$$\frac { 1 }{ 2 } sum { left| \frac { { a }_{ i } }{ A } -\frac { { b }_{ i } }{ B }  \right|  }$$\n$$=\frac { 1 }{ 2 } (left| \frac { 4 }{ 48 } -\frac { 0 }{ 48 }  \right| +left| \frac { 0 }{ 48 } -\frac { 4 }{ 48 }  \right| +left| \frac { 3 }{ 48 } -\frac { 1 }{ 48 }  \right| \\ +left| \frac { 7 }{ 48 } -\frac { 1 }{ 48 }  \right| +left| \frac { 4 }{ 48 } -\frac { 4 }{ 48 }  \right| +left| \frac { 4 }{ 48 } -\frac { 4 }{ 48 }  \right| \\ +left| \frac { 6 }{ 48 } -\frac { 2 }{ 48 }  \right| +left| \frac { 0 }{ 48 } -\frac { 8 }{ 48 }  \right| +left| \frac { 3 }{ 48 } -\frac { 5 }{ 48 }  \right| \\ +left| \frac { 7 }{ 48 } -\frac { 1 }{ 48 }  \right| +left| \frac { 4 }{ 48 } -\frac { 4 }{ 48 }  \right| +left| \frac { 2 }{ 48 } -\frac { 6 }{ 48 }  \right| \\ +left| \frac { 2 }{ 48 } -\frac { 2 }{ 48 }  \right| +left| \frac { 0 }{ 48 } -\frac { 4 }{ 48 }  \right| +left| \frac { 2 }{ 48 } -\frac { 2 }{ 48 }  \right| )$$\n$$=\frac { 1 }{ 2 } { left( 4+4+2+6+0+0+4+8+2+6+0+4+0+4+0 \right)  }/{ 48 }$$\n$$=\frac { 1 }{ 2 } \\times \frac { 44 }{ 48 } =\frac { 11 }{ 24 } = 0.46$$",
      "tags": []
    },
    {
      "number": "0170",
      "question": " Suppose you have a population of one hundred persons.  It is divided into five categories of willingness to join a protest all of which depend on people's expectations of how many others will appear at the protest.  The thresholds range from very low (I'll go if anyone else is going) to the very high (I won't go unless basically everybody else is going).Assume the population is divided among these categories as follows:<table class=\"wikitable\"><tr><td class=\"tdheader\">Challenge of Recruiting</td><td class=\"tdheader\">Very Easy</td><td class=\"tdheader\">Easy</td><td class=\"tdheader\">Average</td><td class=\"tdheader\">Hard</td><td class=\"tdheader\">Very Hard</td></tr><tr><td>Participation Threshold</td><td class=\"tdcentered\">1</td><td class=\"tdcentered\">10</td><td class=\"tdcentered\">40</td><td class=\"tdcentered\">60</td><td class=\"tdcentered\">99</td></tr><tr><td>Number at this threshold</td><td class=\"tdcentered\">10</td><td class=\"tdcentered\">20</td><td class=\"tdcentered\">40</td><td class=\"tdcentered\">20</td><td class=\"tdcentered\">10</td></tr></table>a. If news reports suggest that 15 people will show up, how many actually will?  b. If last week saw participation of 41 and this is widely reported so that everyone knows, how many will come out this week? And then next week? And after that?c. What if 91 came last week?",
      "soln": "<h3>SOLUTION</h3>a. The expected 15 are enough for both the \"very easy\" and the \"easy\" group and so we can expect a total of 10+20=30 to show up.b. The 41 from last week will inspire the average folks to turn out AND the easy and the very easy so next week we will see 10+20+40=70.  This number will also inspire the hard so we will get 70+20 the following week.  But the total of 90 will not inspire anyone in the very hard category so the number will stay at 90.c. Last week's 91 won't be enough to inspire the very hard so we will see a drop to 90.Checklist<ol><li>This is a Schelling critical mass model. Schelling is a contemporary economist who was born in Oakland in 1921. He won the Nobel prize in 2005 for \"having enhanced our understanding of conflict and cooperation through game-theory analysis\" (<a href=\"https://en.wikipedia.org/wiki/Thomas_Schelling\" target=\"_blank\">Wikipedia</a>).</li><li>These models describe situations where a behavior decision is based on the numbers of others who have or are expected to engage in some behavior</li><li>Examples could include joining a protest, buying a product, adopting an opinion...</li><li>The bottom row of numbers represents frequencies - how many people at each threshold level. A threshold level is how many people you need to expect to show up for you to decide to show up.</li><li>Explain that can be analyzed graphically by starting with frequency histogram and converting to a cumulative frequency diagram that will likely take form of an S curve. With a 45 degree line on the chart we can identify stable and unstable equilibria.</li><li>See above.</li></ol>",
      "tags": []
    },
    {
      "number": "0171",
      "question": " A common phrase to describe processes in which people engage in imitative behavior is \"bandwagon effect.\"  Explain the appropriateness of this metaphor.",
      "soln": "<h3>SOLUTION</h3>Here's <a href=\"http://en.wikipedia.org/wiki/Bandwagon_effect\" target=\"_blank\">Wikipedia's</a> description:<blockquote> The bandwagon effect is a well documented form of groupthink in behavioral science and has many applications. The general rule is that conduct or beliefs spread among people, as fads and trends clearly do, with \"the probability of any individual adopting it increasing with the proportion who have already done so\".[1] As more people come to believe in something, others also \"hop on the bandwagon\" regardless of the underlying evidence. The tendency to follow the actions or beliefs of others can occur because individuals directly prefer to conform, or because individuals derive information from others.</blockquote>The metaphor suggests that a bandwagon goes through town and people's inclination to jump on is dependent on how many people have already jumped on board.  The implication is that the sole motivating factor is the fact that others have already joined.  The more who join, the more the motivation despite the fact that nothing changed about the bandwagon and nothing changes in individuals' preferences for riding on a bandwagon.Checklist<ol><li>See above.</li><li>Connect with Schelling and critical mass models.</li><li>Explain that can be analyzed graphically by starting with frequency histogram and converting to a cumulative frequency diagram that will likely take form of an S curve. With a 45 degree line on the chart we can identify stable and unstable equilibria.</li></ol>",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0172",
      "question": " Consider this data on the thresholds in a population.  Draw a frequency histogram and cumulative frequency diagram.  If news reports suggest participation will be at 20 people, how many people's threshold is met or exceeded?  How about if the number is 70?<br /><img src=\"https://djjr.us/images/qbank/p0172-table-a.gif\"><br />",
      "soln": "<h3>SOLUTION</h3>[[=image http://djjr-courses.wikidot.com/local--files/ppol225:images/p0172-table-b.gif]][[=image http://djjr-courses.wikidot.com/local--files/ppol225:images/p0172-chart-a.gif]]----If 20 people are expected, there will be a total of 17 people whose threshold is met or exceed.  On the other hand, if reports indicate attendance by 70 people, there will be 87 people for whom this is enough to make them want to participate.  [[=image http://djjr-courses.wikidot.com/local--files/ppol225:images/p0172-chart-b.gif]]Checklist<ol><li>This is a Schelling critical mass model. Schelling is a contemporary economist who was born in Oakland in 1921. He won the Nobel prize in 2005 for \"having enhanced our understanding of conflict and cooperation through game-theory analysis\" (<a href=\"https://en.wikipedia.org/wiki/Thomas_Schelling\" target=\"_blank\">Wikipedia</a>).</li><li>These models describe situations where a behavior decision is based on the numbers of others who have or are expected to engage in some behavior</li><li>Examples could include joining a protest, buying a product, adopting an opinion...</li><li>The bottom row of numbers represents frequencies - how many people at each threshold level. A threshold level is how many people you need to expect to show up for you to decide to show up.</li><li>Explain that can be analyzed graphically by starting with frequency histogram and converting to a cumulative frequency diagram that will likely take form of an S curve. With a 45 degree line on the chart we can identify stable and unstable equilibria.</li><li>See above.</li></ol>",
      "tags": [
        "computational thinking",
        "research methods"
      ]
    },
    {
      "number": "0173",
      "question": " Consider this data on the thresholds in a population.  Draw a frequency histogram and cumulative frequency diagram.  If news reports suggest participation will be at 20 people, how many people's threshold is met or exceeded?  How about if the number is 70?<br /><img src=\"https://djjr.us/images/qbank/p0173-table-a.gif\"><br />",
      "soln": "<h3>SOLUTION</h3>[[=image http://djjr-courses.wikidot.com/local--files/ppol225:images/p0173-table-b.gif]][[=image http://djjr-courses.wikidot.com/local--files/ppol225:images/p0173-chart-a.gif]]----If 20 people are expected, there will be a total of 40 people whose threshold is met or exceed.  Thus, an expectation of 20 will produce an actual participation of 40.  On the other hand, if reports indicate attendance by 70 people, there will only be 60 people for whom this is enough to make them want to participate.  [[=image http://djjr-courses.wikidot.com/local--files/ppol225:images/p0173-chart-b.gif]]",
      "tags": [
        "computational thinking",
        "research methods"
      ]
    },
    {
      "number": "0174",
      "question": " Consider this data on the thresholds in a population.  Draw a frequency histogram and cumulative frequency diagram.  How does this system behave when the expected number is 10? 20?  50?  60? 90?[[=image http://djjr-courses.wikidot.com/local--files/ppol225:images/p0174-table-a.gif]]",
      "soln": "<h3>SOLUTION</h3>[[image http://djjr-courses.wikidot.com/local--files/ppol225:images/p0174-table-b.gif]][[image http://djjr-courses.wikidot.com/local--files/ppol225:images/p0174-chart-a.gif]]----At 10, there are only 8 people who are willing to join.  This suggests that if 10 are expected, the event will die.At 20, we have 22 who are expected and so the event will grow.At 50 we have over 60 and so it keeps growing.At 60 it is about 68.At 90 there are only about 88 willing to join so if 90 are expected, the event will shrink.[[image http://djjr-courses.wikidot.com/local--files/ppol225:images/p0174-chart-b.gif]]",
      "tags": [
        "computational thinking",
        "research methods"
      ]
    },
    {
      "number": "0175",
      "question": " Consider this data on the thresholds in a population.  Draw a frequency histogram and cumulative frequency diagram. Plot the cumulative distribution on a chart with a 45 degree line.<br /><img src=\"https://djjr.us/images/qbank/p0175-table-a.gif\"><br />",
      "soln": "<h3>SOLUTION</h3><br /><img src=\"https://djjr.us/images/qbank/p0175-table-b.gif\"><br /><br /><img src=\"https://djjr.us/images/qbank/p0175-chart-a.gif\"><br /><br /><img src=\"https://djjr.us/images/qbank/p0175-chart-b.gif\"><br />",
      "tags": [
        "computational thinking",
        "research methods"
      ]
    },
    {
      "number": "0176",
      "question": " Which of the cumulative frequency distributions below corresponds to this frequency distribution<br /><img src=\"https://djjr.us/images/qbank/histogram01.gif\"><br /><table class=\"wikitable\"><tr><td>A. <br /><img src=\"https://djjr.us/images/qbank/cumfreq01.gif\"><br /></td></tr><tr><td>B. <br /><img src=\"https://djjr.us/images/qbank/cumfreq02.gif\"><br /></td></tr><tr><td>C. <br /><img src=\"https://djjr.us/images/qbank/cumfreq03.gif\"><br /></td></tr><tr></tr><tr><td>D. <br /><img src=\"https://djjr.us/images/qbank/cumfreq04.gif\"><br /></td></tr><tr><td>E. <br /><img src=\"https://djjr.us/images/qbank/cumfreq05.gif\"><br /></td></tr><tr></tr></table>",
      "soln": "<h3>SOLUTION</h3>C",
      "tags": []
    },
    {
      "number": "0177",
      "question": " Which of the cumulative frequency distributions below corresponds to this frequency distribution<br /><img src=\"https://djjr.us/images/qbank/histogram02.gif\"><br /><table class=\"wikitable\"><tr><td>A. <br /><img src=\"https://djjr.us/images/qbank/cumfreq01.gif\"><br /></td></tr><tr><td>B. <br /><img src=\"https://djjr.us/images/qbank/cumfreq02.gif\"><br /></td></tr><tr><td>C. <br /><img src=\"https://djjr.us/images/qbank/cumfreq03.gif\"><br /></td></tr><tr></tr><tr><td>D. <br /><img src=\"https://djjr.us/images/qbank/cumfreq04.gif\"><br /></td></tr><tr><td>E. <br /><img src=\"https://djjr.us/images/qbank/cumfreq05.gif\"><br /></td></tr><tr></tr></table>",
      "soln": "<h3>SOLUTION</h3>A",
      "tags": []
    },
    {
      "number": "0178",
      "question": " Which of the cumulative frequency distributions below corresponds to this frequency distribution<br /><img src=\"https://djjr.us/images/qbank/histogram03.gif\"><br /><table class=\"wikitable\"><tr><td>A. <br /><img src=\"https://djjr.us/images/qbank/cumfreq01.gif\"><br /></td></tr><tr><td>B. <br /><img src=\"https://djjr.us/images/qbank/cumfreq02.gif\"><br /></td></tr><tr><td>C. <br /><img src=\"https://djjr.us/images/qbank/cumfreq03.gif\"><br /></td></tr><tr></tr><tr><td>D. <br /><img src=\"https://djjr.us/images/qbank/cumfreq04.gif\"><br /></td></tr><tr><td>E. <br /><img src=\"https://djjr.us/images/qbank/cumfreq05.gif\"><br /></td></tr><tr></tr></table>",
      "soln": "<h3>SOLUTION</h3>D",
      "tags": []
    },
    {
      "number": "0179",
      "question": " Which of the cumulative frequency distributions below corresponds to this frequency distribution<br /><img src=\"https://djjr.us/images/qbank/histogram04.gif\"><br /><table class=\"wikitable\"><tr><td>A. <br /><img src=\"https://djjr.us/images/qbank/cumfreq01.gif\"><br /></td></tr><tr><td>B. <br /><img src=\"https://djjr.us/images/qbank/cumfreq02.gif\"><br /></td></tr><tr><td>C. <br /><img src=\"https://djjr.us/images/qbank/cumfreq03.gif\"><br /></td></tr><tr></tr><tr><td>D. <br /><img src=\"https://djjr.us/images/qbank/cumfreq04.gif\"><br /></td></tr><tr><td>E. <br /><img src=\"https://djjr.us/images/qbank/cumfreq05.gif\"><br /></td></tr><tr></tr></table>",
      "soln": "<h3>SOLUTION</h3>E",
      "tags": []
    },
    {
      "number": "0180",
      "question": " Which of the cumulative frequency distributions below corresponds to this frequency distribution<br /><img src=\"https://djjr.us/images/qbank/histogram05.gif\"><br /><table class=\"wikitable\"><tr><td>A. <br /><img src=\"https://djjr.us/images/qbank/cumfreq01.gif\"><br /></td></tr><tr><td>B. <br /><img src=\"https://djjr.us/images/qbank/cumfreq02.gif\"><br /></td></tr><tr><td>C. <br /><img src=\"https://djjr.us/images/qbank/cumfreq03.gif\"><br /></td></tr><tr></tr><tr><td>D. <br /><img src=\"https://djjr.us/images/qbank/cumfreq04.gif\"><br /></td></tr><tr><td>E. <br /><img src=\"https://djjr.us/images/qbank/cumfreq05.gif\"><br /></td></tr><tr></tr></table>",
      "soln": "<h3>SOLUTION</h3>B",
      "tags": []
    },
    {
      "number": "0181",
      "question": " Which threshold frequency distribution corresponds to the following description:This population is divided between those who are very easily persuaded to participate - they will jump on bandwagon readily - and people who are very reticent to join a movement, with relatively few people in between.<table class=\"wikitable\"><tr><td>A. <br /><img src=\"https://djjr.us/images/qbank/histogram01.gif\"><br /></td></tr><tr><td>B. <br /><img src=\"https://djjr.us/images/qbank/histogram02.gif\"><br /></td></tr><tr><td>C. <br /><img src=\"https://djjr.us/images/qbank/histogram03.gif\"><br /></td></tr><tr></tr><tr><td>D. <br /><img src=\"https://djjr.us/images/qbank/histogram04.gif\"><br /></td></tr><tr><td>E. <br /><img src=\"https://djjr.us/images/qbank/histogram05.gif\"><br /></td></tr><tr></tr></table>",
      "soln": "<h3>SOLUTION</h3>D",
      "tags": []
    },
    {
      "number": "0182",
      "question": " Which threshold frequency distribution corresponds to the following description:<blockquote> The community has a few people who will join no matter what, a few more who will join if some others have joined, still more who will join if a goodly number are on board and so on all the way up to a hesitant few but even they will join if it appears everyone else has.</blockquote><table class=\"wikitable\"><tr><td>A. <br /><img src=\"https://djjr.us/images/qbank/histogram01.gif\"><br /></td></tr><tr><td>B. <br /><img src=\"https://djjr.us/images/qbank/histogram02.gif\"><br /></td></tr><tr><td>C. <br /><img src=\"https://djjr.us/images/qbank/histogram03.gif\"><br /></td></tr><tr></tr><tr><td>D. <br /><img src=\"https://djjr.us/images/qbank/histogram04.gif\"><br /></td></tr><tr><td>E. <br /><img src=\"https://djjr.us/images/qbank/histogram05.gif\"><br /></td></tr><tr></tr></table>",
      "soln": "<h3>SOLUTION</h3>E",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0183",
      "question": " In the election between candidate A and candidate B, for voter\\timesit comes down to what the candidate will do for the elderly. The election is a toss-up and it may well come down to X's vote.   Research indicates that candidate A is quite likely (75% chance) to do 4 things for the elderly but may only end up doing one thing (25% chance).  Candidate B, on the other hand, is very unlikely to do 4 things (10%) but is 90% likely to do 2 things.  For whom should\\timesvote if this is the deciding issue.",
      "soln": "<h3>SOLUTION</h3>[[html]]&lt;object width=\"640\" height=\"480\"&gt;&lt;param name=\"movie\" value=\"http://www.youtube.com/v/bEGFmjMh4Rs?version=3&amp;hl=en_US\"&gt;&lt;/param&gt;&lt;param name=\"allowFullScreen\" value=\"true\"&gt;&lt;/param&gt;&lt;param name=\"allowscriptaccess\" value=\"always\"&gt;&lt;/param&gt;&lt;embed src=\"http://www.youtube.com/v/bEGFmjMh4Rs?version=3&amp;hl=en_US\" type=\"application/x-shockwave-flash\" width=\"640\" height=\"480\" allowscriptaccess=\"always\" allowfullscreen=\"true\"&gt;&lt;/embed&gt;&lt;/object&gt;&lt;/object&gt;[[/html]][[module files]]",
      "tags": [
        "research methods"
      ]
    },
    {
      "number": "0184",
      "question": " A campaign director is flying blind.  Two tossup states both have 20 electoral votes.  All current information is that the chances of winning in each is 50:50.   Draw the event tree that describes the possible election outcomes.Our campaign director has the opportunity to do one last ad buy of $1 million.  Research and experience have shown that an ad buy in a right state where a significant portion of the electorate is still open minded could shift the odds of winning to 60/40. How do we know?  We've done lots of audience research that shows how particular electorates respond to this ad's approach.  But doing the ad buy in the wrong state (one where folks have really made up their minds) will have no effect on the outcome.  What we don't know is which, if either, of these states is the best fit for this type of campaigning.Draw this decision tree.Now suppose there is a poll she could do to find out whether state A or state B is the more promising state for the new ad.  There is a 50% chance the poll says state A and a 50% chance it says state B.  If it says state A then you do the ad buy there and you are certain to increase your chances while things in B stay the same.  And vice versa.What is the value of the information the poll can provide, in electoral votes?",
      "soln": "<h3>SOLUTION</h3><br /><img src=\"https://djjr.us/images/qbank/problem184a.gif\"><br /><br /><img src=\"https://djjr.us/images/qbank/problem184b.gif\"><br /><br /><img src=\"https://djjr.us/images/qbank/problem184c.gif\"><br /><br /><img src=\"https://djjr.us/images/qbank/problem184d.gif\"><br /><br /><img src=\"https://djjr.us/images/qbank/problem184e.gif\"><br /><br /><img src=\"https://djjr.us/images/qbank/problem184f.gif\"><br />",
      "tags": [
        "policy modeling",
        "research methods"
      ]
    },
    {
      "number": "0185",
      "question": " Sketch a causal loop diagram for these two systems (be sure to label each link and the overall loop).  Comment on the long term equilibrium of this system.<ul><li>Being pro candidate X...</li></ul> # ...makes you give money... # ...makes the campaign send you emails... # ...makes you want to go to a rally... # ...makes pro candidate X...<ul><li>Being pro candidate X...</li></ul> # ...makes you give money... # ...makes the campaign send you emails... # ...makes you get fed up with the campaign... # ...makes you a little sour on candidate X...<ul><li>Not hearing much from the campaign...</li></ul> # ...makes you miss your candidate # ...makes you feel more pro candidate X",
      "soln": "<h3>SOLUTION</h3>[[html]]&lt;object width=\"640\" height=\"480\"&gt;&lt;param name=\"movie\" value=\"http://www.youtube.com/v/LkMjpuXcLVA?version=3&amp;hl=en_US\"&gt;&lt;/param&gt;&lt;param name=\"allowFullScreen\" value=\"true\"&gt;&lt;/param&gt;&lt;param name=\"allowscriptaccess\" value=\"always\"&gt;&lt;/param&gt;&lt;embed src=\"http://www.youtube.com/v/LkMjpuXcLVA?version=3&amp;hl=en_US\" type=\"application/x-shockwave-flash\" width=\"640\" height=\"480\" allowscriptaccess=\"always\" allowfullscreen=\"true\"&gt;&lt;/embed&gt;&lt;/object&gt;[[/html]][[module files]]",
      "tags": []
    },
    {
      "number": "0186",
      "question": " Our neighborhood Obama for America committee is an active one. It's so active that it wears people out.  Over the course of the campaign it tends to recruit 4 new people every week but it also loses about 10% of its membership due to fatigue each week. The committee began in June with 6 members.  Write the difference equations that describe the size of the committee (S) each week.  What's the long term prognosis?  ",
      "soln": "<h3>SOLUTION</h3>What are the rates and what are the amounts?  Rate: -0.1members/weekAmount: +4 members/weekS_{n+1} = S_{n} - 0.1 S_{n} + 4S_{n+1} = 0.9 S_{n} +4How will the membership evolve if it starts with 6?  It will grow toward an equilibrium:S_{e} = S_{n+1} = S_{n}S_{e} = 0.9 S_{e} + 40.1 S_{e} = 4S_{n} = 40We can also arrive at this equilibrium figure by the generic difference equationS_{n+1} = a S_{n} + bAndS_{e} = b / (1-a)",
      "tags": []
    },
    {
      "number": "0187",
      "question": " The diagram below represents a candidate's shifting weekly position on abortion.  Treating this as a Markov model (where each transition is independent of previous sequence of states), show us what the transition matrix would look like.  What do we call the state that would represent a candidate's final position on an issue?  Using this diagram, what prediction can you make about what this candidate's position would be if he were to be elected?<br /><img src=\"https://djjr.us/images/qbank/markov-candidate-position.png\"><br />",
      "soln": "<h3>SOLUTION</h3>TBA",
      "tags": []
    },
    {
      "number": "0188",
      "question": " \"Women's issues\" have been talked about a lot in the 2012 presidential campaigns.  One issue has been the hiring of women in leadership positions in society.  Draw a causal loop diagram to represent the following relationships.The more \"gender bias\" the fewer qualified women there will be.More qualified women means more women in positions of power.The more women in power, the less \"gender bias\" in society.Assuming we start with social bias and not many women in positions of power, how is this system likely to behave?Now let's modify things a bit.  Let's suppose we solve the \"supply\" problem and break the link between bias and the number of qualified women and that the latter grows significantly.  We change our model slightly:Societal bias produces social blindness to existence of qualified women.This social blindness means fewer women will be in the pool that is considered for positions of power.The fewer women in the pool, the fewer end up in positions of power.And, as before, the more (fewer) women in power, the less (more) \"gender bias\" in society.Draw this causal model.Now let's add another causal relation: the fewer women in positions of power, the more NGOs emerge to promote women's participation in government, etc.  The NGOs hit on a strategy called that the men in power call \"binders of women\" -- whereby they do the legwork needed to show the men the qualified women that their bias made them blind to.Add the NGOs and the binders to our causal model.  Identify a balancing loop that might portend the achievement of improved gender diversity in positions of power.",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": [
        "policy modeling",
        "social theory",
        "social network analysis"
      ]
    },
    {
      "number": "0189",
      "question": " Our campaign wants to hold a giant rally the Sunday before the election.  Many voters are fired up, many are tired.  Some think we can win, others not so sure.  Suppose the ready-to-jump-on-the-bandwagon threshold distribution is shown below.  The numbers here mean how many people are willing to come to the rally given different levels of expected participation.Analyze this information and describe the direction our organizing strategy should go.  What should we expect?  How much intervention could produce how much of a desired result.  Assume that our current research suggests about 40 people are currently planning on going to next week's event.<table class=\"wikitable\"><tr><td class=\"tdheader\">Threshold</td><td class=\"tdheader\">Count</td></tr><tr><td class=\"tdcentered\">0</td><td class=\"tdcentered\">12</td></tr><tr><td class=\"tdcentered\">10</td><td class=\"tdcentered\">3</td></tr><tr><td class=\"tdcentered\">20</td><td class=\"tdcentered\">4</td></tr><tr><td class=\"tdcentered\">30</td><td class=\"tdcentered\">5</td></tr><tr><td class=\"tdcentered\">40</td><td class=\"tdcentered\">6</td></tr><tr><td class=\"tdcentered\">50</td><td class=\"tdcentered\">9</td></tr><tr><td class=\"tdcentered\">60</td><td class=\"tdcentered\">13</td></tr><tr><td class=\"tdcentered\">70</td><td class=\"tdcentered\">17</td></tr><tr><td class=\"tdcentered\">80</td><td class=\"tdcentered\">19</td></tr><tr><td class=\"tdcentered\">90</td><td class=\"tdcentered\">6</td></tr><tr><td class=\"tdcentered\">100</td><td class=\"tdcentered\">0</td></tr></table>",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": [
        "design",
        "research methods"
      ]
    },
    {
      "number": "0190",
      "question": " An eager campaign volunteer wants to think rationally about where to put her time.  She does her research about phone-banking and canvassing and discovers the following.A full shift (calling hundreds!) at phone banking has a 10% chance of producing 20 votes and a 60% chance of producing 2 votes, 10% chance of producing no votes and a 20% chance of losing 2 votes.  Canvassing, by comparison, has a 20% chance of producing 8 votes, 30% chance of producing 4 votes, and a 50% chance of producing no votes.  Other things being equal, which would be a better use of her time?",
      "soln": "<h3>SOLUTION</h3>\\(EV(PhoneBank) = 0.1 \\times 20 + 0.6 \\times 2 + 0.2 \\times -2 = 2 + 1.2 - 0.4 = 2.8\\)\\(EV(Canvas) = 0.2 \\times 8 + 0.3 \\times 4 = 1.6 + 1.2 = 2.8\\)These being equal, we can do either and expect the same net result.",
      "tags": [
        "research methods"
      ]
    },
    {
      "number": "0191",
      "question": " A voter has an objective function which is to minimize the difference between her positions on two issues and those of the candidates.  Here positions can be described as a 3 on issue A and an 8 on issue B.  Candidate 1 has positions -2 and 9 while candidate 2 has positions 4 and 4.  For whom will the voter cast her ballot?",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": []
    },
    {
      "number": "0192",
      "question": " A student wants to maximize her GPA.  Three of her courses are required 3 credit courses and she estimates she will get a B in each.  She has a choice between an easier 3 credit course that she can definitely get an A in and a slightly harder 4 credit course in which she expects a B+.  What will she do?",
      "soln": "<h3>SOLUTION</h3>[[span style=\"color:darkgreen; font-family:courier;\"]]Her objective function is her GPA.  We calculate it like this:\n$$GPA = \frac { 1 }{ credits } sum { { grade }_{ i }quad \\times quad { credits }_{ i } }$$which in this case looks like this\n$$\frac { 1 }{ 12 } left( left( 3.0\\times 3 \right) +left( 3.0\\times 3 \right) +left( 3.0\\times 3 \right) +left( 4.0\\times 3 \right)  \right) =\frac { 39 }{ 12 } =3.25$$or\n$$ \frac { 1 }{ 13 } left( left( 3.0\\times 3 \right) +left( 3.0\\times 3 \right) +left( 3.0\\times 3 \right) +left( 3.67\\times 4 \right)  \right) =\frac { 41.67 }{ 13 } =3.21$$ ",
      "tags": []
    },
    {
      "number": "0193",
      "question": " In \"Cosmos & Taxis\" Friedrich von Hayek distinguishes two kinds of order.  What does he call them?  What are some synonyms for his terms?  Demonstrate your understanding of the difference by giving examples of social order of each type.",
      "soln": "<h3>SOLUTION</h3>Checklist<ol><li><a href=\"https://en.wikipedia.org/wiki/Friedrich_Hayek\" target=\"_blank\">Hayek</a> was a mid-twentieth century Austrian-born economic theorist who won the Nobel prize in 1974 (along with Gunnar Myrdal).</li><li>Probably most famous for early work called \"The Road to Serfdom\" (1940). Hayek is a hero to libertarian, free-market conservatives and so is often dismissed (and ignored) by more liberal social scientists.</li><li>His writings range across many topics, but for our purposes what's important is his theoretical treatment of emergent, decentralized order.</li><li>//Cosmos// and //Taxis// are from the Greek and refer to social order which emerges without central direction (cosmos) and that which is built according to a plan (taxis).</li><li>Provide some synonyms of each.</li><li>Important for Hayek is the idea that some problems in the world are too complex for a single mind or an organization of minds to fully comprehend and plan a solution for. This idea is the basis for a critique of central planning and government intervention.</li><li>But Hayek is not an anarchist! For these \"market\" solutions to work, social agents need to follow a limited set of rules so that their interactions can be orderly make use of local information and aggregate to yield order.  This allows Hayek to make a distinction between \"rules\" and \"commands\" - the former are more bottom up and the latter top down.</li><li>Provide some examples of things that show order in each of the types.</li></ol> ",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0194",
      "question": " Who wrote about the \"invisible hand\" and what does it mean for us?",
      "soln": "<h3>SOLUTION</h3>CHECKLIST<ol><li>//https://en.wikipedia.org/wiki/Adam_Smith Adam Smith// is known as the originator of the phrase \"<a href=\"https://en.wikipedia.org/wiki/Invisible_hand\" target=\"_blank\">invisible hand</a>.\"</li><li>Smith is a mid 18th century Scottish moral philosopher and political economist.</li><li>The phrase originates in his 1859 //Theory of Moral Sentiments,// but it is most associated with his 1776 //The Wealth of Nations,// although it only appears in that book once.</li><li>The phrase refers to the apparent guiding force that manages to produce social order even though no one or thing is actually guiding social behavior. It is an early expression of the notion of \"unintended consequences,\" especially the idea of unintended social benefits of selfish individual behavior.  One might see in that an early version of \"micro-motives, macro-behavior\" that Schelling wrote about two hundred years later.</li><li>This points to the idea that government or state \"interference\" in the economy is not needed since individuals looking out for their own self interest will lead to a market equilibrium that benefits everyone.</li><li>Perhaps most well known passage is \"It is not from the benevolence of the butcher, the brewer, or the baker that we expect our dinner, but from their regard to their own interest. We address ourselves, not to their humanity but to their self-love, and never talk to them of our own necessities but of their advantages.\" Smith means here that we find bread on the shelves, food on our table, electricity at the outlet not because anyone wants these results but because each actor is trying to get by in her or his own business.</li></ol>",
      "tags": []
    },
    {
      "number": "0195",
      "question": " Complete or paraphrase the passage that begins \"It is not from the beneficence of the baker....\"  Who said it?  In what context?  What does it mean?",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": []
    },
    {
      "number": "0196",
      "question": " Explain this table:[[=image http://djjr-courses.wikidot.com/local--files/soc116:images/PD-table-Axelrod.gif size=\"medium\"]]",
      "soln": "<h3>SOLUTION</h3>See [[[soc116:notes-r017-axelrod-evolution| Axelrod: Evolution of Cooperation]]]",
      "tags": []
    },
    {
      "number": "0197",
      "question": " Explain and give an example of a //dominant strategy// in a prisoner's dilemma game.",
      "soln": "<h3>SOLUTION</h3>See [[[soc116:notes-r017-axelrod-evolution| Axelrod: Evolution of Cooperation]]]Checklist<ol><li>This question derives from the ideas presented by Robert Axelrod in articles on the evolution of cooperation and cooperation during combat in World War I.</li><li>Axelrod is a contemporary political scientist.</li><li>Prisoner's Dilemma is an example of a \"game\" studied in the field of game theory. Game theory is most often associated with economics though other fields make use of it too (including sociology, political science, computer science, robotics, and international relations).</li><li>In a prisoner's dilemma game there are two player or \"prisoners.\"  We imagine they have been arrested on suspicion of having done a crime together.</li><li>The police separate the two players and attempt to get them to \"rat on\" one another. The police suggest that if one rats on the other the rat will get off with a lighter sentence.</li><li>There are three different outcomes: both prisoner's remain silent, one rats while the other stays silent, or both betray their partner.</li><li>To be a prisoner's dilemma game, the \"rewards\" associated with the different outcome have to stand in a certain relation to one another. Namely:</li></ol> # Ratting on a partner who stays silent (temptation) is better than both maintaining silence (mutual cooperation) # Both maintaining silence (mutual cooperation) is better than both caving in (mutual defection) # Both caving in (mutual defection) is better than being ratted on while you stay silent (sucker's payoff)<ol><li>For each individual, defection (ratting) is better than cooperation (silence) no matter what the other player does.</li></ol> # If A is silent, B is better of ratting (temptation > mutual cooperation) # If A talks, B is better off talking (mutual defection > sucker's payoff)<ol><li>We say that a strategy (a choice of \"moves\") is DOMINANT if it is the better strategy against any possible move by the opponent.</li></ol>",
      "tags": []
    },
    {
      "number": "0198",
      "question": " What is \"tit-for-tat\" and why, according to Robert Axelrod, is it so effective?",
      "soln": "<h3>SOLUTION</h3>See [[[soc116:notes-r017-axelrod-evolution| Axelrod: Evolution of Cooperation]]] notes.",
      "tags": []
    },
    {
      "number": "0199",
      "question": " In the November 2012 general elections some sitting members of congress and the senate failed in their re-election effort and some opted not to run for re-election.  After the election we describe those who are still in office but won't be in January as \"<a href=\"http://en.wikipedia.org/wiki/Lame_duck_session_(United_States)\" target=\"_blank\">lame ducks</a>.\"  Drawing on theoretical ideas and empirical ideas in the work of Robert Axelrod, make some predictions of how the dynamics of voting and deal making might be different during a lame duck session.",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": []
    },
    {
      "number": "0200",
      "question": " One of the most important concepts coming out of market, rational choice, and game theory models is \"equilibrium.\"  What do we mean by an equilibrium in game theory?  Give an example and explain what we would mean if we said \"get caught in a bad equilibrium.\"",
      "soln": "<h3>SOLUTION</h3>An equilibrium is a situation in which all the \"forces\" in a system are balanced. An equilibrium can be stable, meaning that it returns to equilibrium after small perturbations (changes), or unstable, meaning that small changes can result in the system shifting to some other state.Some examples from different fields are shown below. Very important point: equilibrium does mean STATIC (i.e., frozen, nothing changing). Rather, an equilibrium is a state in which things can be changing but all the changes balance one another. In a chemical reaction in which substances A and B combine to make substance C and substance C breaks down to form A and B we reach an equilibrium when the rate at which the formation reaction equals the rate of the breakdown reaction. Molecules are constantly changing the the overall mixture reaches a steady state equilibrium.[[image soc116:images/equilibrium-chemistry.png height=\"150\"]][[image soc116:images/equilibrium-econ.png height=\"150\"]][[image soc116:images/equilibrium-gymnast.png height=\"150\"]][[image soc116:images/equilibrium-gas.png height=\"150\"]][[image soc116:images/equilibrium-damping.png height=\"150\"]][[image soc116:images/equilibrium-saddle.png height=\"150\"]][[image soc116:images/equilibrium-schelling.png height=\"150\"]][[image soc116:images/equilibrium-nash.png height=\"150\"]]CHECKLIST<ol><li>Forces are balanced, system will stay in a given state unless disturbed</li><li>Does not mean static - can be even shifting back and forth, but no net change</li><li>In game theory an equilibrium is reached when players cannot improve their situation by changing their behavior on the assumption that others stick with what they are doing.</li><li>In the prisoner's dilemma there is an equilibrium: if we are both defecting (ratting) then neither of us can do better by changing to cooperation if the other stays with defecting.  If we are both cooperating we do better AS A WHOLE, but either of us could do better AS AN INDIVIDUAL by switching.</li><li>In Schelling's critical mass model, an equilibrium could be stable or unstable. In a stable equilibrium, a slight change in the number who come or are expected will not change the number who actually come - the system returns to the equilibrium. In an unstable equilibrium, a slight deviation - a few more or a few less - can cause the system to \"tip\" - the attendance gets bigger an bigger until reaching a high participation equilibrium or it gets smaller and smaller until only a handful of die-hards attend.</li></ol>",
      "tags": []
    },
    {
      "number": "0201",
      "question": " (1) Explain what 'the allegory of the dying seminar' was in Thomas Schelling's work.  (2) What (incorrect) conclusion about human behavior might  observers draw from the dying seminar? (3) What other examples of this phenomenon does Schelling offer?  (4) What generic phenomenon are these all examples of?",
      "soln": "<h3>SOLUTION</h3>(1) Colleagues agree to meet weekly to talk about their work. At first most folks come, but over time the numbers dwindle until eventually the seminar is cancelled altogether. (155.3)(2) There just wasn't as much interest in having a seminar as had been thought. People didn't really want to spend time at a seminar. It did not provide them with enough benefits to be worth the effort. (154.5)(3) Pickup volleyball game, pedestrians at a crosswalk, applauding students, packing up books at end of class, obeying rules like parking and smoking regulations, neighborhood deterioration, racial \"flight\" (154.7-155.5)(4) Individuals are basing their behavior on how many others are behaving in some manner or how intensely others are behaving in some manner. Generically, we call these \"critical mass\" problems.",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0202",
      "question": " (a) Set up the issue of whether to use the metric system or the English system of weights and measures as a coordination game.  (b) Identify any equilibria and whether they are efficient or not.  (c) If we are in the English/English cell, describe both players' motivations to unilaterally switch to metric.  (d) what if we were in the metric/English cell?",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": []
    },
    {
      "number": "0203",
      "question": " Group these examples of coordination games and explain.<ol><li>do we store the ketchup in the fridge or in the cabinet?</li><li>smokers should marry smokers and non-smokers should marry non-smokers</li><li>cat people and dog people and dating</li><li>people's sense of what constitutes rudeness</li><li>infidelity is never OK, infidelity is OK in certain circumstances</li><li>Erring on the side of caution; nothing ventured, nothing gained</li><li>Every woman for herself; Let's work as a team.</li></ol>",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": []
    },
    {
      "number": "0204",
      "question": " Suppose the agents in a population have four behaviors - W, X, Y, Z - and that each behavior is either present or absent.  When two agents meet they may have all the same behaviors, none of the same behaviors, or 1 or 2 behaviors in common.  Suppose the probability of interaction is proportional to their similarity.  IF they do interact, they flip a coin and who ever wins gets imitated by the other agent.In the grid below, determine the probability of interaction between each pair of neighbors (assume no diagonal interaction for now)<table class=\"wikitable\"><tr><td class=\"tdcentered\">A _</td></tr></table>1110 ||= B _ 1010 ||= C _ 0010 ||= D _ 1001 ||<table class=\"wikitable\"><tr><td class=\"tdcentered\">E _</td></tr></table>0000 ||= F _ 1111 ||= G _ 1001 ||= H _ 1011 ||<table class=\"wikitable\"><tr><td class=\"tdcentered\">I _</td></tr></table>1000 ||= J _ 1000 ||= K _ 1110 ||= L _ 0000 ||<table class=\"wikitable\"><tr><td class=\"tdcentered\">M _</td></tr></table>0010 ||= N _ 1100 ||= O _ 0100 ||= P _ 0111 ||",
      "soln": "<h3>SOLUTION</h3><table class=\"wikitable\"><tr><td>~</td><td class=\"tdheader\">NORTH</td><td class=\"tdheader\">EAST</td><td class=\"tdheader\">SOUTH</td><td class=\"tdheader\">WEST</td></tr><tr><td class=\"tdheader\">A</td><td class=\"tdcentered\">-</td><td class=\"tdcentered\">B:0.75</td><td class=\"tdcentered\">E:0.25</td><td class=\"tdcentered\">-</td></tr><tr><td class=\"tdheader\">B</td><td class=\"tdcentered\">-</td><td class=\"tdcentered\">C:0.75</td><td class=\"tdcentered\">F:0.5</td><td class=\"tdcentered\">A:0.75</td></tr><tr><td class=\"tdheader\">C</td><td class=\"tdcentered\">-</td><td class=\"tdcentered\">D:0.25</td><td class=\"tdcentered\">G:0.25</td><td class=\"tdcentered\">B:0.75</td></tr><tr><td class=\"tdheader\">D</td><td class=\"tdcentered\">-</td><td class=\"tdcentered\">-</td><td class=\"tdcentered\">H:0.75</td><td class=\"tdcentered\">C:0.25</td></tr><tr><td>ETC.</td></tr></table>",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0205",
      "question": " Suppose the agents in a population have four behaviors - W, X, Y, Z - and that each behavior is either present or absent.  When two agents meet they may have all the same behaviors, none of the same behaviors, or 1 or 2 behaviors in common.  Suppose the probability of interaction is proportional to their similarity.  IF they do interact, they flip a coin and who ever wins gets imitated by the other agent.Use the two random number tables below (the left table for doing a Monte Carlo simulation of whether interaction occurs and the left table to determine which agent is the leader and which is the follower) to work out the next state n the grid below, determine the probability of interaction between each pair of neighbors (assume no diagonal interaction for now)<table class=\"wikitable\"><tr><td class=\"tdcentered\">   69</td><td class=\"tdcentered\">   72</td><td class=\"tdcentered\">   43</td><td class=\"tdcentered\">   97</td><td class=\"tdcentered\">   87</td><td class=\"tdcentered\">   0</td><td class=\"tdcentered\">   0</td><td class=\"tdcentered\">   0</td><td class=\"tdcentered\">   1</td><td class=\"tdcentered\">   1</td></tr><tr><td class=\"tdcentered\">   37</td><td class=\"tdcentered\">   86</td><td class=\"tdcentered\">   35</td><td class=\"tdcentered\">   23</td><td class=\"tdcentered\">   41</td><td class=\"tdcentered\">   1</td><td class=\"tdcentered\">   1</td><td class=\"tdcentered\">   0</td><td class=\"tdcentered\">   0</td><td class=\"tdcentered\">   1</td></tr><tr><td class=\"tdcentered\">   88</td><td class=\"tdcentered\">   36</td><td class=\"tdcentered\">   94</td><td class=\"tdcentered\">   60</td><td class=\"tdcentered\">   60</td><td class=\"tdcentered\">   1</td><td class=\"tdcentered\">   1</td><td class=\"tdcentered\">   1</td><td class=\"tdcentered\">   0</td><td class=\"tdcentered\">   0</td></tr><tr><td class=\"tdcentered\">   84</td><td class=\"tdcentered\">   26</td><td class=\"tdcentered\">   3</td><td class=\"tdcentered\">   87</td><td class=\"tdcentered\">   12</td><td class=\"tdcentered\">   0</td><td class=\"tdcentered\">   0</td><td class=\"tdcentered\">   1</td><td class=\"tdcentered\">   1</td><td class=\"tdcentered\">   0</td></tr><tr><td class=\"tdcentered\">   8</td><td class=\"tdcentered\">   10</td><td class=\"tdcentered\">   56</td><td class=\"tdcentered\">   52</td><td class=\"tdcentered\">   29</td><td class=\"tdcentered\">   1</td><td class=\"tdcentered\">   1</td><td class=\"tdcentered\">   1</td><td class=\"tdcentered\">   0</td><td class=\"tdcentered\">   0</td></tr><tr><td class=\"tdcentered\">   26</td><td class=\"tdcentered\">   5</td><td class=\"tdcentered\">   30</td><td class=\"tdcentered\">   15</td><td class=\"tdcentered\">   58</td><td class=\"tdcentered\">   0</td><td class=\"tdcentered\">   1</td><td class=\"tdcentered\">   1</td><td class=\"tdcentered\">   1</td><td class=\"tdcentered\">   1</td></tr><tr><td class=\"tdcentered\">   95</td><td class=\"tdcentered\">   3</td><td class=\"tdcentered\">   95</td><td class=\"tdcentered\">   18</td><td class=\"tdcentered\">   69</td><td class=\"tdcentered\">   0</td><td class=\"tdcentered\">   0</td><td class=\"tdcentered\">   1</td><td class=\"tdcentered\">   0</td><td class=\"tdcentered\">   0</td></tr><tr><td class=\"tdcentered\">   71</td><td class=\"tdcentered\">   42</td><td class=\"tdcentered\">   55</td><td class=\"tdcentered\">   64</td><td class=\"tdcentered\">   21</td><td class=\"tdcentered\">   0</td><td class=\"tdcentered\">   0</td><td class=\"tdcentered\">   1</td><td class=\"tdcentered\">   1</td><td class=\"tdcentered\">   0</td></tr><tr><td class=\"tdcentered\">   68</td><td class=\"tdcentered\">   75</td><td class=\"tdcentered\">   90</td><td class=\"tdcentered\">   19</td><td class=\"tdcentered\">   64</td><td class=\"tdcentered\">   0</td><td class=\"tdcentered\">   0</td><td class=\"tdcentered\">   1</td><td class=\"tdcentered\">   1</td><td class=\"tdcentered\">   0</td></tr><tr><td class=\"tdcentered\">   75</td><td class=\"tdcentered\">   13</td><td class=\"tdcentered\">   77</td><td class=\"tdcentered\">   1</td><td class=\"tdcentered\">   89</td><td class=\"tdcentered\">   0</td><td class=\"tdcentered\">   0</td><td class=\"tdcentered\">   0</td><td class=\"tdcentered\">   0</td><td class=\"tdcentered\">   0</td></tr></table><table class=\"wikitable\"><tr><td class=\"tdcentered\">A _1110</td><td class=\"tdcentered\">B _ 1010</td><td class=\"tdcentered\">C _ 0010</td><td class=\"tdcentered\">D _ 1001</td></tr><tr><td class=\"tdcentered\">E _0000</td><td class=\"tdcentered\">F _ 1111</td><td class=\"tdcentered\">G _ 1001</td><td class=\"tdcentered\">H _ 1011</td></tr><tr><td class=\"tdcentered\">I _1000</td><td class=\"tdcentered\">J _ 1000</td><td class=\"tdcentered\">K _ 1110</td><td class=\"tdcentered\">L _ 0000</td></tr><tr><td class=\"tdcentered\">M _0010</td><td class=\"tdcentered\">N _ 1100</td><td class=\"tdcentered\">O _ 0100</td><td class=\"tdcentered\">P _ 0111</td></tr></table>",
      "soln": "<h3>SOLUTION</h3>Use this procedure.  Starting with agent A, consider N,E,S,W neighbors in turn.Look at neighbor.  Determine level of similarity.Grab next random number.  If random number &lt; level then interact.If interacting, look at random number in second chart.  If a 1 then this agent is leader and other agent adopts her behaviors.  Otherwise vice versa.Next neighbor.NOTE: need to decide whether we re-do interactions in a given round.  Smart thing would be not to since they may have interacted and already switch.",
      "tags": [
        "social theory",
        "computational thinking"
      ]
    },
    {
      "number": "0206",
      "question": " Suppose the agents in a population have four behaviors - W, X, Y, Z - and that each behavior is either present or absent.  Further suppose that there is some pressure toward consistency such that having a \"don't do\" behavior next to a \"do do\" behavior is uncomfortable and so agents have some internal urge to change their behavior to be more consistent.Let's say that a behavior that is the only one of its type (a 0 among three 1s, for example) has a 50 percent chance of switching to make the set fully consistent.  Each behavior that's one of an even split (e.g., a 0 in a 0011 agent) has a 10% chance of switching. We can put it this way: there is a 10% chance the first behavior changes, 10% the second, etc. and 60% chance no change happens.Use the two random number table below to work out the next state n the grid below, determine the probability of interaction between each pair of neighbors (assume no diagonal interaction for now).  For 50% chance use \"random number above 50 = change, below 50 = stay.\"  For the 10% chances, 0<10 is change first, 10<20 change 2, etc.<table class=\"wikitable\"><tr><td class=\"tdcentered\">   69</td><td class=\"tdcentered\">   72</td><td class=\"tdcentered\">   43</td><td class=\"tdcentered\">   97</td><td class=\"tdcentered\">   87</td></tr><tr><td class=\"tdcentered\">   37</td><td class=\"tdcentered\">   86</td><td class=\"tdcentered\">   35</td><td class=\"tdcentered\">   23</td><td class=\"tdcentered\">   41</td></tr><tr><td class=\"tdcentered\">   88</td><td class=\"tdcentered\">   36</td><td class=\"tdcentered\">   94</td><td class=\"tdcentered\">   60</td><td class=\"tdcentered\">   60</td></tr><tr><td class=\"tdcentered\">   84</td><td class=\"tdcentered\">   26</td><td class=\"tdcentered\">   3</td><td class=\"tdcentered\">   87</td><td class=\"tdcentered\">   12</td></tr><tr><td class=\"tdcentered\">   8</td><td class=\"tdcentered\">   10</td><td class=\"tdcentered\">   56</td><td class=\"tdcentered\">   52</td><td class=\"tdcentered\">   29</td></tr><tr><td class=\"tdcentered\">   26</td><td class=\"tdcentered\">   5</td><td class=\"tdcentered\">   30</td><td class=\"tdcentered\">   15</td><td class=\"tdcentered\">   58</td></tr><tr><td class=\"tdcentered\">   95</td><td class=\"tdcentered\">   3</td><td class=\"tdcentered\">   95</td><td class=\"tdcentered\">   18</td><td class=\"tdcentered\">   69</td></tr><tr><td class=\"tdcentered\">   71</td><td class=\"tdcentered\">   42</td><td class=\"tdcentered\">   55</td><td class=\"tdcentered\">   64</td><td class=\"tdcentered\">   21</td></tr><tr><td class=\"tdcentered\">   68</td><td class=\"tdcentered\">   75</td><td class=\"tdcentered\">   90</td><td class=\"tdcentered\">   19</td><td class=\"tdcentered\">   64</td></tr><tr><td class=\"tdcentered\">   75</td><td class=\"tdcentered\">   13</td><td class=\"tdcentered\">   77</td><td class=\"tdcentered\">   1</td><td class=\"tdcentered\">   89</td></tr></table><table class=\"wikitable\"><tr><td class=\"tdcentered\">A _1110</td><td class=\"tdcentered\">B _ 1010</td><td class=\"tdcentered\">C _ 0010</td><td class=\"tdcentered\">D _ 1001</td></tr><tr><td class=\"tdcentered\">E _0000</td><td class=\"tdcentered\">F _ 1111</td><td class=\"tdcentered\">G _ 1001</td><td class=\"tdcentered\">H _ 1011</td></tr></table>",
      "soln": "<h3>SOLUTION</h3>   \t\t\t <table class=\"wikitable\"><tr><td class=\"tdheader\">Agent</td><td class=\"tdheader\">Random Number</td><td class=\"tdheader\">Comment</td><td class=\"tdheader\">New Behavior Vector</td></tr><tr><td class=\"tdheader\">A _1110</td><td class=\"tdcentered\">8</td><td>no change</td><td class=\"tdcentered\">1110</td></tr><tr><td class=\"tdheader\">B _ 1010</td><td class=\"tdcentered\">10</td><td>change second behavior</td><td class=\"tdcentered\">1110</td></tr><tr><td class=\"tdheader\">C _ 0010</td><td class=\"tdcentered\">56</td><td>change the 1</td><td class=\"tdcentered\">0000</td></tr><tr><td class=\"tdheader\">D _ 1001</td><td class=\"tdcentered\">52</td><td>no change</td><td class=\"tdcentered\">1001</td></tr><tr><td class=\"tdheader\">E _0000</td><td class=\"tdcentered\">29</td><td>no change</td><td class=\"tdcentered\">0000</td></tr><tr><td class=\"tdheader\">F _ 1111</td><td class=\"tdcentered\">26</td><td>no change</td><td class=\"tdcentered\">0000</td></tr><tr><td class=\"tdheader\">G _ 1001</td><td class=\"tdcentered\">5</td><td>change first behavior</td><td class=\"tdcentered\">0001</td></tr><tr><td class=\"tdheader\">H _ 1011</td><td class=\"tdcentered\">30</td><td>no change</td><td class=\"tdcentered\">1011</td></tr></table>",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0207",
      "question": " Convert the following logic into a set of step-by-step instructions in a manner that uses stepwise refinement.To execute coordination we proceed as follows.  Each agent will consider in turn its north, east, south, and west neighbors.  First the agent determines whether interaction will take place at all based on similarity.  Then, if they do interact, they flip a coin to decide who is the leader and who is the follower.  Then the follower copies the traits of the leader.  And then onto the next neighbor if there is one.We can incorporate the following design decisions into our model: (1) neighbors who have already interacted in a given round do not do so again; (2) an agent can change multiple times during a given round; (3) all interactions are with the agent's current state.",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": [
        "policy modeling",
        "social theory",
        "design"
      ]
    },
    {
      "number": "0208",
      "question": " Explicate and comment:&gt; One of our main contentions will be that very complex orders, comprising more particular facts than any brain could ascertain or manipulate, can be brought about only through forces inducing the formation of spontaneous orders (Hayek 1976: 143.5).",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": []
    },
    {
      "number": "0209",
      "question": " Explicate and comment.<blockquote> The distinction of this kind of order from one which has been made by somebody putting the elements of a set in their places or directing their movements is indispensable for any understanding of the processes of society as well as for all social policy.  There are several terms available for describing each kind of order.  The made order which we have already referred to as an exogenous order or an arrangement may again be described as a construction, an artificial order or, especially where we have to deal with a directed social order, as an organization.  The grown order, on the other hand, which we have referred to as a self-generating or endogenous order, is in English mosts conveniently described as a spontaneous order (Hayek 1976: 142.1-3).</blockquote>",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": [
        "policy modeling",
        "social theory"
      ]
    },
    {
      "number": "0210",
      "question": " Explicate and comment:<blockquote> This means that, though the use of spontaneous ordering forces enables us to induce the formation of an order of such a degree of complexity (namely comprising elements of such numbers, diversity and variety of conditions) as we could never master intellectually, or deliberately arrange, we will have less power over the details of such an order than we would of one which we produce by arrangement.  In the case of spontaneous orders we may, by determining some of the factors which shape them, determine their abstract features, but we will have to leave the particulars to circumstances which we do not know.  Thus, by relying on the spontaneously ordering forces, we can extend the scope or range of the order which we may induce to form, precisely because its particular manifestation will depend on many more circumstances than can be known to us-and in the case of a social order, because such an order will utilize the separate knowledge of all its several members, without this knowledge ever being concentrated in a single mind, or being subject to those processes of deliberate coordination and adaptation which a mind performs (Hayek 1976: 145.5-7).</blockquote>",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0211",
      "question": " Explicate and comment:<blockquote> To put this differently: in a social order the particular circumstances to which each individual will react will be those known to him.  But the individual responses to particular circumstances will result in an overall order only if the individuals obey such rules as will produce and order.  Even a very limited similarity in their behavior may be sufficient if the rules which they all obey are such as to produce an order.  Such an order will always constitute an adaptation to the multitude of circumstances which are known to all the members of that society taken together but which are not known as a whole to any one person (Hayek 1976: 147.7).</blockquote>",
      "soln": "<h3>SOLUTION</h3>This is a passage from Friedrich Hayek's \"Cosmos and Taxis.\"  In this excerpt Hayek contrasts two concepts of order: \"made\" order is deliberate, thought up, conceptualized as a plan and implemented with the order as goal; \"grown\" order is emergent, no one actor or group of actors has the order in mind, no one is coordinating behavior so as to produce the order, rather individuals follow limited rule sets and respond to local information they have access to and their actions add up to an overall order. Adam Smith's \"invisible hand\" is the imaginary designer of this emergent order.In this passage Hayek starts by saying that social actors have access to a local environment of circumstances and this is what s/he reacts to. But these actions will only add up to \"order\" if the rules according to which the actor behaves are the kinds of rules that produce order.  Although Hayek denies that there is any brain big enough to be in charge of the order, he does seem to admit that our brains might be big enough to analyze rules to determine what kinds of rules might produce order and what kinds not.  One thing he seems to suggest is that it might be important for all the actors to be following more or less the same set of rules, though he seems to be suggesting that only moderate similarity may be necessary.  The last sentence makes the big point: people are all in different circumstances; if you permit them to figure out what's good for them to do \"locally\" you can generate an overall system that is well adapted to an environment that has lots of variation across space and perhaps also change over time.  CHECKLIST<ol><li><a href=\"https://en.wikipedia.org/wiki/Friedrich_Hayek\" target=\"_blank\">Hayek</a> was a mid-twentieth century Austrian-born economic theorist who won the Nobel prize in 1974 (along with Gunnar Myrdal).</li><li>Probably most famous for early work called \"The Road to Serfdom\" (1940). Hayek is a hero to libertarian, free-market conservatives and so is often dismissed (and ignored) by more liberal social scientists.</li><li>His writings range across many topics, but for our purposes what's important is his theoretical treatment of emergent, decentralized order.</li><li>This passage is from the excerpt \"Cosmos and Taxis,\" Greek words that refer to social order which emerges without central direction (cosmos) and that which is built according to a plan (taxis).</li><li>This passage describes how information and rules affect behavior.</li><li>Hayek notes that individuals only have access to local information (from their own circumstances) and that this is what they react to.</li><li>But, they have to use some basic set of rules to react to the information.</li><li>And these rules have to be the kind of rules that will lead to order (the implication being that you could have \"wrong\" rules that won't produce order).</li><li>These rules are NOT centralized commands!</li><li>If the rules give rise to order then what we have is the \"social organism\" adapting to all manner of locally different circumstances even though no one knows about all the circumstances.</li></ol>",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0212",
      "question": " Explicate and comment:<blockquote> In any group of men of more than the smallest size, collaboration will always rest both on spontaneous order as well as on deliberate organization.  There is no doubt that for many limited tasks organization is the most powerful method of effective co-ordination because it enables us to adapt the resulting order much more fully to our wishes, while where, becuase of the complexity of the circumstances to be taken into account, we must rely on the forces making for a spontaneous order, our power over the particular contents of this order is necessarily restricted.</blockquote><blockquote></blockquote><blockquote> That the two kinds of order will regularly coexist in every society of any degree of complexity does not mean, however, that we can combine them in any manner we like.  What in fact we find in all free societies is that, although groups of men will join in organizations for the achievement of some particular ends, the co-ordination of the activities of all these separate organizations, as well as of the separate individuals, is brought about by the forces making for a spontaneous order.  The family, the farm, the plant, the firm, the corporation and the various associations, and all the public institutions including government, are organizations which in turn are integrated into a more comprehensive spontaneous order (Hayek 1976: 149.5-7).</blockquote>",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": [
        "policy modeling",
        "social theory",
        "design",
        "research methods"
      ]
    },
    {
      "number": "0213",
      "question": " Explicate and comment:<blockquote> What the general argument against 'interference' thus amounts to is that, although we can endeavor to improve a spontaneous order by revising the general rules on which it rests, and can supplement its results by the efforts of various organizations, we cannot improve the results by specific commands that deprive its members of the possibility of using their knowledge for their purposes (Hayek 1976:153.1).</blockquote>",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": []
    },
    {
      "number": "0214",
      "question": " Explicate and comment:<blockquote> Akerlof generalized this model to a number of markets in which there is unequal information on the two sides - insurance companies know less than you do, usually, about whether you are accident prone, or susceptible to hereditary diseases, or are contemplating suicide.  Life insurance rates for sixty-five-year-olds must allow for a large fraction who are not long for this world.  And those who know they are healthy and have a family history of longevity and are exposed to few risks have to pay the same premium as the poorer risks; life insurance being unattractive [to them] at that price, few of them buys it.  The average life expectancy of the customers goes down, the rates go up further, and the bargain now looks poor even to those of normal life expectancy.  And so forth.</blockquote><blockquote></blockquote><blockquote> .... It is akin to, and sometimes coincides with, those situations in which the below average, or the above average, withdraw or won't join, causing some potential market or institution to unravel.  Because people vary and because averages matter, there may be no sustainable critical mass; and the unraveling behavior, or initial failure to get the activity going at all, has much the appearance of a critical mass that is almost but not quite achieved (Schelling 1978: 159.5-7).</blockquote>",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0215",
      "question": " Explicate and comment:<blockquote> The division of labour, from which so many advantages are derived, is not originally the effect of any human wisdom, which foresees and intends that general opulence to which it gives occasion.  It is the necessary, though very slow and gradual consequence of a certain propensity in human nature which has in view no such extensive utility; the propensity to truck, barter, and exchange one thing for another (Smith 1776: 171.8).</blockquote>",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": []
    },
    {
      "number": "0216",
      "question": " Explicate and comment:<blockquote> But man has almost constant occasion for the help of his brethern, and it is in vain for him to expect it from their benevolence only.  He will be more likley to prevail if he can interest their self-love in his favor, and show them that it is for their own advantage to do for him what he requires of them.  Whoever offers to another a bargain of any kind, proposes to do this.  Give me that which I want, and you shall have this which you want, is the meaning of every such offer; and it is in this manner that we obtain from one another the far greater part of those offices which we stand in need of.  It is not from the benevolence of the butcher, the brewer, or the baker that we expect our dinner, but from their regard to their own interest.  We address ourselves, not to their humanity but to their self-love, and never talk to them of our own necessities but of their advantages (Smith 1776: 172.5).</blockquote>",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": []
    },
    {
      "number": "0217",
      "question": " Sociologists and anthropologists gripe endlessly about rational actor models, failing, over and over again, to understand that they are MODELS, not descriptions.  Explicate and comment on this passage to show that you understand what the value of a model like prisoner's dilemma is for social theory.<blockquote> The Cooperation Theory that is presented...is based upon an investigation of individuals who pursue their own self-interest without the aid of a central authority to force them to cooperate with each other.  The reason for assuming self-interest is that it allows an examination of the difficult case in which cooperation is not completely based upon a concern for others or upon the welfare of the group as a whole.  It must, however, be stressed that this assumption is actually much less restrictive than it appears.  ... So the assumption of self interest is really just an assumption that concern for others does not completely solve the problem of when to cooperate with them and when not to (Axelrod 1984: 177.2).</blockquote>",
      "soln": "<h3>SOLUTION</h3>This question asks you EXPLICATE - that means go sentence by sentence and tell us what it means. Translate it into your own words. Don't just imagine you'll make this up on the spot during the exam.  And look at the original text, not just this version - the elided part might be helpful.Your commentary will be a chance to show that you get what Axelrod is up to, why it fits in this section of the course, and what is going on \"metatheoretically\" - that is, you should recognize that this is a different kind of theorizing - one that's a little more logical and mathematical in spirit than some of more narrative theories we have read.Note too: The criticism \"people are not always rational\" is no better than its converse \"people are sometimes rational.\" If we build a model starting with an assumption of self interest we are effectively bracketing, not denying, a whole package of social and psychological \"stuff\" that comes into play in real interactions.  CHECKLIST<ol><li>This passage is from an essay by Robert Axelrod. We read excerpts from his articles on the evolution of cooperation and cooperation during combat in World War I.</li><li>Axelrod is a contemporary political scientist.</li><li>The prisoner's dilemma model at the center of this assumes a rational actor who will always act in his own self interest.</li><li>When Axelrod says \"allows an examination of the difficult case in which cooperation is not completely based upon a concern for others or upon the welfare of the group as a whole\" he is saying that it allows us to look at human behavior without assuming social, normative, altruistic overlays.</li><li>Sociologists sometimes balk at this \"assumption\" saying that \"real\" people are not purely selfish.</li><li>Axelrod is suggesting that</li></ol>",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0218",
      "question": " Explicate and comment:<blockquote> The result was another victory for TIT FOR TAT!  The analysis of the data from these tournaments reveals four properties which tend to make a decision rule successful: avoidance of unnecessary conflict by cooperating as long as the other player does, provocability in the face of an uncalled for defection by the other, forgiveness after responding to a provocation, and clarity of behavior so that the other player can adapt to your pattern of action.</blockquote><blockquote></blockquote><blockquote> These results from the tournaments demonstrate that under suitable conditions, cooperation can indeed emerge in a world of egoists without central authority (Axelrod 1984: 184.5).</blockquote>",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": [
        "policy modeling",
        "social theory",
        "computational thinking",
        "research methods"
      ]
    },
    {
      "number": "0219",
      "question": " Translate the following into inequalities.<ol><li>I can only I spend as much cash as in my wallet on dinner, dessert, drinks, and a tip and I really want to have dinner and drinks though I might pass on dessert.</li><li>You are managing a youth shelter. Kids present with an array of personal challenges, each of which require different levels of attention from your staff. Clients with issue A require 4 hours of attention per week. Issue B, about 2 hours, C requires 16, and D 7. Your budget allows you to staff 75 hours per week.</li><li>Breakfast is some eggs, some pancakes, some bacon. You have to have at least twice as many pancakes as eggs. You can't have fewer than 2 strips of bacon.</li></ol>",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": []
    },
    {
      "number": "0220",
      "question": " What is the objective function in each of the following situations?<ol><li>What is the largest volume box I can make by folding a piece of cardboard that is A inches by B inches?</li><li>Pancakes cost $1 each, eggs are 1.50, and blintzes are 2. Pancakes have 200 calories, eggs 125 and blintzes 450. What combination gives me the most calories for 5 dollars?</li><li>What's the cheapest 1000 calorie daily diet?</li><li>I have information on the level of AOD demand reduction we can expect from public awareness campaigns, DARE visits to public schools, increased treatment slots, and increases in after care. I know the cost of each type program and I have a limited budget. What mix of programs should I institute to have the biggest effect on demand?</li></ol>",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": [
        "policy modeling"
      ]
    },
    {
      "number": "0221",
      "question": " For each of the problems described below, say whether it is best thought of as an analog to diet, transport, activity, or assignment as outlined above.<ol><li>S&Z problem #1 Incinerators DIET TRANSPORT ACTIVITY ASSIGNMENT</li><li>S&Z problem #2 Police Shifts DIET TRANSPORT ACTIVITY ASSIGNMENT</li><li>S&Z problem #3 Hospitals and disasters DIET TRANSPORT ACTIVITY ASSIGNMENT</li><li>S&Z problem #4 Electricity generation and pollution DIET TRANSPORT ACTIVITY ASSIGNMENT</li><li>S&Z text example â€“ transit maintenance DIET TRANSPORT ACTIVITY ASSIGNMENT</li></ol>",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": []
    },
    {
      "number": "0222",
      "question": " Write out the sample problems on pp 190-2 with explanatory solutions.",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": [
        "design"
      ]
    },
    {
      "number": "0223",
      "question": " A non-profit supplier of after-school materials has orders for 600 copies from San Francisco and 400 copies from Sacramento. The organization has 700 copies in a warehouse in Novato and 800 copies in a warehouse in Lodi. It costs $5 to ship a text from Novato to San Francisco, but it costs $10 to ship it to Sacramento. It costs $15 to ship from Lodi to San Francisco, but it costs $4 to ship it from Lodi to Sacramento. How many copies should the organization ship from each warehouse to San Francisco and Sacramento to fill the order at the least cost? [http://www.sonoma.edu/users/w/wilsonst/Courses/Math_131/lp/default.html]",
      "soln": "<h3>SOLUTION</h3>See <a href=\"http://www.sonoma.edu/users/w/wilsonst/courses/math_131/lp/Books.html\" target=\"_blank\">solution here</a><br /><img src=\"https://djjr.us/images/qbank/bookstore-orders-solver.gif\"><br /><br /><img src=\"https://djjr.us/images/qbank/bookstore-orders.gif\"><br />",
      "tags": []
    },
    {
      "number": "0224",
      "question": " You are working for an agricultural cooperative which is helping local farmers figure out how to optimize the mixture of crops they plant. A typical farmer has 10 acres to plant in wheat and rye. She has to plant at least 7 acres. However, she has only the equivalent of $1200 to spend and each acre of wheat costs $200 to plant and each acre of rye costs $100 to plant. Moreover, the farmer has to get the planting done in 12 hours and it takes an hour to plant an acre of wheat and 2 hours to plant an acre of rye. If the expected profit is $500 per acre of wheat and $300 per acre of rye how many acres of each should be planted to maximize profits? (From <a href=\"http://www.sonoma.edu/users/w/wilsonst/courses/math_131/lp/default.html\" target=\"_blank\">Steve Wilson</a>)",
      "soln": "<h3>SOLUTION</h3><br /><img src=\"https://djjr.us/images/qbank/farmer-problem.gif\"><br /><br /><img src=\"https://djjr.us/images/qbank/farmer-solver.gif\"><br /><br /><img src=\"https://djjr.us/images/qbank/farmer-chart.gif\"><br />See also <a href=\"http://www.sonoma.edu/users/w/wilsonst/courses/math_131/lp/Farm.html\" target=\"_blank\">solution here</a>",
      "tags": [
        "design"
      ]
    },
    {
      "number": "0225",
      "question": " Your are the supervisor at a new after-school program. The program will serve 100 boys and 100 girls. Activities will include chess, games, and crafts. Materials, supervision, and the like have been priced out at $2/person for chess, $10/person for games, and $5 for crafts. Space needs are such that we can get 8 chess players at a table, 4 games players, or 2 crafters. The center has 50 tables. Solid research has shown that activity preferences among this population of children is somewhat gender specific. Boys and girls like chess the same but games are 70% girls and 30% boys while crafts tend to be 30% girls and 70% boys. What is the most economical division of activities subject to these constraints?",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": [
        "research methods"
      ]
    },
    {
      "number": "0226",
      "question": " \"You have $12,000 to invest, and three different funds from which to choose. The municipal bond fund has a 7% return, the local bank's CDs have an 8% return, and the high-risk account has an expected (hoped-for) 12% return. To minimize risk, you decide not to invest any more than $2,000 in the high-risk account. For tax reasons, you need to invest at least three times as much in the municipal bonds as in the bank CDs. Assuming the year-end yields are as expected, what are the optimal investment amounts?\" (From <a href=\"http://www.purplemath.com/modules/linprog4.htm\" target=\"_blank\">PurpleMath.com</a>)",
      "soln": "<h3>SOLUTION</h3>Looks like 3D problem but can be changed to 2D by the \"all the rest\" principle since the amount in the third investment category will be 12,000 minus what is in the other two.Handle the ratio constraint like this:  MB must be at least 3x CD.  MB GEQ 3 CD or -3CD + MB GEQ 0 or -3CD GEQ 0 - MB or CD GEQ 0 1/3 CDHighRisk Constraint: M + CD GEQ 10,000Total Constraint: M+CD LEQ 12,000<br /><img src=\"https://djjr.us/images/qbank/investment-problem-solution.gif\"><br />",
      "tags": []
    },
    {
      "number": "0227",
      "question": " A gold processor has two sources of gold ore, source A and source B. In order to kep his plant running, at least three tons of ore must be processed each day. Ore from source A costs $20 per ton to process, and ore from source B costs $10 per ton to process. Costs must be kept to less than $80 per day. Moreover, Federal Regulations require that the amount of ore from source B cannot exceed twice the amount of ore from source A. If ore from source A yields 2 oz. of gold per ton, and ore from source B yields 3 oz. of gold per ton, how many tons of ore from both sources must be processed each day to maximize the amount of gold extracted subject to the above constraints? (From <a href=\"http://www.sonoma.edu/users/w/wilsonst/courses/math_131/lp/default.html\" target=\"_blank\">Steve Wilson</a>)",
      "soln": "<h3>SOLUTION</h3>http://www.sonoma.edu/users/w/wilsonst/courses/math_131/lp/Gold.html",
      "tags": [
        "policy modeling",
        "design"
      ]
    },
    {
      "number": "0228",
      "question": " A school is preparing a trip for 400 students. The company who is providing the transportation has 10 buses of 50 seats each and 8 buses of 40 seats, but only has 9 drivers available. The rental cost for a large bus is $800 and $600 for the small bus. Calculate how many buses of each type should be used for the trip for the least possible cost. (From <a href=\"http://www.vitutor.com/alg/linear_programming/problems_solutions.html\" target=\"_blank\">VITutor</a>)",
      "soln": "<h3>SOLUTION</h3><br /><img src=\"https://djjr.us/images/qbank/school-buses.gif\"><br /><br /><img src=\"https://djjr.us/images/qbank/school-buses-chart.gif\"><br /><br /><img src=\"https://djjr.us/images/qbank/school-buses-solver.gif\"><br />See <a href=\"http://www.vitutor.com/alg/linear_programming/problems_solutions.html#dos\" target=\"_blank\">solution here</a>",
      "tags": []
    },
    {
      "number": "0229",
      "question": " Bob builds tool sheds. He uses 10 sheets of dry wall and 15 studs for a small shed and 15 sheets of dry wall and 45 studs for a large shed. He has available 60 sheets of dry wall and 135 studs. If Bob makes $390 profit on a small shed and $520 on a large shed, how many of each type of building should Bob build to maximize his profit? (From <a href=\"http://www.algebralab.org/Word/Word.aspx?file=Algebra_LinearProgramming.xml\" target=\"_blank\">solution here</a>)",
      "soln": "<h3>SOLUTION</h3>[[iframe http://www.algebralab.org/Word/Word.aspx?file=Algebra_LinearProgramming.xml height=\"400\" width=\"100%\"]]",
      "tags": []
    },
    {
      "number": "0230",
      "question": " A store wants to liquidate 200 of its shirts and 100 pairs of pants from last season. They have decided to put together two offers, A and B. Offer A is a package of one shirt and a pair of pants which will sell for $30. Offer B is a package of three shirts and a pair of pants, which will sell for $50. The store does not want to sell less than 20 packages of Offer A and less than 10 of Offer B. How many packages of each do they have to sell to maximize the money generated from the promotion? (From <a href=\"http://www.vitutor.com/alg/linear_programming/problems_solutions.html\" target=\"_blank\">VITutor</a>)",
      "soln": "<h3>SOLUTION</h3>[[iframe http://www.vitutor.com/alg/linear_programming/problems_solutions.html#cinco height=\"400\" width=\"100%\"]]",
      "tags": []
    },
    {
      "number": "0231",
      "question": " A transport company has two types of trucks, Type A and Type B. Type A has a refrigerated capacity of 20 m3 and a non-refrigerated capacity of 40 m3 while Type B has the same overall volume with equal sections for refrigerated and non-refrigerated stock. A grocer needs to hire trucks for the transport of 3,000 m3 of refrigerated stock and 4 000 m3 of non-refrigerated stock. The cost per kilometer of a Type A is $30, and $40 for Type B. How many trucks of each type should the grocer rent to achieve the minimum total cost?AlternativelyA school district has two types of lower division schools, type A and type B.  Type A school buildings have capacity for 200 little kids and 400 big kids.  Type B buildings have capacity for 300 little kids and 300 big kids.  Next year the district expects enrollments of 3000 little kids and 4000 big kids.  Type A buildings cost 30,000 per year to maintain while type B buildings cost 40,000.  What mix of school buildings will allow the district to handle the expected enrollment at the lowest maintenance cost? (From <a href=\"http://www.vitutor.com/alg/linear_programming/problems_solutions.html\" target=\"_blank\">VITutor</a>) ",
      "soln": "<h3>SOLUTION</h3><ol><li>What things might we be trying to optimize here?</li><li>number of (younger or older or total) kids</li><li>number of school buildings</li><li>learning and achievement</li><li>maintenance cost</li><li>What do you have in your policy repertoire if you are in charge of this situation?</li><li>Number of kids in the district</li><li>Number of available school buildings</li><li>Size of school buildings</li><li>Capacity of school buildings</li></ol>See <a href=\"http://www.vitutor.com/alg/linear_programming/problems_solutions.html#uno\" target=\"_blank\">solution here</a>",
      "tags": []
    },
    {
      "number": "0232",
      "question": "  //Durkheim lived in an age when the role and existence of â€œgodâ€ as ultimate source of right and rule and order was under question.  Rather than choose between â€œthe humanâ€ and â€œthe divineâ€ Durkheim stared religion in the face, so to speak, and showed how what we think of as divine/sacred is in fact human (social).  How do the following passages convey Durkheimâ€™s theory of the special power of social norms and his idea about society as god and the notion that the individual, with norms and values of society internalized, can be a source of social order?//<blockquote> **Durkheim, â€œCollective Representationsâ€ from //Elementary Forms//**</blockquote><blockquote></blockquote><blockquote> â€œAn individual or collective subject is said to inspire respect when the representation that expresses it in consciousness has such power that it calls forth or inhibits conduct automatically, irrespective of any utilitarian calculation of helpful or harmful resultsâ€ (50.8).</blockquote><blockquote></blockquote><blockquote> â€œThe ways of acting to which society is strongly enough attached to impose them on its members are for that reason marked with a distinguishing sign that calls forth respectâ€ (51.1).</blockquote><blockquote></blockquote><blockquote> â€œBecause social pressure makes itself felt through mental channels, it was bound to give men the idea that outside him there are one or several powers, moral yet mighty, to which he was subjectâ€ (52.1).</blockquote><blockquote></blockquote><blockquote> â€œIn the midst of an assembly that becomes worked up, we become capable of feelings and conduct of which we are incapable when left to our individual resourcesâ€ (52.5).</blockquote>",
      "soln": "<h3>SOLUTION</h3>Points to cover:<ol><li>Durkheim first describes the force an idea can have in our heads â€“ he calls it \"inspiring respect\" â€“ when even though we might not rationally be able to say why something is harmful or helpful we automatically \"know\" we should not or should do it.</li><li>Then he says that behaviors that a collective group is really attached to get marked with this \"calls forth respect\" property.</li><li>Then he notes that since we experience this pressure through \"mental channels,\" it seems rather mystical, a sort of outer inner power.  We feel something inside our heads but we experience as not of our own doing.</li><li>Finally, Durkheim notes that it is in ritual group assembly that we feel these special feelings that we don't have when we are alone.</li><li>Thus, he is suggesting, the \"god like\" influence is associated with the group.</li><li>Order it seems happens because \"society\" wants pro-social behavior (these are what it inspires \"respect\" for) and by putting these ideas into individuals' heads, society can run on autopilot â€“ people will be self-controlled with internal social control.</li></ol>",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0233",
      "question": " //Hobbes sees social order as impossible without hierarchy.  Address both the question of coordination and cooperation (to see the cooperation here, we might think about Adam Smithâ€™s notion of bartering as a means by which two actors can both get what they want) as you explain how Hobbes gets from his assumptions about human nature to the need for a â€œLeviathanâ€ if human-kind is to achieve social order.//<blockquote> **Hobbes, from \"Leviathan\"**</blockquote><blockquote></blockquote><blockquote> â€œSo that in the first place I put for a general inclination of all mankind a perpetual and restless desire of power after power, that ceaseth only in death. And the cause of this is not always that a man hopes for a more intensive delight than he has already attained to, or that he cannot be content with a moderate power; but because he cannot assure the power and means to live well which he hath present, without the acquisition of moreâ€ (89).</blockquote><blockquote></blockquote><blockquote> â€œHereby it is manifest that, during the time men live without a common power to keep them all in awe, they are in that condition which is called war, and such a war as is of every man against every manâ€ (93).</blockquote><blockquote></blockquote><blockquote> â€œIn such condition there is no place for industry, because the fruit thereof is uncertain, and consequently no culture of the earth, no navigation nor use of the commodities that may be imported by sea, no commodious building, no instruments of moving and removing such things as require much force, no knowledge of the face of the earth; no account of time, no arts, no letters, no society, and, which is worst of all, continual fear and danger of violent death, and the life of man solitary, poor, nasty, brutish, and shortâ€ (93-4).</blockquote><blockquote></blockquote><blockquote> â€œIf a covenant be made wherein neither of the parties perform presently but trust one another, in the condition of mere nature, which is a condition of war of every man against every man, upon any reasonable suspicion, it is void; but, if there be a common power set over them both with right and force sufficient to compel performance, it is not voidâ€ (97).</blockquote>",
      "soln": "<h3>SOLUTION</h3>Q How does Hobbes get from human nature to need for central authority.<ol><li>What are humans like for Hobbes?</li><li>What does it lead to?  WOAAA</li><li>What impact does that have?  No goods of society, no art, no industry.  Everyone is worse off.  Not a cooperative solution (in the sense of making everyone better off).</li><li>How does the solution work?  Canâ€™t have deals and contracts in a WOAAA</li><li>But with an authority everyone respects, people can trust one another and commerce can happen.</li><li>This allows people to do the things they want, even if they don't really trust one another (in other words, it lets them get around the trust problem)</li></ol>",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0234",
      "question": " //Hayek is sometimes taken to be saying that the modern world throws up problems that are too complex to be handled by planning and policy making.  Some things can be handled that way, but big and complex things cannot.   What are the differences between the two types of order and the limitations and possibilities Hayek suggests each has and how does he get from there to social order?//",
      "soln": "<h3>SOLUTION</h3><blockquote> **Hayek \"Cosmos & Taxis\"**</blockquote><blockquote></blockquote><blockquote> This means that, though the use of spontaneous ordering forces enables us to induce the formation of an order of such a degree of complexity (namely comprising elements of such numbers, diversity and variety of conditions) as we could never master intellectually, or deliberately arrange, we will have less power over the details of such an order than we would of one which we produce by arrangement.</blockquote><blockquote></blockquote><blockquote> â€œIn the case of spontaneous orders we may, by determining some of the factors which shape them, determine their abstract features, but we will have to leave the particulars to circumstances which we do not know. Thus, by relying on the spontaneously ordering forces, we can extend the scope or range of the order which we may induce to form, precisely because its particular manifestation will depend on many more circumstances than can be known to us-and in the case of a social order, because such an order will utilize the separate knowledge of all its several members, without this knowledge ever being concentrated in a single mind, or being subject to those processes of deliberate coordination and adaptation which a mind performsâ€ (Hayek 1976: 145.5-7).</blockquote><blockquote> ||Made||Grown||</blockquote><blockquote> ||Exogenous||Endogenous||</blockquote><blockquote> ||Arrangement||Pattern||</blockquote><blockquote> ||Taxis||Cosmos||</blockquote><blockquote> ||Concrete||Abstract||</blockquote><blockquote> ||Intentional||Unintentional||</blockquote><blockquote> ||Design||Emergence||</blockquote><ol><li>Made order as planned, conceived in someone's head.</li><li>Grown order as the aggregation of multiple individuals' local orders â€“ decisions/actions in response to local information to which they have more detailed access.</li><li>Limitations on made order are that it cannot be all that complex.</li><li>But they can be controlled in minute detail.</li><li>Grown order, on the other hand, can be extremely complex and have great \"scope and range\"</li><li>but we might not be able to exercise on them full control.  It has an advantage of making use of the \"separate knowledge of all its several members.\"</li><li>Hayek gets from \"everyone follows their own decisions\" to social order (coordination and cooperation) by noting that his theory is not anarchic â€“ there are basic micro rules that must be followed in micro interactions (e.g., people should keep their promises).  He remains a little vague in the passages we read suggesting that these micro rules must be \"the kind that produce order.\"</li></ol>",
      "tags": [
        "policy modeling",
        "social theory",
        "design"
      ]
    },
    {
      "number": "0234",
      "question": " //Hayek is sometimes taken to be saying that the modern world throws up problems that are too complex to be handled by planning and policy making.  Some things can be handled that way, but big and complex things cannot.   What are the differences between the two types of order and the limitations and possibilities Hayek suggests each has and how does he get from there to social order?//",
      "soln": "<h3>SOLUTION</h3><blockquote> **Hayek \"Cosmos & Taxis\"**</blockquote><blockquote></blockquote><blockquote> This means that, though the use of spontaneous ordering forces enables us to induce the formation of an order of such a degree of complexity (namely comprising elements of such numbers, diversity and variety of conditions) as we could never master intellectually, or deliberately arrange, we will have less power over the details of such an order than we would of one which we produce by arrangement.</blockquote><blockquote></blockquote><blockquote> â€œIn the case of spontaneous orders we may, by determining some of the factors which shape them, determine their abstract features, but we will have to leave the particulars to circumstances which we do not know. Thus, by relying on the spontaneously ordering forces, we can extend the scope or range of the order which we may induce to form, precisely because its particular manifestation will depend on many more circumstances than can be known to us-and in the case of a social order, because such an order will utilize the separate knowledge of all its several members, without this knowledge ever being concentrated in a single mind, or being subject to those processes of deliberate coordination and adaptation which a mind performsâ€ (Hayek 1976: 145.5-7).</blockquote><blockquote> ||Made||Grown||</blockquote><blockquote> ||Exogenous||Endogenous||</blockquote><blockquote> ||Arrangement||Pattern||</blockquote><blockquote> ||Taxis||Cosmos||</blockquote><blockquote> ||Concrete||Abstract||</blockquote><blockquote> ||Intentional||Unintentional||</blockquote><blockquote> ||Design||Emergence||</blockquote><ol><li>Made order as planned, conceived in someone's head.</li><li>Grown order as the aggregation of multiple individuals' local orders â€“ decisions/actions in response to local information to which they have more detailed access.</li><li>Limitations on made order are that it cannot be all that complex.</li><li>But they can be controlled in minute detail.</li><li>Grown order, on the other hand, can be extremely complex and have great \"scope and range\"</li><li>but we might not be able to exercise on them full control.  It has an advantage of making use of the \"separate knowledge of all its several members.\"</li><li>Hayek gets from \"everyone follows their own decisions\" to social order (coordination and cooperation) by noting that his theory is not anarchic â€“ there are basic micro rules that must be followed in micro interactions (e.g., people should keep their promises).  He remains a little vague in the passages we read suggesting that these micro rules must be \"the kind that produce order.\"</li></ol>",
      "tags": [
        "policy modeling",
        "social theory",
        "design"
      ]
    },
    {
      "number": "0236",
      "question": " In a prisonerâ€™s dilemma game, the rational thing for both players is to defect.  This makes mutual defection an equilibrium, though it is not a preferred one (the collective would be better off with another outcome).  In other words, in a single game of prisonerâ€™s dilemma, cooperation is â€œimpossible.â€  But cooperation does happen in the world.  Demonstrate your understanding of Axelrod's ideas by describing the mechanism and conditions under which this can happen without assuming anything â€œsocialâ€ about the agents.  <br /><img src=\"https://djjr.us/images/qbank/axelrod-mechanism-01.gif\"><br />Explain how this works and how it adds to or modifies Smithâ€™s and Hayekâ€™s story about how markets can be a source of social order.â€ƒ",
      "soln": "<h3>SOLUTION</h3>This is an opportunity to show how well you understand Axelrod's iterated PD experiments and it's relation to the question of whether cooperation can emerge \"spontaneously\" in the interaction between \"not socialized\" agents.  By not socialized we mean that we will not invoke norms or shared beliefs as the CAUSE of the cooperation.â€œThese results from the tournaments demonstrate that under suitable conditions, cooperation can indeed emerge in a world of egoists without central authorityâ€ (Axelrod 1984: 184.5).â€œThe result was another victory for TIT FOR TAT! The analysis of the data from these tournaments reveals four properties which tend to make a decision rule successful: avoidance of unnecessary conflict by cooperating as long as the other player does, provocability in the face of an uncalled for defection by the other, forgiveness after responding to a provocation, and clarity of behavior so that the other player can adapt to your pattern of actionâ€ (Axelrod 1984: 184.5).<ol><li>The text presented shows PD game and mechanism of rational egoists leading to coordination (they can reach an equilibrium)</li><li>that can lead to cooperation (a good equilibrium) under certain conditions.</li><li>The second paragraph says four properties seem important: a means to avoid conflict if the other is cooperating,</li><li>a player needs to be able to react if the other defects,</li><li>one has to be able to \"forgive\" â€“ show that players are back on good terms;</li><li>and there needs to be clarity so the other can understand what you are doing/signaling, etc.</li><li>In practice, this means that selfish rational egoists can achieve order without recourse to Durkheimian internalized social values and without a centralized control mechanism</li><li>under certain conditions.</li><li>Primary among these is repeated play.  Axelrod adds to Smith and Hayek by providing a MECHANISM by which rational actors can just act rationally and achieve order â€“ something that both Smith and Hayek claimed but did not really demonstrate.</li><li>He also puts limits on their ideas by showing one set of conditions necessary for it to work.</li></ol>",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0237",
      "question": " //In \"The Emperor's Dilemma,\" Centola, Willer, and Macy talk about â€œthe popular enforcement of unpopular norms.â€  What does that mean?  Why is it a puzzle?  What is (are) the mechanism(s) that they think explains it?//<blockquote> **Centola, Willer, and Macy â€œThe Emperor's Dilemma\"**</blockquote><blockquote></blockquote><blockquote> â€œNaked emperors are easy to find but hard to explain. It is easy to explain why people comply with unpopular normsâ€”they fear social sanctions. And it is easy to explain why people pressure others to behave the way they want them to behave. But why pressure others to do the opposite? Why would people publicly enforce a norm that they secretly wish would go away? (278)</blockquote><blockquote></blockquote><blockquote> â€œOne hypothesis is that very few would actually enforce the norm, but no one knows this. If people estimate the willingness to enforce based on the willingness to comply, and they comply based on the false belief that others will enforce, they become trapped in pluralistic ignoranceâ€”an equilibrium in which few people would actually enforce the norm but no one realizes this. However, this equilibrium can be extremely fragile. As in the Andersen story [The Emperorâ€™s New Clothes], all that is needed is a single child to laugh at the emperor and the spell will be broken  (278).</blockquote><blockquote></blockquote><blockquote> â€œA more robust explanation is that most people really will enforce the norm, and for the same reason that they complyâ€”social pressure from others in the group, for whom mere compliance is not enough. To the  true believer, it is not sufficient that others go to the right art galleries, display the right body jewelry, purchase the right sports car, or support the right wing. They must do it for the right reason. Zealots believe that it is better not to comply at all than to do so simply to affirm social status (Kuran 1995a, p. 62). Such compliance lasts only so long as behavior can be monitored and social pressure is sufficient to induce acquiescence (Hechter 1987). Thus, true believers reserve special contempt for imposters. Those who comply for the wrong reason must worry about being exposed as counterfeit (278-9).</blockquote><blockquote></blockquote><blockquote> â€œThe hypothesized anxiety is supported by research on the â€˜illusion of transparencyâ€™ (Gilovich, Savitsky, and Medvec 1998). This refers to a tendency to overestimate the ability of others to monitor our internal statesâ€¦ (279).</blockquote><blockquote></blockquote><blockquote> â€œApplied to the emperorâ€™s dilemma, the â€˜illusion of transparencyâ€™ suggests that those who admire the emperor out of a desire for social approval fear that their posturing will be apparent to others. They then look for some way to confirm their sincerity. Enforcing the norm provides a low cost way to fake sincerity, to signal that one compliesâ€”not as an opportunist seeking approvalâ€”but as a true believerâ€ (279).</blockquote><blockquote> <br /><img src=\"https://djjr.us/images/qbank/centola-etal-mechanism-01.gif\"><br /></blockquote>",
      "soln": "<h3>SOLUTION</h3><ol><li>Popular enforcement of unpopular norms refers to the situation where people participate in publicly upholding a rule even though they privately do not agree with it.</li><li>The paradigmatic case is in Andersen's tale of the emperor's new clothes.</li><li>It is a puzzle because rational actors should refrain from doing this.</li><li>On the assumption that it occurs when people lives in groups, it is evidence, on the one hand, of the power of group organization.</li><li>On the other hand, it shows that groups can produce \"irrational\" or non-cooperative behavior.</li><li>The authors explain this phenomenon in terms of two things.  First is a tendency to impute support for a norm if people appear willing to conform to it.</li><li>In other words, we do not tend to assume hypocrisy and we over-estimate how many others would enforce a norm.</li><li>The other, more robust explanation is that there are some \"true believers\" and they can create an atmosphere in which not only does one have to support a rule, one also has to show one is sincere (not just supporting it because of peer pressure).  This pressure to act sincere further concentrates the social energies making it appear as if everyone supports and would enforce a rule.</li></ol> ",
      "tags": [
        "policy modeling",
        "social theory",
        "design",
        "research methods"
      ]
    },
    {
      "number": "0238",
      "question": " [[f>image soc116:images/fehr-gintis-results-01.gif width=\"300\"]]Fehr and Gintis describe experiments using a \"public goods game.\"  In the regular game, players tended to free-ride more and more as the game progresses.  These results suggest that the sociological idea that people do the right thing because they are socialized to care about others is naive.  Most people do not act in a â€œpro-socialâ€ manner.  They free-ride.When punishment is permitted, players punish free-riders even at a cost.  Public goods increase as free-riding drops.  Results like this defy the economic idea of people as selfish maximizers.  They also suggest that hierarchy (surveillance/punishment) need not be centralized.In the light of these results and the rest of the course, how do you think individual internalization of social values/norms, hierarchy, decentralized market interaction, and groups combine to create social order?",
      "soln": "<h3>SOLUTION</h3><blockquote> By the 10th round \"roughly 55% of the subjects contribute nothing to the public good, and the remaining subjects contribute very little.  It seems that-at least toward the end- individual self-interest largely dominates behavior, and the view that the internalization of cooperative values in itself suffices to generate social cooperation is clearly wrong\" (29).</blockquote><blockquote></blockquote><blockquote> When participants are given an opportunity to punish those who do not contribute, EVEN at a cost to themselves, then free-riding drops to almost zero.  In other words, people who witness failures to contribute to the public good will \"donate\" the effort of enforcing the rule â€œone should contributeâ€ and this changes behavior.</blockquote><blockquote></blockquote><blockquote> If people are purely selfish, why would they â€œvolunteerâ€ to punish at their own expense?  That result challenges the economic idea that individuals are self-interested maximizers.  â€œTherefore, adding this punishment opportunity should not generate stable cooperation if all subjects are only self-interested and internalized values play no role in behaviorâ€ (30.4). They do this even in the last round of the game; this suggests that they are doing it \"out of principle.\"</blockquote><blockquote></blockquote><blockquote> The question is why people do this.  These folks are acting \"irrationally\" in that they hurt themselves in order to help the collective.  Fehr and Gintis calls these folks \"strong reciprocators\" - these people punish free-riders, even though it costs them to do this.  In a sense, they volunteer on behalf of society.</blockquote><blockquote></blockquote><blockquote> â€œStrong reciprocity is the behavioral predisposition to cooperate conditionally on othersâ€™ cooperation and to punish violations of cooperative norms even at a cost to the punisher.  ..Finally, theory and evidence also indicate that the social structure of interaction plays a decisive role in shaping the emergent aggregate patterns of behavior by affecting how strongly reciprocal and self-regarding individuals interactâ€ (27).</blockquote><blockquote></blockquote><blockquote> â€œDecades ago, sociologists criticized the â€œoversocialized conception of manâ€ (Wrong 1961) that played a prominent role in the work of Durkheim (1938) and Parsons (1937). They rightly questioned Homo Sociologicus, a creature who follows prevailing social norms without regard to self-interest. But they did not develop an alternative, empirically grounded, and widely accepted conception of the basic motivational driving forces of humans. This contrasts sharply with the approach taken by mainstream economics that rests on the notion of Homo Economicus, a creature who is rational and purely self-regarding. However, the Homo Economicus approach is also erroneous, as the assumption that humans are exclusively self-regarding has been decisively rejected by the evidence. Thus, although the lack of a model of human social behavior leaves sociology without an anchor, mainstream economics is hitched to the wrong anchor, i.e., adheres to a biased view of human nature.â€</blockquote>In light of Fehr/Gintis results, how do individuals, hierarchy, markets, and groups create coordination?<ol><li>Fehr and Gintis' results show a number of things.  For one, there is a role for internalized norms and values.  The \"strong reciprocators\" (SR) do act vicariously on behalf of society even against their own interests.</li><li>But not everyone is a SR and so the way they have their effect is through actual punishing â€“ a hierarchical form of interaction.</li><li>And, at least in our instantiation of the experiment, this happens in a group context.</li><li>But just a little of this and you can get spontaneous order in a simple market situation.</li><li>Homo sociologicus â€“ the over-socialized concept of man â€“ needs revision since norms and social values alone do not seem to be enough to produce social order.</li><li>Homo economicus â€“ rational selfish actors â€“ is also in need of revision since in the absence of group life, a chance for others to keep us in line, we would tend toward free-riding and fail to contribute to cooperative outcomes.</li></ol>",
      "tags": [
        "policy modeling",
        "social theory",
        "research methods"
      ]
    },
    {
      "number": "0239",
      "question": " I need to take a certification exam this year. The exam cost is $200. There is a prep course for the exam, but I don't know if I need it or not. It costs $300 and if one takes it, one is certain to pass the exam. If I do not take the prep course there is a 50% chance of passing and a 50% chance of failing in which case I'd have to take the prep course anyway and then retake the test (total cost = prep course + twice the exam fee). Should I take the prep course??",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": []
    },
    {
      "number": "0240",
      "question": " This is an event tree problem, that is, there are no choices to be made.  Work out the probabilities of each of the final outcomes. _<blockquote> There is a 72% chance that candidate A will win the presidency over candidate B.  There is a 55% chance that candidate A's party will win control of the senate and a 30% chance that his party will win control of the house.</blockquote>",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": []
    },
    {
      "number": "0241",
      "question": " If my new study method works, I should earn a 98 on the test.  If it does not work, I will get a 79.  Research suggests that there is a 75% chance it works.  What is the expected value of my grade?<table><tr style=\" vertical-align: top;\"><td style=\"width: 2%; vertical-align: top;\">**A.**</td><td style=\"width: 18%;\">87.5</td><td style=\"width: 2%;\">**B.**</td><td style=\"width: 18%;\">93.25</td><td style=\"width: 2%;\">**C.**</td><td style=\"width: 18%;\">95.5</td><td style=\"width: 2%;\">**D.**</td><td style=\"width: 18%;\">79</td><td style=\"width: 2%;\">**E.**</td><td style=\"width: 18%;\">98</td></tr></table>",
      "soln": "<h3>SOLUTION</h3>Recalling that the equation for expected value is \\(sum _{ i=1 }^{ n }{ { P }_{ i }\\times { V }_{ i } }\\), we note that here we have 0.75\\times98 +0.25 x79 =73.5+19.75 =93.25.",
      "tags": [
        "research methods"
      ]
    },
    {
      "number": "0242",
      "question": " Draw a flowchart that represents the following protocol for enjoying a Saturday afternoon.<blockquote> If it is sunny, go to the beach.  If it is not sunny go to the movies.</blockquote><blockquote> If you go to the beach, if you are by yourself, take an umbrella and a good book.  If you are with friends, take a bottle of wine and some nice cheese.</blockquote><blockquote> If you go to the movies alone, buy a monster popcorn and sit right up front.  If you go with friends, be more restrained with the snacks and sit midway back.</blockquote><blockquote> Have a nice dinner afterwards.</blockquote>",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": []
    },
    {
      "number": "0243",
      "question": " Consider the following instructions for funding your NGO and then draw a flow chart representing this logic _<blockquote> Write the grant. Find a funder.  Submit the grant.  Wait to see if it is funded.  If it is funded, start the project.  Otherwise go back to finding a funder.</blockquote>",
      "soln": "<h3>SOLUTION</h3>**1.** Let's think first.  This is mostly a simple sequence of actions.  The exception is that toward the end we hit a contingency (does the grant get funded?); if it is we continue on, if it is not we start over.  How might we describe the job?  \"Write grants until you get one funded and then get on with the project.**2.** Thus, we might describe our job at this NGO like this: \"I just keep writing grants until one gets funded and then we get on with the work.\"  A first version of this process might look like this:<br /><img src=\"https://djjr.us/images/qbank/P0243a.png\"><br />**3.** But we know that \"keep writing grants\" is actually a process that has more than one step.  In fact, opening this black box reveals four steps:<br /><img src=\"https://djjr.us/images/qbank/P0243b.png\"><br />**4.** And so we can draw the next iteration flow chart thus:<br /><img src=\"https://djjr.us/images/qbank/P0243c.png\"><br />",
      "tags": []
    },
    {
      "number": "0244",
      "question": " This question extends [[[q:0243|problem 243]]].  You've learned the following things during your professional training.  Represent this information as a three level stepwise refinement. _<blockquote> # Preparing to write a grant consists of identifying a need and putting together a logic model that shows what new inputs are needed to generate desired outcomes</blockquote><blockquote> # Finding a funder requires identifying a list of funders, looking up the kinds of projects they are funding, and finding matches for your project</blockquote><blockquote> # Writing a grant involves (1) preparing to write the grant; (2) finding template appropriate to particular funders; (3) producing drafts and reviewing with staff</blockquote><blockquote> # Draft and review protocols vary, but one you like is to produce a draft, post it on Google docs for the team to comment on, send a prodding email to team members every few days until it looks like there are no more comments on that draft, make revisions and repeat this process until the deadline is near.</blockquote>",
      "soln": "<h3>SOLUTION</h3>**First** we draw out the zeroth order version of the process:<br /><img src=\"https://djjr.us/images/qbank/P0244a.png\"><br />But do we really have four steps here?  If we stop and think, we see that what is listed as step four is actually a refinement of part of step 3.  So, let's understand it as PREP > FIND TEMPLATE > DRAFTING PROCESS, where the last is itself a further black box.**Next** we expand each of the first three black boxes.  The first is a straightforward two-step process.<br /><img src=\"https://djjr.us/images/qbank/P0244b.png\"><br />The second is an \"until logic\" : keep looking for funders until you find a match:<br /><img src=\"https://djjr.us/images/qbank/P0244c.png\"><br />The third blackbox is two steps and then another black box:<br /><img src=\"https://djjr.us/images/qbank/P0244d.png\"><br />This last blackbox is itself multi-level.  We circulate drafts and do revisions until the deadline, but the cycle of putting a draft out there for comments is also an \"until\" structure: we post the draft and prod people for feedback until it seems everyone has weighed in.These are shown as \"nested\" until logics.  The \"inside\" loop (1, in green) is posting a draft and prodding for feedback.  This then gets repeated for each new revision of the proposal until the deadline arrives - the outer loop (2, in blue).<br /><img src=\"https://djjr.us/images/qbank/P0244e.png\"><br />",
      "tags": []
    },
    {
      "number": "0245",
      "question": " Offer a critique of this flow chart diagram <br /><img src=\"https://djjr.us/images/qbank/flowchart-bad-01.png\"><br />",
      "soln": "<h3>SOLUTION</h3><br /><img src=\"https://djjr.us/images/qbank/flowchart-bad-01a.png\"><br /><ol><li>We cannot have three branches coming out of a decision</li><li>There is never a branch coming out of bottom of decision diamond</li><li>Try to \"read\" the logic here: how would you put into English what we see here?</li></ol>",
      "tags": []
    },
    {
      "number": "0246",
      "question": " What's wrong with this flow chart?  How would you fix it? <br /><img src=\"https://djjr.us/images/qbank/flowchart-bad-02.png\"><br />",
      "soln": "<h3>SOLUTION</h3>TBA[!--<br /><img src=\"https://djjr.us/images/qbank/flowchart-bad-02a.png\"><br /><ol><li>There are two separate branches here: the logical unit around \"IF A\" and the unit around \"IF E.\"  These each have to have their own closure (red arrows in diagram below).</li><li>It is not clear from this diagram how we get into these two branches.  Since we always have single entrance and exit, it must be the case that there is an \"IF\" diamond ABOVE what we see in the chart (green arrow in diagram below).</li></ol><br /><img src=\"https://djjr.us/images/qbank/flowchart-bad-02b.png\"><br />--]",
      "tags": []
    },
    {
      "number": "0247",
      "question": " What's wrong with this flow chart?  How would you fix it? <br /><img src=\"https://djjr.us/images/qbank/flowchart-bad-03.png\"><br />",
      "soln": "<h3>SOLUTION</h3><br /><img src=\"https://djjr.us/images/qbank/flowchart-bad-03a.png\"><br /><ol><li>An action rectangle can have only one exit - the move to the next action in the sequence, but here we have a branching.  Either B is actually a decision (diamond) or something else entirely is going on.</li></ol><br /><img src=\"https://djjr.us/images/qbank/flowchart-bad-03b.png\"><br />**red|STOP AND THINK:** Why did we not put the D action inside the \"IF B\" structure?",
      "tags": []
    },
    {
      "number": "0248",
      "question": " What criticism would you offer if the diagram below were my first stab at a flow chart for an organizational process?  How would you fix it? <br /><img src=\"https://djjr.us/images/qbank/flowchart-bad-04.png\"><br />",
      "soln": "<h3>SOLUTION</h3><br /><img src=\"https://djjr.us/images/qbank/flowchart-bad-04a.png\"><br /><ol><li>Even if there is nothing formally wrong here, it's way too complex for a first cut.  Remember: defer detail.  Something like this might make a better first two refinements:</li></ol><br /><img src=\"https://djjr.us/images/qbank/flowchart-bad-04b.png\"><br />",
      "tags": []
    },
    {
      "number": "0249",
      "question": " Translate each of the flow charts below into everyday English.[[collapsible show=\"+ Show A\" hide=\"- Hide A\"]]**A.** <br /><img src=\"https://djjr.us/images/qbank/flowchart-look-before.png\"><br />[[collapsible show=\"+ Show B\" hide=\"- Hide B\"]]**B.** <br /><img src=\"https://djjr.us/images/qbank/flowchart-if-at-first.png\"><br />[[collapsible show=\"+ Show C\" hide=\"- Hide C\"]]**C.** <br /><img src=\"https://djjr.us/images/qbank/flowchart-love-the-one-your-with.png\"><br />[[collapsible show=\"+ Show D\" hide=\"- Hide D\"]]**D.** <br /><img src=\"https://djjr.us/images/qbank/flowchart-timewarp.png\"><br />",
      "soln": "<h3>SOLUTION</h3>A. Look before you leap.B. If at first you don't succeed, try, try, try again.C. If you can't be with the one you love, love the one you're with.D. Do the timewarp again.",
      "tags": []
    },
    {
      "number": "0250",
      "question": " What's wrong with this flow chart?  How would you fix it? <br /><img src=\"https://djjr.us/images/qbank/flowchart-bad-05.png\"><br />",
      "soln": "<h3>SOLUTION</h3>TBA[!--<br /><img src=\"https://djjr.us/images/qbank/flowchart-bad-05a.png\"><br /><ol><li>NO CROSSING LINES!  Single entry, single exit.  Any flow chart that seems to require you to make the lines cross is WRONG.  The most common reason we get into this situation is thinking that you cannot have more than one rectangle for the same action (e.g., I drive to school if the traffic looks good OR if I miss the bus).</li><li>Stepwise refinement will almost always help you avoid this problem.</li></ol>The revision of this flow chart is left as an exercise.--]",
      "tags": []
    },
    {
      "number": "0250",
      "question": " What's wrong with this flow chart?  How would you fix it? <br /><img src=\"https://djjr.us/images/qbank/flowchart-bad-05.png\"><br />",
      "soln": "<h3>SOLUTION</h3>TBA[!--<br /><img src=\"https://djjr.us/images/qbank/flowchart-bad-05a.png\"><br /><ol><li>NO CROSSING LINES!  Single entry, single exit.  Any flow chart that seems to require you to make the lines cross is WRONG.  The most common reason we get into this situation is thinking that you cannot have more than one rectangle for the same action (e.g., I drive to school if the traffic looks good OR if I miss the bus).</li><li>Stepwise refinement will almost always help you avoid this problem.</li></ol>The revision of this flow chart is left as an exercise.--]",
      "tags": []
    },
    {
      "number": "0252",
      "question": " Consider this network in which green agents are cooperators and violet are defectors and the cost of cooperating is 2 while the benefit of being cooperated with is 5.  Where is the equilibrium is people's behavior changes based on their network experiences?<br /><img src=\"https://djjr.us/images/qbank/network-reciprocity-01.png\"><br />",
      "soln": "<h3>SOLUTION</h3>After an initial round the payoffs look like this:<table class=\"wikitable\"><tr><td class=\"tdcentered\">1</td><td class=\"tdcentered\">2</td><td class=\"tdcentered\">3</td><td class=\"tdcentered\">4</td><td class=\"tdcentered\">5</td><td class=\"tdcentered\">6</td></tr><tr><td class=\"tdcentered\">+5</td><td class=\"tdcentered\">-2+5=3</td><td class=\"tdcentered\">+10-4=6</td><td class=\"tdcentered\">+5-2=3</td><td class=\"tdcentered\">+5</td><td class=\"tdcentered\">0</td></tr></table>Nobody changes.",
      "tags": [
        "social theory",
        "social network analysis"
      ]
    },
    {
      "number": "0253",
      "question": " Consider this network in which green agents are cooperators and violet are defectors and the cost of cooperating is 2 while the benefit of being cooperated with is 5.  Where is the equilibrium is people's behavior changes based on their network experiences?<br /><img src=\"https://djjr.us/images/qbank/network-reciprocity-02.png\"><br />",
      "soln": "<h3>SOLUTION</h3>Let's number our agents like this<table class=\"wikitable\"><tr><td>1</td><td>2</td><td>3</td></tr><tr><td>4</td><td>5</td></tr><tr><td>6</td></tr></table>After an initial round the payoffs look like this:<table class=\"wikitable\"><tr><td>10</td><td>2</td><td>10</td></tr><tr><td>2</td><td>2</td></tr><tr><td>10</td></tr></table>All of the cooperators are impressed by how much better it is to defect and switch.",
      "tags": [
        "social theory",
        "social network analysis"
      ]
    },
    {
      "number": "0254",
      "question": " Just based on reasoning, explain the relation among relatedness, cost of cooperation, and benefit of cooperation in kin selection as a mechanism for achieving cooperation in the face of prisoner's dilemma scenarios.",
      "soln": "<h3>SOLUTION</h3>One logic might go this way: we would expect that the more related people are, the more sacrifice they'd be willing to make to benefit one another.  And we can imagine saying \"the costs outweigh the benefits given how related we are; if we were more related I might cooperate at higher cost or with lower benefit.\"  All of these suggest \\(r gt \frac {C}{B}\\) as the condition for cooperating.  (see <a href=\"http://vserver1.cscs.lsa.umich.edu/~spage/ONLINECOURSE/NowakSigmund07.pdf#page=2\" target=\"_blank\">Nowak & Sigmund, p.8</a>)",
      "tags": []
    },
    {
      "number": "0255",
      "question": " Work through the section on direct reciprocity in <a href=\"http://vserver1.cscs.lsa.umich.edu/~spage/ONLINECOURSE/NowakSigmund07.pdf\" target=\"_blank\">Nowak and Sigmund, \"How Populations Cohere.\"</a>[!--[[iframe http://vserver1.cscs.lsa.umich.edu/~spage/ONLINECOURSE/NowakSigmund07.pdf#page=2 width=\"100%\" height=\"600px\"]]--]",
      "soln": "<h3>SOLUTION</h3><blockquote> \"The expected payoff for GRIM versus GRIM is nR. The expected payoff for ALLD versus GRIM is T+(m-1)P. If nR>T+(m-1)P then ALLD cannot spread in a GRIM population when rare.\"</blockquote><blockquote> \"...it is more natural to consider a repeated game with a probability w of having another round. In this case, the expected number of rounds is 1/(1-w), and GRIM is stable against invasion by ALLD provided w>(T-R)/(T-P).\"</blockquote>Why is EV 1/(1-w)?  Draw the event tree and write out the equation for expected value.  The first few terms are\n$$(1-w) + 2w(1-w) + 3w^2(1-w) + ...$$Which turns out to be the Taylor series expansion for the <a href=\"http://www.math.sc.edu/~girardi/m142/handouts/10sTaylorPolySeries.pdf\" target=\"_blank\">Taylor Series</a> geometric series 1 + w + w^^2^^ + w^^3^^ + ...\n$$ = 1 - w + 2w - 2w^2 + 3w^2 - 3w^3 + ... = 1 + w + w^2 + w^3 + ... = \frac {1}{(1-w)}$$",
      "tags": []
    },
    {
      "number": "0256",
      "question": " Consider the collective action model described in Lecture 17.4: <a href=\"https://class.coursera.org/modelthinking/lecture/view?lecture_id=102\" target=\"_blank\">Collective Action and Common Pool Resource Problems</a> where \\(x_j\\) is the cost to me to \"pitch in\" and do my part in some collective effort.  Each member of the collective reaps benefits from the contributions of those who decide to pitch in.  In particular, they receive some fraction \\(\beta\\) of all the contributions.  Their net benefit is thus, this amount minus the effort they contribute.  In other words,\n$$Payoff_j = -x_j + \beta sum x_i$$Suppose you are in a class of 21 students and everyone is expected to prepare for class in a manner that costs 1 unit of life.  In the class itself, things go much better when people are prepared and we estimate that the benefit a student derives from the class is equal to 0.2 units of life for each person who comes prepared.(a) What is your net payoff if you do the reading half the class rest of the class comes prepared too?(b) What is the benefit to a shirker under the same conditions?(c) How many people do you need to think are going to do the reading to make it worth it to do the reading?",
      "soln": "<h3>SOLUTION</h3>(a) \\(Benefit_{me} = Cost_{me} + \beta sum x_i = -1 + 0.2 \\times 11 = 1.2\\)(b) \\(Benefit_{shirker} = Cost_{shirker} + \beta sum x_i = 0 + 0.2 \\times 11 = 2.2\\)(c) Our normal approach would be to ask at what N (the number of people who do the reading) is \\(Benefit_{cooperation} gt Benefit_{shirking}\\) but then we stop and realize the whole point is that it won't be.  It will always be more rational NOT to do the reading since you can always derive some benefit from others who do or even have no benefit but at least not have done the work pointlessly.  Don't be a chump!",
      "tags": []
    },
    {
      "number": "0257",
      "question": " (a) Explain the equations for common pool resource problems as discussed in Lecture 17.4: \"<a href=\"https://class.coursera.org/modelthinking/lecture/view?lecture_id=102\" target=\"_blank\">Collective Action and Common Pool Resource Problems</a>\":\\(x_j\\) : amount consumed by person j\\(X\\) : total consumedAmount available next period: \\(C_{T+1} = (C_T - X)^2\\)(b) Propose values of these variables that would result in a steady state equilibrium value of the resource.",
      "soln": "<h3>SOLUTION</h3>Each particular member_j of the population consumes x_j of the resource.  Altogether, the population consumes\\times= sum x_i.  The equation for C_{T+1} looks like a difference equation but it is non-linear.  Each time period the resource replenishes as the square of whatever is left unconsumed.",
      "tags": []
    },
    {
      "number": "0258",
      "question": " Insofar as particulars matter, what's the difference between cows, lobsters, and whether you live up stream or downstream?",
      "soln": "<h3>SOLUTION</h3><a href=\"https://class.coursera.org/modelthinking/lecture/view?lecture_id=103\" target=\"_blank\">No Panacea</a>",
      "tags": []
    },
    {
      "number": "0259",
      "question": " What are the 5+2 means of achieving cooperation in the face of structural arrangements that \"mandate\" non-cooperation in human relationships?",
      "soln": "<h3>SOLUTION</h3><ol><li>Repetition (specific reciprocity)</li><li>Reputation (general reciprocity)</li><li>Network reciprocity</li><li>Group Selection</li><li>Kin selection</li><li>Law, Prohibition, Norms</li><li>Incentives</li></ol><h4>See also</h4>SEP Lecture 17.3: <a href=\"https://class.coursera.org/modelthinking/lecture/view?lecture_id=101\" target=\"_blank\">Seven Ways To Cooperation</a><a href=\"http://www.cscs.umich.edu/~spage/ONLINECOURSE/NowakSigmund07.pdf\" target=\"_blank\">Nowak and Sigmund: \"Five Ways to Cooperate\"</a>",
      "tags": [
        "social network analysis"
      ]
    },
    {
      "number": "0260",
      "question": " Explain how \"group selection\" can give rise to cooperative behavior in human society.",
      "soln": "<h3>SOLUTION</h3><h3>See Also</h3>SEP Lecture 17.3: <a href=\"https://class.coursera.org/modelthinking/lecture/view?lecture_id=101\" target=\"_blank\">Seven Ways To Cooperation</a><a href=\"http://www.cscs.umich.edu/~spage/ONLINECOURSE/NowakSigmund07.pdf\" target=\"_blank\">Nowak and Sigmund: \"Five Ways to Cooperate\"</a>",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0261",
      "question": " Explain these acronyms: **DMS, EPSG, CRS**[[module CSS]].hover {    color: green;\t text-decoration: none;}.hover:hover {\t text-decoration: none;    border-bottom: none;}.hover span {    display: none;}.hover:hover span {    position: absolute;    display: inline;    margin: 15px -20px;    height: auto;    width: 500px;    background: #FFF;    border: 2px solid #34B;    color: #000;    padding: 1em;}.hover:hover span span {    position: relative;    margin: auto;    height: auto;    width: auto;    border: none;    padding: 0;}[[/module]] ",
      "soln": "<h3>SOLUTION</h3> <table><tr><td style=\"width:33%;\">[[span class=\"hover\"]]DMS[[span]]Degrees, Minutes, Seconds. Refers to coordinates expressed as 37Â°48'15\"N  122Â°16'15\"W rather than \"decimal degrees\" (DD) 37.8044Â° N, 122.2708Â° W. You should be able to convert between the two <a href=\"http://www.augustatech.edu/math/molik/DegreesTransparency.pdf\" target=\"_blank\">by hand</a> or with <a href=\"http://transition.fcc.gov/mb/audio/bickel/DDDMMSS-decimal.html\" target=\"_blank\">an online tool</a>. This video teaches you how to do these calculations by hand http://www.youtube.com/watch?v=tQLB1riYtz4.</td><td style=\"width:33%;\">[[span class=\"hover\"]]EPSG[[span]]the <a href=\"http://www.epsg.org/\" target=\"_blank\">European Petroleum Survey Group</a> was actually absorbed by the OGP Geomatics Committee in 2005, but the acronym lives on in their maintenance of the <a href=\"http://www.epsg.org/\" target=\"_blank\">EPSG Geodetic Parameter Dataset</a> which gives map projections and coordinate reference systems a standard number. </td><td style=\"width:33%;\">[[span class=\"hover\"]]CRS[[span]]\"Coordinate Reference System,\" or spatial reference system, that defines specific map projections.</td></tr></table>",
      "tags": []
    },
    {
      "number": "0262",
      "question": " Explain the difference between equal interval, quantile, natural break, and standard deviation as classification methods  If your data looked like this, and you have 5 class intervals, what would they be if you used each method?<br /><img src=\"https://djjr.us/images/qbank/state-pop-density-data.png\"><br />",
      "soln": "<h3>SOLUTION</h3><table><tr><td><table class=\"wikitable\"><tr><td class=\"tdheader\">StdDev</td></tr><tr><td>>M+2</td><td>398</td><td>518</td></tr><tr><td>M+1â€¦M+2</td><td>278</td><td>398</td></tr><tr><td>Mâ€¦M+1</td><td>158</td><td>278</td></tr><tr><td>M-1â€¦M</td><td>38</td><td>158</td></tr><tr><td>&lt;M-1</td><td>0</td><td>38</td></tr></table><table class=\"wikitable\"><tr><td class=\"tdheader\">Equal Interval</td></tr><tr><td>384.2</td><td>465</td></tr><tr><td>303.4</td><td>384.2</td></tr><tr><td>222.6</td><td>303.4</td></tr><tr><td>141.8</td><td>222.6</td></tr><tr><td>61</td><td>141.8</td></tr></table>    <table class=\"wikitable\"><tr><td class=\"tdheader\">Quintile</td></tr><tr><td>61</td><td>68</td></tr><tr><td>71</td><td>84</td></tr><tr><td>90</td><td>110</td></tr><tr><td>139</td><td>234</td></tr><tr><td>286</td><td>465</td></tr></table><table class=\"wikitable\"><tr><td class=\"tdheader\">Natural Break</td></tr><tr><td><br /><img src=\"https://djjr.us/images/qbank/naturalbreaks.png\"><br /></td></tr><tr></tr></table></td></tr></table>",
      "tags": [
        "computational thinking",
        "research methods"
      ]
    },
    {
      "number": "0263",
      "question": " Explain/illustrate the idea of 1+1=3.",
      "soln": "<h3>SOLUTION</h3>[[image http://meiert.com/en/upload/2007/01/1+1=3.gif]]<br /><img src=\"https://djjr.us/images/qbank/tufteonalbers.png\"><br />",
      "tags": []
    },
    {
      "number": "0264",
      "question": " What is a datum?",
      "soln": "<h3>SOLUTION</h3>A datum (plural datums) is a set of values used to define a specific geodetic systemSee <a href=\"http://en.wikipedia.org/wiki/Datum_(geodesy)\" target=\"_blank\">Datum(Geodesy)</a> in Wikipedia.",
      "tags": []
    },
    {
      "number": "0265",
      "question": " Identify graphical elements of a map: border, legend, scalebar, north arrow, author, date, projection, coordinates, data source, data date, title, body of map",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": [
        "GIS",
        "computational thinking",
        "social network analysis",
        "research methods"
      ]
    },
    {
      "number": "0266",
      "question": " What is interpolation and how do heat maps work?",
      "soln": "<h3>SOLUTION</h3>Interpolation means calculating the values between known data points.Point data &gt; create a grid > estimate (interpolate) values for each grid square assuming a \"contribution\" from all nearby points.  You should know the difference between interpolation and extrapolation.From <a href=\"http://en.wikipedia.org/wiki/Extrapolation\" target=\"_blank\">wikipedia</a>: extrapolation is the process of estimating, beyond the original observation interval, the value of a variable on the basis of its relationship with another variable. It is similar to interpolation, which produces estimates between known observations, but extrapolation is subject to greater uncertainty and a higher risk of producing meaningless resultsYou should be able to say something about a series of images like this:<br /><img src=\"https://djjr.us/images/qbank/heatmap_level0.png\"><br /><br /><img src=\"https://djjr.us/images/qbank/heatmap_level1.png\"><br /><br /><img src=\"https://djjr.us/images/qbank/heatmap_level2.png\"><br />or this<br /><img src=\"https://djjr.us/images/qbank/sample_grid02a.png\"><br /><br /><img src=\"https://djjr.us/images/qbank/sample_grid02b.png\"><br /><br /><img src=\"https://djjr.us/images/qbank/sample_grid02c.png\"><br /><h3>See Also</h3>Esri. <a href=\"http://webhelp.esri.com/arcgisdesktop/9.2/index.cfm?TopicName=Understanding_interpolation_analysis\" target=\"_blank\">Understanding Interpolation Analysis</a>Penn State Geography 486.  <a href=\"https://www.e-education.psu.edu/geog486/l6_p5.html\" target=\"_blank\">Part III. Interpolation, Contouring, and Symbolization</a>",
      "tags": [
        "GIS"
      ]
    },
    {
      "number": "0267",
      "question": " What is a csvt file and why is it useful?",
      "soln": "<h3>SOLUTION</h3>It is a CSV but with the data type specified before each item.From http://www.gdal.org/ogr/drv_csv.html:Limited type recognition can be done for Integer, Real, String, Date (YYYY-MM-DD), Time (HH:MM:SS+nn) and DateTime (YYYY-MM-DD HH:MM:SS+nn) columns through a descriptive file with the same name as the CSV file, but a .csvt extension. In a single line the types for each column have to be listed with double quotes and be comma separated (e.g., \"Integer\",\"String\"). It is also possible to specify explicitly the width and precision of each column, e.g. \"Integer(5)\",\"Real(10.7)\",\"String(15)\". The driver will then use these types as specified for the csv columns.(see <a href=\"http://anitagraser.com/2011/03/07/how-to-specify-data-types-of-csv-columns-for-use-in-qgis/\" target=\"_blank\">Graser 2011</a> or <a href=\"http://www.gdal.org/ogr/drv_csv.html\" target=\"_blank\">GDAL.org</a> or <a href=\"http://maps.cga.harvard.edu/qgis/wkshop/join_csv.php\" target=\"_blank\">Harvard QGIS Workshop</a>",
      "tags": []
    },
    {
      "number": "0268",
      "question": " Projections: explain the terms cylindrical, conical, azimuthal, conformal, equal-area in conjunction with map projections and coordinate systems",
      "soln": "<h3>SOLUTION</h3>From wikipedia:Cylindrical:\"normal cylindrical projection\" is used to refer to any projection in which meridians are mapped to equally spaced vertical lines and circles of latitude (parallels) are mapped to horizontal lines.[[&lt;image cylind.png]]Conical: \"conic projection\" is used to refer to any projection in which meridians are mapped to equally spaced lines radiating out from the apex and circles of latitude (parallels) are mapped to circular arcs centered on the apex.[[<image con.png]]Azimuthal: Azimuthal projections have the property that directions from a central point are preserved and therefore great circles through the central point are represented by straight lines on the map.[[<image azm.png]]Conformal: Conformal, or orthomorphic, map projections preserve angles locally, implying that they map infinitesimal circles of constant size anywhere on the Earth to infinitesimal circles of varying sizes on the map[[<image conform.png]]Equal-area:example, Mollweide[[<image mollweide.png]]solution",
      "tags": [
        "GIS"
      ]
    },
    {
      "number": "0269",
      "question": " Explain longitude, latitude, parallels, meridians",
      "soln": "<h3>SOLUTION</h3>Longitude -- the angular distance of a place east or west of the meridian at Greenwich, England, or west of the standard meridian of a celestial object, usually expressed in degrees and minutes.  //\"at a longitude of 2Â° W\"//Latitude -- the angular distance of a place north or south of the earth's equator, or of a celestial object north or south of the celestial equator, usually expressed in degrees and minutes.  //\"at a latitude of 51Â° N\"//  [*http://en.wikipedia.org/wiki/Circle_of_latitude More Informations.]Meridians -- a circle of constant longitude passing through a given place on the earth's surface and the terrestrial poles.",
      "tags": []
    },
    {
      "number": "0270",
      "question": " Describe and give examples of different types of maps: topographic, thematic, schematic, choropleth, isopleth, political, mental, Digital Elevation Model (DEM), political, physical, topographic, cadastral, climate, road, nautical charts, bathymetric chart, aeronautical chart",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": [
        "GIS",
        "policy modeling",
        "social network analysis"
      ]
    },
    {
      "number": "0271",
      "question": " With reference to cartography, explain what we mean by scale, resolution, simplification/abstraction, representation, point, line, area, volume",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": [
        "social network analysis"
      ]
    },
    {
      "number": "0272",
      "question": " Explain/illustrate what these geoprocessing operations do: clip, intersection, union, difference, buffer, convex hull, symmetric difference.",
      "soln": "<h3>SOLUTION</h3>[*http://djjr-courses.wikidot.com/soc128:list-pages-by-tag/tag/geoprocessing/category/soc128 See here] or <a href=\"http://www.slideshare.net/swethaashok28/geoprocessing-in-qgis\" target=\"_blank\">Sweta A's excellent slide lecture</a>",
      "tags": []
    },
    {
      "number": "0273",
      "question": " What kind of map is this:<br /><img src=\"https://djjr.us/images/qbank/oakland-east-quad-1.jpg\"><br />",
      "soln": "<h3>SOLUTION</h3>Topographic Map.  In this case, a <a href=\"http://topomaps.usgs.gov/index.html\" target=\"_blank\">USGS \"Topo Quad\"</a> map.From <a href=\"http://en.wikipedia.org/wiki/Topographic_map\" target=\"_blank\">wikipedia</a>:Traditional definitions require a topographic map to show both natural and man-made features. A topographic map is typically published as a map series, made up of two or more map sheets that combine to form the whole map.",
      "tags": [
        "GIS"
      ]
    },
    {
      "number": "0274",
      "question": " Fill in the names of the \"districts\" in Oakland.<br /><img src=\"https://djjr.us/images/qbank/oakland-districts-blank.png\"><br />",
      "soln": "<h3>SOLUTION</h3><br /><img src=\"https://djjr.us/images/qbank/oakland-districts.png\"><br />",
      "tags": []
    },
    {
      "number": "0275",
      "question": " What do the four digit numbers on this map of the Laurel District most likely represent?<br /><img src=\"https://djjr.us/images/qbank/laurel-tracts.png\"><br />",
      "soln": "<h3>SOLUTION</h3>Census tract numbers",
      "tags": [
        "GIS"
      ]
    },
    {
      "number": "0276",
      "question": " Go to OpenStreetMap.org and edit a building structure in the neighborhood around Mills.",
      "soln": "<h3>SOLUTION</h3><a href=\"http://osm.org\" target=\"_blank\">osm.org</a>",
      "tags": [
        "GIS",
        "design"
      ]
    },
    {
      "number": "0277",
      "question": " Explain these acronyms: **CSV, UTM, JPEG** [[module CSS]].hover {    color: green;\t text-decoration: none;}.hover:hover {\t text-decoration: none;    border-bottom: none;}.hover span {    display: none;}.hover:hover span {    position: absolute;    display: inline;    margin: 15px -20px;    height: auto;    width: 500px;    background: #FFF;    border: 2px solid #34B;    color: #000;    padding: 1em;}.hover:hover span span {    position: relative;    margin: auto;    height: auto;    width: auto;    border: none;    padding: 0;}[[/module]]",
      "soln": "<h3>SOLUTION</h3> <table><tr style=\"height:48px;\"><td style=\"width:33%;\"> [[span class=\"hover\"]]CSV[[span]]Comma Separated Values is a format for text files of data. Data values are in rows and columns with commas separating fields and quotes around strings that contain commas. The first row often contains field names.  Some applications <a href=\"http://anitagraser.com/2011/03/07/how-to-specify-data-types-of-csv-columns-for-use-in-qgis/use\" target=\"_blank\">a CSVT (template) file</a> to direct how CSV fields should be imported.</td><td style=\"width:33%;\">[[span class=\"hover\"]]UTM[[span]]Universal Transverse Mercator</td><td style=\"width:33%;\">[[span class=\"hover\"]]JPEG[[span]]<a href=\"http://www.jpeg.org/\" target=\"_blank\">Joint Photographic Experts Group</a>. JPEG is a <a href=\"http://en.wikipedia.org/wiki/Lossy_compression\" target=\"_blank\">lossy compression format</a> for graphics files.</td></tr></table>",
      "tags": []
    },
    {
      "number": "0278",
      "question": " Explain these acronyms: **PNG, TIF, geoTIF** [[module CSS]].hover {\tcolor: green;\t text-decoration: none;}.hover:hover {\t text-decoration: none;\tborder-bottom: none;}.hover span {    display: none;}.hover:hover span {\tposition: absolute;\tdisplay: inline;\tmargin: 15px -20px;\theight: auto;\twidth: 500px;\tbackground: #FFF;\tborder: 2px solid #34B;\tcolor: #000;\tpadding: 1em;}.hover:hover span span {\tposition: relative;\tmargin: auto;\theight: auto;\twidth: auto;\tborder: none;\tpadding: 0;}[[/module]]",
      "soln": "<h3>SOLUTION</h3> <table><tr style=\"height:48px;\"><td style=\"width:33%;\">  [[span class=\"hover\"]]PNG[[span]]Portable Network Graphics</td><td style=\"width:33%;\">[[span class=\"hover\"]]TIF[[span]] (or TIFF) Tagged Image (File) Format </td><td style=\"width:33%;\">[[span class=\"hover\"]]geoTIF[[span]]GeoTIFF is a public domain metadata standard which allows georeferencing information to be embedded within a Tagged Image Format file. </td></tr></table>",
      "tags": []
    },
    {
      "number": "0279",
      "question": " Explain these acronyms: **SQL, WMS, WGS84** [[module CSS]].hover {\tcolor: green;\t text-decoration: none;}.hover:hover {\t text-decoration: none;\tborder-bottom: none;}.hover span {    display: none;}.hover:hover span {\tposition: absolute;\tdisplay: inline;\tmargin: 15px -20px;\theight: auto;\twidth: 500px;\tbackground: #FFF;\tborder: 2px solid #34B;\tcolor: #000;\tpadding: 1em;}.hover:hover span span {\tposition: relative;\tmargin: auto;\theight: auto;\twidth: auto;\tborder: none;\tpadding: 0;}[[/module]]",
      "soln": "<h3>SOLUTION</h3> <table><tr style=\"height:48px;\"><td style=\"width:33%;\"> [[span class=\"hover\"]]SQL[[span]]Structured Query Language</td><td style=\"width:33%;\">[[span class=\"hover\"]]WMS[[span]]\"A <a href=\"http://en.wikipedia.org/wiki/Web_Map_Service\" target=\"_blank\">Web Map Service</a> is a standard protocol for serving georeferenced map images over the Internet that are generated by a map server using data from a GIS database. The specification was developed and first published by the Open Geospatial Consortium in 1999.\"</td><td style=\"width:33%;\">[[span class=\"hover\"]]WGS84[[span]]<a href=\"http://en.wikipedia.org/wiki/World_Geodetic_System\" target=\"_blank\">World Geodetic Survey of 1984</a> (also known as WGS 1984, EPSG:4326) is a longitude/latitude coordinate references system. It is the system used by the Global Positioning System.</td></tr></table>",
      "tags": []
    },
    {
      "number": "0280",
      "question": " Explain these acronyms: NAD83, NAD27, OSGB [[module CSS]].hover {\tcolor: green;\t text-decoration: none;}.hover:hover {\t text-decoration: none;\tborder-bottom: none;}.hover span {    display: none;}.hover:hover span {\tposition: absolute;\tdisplay: inline;\tmargin: 15px -20px;\theight: auto;\twidth: 500px;\tbackground: #FFF;\tborder: 2px solid #34B;\tcolor: #000;\tpadding: 1em;}.hover:hover span span {\tposition: relative;\tmargin: auto;\theight: auto;\twidth: auto;\tborder: none;\tpadding: 0;}[[/module]]",
      "soln": "<h3>SOLUTION</h3> <table><tr style=\"height:48px;\"><td style=\"width:33%;\"> [[span class=\"hover\"]]NAD83[[span]]<a href=\"http://en.wikipedia.org/wiki/North_American_Datum\" target=\"_blank\">North American Datum</a> of 1983</td><td style=\"width:33%;\">[[span class=\"hover\"]]NAD27[[span]]<a href=\"http://en.wikipedia.org/wiki/North_American_Datum\" target=\"_blank\">North American Datum</a> of 1927</td><td style=\"width:33%;\">[[span class=\"hover\"]]OSGB[[span]]Ordinance Survey of Great Britain.  </td></tr></table>",
      "tags": []
    },
    {
      "number": "0281",
      "question": " Explain these acronyms: **AAG, ABAG, BART** [[module CSS]].hover {\tcolor: green;\t text-decoration: none;}.hover:hover {\t text-decoration: none;\tborder-bottom: none;}.hover span {    display: none;}.hover:hover span {\tposition: absolute;\tdisplay: inline;\tmargin: 15px -20px;\theight: auto;\twidth: 500px;\tbackground: #FFF;\tborder: 2px solid #34B;\tcolor: #000;\tpadding: 1em;}.hover:hover span span {\tposition: relative;\tmargin: auto;\theight: auto;\twidth: auto;\tborder: none;\tpadding: 0;}[[/module]]",
      "soln": "<h3>SOLUTION</h3> <table><tr style=\"height:48px;\"><td style=\"width:33%;\"> [[span class=\"hover\"]]AAG[[span]]American Association of Geographers</td><td style=\"width:33%;\">[[span class=\"hover\"]]ABAG[[span]]The Association of Bay Area Governments (<a href=\"http://www.abag.ca.gov/\" target=\"_blank\">abag.ca.gov</a>) is a source for local GIS data.</td><td style=\"width:33%;\">[[span class=\"hover\"]]BART[[span]]Bay Area Rapid Transit</td></tr></table>",
      "tags": []
    },
    {
      "number": "0282",
      "question": " Explain these acronyms: **USGS, NOAA, NASA** [[module CSS]].hover {\tcolor: green;\t text-decoration: none;}.hover:hover {\t text-decoration: none;\tborder-bottom: none;}.hover span {    display: none;}.hover:hover span {\tposition: absolute;\tdisplay: inline;\tmargin: 15px -20px;\theight: auto;\twidth: 500px;\tbackground: #FFF;\tborder: 2px solid #34B;\tcolor: #000;\tpadding: 1em;}.hover:hover span span {\tposition: relative;\tmargin: auto;\theight: auto;\twidth: auto;\tborder: none;\tpadding: 0;}[[/module]]",
      "soln": "<h3>SOLUTION</h3> <table><tr style=\"height:48px;\"><td style=\"width:33%;\"> [[span class=\"hover\"]]USGS[[span]]United States Geological Survey</td><td style=\"width:33%;\">[[span class=\"hover\"]]NOAA[[span]]National Oceanic and Atmospheric Administration</td><td style=\"width:33%;\">[[span class=\"hover\"]]NASA[[span]]National Aeronautics and Space Administration</td></tr></table>",
      "tags": []
    },
    {
      "number": "0282",
      "question": " Explain these acronyms: **BG, CT,  XML, CRAP** [[module CSS]].hover {\tcolor: green;\t text-decoration: none;}.hover:hover {\t text-decoration: none;\tborder-bottom: none;}.hover span {    display: none;}.hover:hover span {\tposition: absolute;\tdisplay: inline;\tmargin: 15px -20px;\theight: auto;\twidth: 500px;\tbackground: #FFF;\tborder: 2px solid #34B;\tcolor: #000;\tpadding: 1em;}.hover:hover span span {\tposition: relative;\tmargin: auto;\theight: auto;\twidth: auto;\tborder: none;\tpadding: 0;}[[/module]]",
      "soln": "<h3>SOLUTION</h3> <table><tr style=\"height:48px;\"><td style=\"width:33%;\"> [[span class=\"hover\"]]BG[[span]]Block Group</td><td style=\"width:33%;\">[[span class=\"hover\"]]CT[[span]]Census Tract</td><td style=\"width:33%;\">[[span class=\"hover\"]]XML[[span]]<a href=\"http://en.wikipedia.org/wiki/XML\" target=\"_blank\">Extensible Markup Language</a> \"defines a set of rules for encoding documents in a format that is both human-readable and machine-readable.\"[[image http://upload.wikimedia.org/wikipedia/commons/6/68/XML.svg]]</td></tr><tr style=\"height:48px;\"><td style=\"width:33%;\"> [[span class=\"hover\"]]CRAP[[span]]Contrast, Repetition, Alignment, Proximity.  See <a href=\"http://djjr-courses.wikidot.com/soc128:basic-elements-of-graphic-design\" target=\"_blank\">here</a> or <a href=\"http://www.dailyblogtips.com/crapthe-four-principles-of-sound-design/\" target=\"_blank\">here</a> for explanation.</td><td style=\"width:33%;\">[[span class=\"hover\"]]---[[span]]---</td><td style=\"width:33%;\">[[span class=\"hover\"]]---[[span]]---</td></tr></table>",
      "tags": []
    },
    {
      "number": "0284",
      "question": " What are \"map tiles\"?  Where do we encounter them?  How do they work?",
      "soln": "<h3>SOLUTION</h3>From Mapbox:A continuous image of the world at street level detail would would be millions of pixels wide â€“ much too large to download or hold in memory at once. In reality, web maps are made up of many small, square images called tiles. These tiles are typically 256x256 pixels and are placed side-by-side in order to create the illusion of a very large seamless image.See \"<a href=\"https://www.mapbox.com/developers/guide/\" target=\"_blank\">How do web maps work?</a>\" at MapBox",
      "tags": [
        "GIS"
      ]
    },
    {
      "number": "0285",
      "question": " Name a few suppliers of map tiles.",
      "soln": "<h3>SOLUTION</h3><a href=\"http://osm.org\" target=\"_blank\">Open Street Map</a>http://maps.stamen.com/#watercolor/12/37.7706/-122.3782 Stamen Design]<a href=\"https://www.mapbox.com/\" target=\"_blank\">MapBox</a><a href=\"http://cloudmade.com/products/map-tiles\" target=\"_blank\">CloudMade</a>",
      "tags": [
        "GIS"
      ]
    },
    {
      "number": "0286",
      "question": " When using Leaflet to create a webmap, we use code like this:[[code]]var cloudmade = L.tileLayer('http://{s}.tile.cloudmade.com/{key}/{styleId}/256/{z}/{x}/{y}.png', {   \t\t attribution: 'Map data &copy; 2011 OpenStreetMap contributors, Imagery &copy; 2011 CloudMade',   \t\t key: 'BC9A493B41014CAABB98F0471D759707',   \t\t styleId: 22677   \t })[[/code]]to create the \"attribution\" on the map.  What does this refer to?  Why do we need to do it?",
      "soln": "<h3>SOLUTION</h3><br /><img src=\"https://djjr.us/images/qbank/leaflet-attribution.png\"><br />See, for example, the OSM \"Tile Usage Policy\" for a hint.[[iframe http://wiki.openstreetmap.org/wiki/Tile_usage_policy width=\"800px\" height=\"500px\"]]",
      "tags": [
        "GIS",
        "computational thinking",
        "research methods"
      ]
    },
    {
      "number": "0287",
      "question": " Download [[file q:0287/exam2013.zip|this zip file]], open the QGIS workspace inside, produce a map that looks like this:<br /><img src=\"https://djjr.us/images/qbank/output.png\"><br />and post it to a wiki page.[[module CSS]].hover {    color: green;\t text-decoration: none;}.hover:hover {\t text-decoration: none;    border-bottom: none;}.hover span {    display: none;}.hover:hover span {    position: absolute;    display: inline;    margin: 15px -20px;    height: auto;    width: 500px;    background: #FFF;    border: 2px solid #34B;    color: #000;    padding: 1em;}.hover:hover span span {    position: relative;    margin: auto;    height: auto;    width: auto;    border: none;    padding: 0;}[[/module]]",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": [
        "GIS"
      ]
    },
    {
      "number": "0288",
      "question": " How would you estimate the number of people who live within 500 meters of MacArthur Blvd in Oakland?",
      "soln": "<h3>SOLUTION</h3><ol><li>Assume you have a boundary file for, say, census tracts with population and a street layer.</li><li>Select the polyline feature representing MacArthur Blvd.</li><li>Create a 500 m buffer around the selection.</li><li>Use geoprocessing&gt;intersect on the buffer and the census tract polygons.</li><li>Assume that the population of each census tract is uniformly distributed so we can use the area of the intersection with the buffer to estimate the population that lives within 500 m of MacArthur Blvd.</li></ol>",
      "tags": []
    },
    {
      "number": "0289",
      "question": " What map is this and what is it \"famous\" for?<br /><img src=\"https://djjr.us/images/qbank/gall-peters.png\"><br />",
      "soln": "<h3>SOLUTION</h3>Gall-Peters projection.  It is an equal-area cylindric projection.  It became well known in the 20th century in discussions about the political implications of map design.  Most notably, it puts Africa in the center and shows its relative size more accurately than other world maps.",
      "tags": [
        "GIS"
      ]
    },
    {
      "number": "0290",
      "question": " What kind of map is this and what is it used for?<br /><img src=\"https://djjr.us/images/qbank/sfbaychart.png\"><br />",
      "soln": "<h3>SOLUTION</h3>Nautical chart, used for water navigation.",
      "tags": [
        "GIS"
      ]
    },
    {
      "number": "0290",
      "question": " What kind of map is this and what is it used for?<br /><img src=\"https://djjr.us/images/qbank/sfbaychart.png\"><br />",
      "soln": "<h3>SOLUTION</h3>Nautical chart, used for water navigation.",
      "tags": [
        "GIS"
      ]
    },
    {
      "number": "0291",
      "question": " What do we call this kind of map?<br /><img src=\"https://djjr.us/images/qbank/africapolitical.png\"><br />",
      "soln": "<h3>SOLUTION</h3>Political Map.",
      "tags": [
        "GIS"
      ]
    },
    {
      "number": "0292",
      "question": " Name these California counties.<br /><img src=\"https://djjr.us/images/qbank/CACountiesSouth.png\"><br />",
      "soln": "<h3>SOLUTION</h3><br /><img src=\"https://djjr.us/images/qbank/CACountiesSouthLabels.png\"><br />",
      "tags": []
    },
    {
      "number": "0293",
      "question": " Identify the counties in the greater Bay Area.<br /><img src=\"https://djjr.us/images/qbank/bayareacountiesblank.png\"><br />",
      "soln": "<h3>SOLUTION</h3><br /><img src=\"https://djjr.us/images/qbank/CA_counties03.png\"><br />",
      "tags": []
    },
    {
      "number": "0294",
      "question": " Identify the counties in this band across northern California<br /><img src=\"https://djjr.us/images/qbank/CCSzone3Counties.png\"><br />",
      "soln": "<h3>SOLUTION</h3><br /><img src=\"https://djjr.us/images/qbank/CCSzone3CountiesDetail.png\"><br />",
      "tags": []
    },
    {
      "number": "0295",
      "question": " Locate these prominent California geographic features:<table><tr><td><br /><img src=\"https://djjr.us/images/qbank/CA-nine-features.png\"><br /></td><td><ul><li>Cascade Mountains</li><li>Coastal Mountains</li><li>Colorado River</li><li>Kalamath Mountains</li><li>Mojave Desert</li><li>Sacramento River</li><li>Sacramento Valley</li><li>San Joaquin Valley</li><li>San Joaquin River</li><li>Sierra Nevada Mountains</li></ul></td></tr></table>",
      "soln": "<h3>SOLUTION</h3>0. Cascade Mountains1. Kalamath Mountains2. Coastal Mountains3. Sacramento Valley4. San Joaquin Valley5. Sierra Nevada Mountains6. Mojave Desert7. Sacramento River8. San Joaquin River9. Colorado River<br /><img src=\"https://djjr.us/images/qbank/California_annotated.jpg\"><br />[[image http://www.worldatlas.com/webimage/countrys/namerica/usstates/canewzz.gif]]",
      "tags": [
        "GIS",
        "social network analysis"
      ]
    },
    {
      "number": "0296",
      "question": " (1) Read this thematic map.  (2) Offer a critique of its graphic design.[[collapsible show=\"+ Show Image\" hide=\"- Hide Image\"]]<br /><img src=\"https://djjr.us/images/qbank/CUS908.gif\"><br />",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": [
        "GIS",
        "design",
        "social network analysis"
      ]
    },
    {
      "number": "0297",
      "question": " With reference to the figures below, describe what the California State Plane System is.<br /><img src=\"https://djjr.us/images/qbank/cal_st_plane.png\"><br /><br /><img src=\"https://djjr.us/images/qbank/ca_state_plane_CRS_list.png\"><br />",
      "soln": "<h3>SOLUTION</h3>\"Each zone of the California State Plane Coordinate System based on the North American Datum of 1983 (CCS83) is a Lambert Conformal Conic Projection based on the Geodetic Reference System of 1980, the basis for the North American Datum of 1983 (NAD83).\" (<a href=\"http://www.redefinedhorizons.com/shared_files/documents/gis/California_State_Plane_Coordinate_System_Zone_Information.pdf\" target=\"_blank\">CA State Plane CRS Information</a>)See California Geological Survey explanation of <a href=\"http://www.conservation.ca.gov/cgs/information/geologic_mapping/state_plane/Pages/state_plane_index1.aspx\" target=\"_blank\">California State Plane Coordinate System</a>",
      "tags": [
        "design"
      ]
    },
    {
      "number": "0298",
      "question": " Explain what's going on in this apparently distorted map<br /><img src=\"https://djjr.us/images/qbank/world-CA-stateplane3.png\"><br />",
      "soln": "<h3>SOLUTION</h3>This map shows world countries layer behind California counties layer projected in local California state plan CRS.  It's not a good projection to show the whole world.",
      "tags": [
        "GIS"
      ]
    },
    {
      "number": "0299",
      "question": " What is the California CRS zone for Oakland and the Bay Area?  What units is it in?  What datum is it based on?",
      "soln": "<h3>SOLUTION</h3>The Bay Area is in Zone III of the California State Plane CRS.  It is based on the NAD-83 (North American Datum of 1983) which is in meters but some sources still use the older system based on NAD27 which is in feet.<h4>See Also</h4><ul><li>California Geological Survey: <a href=\"http://www.conservation.ca.gov/cgs/information/geologic_mapping/state_plane/Pages/state_plane_index1.aspx\" target=\"_blank\">California State Plane Coordinate System</a></li><li><a href=\"http://www.redefinedhorizons.com/shared_files/documents/gis/California_State_Plane_Coordinate_System_Zone_Information.pdf\" target=\"_blank\">California State Plane Coordinate North American Datum of 1983 Zone Information</a></li></ul>[[image http://www.conservation.ca.gov/cgs/information/geologic_mapping/state_plane/PublishingImages/zone3.gif]]",
      "tags": []
    },
    {
      "number": "0300",
      "question": " You have been hired as a consultant to estimate the effects of a new criminal offender registry law that prohibits individuals on the registry from living within 1000 meters of a school.  You are asked to<ul><li>Make a map showing all areas that are off-limits to registered offenders</li><li>Calculate about how much of the city's rental market is off-limits to registered offenders based on this law.</li></ul>You have<ul><li>a point layer with school locations</li><li>a street layer</li><li>a census blockgroup layer with information on number of rental units (or at least renter occupied units as of the last census)</li></ul>",
      "soln": "<h3>SOLUTION</h3>For the first task, create a 1000 m buffer on the schools point layer.  You may want to clip it to the census block group layer (using it as a city boundary layer).  It may be graphically more attractive if the buffers are merged into one and made semitransparent.For task two, a very crude estimate might be arrived at by looking at blockgroups that do not intersect the buffer at all and comparing number of renter units in them to the total in the city.  To get a slightly better estimate we might take a union of the buffer and the block groups and then, making the assumption that rentals are uniformly distributed within each block group, use the relative areas of the parts that overlap the buffer and the parts that don't to estimate the number of rentals ruled out by the law.",
      "tags": [
        "GIS"
      ]
    },
    {
      "number": "0301",
      "question": " Explain what we mean by \"taxi-cab distance.\"",
      "soln": "<h3>SOLUTION</h3>See <a href=\"http://en.wikipedia.org/wiki/Taxicab_geometry\" target=\"_blank\">Taxicab Geometry</a>",
      "tags": []
    },
    {
      "number": "0302",
      "question": " What is the significance of this map? What does it show? Who made it?  When was it made?<br /><img src=\"https://djjr.us/images/qbank/snowsmap.png\"><br />",
      "soln": "<h3>SOLUTION</h3>From Wikipedia:The Broad Street cholera outbreak was a severe outbreak of cholera that occurred near Broad Street (now renamed Broadwick Street) in Soho district of London, England in 1854. This outbreak is best known for the physician John Snow's study of the outbreak and his discovery that cholera is spread by contaminated water. This discovery came to influence public health and the construction of improved sanitation facilities beginning in the 19th century.See Wikipedia Editors, \"<a href=\"http://en.wikipedia.org/wiki/1854_Broad_Street_cholera_outbreak\" target=\"_blank\">1854 Broad Street Cholera Outbreak</a>.\"",
      "tags": [
        "GIS"
      ]
    },
    {
      "number": "0303",
      "question": " Show, in QGIS, how to select features individually and by radius, rectangle, etc.",
      "soln": "<h3>SOLUTION</h3>E.g., use rectangle selection to select most of the countries in western Africa from the COUNTRIES layer. Switch to single feature selection to shift-select to get any countries missing. Show these in the attribute table (show only the selected features so we can see them all at once). Deselect all features. In the attribute table, select all the countries that start with M. Show where these are on the world map.",
      "tags": []
    },
    {
      "number": "0304",
      "question": " Open and explain attribute table. What are rows, what are columns? What do the controls along the bottom do? How do you sort rows? Change column width? Show only selected records? Select one or two rows and then reverse the selection.",
      "soln": "<h3>SOLUTION</h3>Open the attribute table for a layer. Talk about rows and columns. Identify the buttons and controls. Show how to sort the table based on a field. Select records by data value. Show only selected records. Toggle editing.  Edit data.  Use field calculator to add a field.",
      "tags": []
    },
    {
      "number": "0305",
      "question": " Open properties dialog for a vector layer and explain briefly what the Styles, Labels, Fields, Metadata, and Joins tabs are for.",
      "soln": "<h3>SOLUTION</h3>Skill demonstration.",
      "tags": [
        "computational thinking",
        "research methods"
      ]
    },
    {
      "number": "0306",
      "question": " Create custom labels based on two fields for a polygon layer.",
      "soln": "<h3>SOLUTION</h3>The following is from [[[soc128:qgis-howto-make-multiline-labels|How to Make Multi-Line Labels in QGIS]]].  That's more than just using two fields, but the two fields part is the same in both cases.",
      "tags": []
    },
    {
      "number": "0307",
      "question": " Find a color scheme using <a href=\"http://colorbrewer2.org/\" target=\"_blank\">ColorBrewer</a> and implement it on a polygon layer in QGIS.",
      "soln": "<h3>SOLUTION</h3>",
      "tags": []
    },
    {
      "number": "0308",
      "question": " Take a basic thematic map of Oakland, set up a print composer, and add graticule and customize annotations.",
      "soln": "<h3>SOLUTION</h3>Skill demonstration.",
      "tags": [
        "GIS"
      ]
    },
    {
      "number": "0309",
      "question": " Demonstrate that you know you way around the Print Composer.",
      "soln": "<h3>SOLUTION</h3><ul><li>Edit the labels for the category descriptions.</li><li>Use align tools to adjust layout.</li><li>Remove borders, add background, change fonts in legend.</li><li>Edit text in legend.</li><li>Add graticule, add text, add north arrows and scalebars.</li></ul>",
      "tags": []
    },
    {
      "number": "0310",
      "question": " Show you know your way around the Georeferencer plugin in QGIS.",
      "soln": "<h3>SOLUTION</h3><h4>See</h4><ul><li>QGIS User Manual. <a href=\"http://qgis.org/en/docs/user_manual/plugins/plugins_georeferencer.html\" target=\"_blank\">Plugins: Georeferencer</a></li><li>Ujaval Gandhi.   <a href=\"http://www.digital-geography.com/qgis-tutorial-i-how-to-georeference-a-map/\" target=\"_blank\">QGis Tutorial I: how to georeference a map</a></li><li>digital-geography.com <a href=\"http://qgis.spatialthoughts.com/2012/02/tutorial-georeferencing-topo-sheets.html\" target=\"_blank\">Tutorial: Georeferencing Topo Sheets, Topo Maps, Satellite Image or Scanned Maps in QGIS</a></li><li>Harvard CGA <a href=\"http://www.youtube.com/watch?v=ffPL5h4mJf4\" target=\"_blank\">QGIS 11 - Georeferencing Scanned Map Image</a> (video)</li><li>Numpty's Progress. <a href=\"http://glaikit.org/2011/03/27/image-georeferencing-with-qgis/\" target=\"_blank\">image georeferencing with QGIS</a></li></ul>",
      "tags": []
    },
    {
      "number": "0311",
      "question": " Show that you know your way around how QGIS lets you create a new vector layer of polygons, points, or lines.",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": []
    },
    {
      "number": "0312",
      "question": " Join a csv data file to a vector shape file.",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": [
        "computational thinking",
        "research methods"
      ]
    },
    {
      "number": "0313",
      "question": " Create a point layer by importing a CSV file containing geographic coordinates.",
      "soln": "<h3>SOLUTION</h3>See, for example, <a href=\"http://maps.cga.harvard.edu/qgis/wkshop/import_csv.php\" target=\"_blank\">Harvard QGIS Workshop \"Import from CSV\"</a> or <a href=\"http://qgis.spatialthoughts.com/2012/01/importing-spreadsheets-or-csv-files-to.html\" target=\"_blank\">Importing Spreadsheets or CSV files</a> by Ujaval Gandhi.",
      "tags": [
        "GIS",
        "social network analysis"
      ]
    },
    {
      "number": "0315",
      "question": " Identify and describe. What does it show? Who made it?  When was it made?<br /><img src=\"https://djjr.us/images/qbank/minard-napoleon.png\"><br />",
      "soln": "<h3>SOLUTION</h3>From <a href=\"http://www.datavis.ca/gallery/re-minard.php\" target=\"_blank\">Michael Friendly, York University</a>:[[image http://www.datavis.ca/gallery/minard/minard-odt.jpg]]",
      "tags": []
    },
    {
      "number": "0316",
      "question": " What is Tissot's Indicatrix and what is it used for?",
      "soln": "<h3>SOLUTION</h3>See <a href=\"http://en.wikipedia.org/wiki/Tissot's_indicatrix\" target=\"_blank\">Tissot's Indicatrix</a>.",
      "tags": []
    },
    {
      "number": "0317",
      "question": " Match the name with the projection.<table class=\"wikitable\"><tr><td>South Polar Azimuthal | Mercator | Albers Equal Area Conic | Mollweide | Lambert Conformal Conic | North Polar Azimuthal</td></tr><tr><td><br /><img src=\"https://djjr.us/images/qbank/albersequalareaconic0.png\"><br /></td></tr><tr><td><br /><img src=\"https://djjr.us/images/qbank/mercator0.png\"><br /></td></tr><tr><td><br /><img src=\"https://djjr.us/images/qbank/Mollweide0.png\"><br /></td></tr><tr></tr><tr><td><br /><img src=\"https://djjr.us/images/qbank/northpolarazimuthal0.png\"><br /></td></tr><tr><td><br /><img src=\"https://djjr.us/images/qbank/southpolarazimuthal0.png\"><br /></td></tr><tr><td><br /><img src=\"https://djjr.us/images/qbank/lambertconformal0.png\"><br /></td></tr><tr></tr></table>",
      "soln": "<h3>SOLUTION</h3><table class=\"wikitable\"><tr><td><br /><img src=\"https://djjr.us/images/qbank/albersequalareaconic.png\"><br /></td></tr><tr><td><br /><img src=\"https://djjr.us/images/qbank/mercator.png\"><br /></td></tr><tr><td><br /><img src=\"https://djjr.us/images/qbank/Mollweide.png\"><br /></td></tr><tr></tr><tr><td><br /><img src=\"https://djjr.us/images/qbank/northpolarazimuthal.png\"><br /></td></tr><tr><td><br /><img src=\"https://djjr.us/images/qbank/southpolarazimuthal.png\"><br /></td></tr><tr><td><br /><img src=\"https://djjr.us/images/qbank/lambertconformal.png\"><br /></td></tr><tr></tr></table>",
      "tags": []
    },
    {
      "number": "0318",
      "question": " What does the indicatrix on this <a href=\"http://en.wikipedia.org/wiki/Dymaxion_map\" target=\"_blank\">Fuller projection or \"Dymaxion\" map</a> tell you about this projection (which projects the globe onto an <a href=\"http://en.wikipedia.org/wiki/Icosahedron\" target=\"_blank\">icosohedron</a> and then unfolds the solid figure)?<br /><img src=\"https://djjr.us/images/qbank/FullerProjection.png\"><br />",
      "soln": "<h3>SOLUTION</h3><br /><img src=\"https://djjr.us/images/qbank/FullerProjection2.png\"><br />It appears to preserve area and shape on land areas.",
      "tags": [
        "GIS"
      ]
    },
    {
      "number": "0319",
      "question": " What does the indicatrix tell us about the Mollweide projection? Specifically, what do the red and black \"12 o'clock\" and \"3 o'clock\" lines mean?<br /><img src=\"https://djjr.us/images/qbank/mollweide_w_indicatrix.png\"><br />",
      "soln": "<h3>SOLUTION</h3>Just from visual inspection we can see that the area of the indicatrix circles seems more or less preserved but angles are distorted in a manner that can be read off the map: more angular distortion the farther we are from the central meridien.",
      "tags": []
    },
    {
      "number": "0320",
      "question": " Explain this diagram:<br /><img src=\"https://djjr.us/images/qbank/lambert-conic-diagram.png\"><br />",
      "soln": "<h3>SOLUTION</h3>This diagram shows the two standard parallels for a conical projection.  Conical projections are generated by wrapping the projection surface into a cone that fits over the globe from a pole such that the conical surface is tangent to the sphere along a line of latitude, or, more commonly, passes shallowly through the sphere so that it is tangent at two small circles or latitudes that we call \"standard parallels.\"  The resulting graticule is fan-shaped.  All features lying on the concentric circles of the standard parallels would be undistorted with minimal distortion between them (provided they are close together) and more distortion as we move north or south.  This projection is often used for local coordinate systems in territories that stretch more east-west than north south.[[image http://standards.sedris.org/18026/text/ISOIEC_18026E_ABSTRACT_CS/image091.jpg]]",
      "tags": []
    },
    {
      "number": "0321",
      "question": ": Our consulting firm, NGOsRus, has developed a new organizational assay protocol to help characterize the financial health of community organizations.  We have tested the instrument on many organizations whose financial well-being has been determined by other, much more expensive means.  Here's what we know:<blockquote> Healthy organizations pass the test 80% of the time but fail it 20% of the time.  Unhealthy organizations fail the test 88% of the time but pass 12% of the time.  </blockquote>How likely is it that an organization that passes the test is, in fact, in good state financially?",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0322",
      "question": " Say what's wrong with these flow charts and redraw them correctly.<table class=\"wikitable\"><tr><td><br /><img src=\"https://djjr.us/images/qbank/flowchart-bad-01a.png\"><br /></td></tr><tr><td><br /><img src=\"https://djjr.us/images/qbank/flowchart-bad-02a.png\"><br /></td></tr><tr><td><br /><img src=\"https://djjr.us/images/qbank/flowchart-bad-03a.png\"><br /></td></tr><tr></tr></table>",
      "soln": "<h3>SOLUTION</h3>**[[[skills:fc04|FC04]]]**",
      "tags": []
    },
    {
      "number": "0323",
      "question": " What flow chart concept does this diagram illustrate?  Explain what it means and how we use it.  Draw the series of flow charts implied by this diagram.<br /><img src=\"https://djjr.us/images/qbank/levels-of-detail.gif\"><br />",
      "soln": "<h3>SOLUTION</h3>**[[[skills:fc02|FC02]]]**",
      "tags": []
    },
    {
      "number": "0324",
      "question": "  You are the board chairperson of a small non-profit and you are hiring new executive director.  It has come down to two candidates, one rather plain vanilla and, frankly, a bit boring, but rock solid, and the other quite exciting and edgy.  After all the interviews and due diligence, you and your board estimate that that with the boring candidate there is a 94% likelihood that she'll be OK, a 5% chance that she'll be amazing, and a 1% chance that she'll be a disaster.  You estimate the \"value\" of OK to be 25, the value of amazing to be 100 and the value of disaster to be -100.(A) What is the expected value of hiring the boring candidate?The board estimates that there is a 60% chance that the edgy candidate is amazing and a 40% chance she will be a disaster.  (B) What is the expected value of hiring the edgy candidate?  Other things being equal, what is the best decision here?A consultant friend of your tells you about a personality test that you can administer to job candidates that helps distinguish between those likely to be amazing and those likely to be a disaster.  (C) With the above assumptions, how much would it be worth to have this test to use on your edgy candidate (the test would tell you for sure whether this particular edgy person is the amazing or the disaster type)?But suppose it's not a perfect test, but it's pretty good.  It turns out that with candidates who really are amazing it gets it right about 75% of the time.  With those who are actually disasters waiting to happen, it gets that right 90% of the time.(D) If the test were administered to our edgy candidate and she passed, how likely is it that she'd be amazing?  And if she failed, how likely she was actually a disaster?(E) How much would we be willing to pay for the imperfect test?[[file q:0324/Q324.xlsx|Excel Worksheet Here]]",
      "soln": "<h3>SOLUTION</h3>**([[[skills:decision-trees|DT02]]])**",
      "tags": [
        "policy modeling"
      ]
    },
    {
      "number": "0325",
      "question": "   Have a look at <a href=\"http://www.sihealthpolicy.org/wp-content/uploads/2013/06/System-dynamics-approach-to-immunization-healthcare-issues-in-developing-countries.pdf\" target=\"_blank\">the paper shown below</a> about immunization in Uganda.  Look especially at the causal loop diagrams on pages 102(146) and 103(147).  Explain what is going on in each of the labeled/shaded loops.  In some cases, there might be a sign missing.  Based on your reading of the diagrams, supply these and explain.<blockquote> +++ R1:</blockquote><blockquote> +++ B1:</blockquote><blockquote> +++ B2:</blockquote><table class=\"wikitable\"><tr><td><br /><img src=\"https://djjr.us/images/qbank/immunization01.png\"><br /></td></tr><tr></tr></table>[[collapsible show=\"+ Show research paper\" hide=\"- Hide research paper\"]][[iframe http://www.sihealthpolicy.org/wp-content/uploads/2013/06/System-dynamics-approach-to-immunization-healthcare-issues-in-developing-countries.pdf width=\"800\" height=\"800\"]]",
      "soln": "<h3>SOLUTION</h3>[[[skills:stock-and-flow|SF02]]].",
      "tags": [
        "policy modeling",
        "research methods"
      ]
    },
    {
      "number": "0326",
      "question": " (A) Consider this plot of P_{n+1} vs. P_{n}.  Without worrying about what sort of system it might be, show that you understand how the chart works by describing the behavior of this system if it starts at time i at P_{i}=30.  How about 70?<br /><img src=\"https://djjr.us/images/qbank/PNvPN%2B1chart.png\"><br />(B) If this is a model of attendance at, say, a protest rally with the axes representing percentage of the population, and P_{n} is how many showed up last week (a number everyone knows) and P_{n+1} is how many that means we can expect this week (based on the distribution of individual thresholds - how many people need to be going for me to decide to go), how would you interpret the gaps A and B on the chart?(C) Think about the \"standing ovation model.\"  What features does it add to the basic model described here.",
      "soln": "<h3>SOLUTION</h3>**[[[skills:difference-equations|DE03]]]**",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0327",
      "question": " Our agency provides three types of client service: A, B, and C.  And we have 3 kinds of staff: X, Y, and Z.  Each type A service requires 3 hours of an\\timesstaff member's time and 1 hour of a Y.  Type B requires 2 X, 1 Y, and 3 Z hours.  And type C requires 1 X, 3 Y, and 2 Z.Currently we have 2 X, 1 Y and 1 Z on staff.  We pay X's $25 per hour, Ys get $30 and Zs get $40.  Assume everyone works a 35 hour week.  At 35 hours per week our labor costs are 4200.Revenue from type A service is $100, B is $200, and C is $300.Regulations require that we serve at least 5 of each client type each week and that we serve at total of at least 21 clients each week.What client mix will allow us to maximize revenue?[[file q:0327/Q327.xlsx |Excel Worksheet here.]]",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": [
        "policy modeling"
      ]
    },
    {
      "number": "0328",
      "question": " Have a look at <a href=\"http://www.bls.gov/news.release/empsit.t12.htm\" target=\"_blank\">this recent release from Bureau of Labor Statistics (BLS)</a>. The data separates those without a job into unemployed but \"in the labor force\" and \"marginally attached to the labor force\" and a subset of these called \"discouraged\" - the former would like to work but have not looked in the last four weeks and so are not counted as unemployed.  The latter are not actively looking for work having given up on the idea that its possible to find.  These groups are **not** included in the denominator when the unemployment rate is calculated.  The simple version of the unemployment rate is, then,  \n$$UR = \frac {Unemployed} {Employed + Unemployed}$$Some recent op-eds have counseled caution about optimism that the overall unemployment rate has been going down because it might reflect growth in the number of people no longer looking for work.  We'll think about that with a Markov model.  We'll simplify the states a worker can be in:<ul><li>employed (E)</li><li>short term unemployed - 14 weeks or less (US)</li><li>long term unemployed - over 14 weeks (LS)</li><li>Marginally attached to the labor force - no longer looking for a job (MALF)</li></ul>Let's construct a simplified Markov model of unemployment based on transition rates shown here:<br /><img src=\"https://djjr.us/images/qbank/markov_transition_table.png\"><br />If the unemployment rate is calculated as the ratio of those who are short term unemployed (US) plus those who are long term unemployed (UL) to the total labor force (E + US + UL), how would things evolve over the next twelve months if the starting numbers are these:<br /><img src=\"https://djjr.us/images/qbank/markov_starting_point.png\"><br />What will the unemployment rate be?  Even if it is agreed that getting unemployment to near 6% is a policy goal, are there reasons the results might not be a cause for celebration?Create a chart showing changes over the next 12 months.  Suggestion: plot total employment (E) on secondary axis since it's such a large number. In the alternative, put it on a separate chart.[[file q:0328/final-exam-2013-markov.xlsx|Excel worksheet here]]",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": [
        "policy modeling",
        "computational thinking",
        "research methods"
      ]
    },
    {
      "number": "0329",
      "question": " Create for yourself a one page cheat-sheet/course summary illustration that captures what you have learned/want to take away from the course.  Be prepared to show it at oral exam and explain it to instructor as if he were a fellow student who has not taken this course.  This can take any form at all within the constraints of being no more than one sheet of paper. Just for fun, here are some examples from other courses: [[[soc116:course-summary|Social Theory]]], [[[soc128:course-summary|GIS]]], [[[soc112:whole-course-diagram-gallery|Social Control]]].  Focus, of course, on content, not artistic flair.",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0330",
      "question": " **Equilibrium** came up many times in this course.  Briefly catalog several and describe the concept and its importance.  Be sure you can address (1) whether it is a normative concept (2) stable vs. unstable (3) different examples.",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": []
    },
    {
      "number": "0331",
      "question": " Studying for an exam could raise a student's grade by a whole letter grade.  But it turns out to not be a sure thing. Suppose research has shown that six hours of studying has a 60% chance of increasing your grade by one letter grade, a 25% chance of having no effect, and a 15% chance of actually lowering it by one letter grade (perhaps due to increased anxiety and not enough sleep).Calculate the expected value of the investment of 6 hours of study time in terms of \"letter grades per hour.\"",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": [
        "research methods"
      ]
    },
    {
      "number": "0332",
      "question": " Your client asks you to design a simple research project that will tell us how long a tube of toothpaste should last. It turns out there is a standard amount of toothpaste that is considered \"one use\" but that real people are all over the map in terms of the amount they use. We need the answer by the end of the week.",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": [
        "GIS",
        "design",
        "research methods"
      ]
    },
    {
      "number": "0333",
      "question": " Consider each of the actions listed in the left column of this table.  Thinking like Max Weber, in the other columns of each row, give a short explanation of how the action could be oriented in each of four ways (instrumentally rational, value rational, affectual, traditional).  In some cases, you might conclude that it is simply too far fetched for an action to be subject to a particular orientation; these can be noted with an \"X.\"<table class=\"wikitable\"><tr><td class=\"tdheader\">Action</td><td class=\"tdheader\">Instrumentally Rational _</td></tr></table>//zweckrational//||~ Value Rational _//wertrational//||~ Affectual||~ Traditional||<table class=\"wikitable\"><tr><td>Greetings</td></tr><tr><td>Investing</td></tr><tr><td>Picking a major</td></tr><tr><td>Helping an elderly person</td></tr><tr><td>Clipping coupons</td></tr><tr><td>Setting the table</td></tr><tr><td>Exercising</td></tr><tr><td>Praying</td></tr><tr><td>Observing holy days</td></tr><tr><td>Doing a class assignment</td></tr><tr><td>Going to college</td></tr><tr><td>Respecting one's elders</td></tr></table>",
      "soln": "<h3>SOLUTION</h3>Solution not provided",
      "tags": [
        "design"
      ]
    },
    {
      "number": "0334",
      "question": " Describe, with examples, the policy implications of a theory that has individuals and their shared meanings as the main source of social order.",
      "soln": "<h3>SOLUTION</h3>See Hechter and Horne p. 44-5.",
      "tags": [
        "policy modeling",
        "social theory"
      ]
    },
    {
      "number": "0335",
      "question": " Consider Marx on the production of consciousness. How important does the kind of work seem to be as over against the kinds interaction among people who do the same kind of work for Marx?  Compare, perhaps, Uber drivers and fast food workers.  Would Marx expect less or a different kind of shared consciousness among the one or the other?",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0336",
      "question": " What does [[[soc116:notes-r007-fleck-genesis|Ludwick Fleck]]] mean by a \"thought collective\"?",
      "soln": "<h3>SOLUTION</h3>See Hechter & Horne pp. 56-59.",
      "tags": []
    },
    {
      "number": "0337",
      "question": " In \"Genesis and Development of a Scientific Fact\" Ludwik Fleck starts out with the bold statement that \"cognition is the most socially-conditioned activity....\" Why is this a bold statement? What conventional assumption is he contradicting at the outset?",
      "soln": "<h3>SOLUTION</h3>A conventional view would have it that our thoughts are our most PERSONAL and INDIVIDUAL characteristics. His argument is that much of cognition is social in origin and social in character. See Hechter and Horne pp. 56-59.",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0338",
      "question": " \"As an entity @@[@@a thought collective@@]@@ is even more stable and consistent than the so-called individual, who always consists of contradictory drives\" (57.8). Explain what Fleck means.",
      "soln": "<h3>SOLUTION</h3>In the following paragraph he writes \"The individual life of the human spirit contains incongruent elements, such as tenets of faith and superstition which, stemming from various individual complexes, muddy the purity of any theory or system.  Both Kepler and Newton, who contributed so much to the modern concept of nature, were ritualistic and religious in thei basic attitudes. Rousseau's idea of education had much greater relevance to the thought collective than to his own individual life.\" (57.9-58.1)The point would seem to be that a person can switch, as it were, between various \"thinking orbits\" but when ideas are put into circulation they lose nuance and gain solidity as they are repeated back and forth among people. They might fade in importance for their originator even as they become established in the group.",
      "tags": []
    },
    {
      "number": "0339",
      "question": " Ludwik Fleck wrote: \"what actually thinks within a person is not the individual himself but his social community\" (Hechter & Horne 59.5). Explain what Fleck's theory of thought collectives is all about by explaining what this means.",
      "soln": "<h3>SOLUTION</h3>TBA",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0340",
      "question": " Explain sociological wholism (vs. methodological reductionism) and sociological realism (vs. nominalism)",
      "soln": "<h3>SOLUTION</h3>sociological wholism refers to the idea that there is actually a \"thing\" called society, a reality that is over and above the constituent individuals.  We contrast this view with methodological reductionism or methodological individualism which is the idea that all there \"is\" are individuals acting and that any supra-individual concepts refer only to mental constructs.Relatedly, sociological realism is the idea that \"society\" and \"the social\" actually exist as contrasted with nominalism which holds that these things exist \"in name only.\"See also: [[[q:0354|Q354]]]<br /><img src=\"https://djjr.us/images/qbank/nominalism-realism.png\"><br />",
      "tags": [
        "research methods"
      ]
    },
    {
      "number": "0341",
      "question": " Explain what George Herbert Mead means when he describes \"self consciousness\" as becoming aware of oneself as an object for others. How is it that this is what gives rise to the \"social self\"?",
      "soln": "<h3>SOLUTION</h3>Mead sees the self as having two sides, the subject side (myself as active, doing, perceiving, experiencing, capable of choosing and acting) and the object side (myself as fact, as seen by others, as fixed in a role).  When I \"see myself as others do\" I am internalizing their view of me as object (I am an object in their world). I can start to understand how my actions (which I experience immediately as a subject) go out into the world and become objects for others to react to. By internalizing these things I can orient my actions socially - to get the reactions or make the impression that I want to.For Mead, it is only by internalizing lots of others' views of me as object that I can generate enough of an internalized generalized other to be able to be competent in society. My \"social self\" comes into being when I've done this.",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0342",
      "question": " With which theorists do we associate this diagram? Explain what it means in the context of their work.<br /><img src=\"https://djjr.us/images/qbank/cohen-vandello-02-politeness-violence.png\"><br />",
      "soln": "<h3>SOLUTION</h3>See Hechter and Horne p. 73.5.",
      "tags": []
    },
    {
      "number": "0343",
      "question": " Dov Cohen and Joe Vandello report on several lab experiments in the article on cultures of violence.  One experiment involved \"annoying\" subjects who thought they were doing an experiment on \"art therapy.\" Describe the design of this experiment, its findings, and their relevance to the theoretical ideas explored in Cohen and Vandello's article.",
      "soln": "<h3>SOLUTION</h3>See Hechter and Horne pp. 73.9-74.5.Subject asked to draw pictures of childhood. Confederate annoys subject when they are left alone. Crumples drawings, calls subject \"slick,\" etc.  Northern subjects more initially confrontational, southern start out ignoring it. Northerners level out in their anger whereas southerners start polite and then later jump to more intense and less predictable levels of anger.Findings are consistent with idea that in cultures of politeness little slights and annoyances appear to be ignored but in fact they are stored up and when things reach some threshold you get a more explosive reaction.",
      "tags": [
        "social theory",
        "design",
        "research methods"
      ]
    },
    {
      "number": "0344",
      "question": " Cohen and Vandello offer a number of supporting findings in their work on culture of honor violence in the American south. Explain what's going on in each of these four summary tables and how this fits in with their analysis.<table class=\"wikitable\"><tr><td class=\"tdcentered\"><br /><img src=\"https://djjr.us/images/qbank/cohen-vandello-03-table.png\"><br /></td></tr><tr><td class=\"tdcentered\"><br /><img src=\"https://djjr.us/images/qbank/cohen-vandello-04-table.png\"><br /></td></tr><tr></tr><tr><td class=\"tdcentered\"><br /><img src=\"https://djjr.us/images/qbank/cohen-vandello-05-table.png\"><br /></td></tr><tr><td class=\"tdcentered\"><br /><img src=\"https://djjr.us/images/qbank/cohen-vandello-06-table.png\"><br /></td></tr><tr></tr></table>",
      "soln": "<h3>SOLUTION</h3>See Hechter and Horne pp 74-80.",
      "tags": [
        "social theory",
        "computational thinking",
        "research methods"
      ]
    },
    {
      "number": "0345",
      "question": " Explicate and explain this selection from Cohen and Vandello's \"Meanings of Violence\":<blockquote> As Reed has suggested, Southerners \"actually don't //see// much of the violence around them, don't register it as 'lawlessness,' because it //isn't// 'lawless.' It is lawful violence in the sociological if not the legal sense: more-or-less predictable, more-or-less expected, (in consequence) more or less taken for granted. It's effectively invisible-something like wallpaper.\" (Reed 1981)</blockquote>",
      "soln": "<h3>SOLUTION</h3>See Hechter and Horne p. 81.",
      "tags": []
    },
    {
      "number": "0346",
      "question": " Cohen and Vandello describe a world that may not be politically or morally attractive to you. And yet we read it in a section of the course where we are saying that collective beliefs can be a source of coordination and social order.  How does this article illustrate the theoretical points being made by Marx, Durkheim, Mead, and Fleck, indeed of the entire section of the course, that shared meanings can produce order?",
      "soln": "<h3>SOLUTION</h3>THINK. Your answer should show that you get the take-away from Cohen and Vandello and then succinctly demonstrate that you understand each other thinker by taking them in turn and finding a way that what they described does or does not show up in Cohen and Vandello.",
      "tags": [
        "policy modeling",
        "social theory"
      ]
    },
    {
      "number": "0347",
      "question": " George Herbert Mead writes of \"taking the attitude of the other\" as a necessary part of social life.<blockquote> \"...the complex co-operative processes ...[and activities and institutional functionings of] organized human society are also possible only in so far as every individual involved in them ...[or belonging to that society] can take the general attitudes of all other such individuals ...[with reference to these processes and activities and institutional functionings, and to the organized social whole of experiential relations and interactions thereby constituted - ] and can direct his own behavior accordingly\" (61.5).</blockquote>Give an example of a social situation that bears this out, describing the various participants and how they can \"take the attitude of the others\" and what would happen if they got it wrong, or in situations where people do this less well or less completely.",
      "soln": "<h3>SOLUTION</h3>See Hechter and Horne p 61.",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0348",
      "question": " At 63.2 (in Hechter and Horne reader) Mead says there are two stages in the development of the social self.  First the organization of particular attitudes of particular others toward oneself.  Second is characterized by \"an organization of the social attitudes of the generalized other or the social group....\"  Although we usually interpret this in terms of the development of a social self in children, we can use it to describe our joining of any new group or social environment.  Explain what this means using an example of an individual's socialization into some concrete scene of your own conjuring.",
      "soln": "<h3>SOLUTION</h3>See 63.3ff.",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0349",
      "question": " Language is the paramount example of a SOCIAL phenomenon - the \"code system\" of language exists in our collective, shared consciousness and anyone who wishes to communicate has to participate in this.  Use language and the acquisition and use of language to explain Mead's idea of taking the role of the other, the generalized other, etc.",
      "soln": "<h3>SOLUTION</h3>",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0350",
      "question": " Some people summarize Durkheim's \"theory of religion\" by saying that he discovered that \"god is society.\" Explain the logic of this.",
      "soln": "<h3>SOLUTION</h3>The best explanation is Collins, Randall. \"<a href=\"http://djjr-courses.wikidot.com/local--files/text:library/Collins-nonrational-foundations-of-rationality.pdf\" target=\"_blank\">The Irrational Foundations of Rationality</a>\" pp. 3-29. ([[<a href=\"http://djjr-courses.wikidot.com/soc116:r999-notes-collins-nonrational|\" target=\"_blank\">Notes</a>]])",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0351",
      "question": " Define cooperation and give five examples where you have seen it (or its absence) recently.",
      "soln": "<h3>SOLUTION</h3>Cooperation is ...",
      "tags": []
    },
    {
      "number": "0352",
      "question": " Explain what Hedstrom (\"Dissecting the Social\") meant when he said \"differences in some social states or events are considered explained if the decomposition eliminates them\" (13.8)?",
      "soln": "<h3>SOLUTION</h3>See 13.8.",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0353",
      "question": " In \"Dissecting the Social,\" Hedstrom suggests that \"a statistical analysis is a test of an explanation, not the explanation itself\" (13.9). Explain this distinction.",
      "soln": "<h3>SOLUTION</h3>If we have a theory that\\timescauses Y and we identify a mechanism by which\\timeschanges A changes B changes Y and then we look for evidence showing that\\timescovaries with A and A with B and B with C then this statistical analysis would be a test of our mechanistic explanation of how\\timescauses Y.An important take-away is that simply showing that\\timesand Y covary does not count as an explanation of Y. At a minimum one has to admit that \"<a href=\"https://en.wikipedia.org/wiki/Correlation_does_not_imply_causation\" target=\"_blank\">correlation does not equal causation</a>\" and that one needs to rule out \"<a href=\"http://www.tylervigen.com/spurious-correlations\" target=\"_blank\">spurious correlations</a>.\"",
      "tags": [
        "social theory",
        "computational thinking",
        "design",
        "research methods"
      ]
    },
    {
      "number": "0354",
      "question": " In \"Dissecting the Social,\" what does Hedstrom mean by \"realism\" (14.9)? How is does this compare to Durkheim's dictum to \"<a href=\"http://durkheim.uchicago.edu/Summaries/rules.html\" target=\"_blank\">treat social facts as things</a>\"?",
      "soln": "<h3>SOLUTION</h3>The exhortation to \"realism\" in social theories calls on us to build theories around observable, measurable behaviors, concrete things that people do.  What is the alternative?  Abstractions like \"conservatism\" and unexplored ideas like social moods.\"Realism\" in social theory is also contrasted with \"nominalism\" - the question of whether society and social solidarity and the like are real things or whether they exist \"in name only.\"<br /><img src=\"https://djjr.us/images/qbank/nominalism-realism.png\"><br />",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0355",
      "question": " Explain what Marx means by \"It is not consciousness that determines life, but life that determines consciousness\" (47.7).",
      "soln": "<h3>SOLUTION</h3>TBA",
      "tags": []
    },
    {
      "number": "0356",
      "question": " Demonstrate your understanding of the George Herbert Mead excerpt and its connection to ideas about how the nature of the social individual is a \"source\" of social order by explaining this diagram. Use examples to illustrate your ideas.<br /><img src=\"https://djjr.us/images/qbank/sharedmeaningToOrderMead.png\"><br />",
      "soln": "<h3>SOLUTION</h3>TBA",
      "tags": [
        "social theory",
        "social network analysis"
      ]
    },
    {
      "number": "0357",
      "question": " Demonstrate your understanding of the Durkheim excerpt and its connection to ideas about how the nature of the social individual is a \"source\" of social order by explaining this diagram. Use examples to illustrate your ideas.<br /><img src=\"https://djjr.us/images/qbank/sharedmeaningToOrderDurkheim.png\"><br />",
      "soln": "<h3>SOLUTION</h3>TBA",
      "tags": [
        "social theory",
        "social network analysis"
      ]
    },
    {
      "number": "0358",
      "question": " Demonstrate your understanding of the Ludwik Fleck excerpt and its connection to ideas about how the nature of the social individual is a \"source\" of social order by explaining this diagram. Use examples to illustrate your ideas.<br /><img src=\"https://djjr.us/images/qbank/sharedmeaningToOrderFleck.png\"><br />",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": [
        "social theory",
        "social network analysis"
      ]
    },
    {
      "number": "0360",
      "question": " What is the relevance of the diagram below to the Cohen and Vandello excerpt?<br /><img src=\"https://djjr.us/images/qbank/cohen-vandello-01.png\"><br />",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": []
    },
    {
      "number": "0361",
      "question": " In the public goods game described by Fehr and Gintis, explain why we impose a cost on the punishER for each punishment issued.  What does willingness to impose a punishment despite a cost suggest about the actor who does so?",
      "soln": "<h3>SOLUTION</h3>You might want to think about the idea that society might depend on a certain willingness to volunteer or donate social control services.  Pondering this can lead to some pretty deep questions about social order and law. You might think too about what is going through one's mind when one accepts the cost of punishing - for whom is the punisher doing this? What calculations does the potential free-rider make?  What sorts of communities are likely to get the least free-riding?",
      "tags": [
        "policy modeling"
      ]
    },
    {
      "number": "0362",
      "question": " The theorists whose work was included in the section on individuals and social order each suggest mechanisms for how shared meaning happens through actual social interaction. Describe how each thinker is saying that the picture below is NOT how it happens - that is, we don't just magically have a bunch of social/cultural content in our heads; it gets there through a process, there's a mechanism that we can describe.If it's later in the course, relate this to life in groups - how is this social content connected to ideas on internalization and socialization of group members?<br /><img src=\"https://djjr.us/images/qbank/shared-meaning-painted-by-culture.png\"><br />",
      "soln": "<h3>SOLUTION</h3>Suggestion: make sure you can work through Marx, Durkheim, Mead, and Fleck and describe the mechanism each suggests is responsible for building up our stock of socially shared meanings.Later in the course, you might also relate Freud's idea about the origins of conscience and Durkheim on regulation. What's different about the shared meanings that are specifically connected with what's OK behavior and what's not?",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0363",
      "question": " Demonstrate your understanding of Weber's typology of social action in the context of this course by explaining this diagram.<br /><img src=\"https://djjr.us/images/qbank/weber-types-of-action-01.png\"><br />",
      "soln": "<h3>SOLUTION</h3>See [[[soc116:notes-r002-weber-types|notes]]] or <a href=\"https://en.wikipedia.org/wiki/Social_actions#Social_action_and_Max_Weber\" target=\"_blank\">Wikipedia</a> or <a href=\"http://djjr-courses.wdfiles.com/local--files/soc116:slides/Weber%E2%80%99s%20Types%20of%20Social%20Action.pdf\" target=\"_blank\">old Ryan lecture slides</a>.Of course, you have to explain Weber's types of social action as well as how they fit into this schema.",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0364",
      "question": " Thinking back to the Kanazawa article on evolutionary biology, use this diagram to talk about at least six **different** ideas from this course.<br /><img src=\"https://djjr.us/images/qbank/action-time-self-01.gif\"><br />",
      "soln": "<h3>SOLUTION</h3>See [[[soc116:notes-r004-kanazawa-degustibus|notes]]] or <a href=\"http://djjr-courses.wdfiles.com/local--files/text:library/PlatekEtAl_EvolutionaryPsychology2009.pdf\" target=\"_blank\">Goetz, et al. \"Introduction to evolutionary psychology: A Darwinian approach to human behavior and cognition.\"</a>  ",
      "tags": []
    },
    {
      "number": "0365",
      "question": " A <a href=\"https://en.wikipedia.org/wiki/Storyboard\" target=\"_blank\">storyboard</a> is a technique for graphically organizing the telling of a story.  Think about how you would explain **Marx's theory of consciousness** as a theory of how the human individual is a vehicle for the generation of social order. Imagine how you would represent the theory visually and how you would explain it textually.<br /><img src=\"https://djjr.us/images/qbank/storyboard.png\"><br />",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": [
        "social theory",
        "social network analysis"
      ]
    },
    {
      "number": "0366",
      "question": " A <a href=\"https://en.wikipedia.org/wiki/Storyboard\" target=\"_blank\">storyboard</a> is a technique for graphically organizing the telling of a story.  Think about how you would explain **Mead's theory of the social self** as a theory of how the human individual is a vehicle for the generation of social order. Imagine how you would represent the theory visually and how you would explain it textually.<br /><img src=\"https://djjr.us/images/qbank/storyboard.png\"><br />",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": [
        "social theory",
        "social network analysis"
      ]
    },
    {
      "number": "0367",
      "question": " A <a href=\"https://en.wikipedia.org/wiki/Storyboard\" target=\"_blank\">storyboard</a> is a technique for graphically organizing the telling of a story.  Think about how you would explain Weber's typology of social action as it relates to our concerns with the generation of social order. Imagine how you would represent the theory visually and how you would explain it textually.<br /><img src=\"https://djjr.us/images/qbank/storyboard.png\"><br />",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": [
        "social theory",
        "social network analysis"
      ]
    },
    {
      "number": "0368",
      "question": " A <a href=\"https://en.wikipedia.org/wiki/Storyboard\" target=\"_blank\">storyboard</a> is a technique for graphically organizing the telling of a story.  Think about how you would explain Durkheim's theory of collective representations (shared meaning) as a theory of how the human individual is a vehicle for the generation of social order. Imagine how you would represent the theory visually and how you would explain it textually.<br /><img src=\"https://djjr.us/images/qbank/storyboard.png\"><br />",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": [
        "social theory",
        "social network analysis"
      ]
    },
    {
      "number": "0369",
      "question": " A <a href=\"https://en.wikipedia.org/wiki/Storyboard\" target=\"_blank\">storyboard</a> is a technique for graphically organizing the telling of a story.  Think about how you would explain Fleck's theory of thought communities as a theory of how the human individual is a vehicle for the generation of social order. Imagine how you would represent the theory visually and how you would explain it textually.<br /><img src=\"https://djjr.us/images/qbank/storyboard.png\"><br />",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": [
        "social theory",
        "social network analysis"
      ]
    },
    {
      "number": "0370",
      "question": " A <a href=\"https://en.wikipedia.org/wiki/Storyboard\" target=\"_blank\">storyboard</a> is a technique for graphically organizing the telling of a story.  Think about how you would explain Cohen and Vandello's work on violence and cultures of honor as an illustration of theories of how the human individual is a vehicle for the generation of social order. Imagine how you would represent the theory visually and how you would explain it textually.<br /><img src=\"https://djjr.us/images/qbank/storyboard.png\"><br />",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": [
        "social theory",
        "social network analysis"
      ]
    },
    {
      "number": "0371",
      "question": " A <a href=\"https://en.wikipedia.org/wiki/Storyboard\" target=\"_blank\">storyboard</a> is a technique for graphically organizing the telling of a story.  Think about how you would explain Kanazawa's description of evolutionary biology and its connection to our thinking about the basis for social order. Imagine how you would represent the theory visually and how you would explain it textually.<br /><img src=\"https://djjr.us/images/qbank/storyboard.png\"><br />",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": [
        "social theory",
        "social network analysis"
      ]
    },
    {
      "number": "0372",
      "question": " Explain the difference between cooperation and coordination as we are using them in this course. Give examples to support your explanation.",
      "soln": "<h3>SOLUTION</h3>Go for it!",
      "tags": [
        "design"
      ]
    },
    {
      "number": "0373",
      "question": " Explain what we mean by the phrase \"necessary but not sufficient\" AND how this applies to the idea that a common language and shared meaning are necessary for social order.",
      "soln": "<h3>SOLUTION</h3>Hechter and Horne p. 82.",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0374",
      "question": " \"Social order triumphs over the state of nature by coercion....\" Attribute and explain.",
      "soln": "<h3>SOLUTION</h3>Hechter and Horne p. 83.",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0375",
      "question": " Hobbes and Engels both give us a vision of the state. Hechter and Horne suggest that \"Instead of a world made up of //equal individuals,// Engels's starting point is a society made up of //unequal classes.//\" Show what you know about Hobbes and Engels but explaining this statement.",
      "soln": "<h3>SOLUTION</h3>Start with H&H p. 83See also: [[[q:0386|Q386]]].CHECKLIST<ol><li>Tell me who Hobbes is: 17th century thinker. Author of //Leviathan.//</li><li>Hobbes' basic idea: state of nature is war of all against all; trust is basic problem; social contract is possible, but how to enforce it; his answer is we need a force we all fear.</li><li>Tell me who Engels is: 19th century thinker. Colleague and co-author of Marx.  Maybe something about their relationship.</li><li>When is Engels writing this?</li><li>What passage did we read? What is Engels up to in it?</li><li>Tell us about the developmental story he lays out - how did we get to a class-based society with power organized in terms of the state?</li><li>Show us the parallels between conflict between social classes and conflict between individuals.</li></ol>",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0376",
      "question": " In the context of Engels, what is a class? What are the main classes under feudalism? Capitalism?",
      "soln": "<h3>SOLUTION</h3>H&H pp. 83ff",
      "tags": []
    },
    {
      "number": "0377",
      "question": " Explain, in your own words, the concept of \"sociological clones\" (H&H 84).  ",
      "soln": "<h3>SOLUTION</h3>H&H p. 84",
      "tags": []
    },
    {
      "number": "0378",
      "question": " \"From an economic point of view, coercion is simply too expensive to be the sole basis of social order\" (Hechter and Horne, 85).  Explain what this is getting at. How does it lead us to Weber's concept of legitimate domination.",
      "soln": "<h3>SOLUTION</h3>NOTE: see also [[[q:0380|Q. 380]]] and [[[q:0405|Q. 405]]].This is an opportunity to show that you are paying attention to the metanarrative that Hechter and Horne use to organize the selections in the text as well as an opportunity to show off what you know about Weber.Hector & Horne cites Nozick 1974, â€œTo be governed is to be watched, inspected, spied upon, directed, law-drive, numbered, regulated, enrolled, indoctrinated at controlled, checked, estimated, valued, censured, commanded, by creatures who have either neither the right nor the wisdom nor the virtue to do soâ€¦â€ It is a very expensive proposition for the state watch all of us all of the time. Hobbes can have his Leviathan, but does he, perhaps underestimate how much effort goes into being a Leviathan if that's all there is?  Or Engels has this oppressive state serving the interest of the ruling class - but how do they pull it off on a day to day basis?  The system is much more efficient if people actually want to do what the state mandates.Weber: if state is seen as legitimate, the rules will be obeyed in the absence of coercion. He finds three different authority structures that are seen as legitimate sources of authority:<ul><li>patrimonial - based on personal loyalty</li></ul><ul><li>bureaucratic - exploits a division of labor, relies on expertise rather than personal dependence</li></ul> <ul><li>charismatic - based on devotion exceptional sanctity of charismatic authority</li></ul>â€œEvery genuine form of legitimate domination implies a minimum of voluntary compliance, that is, an interest (based on ulterior motives or genuine acceptance) in obedience.â€ -- Weber (103.3)CHECKLIST<ol><li>Do you know who Weber is?</li><li>Do you make the connection - why is this question about Weber?</li><li>Do you understand what Weber means when he says most wielding of power requires a staff?</li><li>And that if you have a staff to wield power then you have this multilevel obedience problem?</li><li>And that just paying everyone enough to get their allegiance is tough business.</li><li>And so you need something else. And can you tell us what that is? And define it?</li><li>And can you then describe how Weber saw there being three ideal typical varieties?</li></ol>",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0379",
      "question": " \"Marx and Engels suggest that the disadvantaged are duped by the institutions and ideology of the ruling class\" (Hechter and Horne, 85).  Elaborate.",
      "soln": "<h3>SOLUTION</h3>Use this as an opportunity to show what you know about Marx and Engels (you might mention the dominant ideology thesis and what Marx called religion), but mostly Engels. What did he write in the excerpt on the origins of the state that suggest this sort of duping. Remember his comments about universal suffrage and corporate power and democratic institutions.The classes in power are able to manipulate and subdue those who are uneducated or too poor to change their circumstances. They do this by using education, media and religion (among other institutions) to maintain their control.Examples:Broadcast media has depicted victims of police brutality as deserving of their treatment by dehumanizing and criminalizing their character.In education, children of immigrant families are usually sent to schools that are underfunded and segregated. This keeps them from advancing in society, therefore staying in a disadvantaged state. Those who hold power want to keep them in these lower classes so they maintain their power.CHECKLIST<ol><li>Do you manage to say something about Marx and Engels? When?</li><li>Drop a line on dominant ideology or religion? False consciousness?</li><li>What do we mean here by being \"duped\"?</li><li>What was it that Engels said about universal suffrage? Why did he suggest that there was some false consciousness involved?</li><li>What's the connection between what Engels said and contemporary US election finance law?</li></ol>",
      "tags": []
    },
    {
      "number": "0380",
      "question": " Compare patrimonialism, bureaucracy, and charismatic authority in terms of the efficiency of maintaining order and ensuring loyalty among a leader's staff.",
      "soln": "<h3>SOLUTION</h3>More or less same as Qs [[[q:0378|378]]] and [[[q:0405|405]]].  See H&H p. 85-6.This is an opportunity to show that you are paying attention to the metanarrative that Hechter and Horne use to organize the selections in the text as well as an opportunity to show off what you know about Weber.Hector & Horne cites Nozick 1974, â€œTo be governed is to be watched, inspected, spied upon, directed, law-drive, numbered, regulated, enrolled, indoctrinated at controlled, checked, estimated, valued, censured, commanded, by creatures who have either neither the right nor the wisdom nor the virtue to do soâ€¦â€ It is a very expensive proposition for the state watch all of us all of the time. Hobbes can have his Leviathan, but does he, perhaps underestimate how much effort goes into being a Leviathan if that's all there is?  Or Engels has this oppressive state serving the interest of the ruling class - but how do they pull it off on a day to day basis?  The system is much more efficient if people actually want to do what the state mandates.Weber: if state is seen as legitimate, the rules will be obeyed in the absence of coercion. He finds three different authority structures that are seen as legitimate sources of authority:<ul><li>patrimonial - based on personal loyalty</li></ul><ul><li>bureaucratic - exploits a division of labor, relies on expertise rather than personal dependence</li></ul> <ul><li>charismatic - based on devotion exceptional sanctity of charismatic authority</li></ul>â€œEvery genuine form of legitimate domination implies a minimum of voluntary compliance, that is, an interest (based on ulterior motives or genuine acceptance) in obedience.â€ -- Weber (103.3)CHECKLIST<ol><li>Do you know who Weber is?</li><li>Do you make the connection - why is this question about Weber?</li><li>Do you understand what Weber means when he says most wielding of power requires a staff?</li><li>And that if you have a staff to wield power then you have this multilevel obedience problem?</li><li>And that just paying everyone enough to get their allegiance is tough business.</li><li>And so you need something else. And can you tell us what that is? And define it?</li><li>And can you then describe how Weber saw there being three ideal typical varieties?</li></ol>",
      "tags": []
    },
    {
      "number": "0381",
      "question": " Convert penultimate paragraph of Hechter & Horne's introduction into a table that summarizes the theories in this section.  Start with their suggestion that each theory has some group dominating others and each has different process leading to this and different consequences deriving from it.<blockquote> \"Each of the readings in this section argues.... from generation to generation.\"</blockquote>",
      "soln": "<h3>SOLUTION</h3>tba",
      "tags": [
        "social network analysis"
      ]
    },
    {
      "number": "0382",
      "question": " \"A central idea in the readings in this section is that government matters\" (87).  Extend this idea to say that \"organizations matter\" in an argument about why some hierarchy is needed if we are to cooperate in groups of more than a few to get things done.",
      "soln": "<h3>SOLUTION</h3>This is an opportunity to show that you get the whole section on hierarchy (and that you understand that hierarchy is basically formal organization but also stands for \"the state\" or \"government\" in theory conversations.To build your answer, start with what each thinker says that could be interpreted as \"government matters.\" Then extend this to organizations.Hobbes:Engels:Weber:Willis:You might have trouble with Willis.  What do you think the take-away is? Is he just suggesting sympathy for these downtrodden youth?  What hope for breaking out of the reproduction of oppressive class structure is there?CHECKLIST<ol><li>Can you name the authors?</li><li>Can you identify core ideas in each of the readings</li><li>In what sense does each argue that there is a role for government or hierarchy?</li><li>What can you do with Willis? Can you get beyond the hierarchy that folks are fighting against and see any other argument for the necessity of hierarchy?</li></ol>",
      "tags": [
        "policy modeling"
      ]
    },
    {
      "number": "0383",
      "question": " Define the following words/phrases as used by Hobbesfelicity (89.3)laudable actions (90.5)redound ... to their posterity (90.6)thraldome (90.7)hope of requitall (90.8)secret machination (92.2)Prudence (92.3)diffidence (92.6)cattell (93.5)dommage (93.5)Cardinall (94.8)//Jus// and //Lex// (95.7)Covenants (97.7)",
      "soln": "<h3>SOLUTION</h3>: felicity (89.3) : \"Feclicity is a continuall progresse of the desire, from one object to another; the attaining of the former, being still but the way to the later.\"...\"The object of mans desire, is not to enjoy once onely, and for one instant of time;but to assure forever, the way of his future desire.\": laudable actions (90.5) : laudable= deserving commendation; praiseworthy: redound ... to their posterity (90.6) : contribute greatly to [their] future decedents: thraldome (90.7) : the state of being a slave: hope of requitall (90.8) : hope of a return or reward for service, kindness, etc.: secret machination (92.2) : secret plot or scheme (as in a weak man can kill another through scheming): Prudence (92.3) : the ability to govern and discipline oneself by the use of reason. (\"prudence is but experience\"): diffidence (92.6) : lack of self-confidence -->everyone is afraid of everyone else, a state Hobbes calls â€œdiffidenceâ€: cattell (93.5) : cattle/ livestock: dommage (93.5) : injury/ damage: Cardinall (94.8) :  Of foremost importance; paramount (Cardinal sin): //Jus// and //Lex// (95.7) : Jus is natural law, while Lex is written law/code.: Covenants (97.7) : contract or agreement",
      "tags": []
    },
    {
      "number": "0384",
      "question": " Hobbes suggests that in a state of \"warre\" \"there is no place for Industry...no culture...no Navigation...no commodious Building...no Knowledge....\" (93.9). Explain how this can be translated as \"none of the benefits of cooperation.\"",
      "soln": "<h3>SOLUTION</h3>tba",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0385",
      "question": " Explain the following words, terms, phrases found in Engels' \"The Origin of the State\" excerpt.gentile constitution (99.3)://plebs// (99.4):mark constitution (99.5)bondsmen (101.2)joint-stock company (101.5)universal suffrage (102.1)Bonapartism (101.3)proletariat (101.3)Prussian Junkers (101.4)",
      "soln": "<h3>SOLUTION</h3>: gentile constitution (99.3) :An unwritten but formal constitution which was used in pre-modern societies. Could not be used to govern large foreign territories. Primitive communal system based on kinship. (see <a href=\"http://jabashadrack.blogspot.com/2011/12/constitutional-history-development-of_14.html\" target=\"_blank\">blog post).: //plebs// (99.4) : Members of lower social classes who were excluded from public affairs.: mark constitution (99.5) : The mark or markgenÃ¶ÃŸenschaft was in its origin a localized clan, held together by the double tie of common religion and real or presumed blood-relationship.But the relationship was more frequently artificial and the religious tie was weaker than in the clan. See:[[image soc116:images/engels-the-mark-constitution.png link=\"https://books.google.com/books?id=FG9GAAAAYAAJ&lpg=PA14&ots=QcyfoMJ7F7&dq=%22the%20mark%20constitution%22&pg=PA14#v=onepage&q=%22the%20mark%20constitution%22&f=false\" width=\"500\"</a>]: bondsmen (101.2) : The lower class of the feudal state, lower than peasant serfs and just above the slaves in the hierarchy.: joint-stock company (101.5) : A company whose stock is owned jointly by the shareholders. In the highest form of state, this is an indirect way to accumulate wealth.: universal suffrage (102.1) : tba: Bonapartism (101.3) : The system that French dynasties used to pin the proletariat against the bourgeoisie and vic versa. Political movement associated with authoritarian rule, usually by a military leader.: proletariat (101.3) : tba: Prussian Junkers (101.4) : see <a href=\"https://en.wikipedia.org/wiki/Junker_(Prussia)\" target=\"_blank\">Wikipedia</a>",
      "tags": []
    },
    {
      "number": "0386",
      "question": " \"...the state arose from the need to keep class antagonisms in check....\" Attribute and explain.",
      "soln": "<h3>SOLUTION</h3>Use this question as an opportunity to strut your Engels (see 101.1). Start by giving us a little context. Who is the author? When is he writing? In what sense is his an historical or developmental story?  What argument is this idea a part of? Where does Engels think the class antagonisms come from?Most societies have a higher class exploiting an oppressed class, this is how states usually exist. So, states arose out of a necessity to maintain and control the clashes between these classes.See also: [[[q:0375|Q375]]].",
      "tags": []
    },
    {
      "number": "0388",
      "question": " Explain what Weber means by legal authority.",
      "soln": "<h3>SOLUTION</h3>tba. See H&H pp. 104ff.",
      "tags": []
    },
    {
      "number": "0389",
      "question": " Explain what Weber means by traditional authority.",
      "soln": "<h3>SOLUTION</h3>Tba",
      "tags": []
    },
    {
      "number": "0390",
      "question": " Explain what Weber means by charismatic authority.",
      "soln": "<h3>SOLUTION</h3>See H&H pp. 115ff.",
      "tags": []
    },
    {
      "number": "0391",
      "question": " Weber describes \"monocratic bureaucracy\" as an ideal type. What is an ideal type?  Describe the five characteristics of an ideal typical bureaucracy.",
      "soln": "<h3>SOLUTION</h3><a href=\"https://en.wikipedia.org/wiki/Ideal_type\" target=\"_blank\">Ideal Type</a> in Wikipedia.See H&H ppl. 108ff.<ol><li>Offices</li><li>Appointment</li><li>Impersonal based on credentials</li><li>Written records</li><li>Fixed salary</li><li>Do not own the tools</li><li>Single \"boss\"</li></ol>CHECKLIST<ol><li>Who is Weber? Where do we read about this?</li><li>What is an ideal type?</li><li>Can you name and explain five characteristics?</li><li>Can you explain why these are important to characterize how B is different from other forms of organization?</li><li>Can you give an example of a situation where we might be frustrated by something that is insufficiently bureaucratized?</li></ol>",
      "tags": []
    },
    {
      "number": "0392",
      "question": " Weber suggests that bureaucratic domination is marked by \"the dominance of a spirit of formalistic impersonality\" (111.45).  Explain.",
      "soln": "<h3>SOLUTION</h3>Treat this as an opportunity to show you know who Weber is and a bit of what he had to say about authority, legitimate domination, and bureaucracy.To zero in on the last part of the question, you have to get a sense of what we mean by formalistic - it's about following rules, treating things by the rules. The opposite would be informality. And what he means by \"impersonality\" - remember that while it is nice if the bank manager or teller knows your name, you really don't want them to be treating customers or customers' money in some sort of \"personal\" manner (better treatment for my friends, etc.).  You want the bureaucracy to treat you \"like a number.\"  Be sure you can explain this to the proverbial taxi driver.CHECKLIST<ol><li>Who is Weber? What is this from?</li><li>Why bureaucratic domination? How does this fit in with \"types of legitimate domination\"?</li><li>Do you make the connection with legal rational?</li><li>Can you explain the idea of formalistic here?</li><li>Can you explain the idea of impersonality here?</li><li>In what sense is ideal typical bureaucracy \"formalistic impersonality\" taken to the extreme? Why might this be a formidable form of power and domination?</li><li>If the world worked in terms of \"just following orders\"...</li></ol>",
      "tags": []
    },
    {
      "number": "0393",
      "question": " What does Weber mean by \"social levelling\"? (111)",
      "soln": "<h3>SOLUTION</h3>\"Leveling\" here means making people more equal - but not in some socialist sense. Rather, socio-economic differences are reduced when bureaucracy pushes decisions, distinctions, etc. to be based on rational criteria rather than ascribed statuses. The flip side, to a critic, might be that this then legitimizes those differences that remain (since they must be based on rational criteria).Much of our rhetoric of \"fairness\" relates to the general idea of \"due process\" - we require of decisions that they are made according to rules and criteria that apply the same to everyone.  It's not one rule for that group and another rule for this group.  In this sense, the rule or rules levels out social differences that might otherwise hold sway.",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0394",
      "question": " What does Weber mean by \"the routinization of charisma\"? (118ff)",
      "soln": "<h3>SOLUTION</h3>See pp. 118ff. Perhaps too, <a href=\"https://en.wikipedia.org/wiki/Charismatic_authority#Routinizing_charisma\" target=\"_blank\">Wikipedia on charisma</a>.CHECKLIST<ol><li>Who is Weber and where does this topic come up?</li><li>How do we get to charisma? That is, what's it go with?</li><li>What is charisma? Charismatic authority?</li><li>What is routinization?</li><li>Can you explain how charisma is a threat to other types of authority and order?</li><li>Can you go in two directions: routinization as a way of preserving charismatic leadership and routinization as a way of constraining it?</li><li>Examples? Can you give any beyond the most common ones? What about a great teacher in a high school?  Or...</li></ol>",
      "tags": []
    },
    {
      "number": "0395",
      "question": " Explain the following terms or phrases in the context of Paul Willis' //Learning to Labour.//\"an aimless air of insubordination\" (124.4)'ear'oles (124.9)\"universal taboo...yielding incriminating information...to those with formal power\" (129.3)\"grassing\" (129.4)",
      "soln": "<h3>SOLUTION</h3>: \"an aimless air of insubordination\" (124.4) : references the â€œcaged resentment which is always just short of outright confrontationâ€ connected to mundane instances of noncompliance. Willis references incidences such as sitting on the radiator, meandering around the classroom, and the common canned responses to justify noncompliance.: 'ear'oles (124.9-125) : â€œschool conformistsâ€¦ support the idea of teachersâ€¦having invested something of their own identities in the formal aims of education and support of the school institutionâ€¦ connotes passivity and absurdity of the school conformistsâ€ CAN WE ADD AN \"In other words...\" sentence too?: \"universal tabooâ€¦yielding incriminating informationâ€¦to those with formal power\" (129.3) : in opposition to the informal group by making way to the â€œprimacy of the formal organizationâ€: \"grassing\" (129.4) : telling the truth, ratting, snitching. â€œBut whoever has done the â€œgrassingâ€ becomes special, weak, and markedâ€¦â€",
      "tags": []
    },
    {
      "number": "0396",
      "question": " Discuss the role of the 'ear'oles in the oppositional ideology of the \"lads.\"  Why and in what ways are they important in the lads' concept of self?",
      "soln": "<h3>SOLUTION</h3>From whom or what do the lads seem to need to distinguish themselves?<ul><li>Putting distance between them and drabness/conformity (126.8)</li><li>DJR: I would add parents, school, establishment to emphasize that there are very concrete GROUPS and CATEGORIES between which they wan to establish distance and distinction. In identity matters, not being \"them\" is as important as being us.</li></ul>What are some of the ways the lads express their opposition?<ul><li>Personal style consists of alternative dress. Use of cigarettes at school, drinking in pubs, skipping class.</li></ul>Think about their use of a symbolic regime to accomplish this.<ul><li>Appropriation of working class consumer goods (clothing, cigarettes, and alcohol).</li><li>Creation of informal groups; creation of distinctive culture within grouping.</li><li>All kinds of looks and gestures and body language. Part of what is important about the symbolic aspects of these forms of resistance is their opacity to the adults; there is a bonus/thrill having a system of symbols that authority does not understand.</li></ul>What does Willis mean to communicate with the phrase \"flaunting their impertinence\"? (127.7)<ul><li>The ladsâ€™ do not just smoke, they take delight in being seen smoking by faculty. Breaking the rule gratuitously, and not just surreptitiously, is what is valued.</li></ul>How is the \"adult male working class world\" a source of resistance material for the lads? (127.8)<ul><li>Like smoking, drinking is associated with adult male working class world and becomes a â€œsource of material for resistance and exclusionâ€. What is signaled is that â€œthe individual is separate and their presence is an alternative, superior, and more mature mode of social being.â€ This is so effectively signaled that  The ladsâ€™ get a thrill out of being spotted out drinking in pub and they know it more deviant than being spotted smoking</li></ul>What are some ways that the lads express that they are in another world and it is inaccessible to staff and 'ear'oles'?<ul><li>Joey says they can be punished by teachers who re a part of a bigger establishment than students. (122)</li><li>Eddie says teachers think they are high and mighty. Joey says students are under them. (122-123)</li><li>Joey says they can be physically punished or forced to do more work (123)</li><li>Spanksy says the ladsâ€™ will look back on life with a specialized experience inaccessible to the earâ€™oles e.g.fighting, having a laff (125)</li><li>Joey mentions they have developed their own vernacular  (128.6)</li></ul>",
      "tags": []
    },
    {
      "number": "0397",
      "question": " Describe the \"resistance culture\" of the lads at school.",
      "soln": "<h3>SOLUTION</h3>In //Learning to Labour// Paul Willis chronicles the world of a group of working class youth in 1970s England. Willis shows how their resistance to everything school stands for condemns them to the life in the lower working class that is the source of their despair about the chance for social mobility that school could promise.See H&H pp. 122ff.â€œGeneralized and personalized opposition to authorityâ€ (122.1)A â€œstyleâ€ expressed as the â€œInversion of the usual values held up by authority such a diligence, deference, and respectâ€ (123.7-8)",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0398",
      "question": " According to Willis, what is the \"main theme of shopfloor culture\"? Explain and give examples.",
      "soln": "<h3>SOLUTION</h3>\"The main theme of shopfloor culture-at least as I observed and recorded it in the manufacturing industries of the Midlands-is the massive attempt to gain informal control of the work process\" (130.8).Explanation left to reader.",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0399",
      "question": " Identify and elaborate on three ways in which the shopfloor culture described by Willis parallels the counter-school culture he talks about.(for final exam) Bring the phenomena Willis describes into conversation with material from the \"groups\" section of the course. What mechanisms described in that section might illuminate the lads' oppositional culture or shop floor culture?  ",
      "soln": "<h3>SOLUTION</h3>See p. 131.In the shop there is an \"attempt to gain informal control of the work process...\" found which include how machines are manned and speed of production.In counter-school culture the lads' mimic these attempts to take control of the classroom, disturb the official timetable, and take control of routine/life spaces in at least these three ways:1) rests on organizational (131.3) - \"informal group locates and makes possible all other elements\"2) attitude toward conformists (131.4) - \"informal group on the shop floor also shows the same attitude to conformists and informers as do 'the lads'.... and ostracism is the punishment for not maintaining the integrity of the world\"3) value practical knowledge over theory (132.1) - \"practical ability always comes first and is a condition of other kinds of knowledge\"These expressions are pretty much \"out of the book.\"  You should work with them to develop your own understanding of what Willis is saying.CHECKLIST<ol><li>Who?</li><li>What?</li><li>Tell us about the two worlds - lads in school and the shopfloor</li><li>Why are these connected?</li><li>What are the parallels?</li><li>So, does this account suggest that hierarchy is needed to get these kids not to mess up their lives or is the point of the account that hierarchies just mess up people's lives?</li></ol>(for final exam) To connect the groups material, maybe start with the lens of one article - Durkheim? Freud? Goffman? Centola et al. - and see what kind of mileage you can get looking at the lads' world through it.  ",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0400",
      "question": " Willis' //Learning to Labour// is often cited as an example of the social science concept of the \"reproduction of social class.\"  Explain what that phrase means to you after reading the excerpt from Willis' book.",
      "soln": "<h3>SOLUTION</h3>CHECKLIST<ol><li>Who?</li><li>What?</li><li>Tell us about the two worlds - lads in school and the shopfloor</li><li>How does the world of the shopfloor influence how they act in school?</li><li>How does how they act in school influence their life chances and their future on the shop floor?</li><li>What does \"reproduction of social class\" mean?</li><li>So, does this account suggest that hierarchy is needed to get these kids not to mess up their lives or is the point of the account that hierarchies just mess up people's lives?</li></ol>",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0401",
      "question": " What does Weber mean by legitimacy?",
      "soln": "<h3>SOLUTION</h3>Don't just recite a definition; use this as an opportunity to show you understand Weber's \"types of legitimate domination.\"CHECKLIST<ol><li>Who is Weber?</li><li>What are we reading here?</li><li>Can you walk us up to the concept by starting with what Weber means by power? And then what is authority?</li><li>What does Weber think every power interaction or at least authority interaction contains at least some of?</li><li>Get as deep inside the concept as you can.  You might want to focus on how the three types of legitimate domination are three types of legitimation for domination. What is this legitimation process?</li></ol>",
      "tags": []
    },
    {
      "number": "0402",
      "question": " Engels suggests that throughout history the state has been \"for the ruling class.\" Identify the three historical periods he talks about and characterize how this plays out in each.",
      "soln": "<h3>SOLUTION</h3>P 101Ancient: Slaveholders held down the slaves.Feudalism:Nobility held down the serfs.Modern: Exploiting wage-labor by capital",
      "tags": []
    },
    {
      "number": "0403",
      "question": " In the excerpt from \"The Origin of the State,\" Engels discusses the role of universal suffrage in the contemporary state. What role does he see the proletariat playing initially in this context? What trajectory does he suggest as the history unfolds?",
      "soln": "<h3>SOLUTION</h3>p 101ffInitially, the proletariat see their position in society as the only possible option. They only recognize the existing order as a possible one. Once they are ripe for self-liberation, the next step would be to elect their own people who are active as a radical party to change their circumstances, thus evolving the state.",
      "tags": []
    },
    {
      "number": "0404",
      "question": " Give a summary of the developmental story Engels tells in \"The Origin of the State.\" Be sure your answer makes connections to the course and to our discussion of hierarchy as a source of order.",
      "soln": "<h3>SOLUTION</h3>TBA",
      "tags": [
        "social network analysis"
      ]
    },
    {
      "number": "0405",
      "question": " Weber says (103.5) that \"rule over a considerable number of persons requires a staff....\"  If you read carefully you will see that the types of \"authority\" he is talking about refer to the leader's capacity to control and direct the staff as much as to the leader's capacity to dominate \"the led.\"  Discuss Weber's types of legitimate domination as forms of maintaining organizational integrity.",
      "soln": "<h3>SOLUTION</h3>NOTE: see also [[[q:0378|Q. 378]]] and [[[q:0380|Q. 380]]].First and foremost this question is asking you to \"get\" the idea that social order usually requires AN organization and that sustaining AN organization over time is a serious sociological challenge.  It also asks you to have a gut level appreciation for what we mean by staff as in people to carry out the business of an organization.  In other contexts you might here, in this connection, a distinction between LINE and STAFF.  Line people are the bosses and sub-bosses and sub-sub-bosses up and down the \"chain of command.\"  Staff are the people who work at each level and actually carry out the work.You will probably want to describe how Weber says that rational calculation by subordinates (want to do what the boss wants so boss will treat me well) or feelings (I like working for this boss) or values (I agree with organization's goals) are not sufficiently reliable for ongoing organization. The trick to showing what you know here is how to get from this to the idea that to make this thing work, we need to have subordinates believe IN THE ORGANIZATION (or maybe even the \"organization-ness of the organization).This is an opportunity to show that you are paying attention to the metanarrative that Hechter and Horne use to organize the selections in the text as well as an opportunity to show off what you know about Weber.Hector & Horne cites Nozick 1974, â€œTo be governed is to be watched, inspected, spied upon, directed, law-drive, numbered, regulated, enrolled, indoctrinated at controlled, checked, estimated, valued, censured, commanded, by creatures who have either neither the right nor the wisdom nor the virtue to do soâ€¦â€ It is a very expensive proposition for the state watch all of us all of the time. Hobbes can have his Leviathan, but does he, perhaps underestimate how much effort goes into being a Leviathan if that's all there is?  Or Engels has this oppressive state serving the interest of the ruling class - but how do they pull it off on a day to day basis?  The system is much more efficient if people actually want to do what the state mandates.Weber: if state is seen as legitimate, the rules will be obeyed in the absence of coercion. He finds three different authority structures that are seen as legitimate sources of authority:<ul><li>patrimonial - based on personal loyalty</li></ul><ul><li>bureaucratic - exploits a division of labor, relies on expertise rather than personal dependence</li></ul> <ul><li>charismatic - based on devotion exceptional sanctity of charismatic authority</li></ul>â€œEvery genuine form of legitimate domination implies a minimum of voluntary compliance, that is, an interest (based on ulterior motives or genuine acceptance) in obedience.â€ -- Weber (103.3)CHECKLIST<ol><li>Do you know who Weber is?</li><li>Do you make the connection - why is this question about Weber?</li><li>Do you understand what Weber means when he says most wielding of power requires a staff?</li><li>And that if you have a staff to wield power then you have this multilevel obedience problem?</li><li>And that just paying everyone enough to get their allegiance is tough business.</li><li>And so you need something else. And can you tell us what that is? And define it?</li><li>And can you then describe how Weber saw there being three ideal typical varieties?</li></ol>",
      "tags": []
    },
    {
      "number": "0406",
      "question": " Attribute and explicate: \"...every genuine form of domination implies a minimum of voluntary compliance, that is, an interest in compliance.\"",
      "soln": "<h3>SOLUTION</h3>P 103.5.",
      "tags": []
    },
    {
      "number": "0407",
      "question": " Weber's definition, please:powerlegitimacyauthority",
      "soln": "<h3>SOLUTION</h3>Pp. 103-4Don't just recite a definition; use this as an opportunity to show you understand Weber's \"types of legitimate domination.\"CHECKLIST<ol><li>Who is Weber?</li><li>What are we reading here?</li><li>Can you walk us up to the concept by starting with what Weber means by power? And then what is authority?</li><li>What does Weber think every power interaction or at least authority interaction contains at least some of?</li><li>Get as deep inside the concept as you can.  You might want to focus on how the three types of legitimate domination are three types of legitimation for domination. What is this legitimation process?</li></ol>",
      "tags": []
    },
    {
      "number": "0408",
      "question": " Show what you know about Willis' lads' world by doing a compare and contrast with a contemporary phenomenon like \"<a href=\"https://en.wikipedia.org/wiki/Gutter_punk\" target=\"_blank\">gutter punk</a>.\"",
      "soln": "<h3>SOLUTION</h3>TBA",
      "tags": []
    },
    {
      "number": "0409",
      "question": " Is punk rock anti-hierarchical?  Or is there a Willis-ian way in which it reproduces the hierarchy it loathes? Does this dynamic track with Weber's notion of \"voluntary submission\"?<br /><img src=\"https://djjr.us/images/qbank/punkademia.jpg\"><br />",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": []
    },
    {
      "number": "0410",
      "question": " Show what you know about Schelling's \"micromotives macrobehavior\" models by explaining this diagram.<br /><img src=\"https://djjr.us/images/qbank/meth-individualism-schelling-feedback.png\"><br />",
      "soln": "<h3>SOLUTION</h3>This is an opportunity to show that you understand Schelling (and really all of this section) and that you can connect it back to the \"boat diagram\" that is the framework of the whole book (look back to the introduction if you don't get this part).CHECKLIST<ol><li>Who is Schelling? What did we read?</li><li>Not the little details, but overall, what was he up to?</li><li>Can you explain what \"micromotives, macrobehavior\" means?</li><li>Do you understand the boat diagram itself?</li><li>How does Schelling suggest that people create the \"macro level social conditions\" to which they are reacting?</li><li>Can you talk about this in terms of it being a feedback loop?  Can it be both a reinforcing (positive) and a limiting (negative) feedback loop?  Explain.</li></ol>",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0411",
      "question": " What is Axelerod's fundamental question in \"The Evolution of Cooperation\"? It has four parts.",
      "soln": "<h3>SOLUTION</h3>It's in the first line (175.4):under what conditionsdoes cooperation emergein a world of egoistswithout central authority",
      "tags": []
    },
    {
      "number": "0412",
      "question": " Explain the basic idea of the prisoner's dilemma.",
      "soln": "<h3>SOLUTION</h3>TBA",
      "tags": []
    },
    {
      "number": "0412",
      "question": "  Explain the basic idea of the prisoner's dilemma.",
      "soln": "<h3>SOLUTION</h3>The name prisoner's dilemma comes from a scenario that fits a generic arrangement of two actors' intertwined fates: two people are arrested and charged with a crime; the police separate them and offer each a deal â€” betray your partner in crime and receive a lighter sentence, or risk being betrayed by your partner and receiving a harsher sentence. The best outcome occurs if you both keep your mouth shut, the worst overall if you both talk, but the worst for you as an individual is if you get ratted out and the best for you as an individual is if you rat out your partner.If you keep your mouth shut we say you are cooperating with your partner; if you talk you are defecting from the partnership. (177.7)",
      "tags": []
    },
    {
      "number": "0414",
      "question": " Explain why the study of the \"emergence of cooperation\" might be especially relevant in international relations. How does this observation suggest a fundamental limit to the Hobbesian model?",
      "soln": "<h3>SOLUTION</h3>See p 175.8CHECKLIST<ol><li>Who are we talking about?</li><li>What are the basic ideas here? Can you situate \"emergence of cooperation\"?</li><li>And explain what we mean by that phrase?</li><li>What is missing in international relations (think Hobbes)?</li><li>Why does this mean that there might not be a role for Taxis (in Hayek's sense)?</li><li>Remember Axelrod's model and the idea of \"repeated play\" - how would that be relevant in international relations?</li></ol>",
      "tags": [
        "research methods"
      ]
    },
    {
      "number": "0415",
      "question": " Explain what we mean by \"norm of reciprocity\" and how it is relevant to the course.",
      "soln": "<h3>SOLUTION</h3>See 176ff.CHECKLIST<ol><li>Can you zero in on the most obvious source for this idea - in the emergence of cooperation work?</li><li>What do you mean by norm?</li><li>By reciprocity?</li><li>Can you identify where reciprocity showed up in the experiments?</li><li>How about in the WWI accounts?</li><li>What's the difference between just retribution and a norm of reciprocity?</li></ol>",
      "tags": []
    },
    {
      "number": "0416",
      "question": " Explain what we mean by distinguishing a one-shot PD from an iterated PD and why this is important.",
      "soln": "<h3>SOLUTION</h3>Pp. 179ff.",
      "tags": []
    },
    {
      "number": "0417",
      "question": " In the context of game theory/prisoner's dilemma, what does \"words are cheap\" mean?",
      "soln": "<h3>SOLUTION</h3>p. 180",
      "tags": []
    },
    {
      "number": "0418",
      "question": " Context and explication, please: \"if the future is important, there is no one best strategy.\"<blockquote> If the discount parameter, w, is sufficiently high, there is no best strategy independent of the strategy used by the other player.</blockquote>",
      "soln": "<h3>SOLUTION</h3>181.7ff.",
      "tags": []
    },
    {
      "number": "0419",
      "question": " What does Hayek mean by \"teleological shorthand\"?<blockquote> The use of â€œpurposive\" in this sense as a sort of â€˜teleological shorthandâ€™, as it has been called by biologists, is unobjectionable so long as we do not imply an awareness of purpose on the part of the elements, but mean merely that the elements have acquired regularities of conduct conducive to the maintenance of the order â€” presumably because those who did act in certain ways had within the resulting order a better chance of survival than those who did not.\" (143.9)</blockquote>",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": []
    },
    {
      "number": "0420",
      "question": " Explain why Paul Willis' \"Learning to Labour\" was a reading in the hierarchy section of this course.",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": []
    },
    {
      "number": "0422",
      "question": " What do we mean saying that Axelrod is trying to discover the conditions in which cooperation can emerge?",
      "soln": "<h3>SOLUTION</h3>We want to discover the conditions in which cooperation can emerge â€” we assume that individuals are never acting in a pure social vacuum and that things in the environment (including arrangements of the agents, numbers, distributions of information, etc.) can have an effect on whether they cooperate. A successful predictive theory would then allow us to intervene to foster cooperation in particular settings (177.1).",
      "tags": []
    },
    {
      "number": "0423",
      "question": " The article \"[[[soc116:notes-r019-zimmer-ants|From Ants to People, An Instinct to Swarm]]]\" suggests that humans might not (yet) be like ants because we have not had enough time to adapt to living in groups (195.5).  What does this mean?  Demonstrate what you learned from this article (and from this section of the course) by talking about how humans are and are not like ants and what might be involved in an evolution toward being more like ants.",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": []
    },
    {
      "number": "0424",
      "question": " Fill in the blank boxes in this summary diagram for how hierarchy can generate social order. Note that the diagram is purely schematic - you might decide there are more or fewer boxes in different cases or the arrows might not go directly to coordination first, etc.<br /><img src=\"https://djjr.us/images/qbank/course-summary-hierarchy.gif\"><br />",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0425",
      "question": " What research questions did the \"live and let live\" phenomenon from WWI raise for Robert Axelrod?",
      "soln": "<h3>SOLUTION</h3>See p. 186.9",
      "tags": [
        "research methods"
      ]
    },
    {
      "number": "0426",
      "question": " Weber's definition, please:traditional authorityrational legal authoritycharismatic authority",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": []
    },
    {
      "number": "0427",
      "question": " Show what you know by attributing and explaining this diagram:<br /><img src=\"https://djjr.us/images/qbank/hayek-boat-diagram.png\"><br />",
      "soln": "<h3>SOLUTION</h3>Checklist<ol><li>Do you connect it with the right theorist?</li><li>Can you explain the basics of the boat diagram?</li><li>The author makes claims about complexity and information and whether people have access to info and can handle the complexity. Explain.</li><li>What do we mean \"no in order to motives\" with respect to macro patterns?</li><li>Another author does not make the point of saying that people can't try to create macro patterns but says they emerge even when people are not trying to.  Can you contrast this thinker's version of \"unintended consequences\" or \"collective irrationality emerging from individual rationality\" with the more optimistic view of the first thinker?</li></ol>",
      "tags": []
    },
    {
      "number": "0428",
      "question": " Attribute and explicate.<blockquote> Fate is regarded as a substitute for the parental agency. If a man is unfortunate it means that he is no longer loved by this highest power; and, threatened by such a loss of love, he once more bows to the parental representative in his super-ego -- a representative whom, in his days of good fortune, he was ready to neglect. This becomes especially clear where looked Fate is looked upon in the strictly religious sense of being nothing else than an expression of the Divine Will. The people of Israel had believed themselves to be the favorite child of God, and when the great. Father caused misfortune after misfortune to rain down upon this people of his, they were never shaken in their belief in his relationship to them or questioned his power or righteousness. Instead, they produced the prophets, who held up their sinfulness before them; and out of their sense of guilt they created the over-strict commandments of their priestly religion. It is remarkable how differently a primitive man behaves. If he has met with a misfortune, he does not throw the blame on himself but on his fetish, which has obviously not done its duty, and he gives it a thrashing instead of punishing himself.</blockquote>",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": [
        "social network analysis"
      ]
    },
    {
      "number": "0429",
      "question": " Briefly explain Freud's theory of where guilt comes from.",
      "soln": "<h3>SOLUTION</h3>pp226-227",
      "tags": []
    },
    {
      "number": "0430",
      "question": " At 239.4 Durkheim writes, \"As a matter of fact, at every moment of history there is a dim perception, in the moral consciousness of societies, of the respective value of different social services @@[@@he means jobs, occupations, etc. not social work@@]@@, the relative reward due to each, and the consequent degree of comfort appropriate on the average to workers in each occupation.\"  Translate this into everyday English.",
      "soln": "<h3>SOLUTION</h3>Do it!",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0431",
      "question": " Discuss the relationship between \"desires\" and \"means,\" ambitions and expectations, contentment and aspiration that characterize the NON-anomic equilibrium that society can provide.",
      "soln": "<h3>SOLUTION</h3>239ff",
      "tags": [
        "social theory",
        "social network analysis"
      ]
    },
    {
      "number": "0432",
      "question": " At 240.5 Durkheim talks about social classification (by which he means the way people are sorted into different roles/occupations/classes in society) and about what the basis of these are (and how we accept them or take them for granted - note that this is what Goffman was talking about too in \"The Arrangement Between the Sexes.\")  Why should (or how can) people be content with their lot in life when they are aware that the lots people have are vastly unequal?",
      "soln": "<h3>SOLUTION</h3>Think about it.",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0433",
      "question": " Discuss how one might be \"content\" with one's inequality in a society where:<ul><li>status is based on heredity</li><li>a program is in place to give everyone an equal start (imagine whatever's needed for this)</li><li>a strictly equal opportunity meritocratic society</li><li>a society with every imaginable balancing of privilege</li></ul>",
      "soln": "<h3>SOLUTION</h3>Think about it. Durkheim pp240ff",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0434",
      "question": " On p241 Durkheim talks about the anomy (disruption) caused by economic disaster (a person losing everything, say, or sudden drop in a set of people's economic circumstances as when a local industry closes and everyone loses jobs) OR when sudden wealth comes (again, to an individual or to a community or group).  Explain what Durkheim sees happening and how it's the same process in both situations.",
      "soln": "<h3>SOLUTION</h3>Think.",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0435",
      "question": " Discuss: Durkheim talks about how society gets us to \"accept our lot\"; Marx and Engels talk about false consciousness and ideology (we buy into our oppression) and religion as \"opiate of the masses\"; Weber gave us the notion of legitimate authority. Points of similarity and difference?",
      "soln": "<h3>SOLUTION</h3>Use it as an opportunity first of all to demonstrate your familiarity with these ideas.  And then think on your own.",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0436",
      "question": " At 242.5 Durkheim writes \"Poverty protects against suicide because it is a restraint in itself.\"  What does he mean?",
      "soln": "<h3>SOLUTION</h3>Think.",
      "tags": []
    },
    {
      "number": "0437",
      "question": " On p 243 we read \"this liberation of desires has been made worse by the very development of industry and the almost infinite extension of the market.\" Consult the text (including the text before this passage) and say something about what Durkheim's take on globalization of markets and products might be.",
      "soln": "<h3>SOLUTION</h3>Think.",
      "tags": []
    },
    {
      "number": "0438",
      "question": " Consult the text at 243.9ff : \"Reality seems valueless by comparison with the dreams of fevered imaginations; reality is therefore abandoned, but so is possibility abandoned when it in turn becomes reality. A thirst arises for novelties....\"  Use Durkheim to say something about advertising - for products, for body images, etc.",
      "soln": "<h3>SOLUTION</h3>Or rather, use this topic to show you get what Durkheim is saying here.",
      "tags": []
    },
    {
      "number": "0439",
      "question": " Freud in \"Civilization and Its Discontents\" gives us a theory of how conscience arises and functions.  In the selection on anomic suicide Durkheim gives an account of conscience as controlling our otherwise potentially infinite (and unsatisfiable) desires.  Compare and contrast.",
      "soln": "<h3>SOLUTION</h3>Think.",
      "tags": []
    },
    {
      "number": "0440",
      "question": " Define:regimen (239.6)erethism (242)equanimity (242)apotheosis (243.6)sacrilege (243.6)(purely) utilitarian (regulation) (243.7)liberal professions (244.8)",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": [
        "policy modeling"
      ]
    },
    {
      "number": "0441",
      "question": " Explain the scientific logic behind Durkheim's suggestion that the three propositions on suicide varying with integration in religious, domestic, and political society lead to the suggestion that social integration is the property behind the variation in suicide rates.",
      "soln": "<h3>SOLUTION</h3>By looking at the variation across different realms and finding that there is a common property - integration - we can eliminate the possibility that there is something special about religion or politics. This is possibly the most important lesson from research methods that people fail to learn.",
      "tags": [
        "policy modeling",
        "social theory"
      ]
    },
    {
      "number": "0442",
      "question": " Explain what Durkheim is talking about when he suggests that egoism is the opposite of social.",
      "soln": "<h3>SOLUTION</h3>pp 232ff",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0443",
      "question": " Define:supra-physical (234.5)raison d'Ãªtre (234.7)(instinct) acquits (itself) (234.8)(collective) asthenia (236.2)",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": []
    },
    {
      "number": "0444",
      "question": " Tocqueville writes that \"Americans combat individualism with free institutions\" (246). Explain what he means.",
      "soln": "<h3>SOLUTION</h3>First, perhaps, you need to explain what individualism means in this context and then what does he mean by \"free institutions\"?",
      "tags": []
    },
    {
      "number": "0445",
      "question": " What is the mechanism behind Tocqueville's endorsement of involvement in local politics as a way of building \"the social\" into citizens?",
      "soln": "<h3>SOLUTION</h3>247ff",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0446",
      "question": " Walk us through Tocqueville's contrast of aristocratic society where citizens are bound to, say, their local noble, and democratic society where citizens are independent.  He wants to say that the latter can't get anything done unless they know how to organize and associate.",
      "soln": "<h3>SOLUTION</h3>250",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0447",
      "question": " What is Tocqueville's argument that associations help to stabilize democratic regimes?",
      "soln": "<h3>SOLUTION</h3>251-255",
      "tags": []
    },
    {
      "number": "0448",
      "question": " Why is the Tocqueville selection in the \"groups as a source of social order\" section of the text?",
      "soln": "<h3>SOLUTION</h3>Look at 252ff.  Remember that this is in the \"internalization\" subsection of this part of the book.",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0449",
      "question": " What does Hechter mean by \"the extensiveness of corporate obligations\"?",
      "soln": "<h3>SOLUTION</h3>256ff",
      "tags": []
    },
    {
      "number": "0450",
      "question": " Centola, et al. describe a process whereby people collectively \"produce\" something that is contrary to their individual beliefs/interests/preferences. Thomas Schelling, similarly, described a process whereby socially irrational results emerged from individually rational action.  Identify points of similarity and difference, using it as an opportunity to show what you know about the two thinkers' ideas as well as your ability to compare markets and groups as generators of social order.",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0451",
      "question": " If the phenomenon described by Centola et al. is common, what are the implications for Schelling's critical mass and tipping models?",
      "soln": "<h3>SOLUTION</h3>solution[!--[[module CSS]]img {\tmax-width: 100%;\tdisplay: block;}.thumbnail {\tmargin: auto;\twidth: 240px;\theight: 160px;\t}.image {\twidth: 100%;\theight: 100%;    }.image img {\t-webkit-transition: all 1s ease; /* Safari and Chrome */      -moz-transition: all 1s ease; /* Firefox */      -o-transition: all 1s ease; /* IE 9 */      -ms-transition: all 1s ease; /* Opera */      transition: all 1s ease;}.image:hover img {\t-webkit-transform:scale(4.0); /* Safari and Chrome */\t-moz-transform:scale(4.0); /* Firefox */\t-ms-transform:scale(4.0); /* IE 9 */\t-o-transform:scale(4.0); /* Opera */ \ttransform:scale(4.0);}[[/module]]--]",
      "tags": []
    },
    {
      "number": "0452",
      "question": " Develop a summary diagram for the entire course.  Some examples of the genre from a social control class in solutions.",
      "soln": "<h3>SOLUTION</h3>[[div class=\"thumbnail\"]][[div class=\"image\"]][[image soc112:whole-course-diagram-gallery/diagram2004-djr.jpg height=\"200\"]][[image soc112:whole-course-diagram-gallery/diagram2009-BartramS.jpg height=\"200\"]][[image soc112:whole-course-diagram-gallery/diagram2009-Brar.jpg height=\"200\"]][[image soc112:whole-course-diagram-gallery/diagram2009-Chavez1.jpg height=\"200\"]][[image soc112:whole-course-diagram-gallery/diagram2009-cinelli.jpg height=\"200\"]][[image soc112:whole-course-diagram-gallery/diagram2009-Coleman1.jpg height=\"200\"]][[image soc112:whole-course-diagram-gallery/diagram2009-Harrison.jpg height=\"200\"]][[image soc112:whole-course-diagram-gallery/diagram2009-Junglieb.jpg height=\"200\"]][[image soc112:whole-course-diagram-gallery/diagram2009-McCoid1.jpg height=\"200\"]][[image soc112:whole-course-diagram-gallery/diagram2009-McCoid2.jpg height=\"200\"]][[image soc112:whole-course-diagram-gallery/diagram2009-soldano.jpg height=\"200\"]][[image soc112:whole-course-diagram-gallery/diagram2009-Triplett.jpg height=\"200\"]][[image soc112:whole-course-diagram-gallery/Soc112_Brochure_2009a_Page_1.jpg height=\"200\"]][[image soc112:whole-course-diagram-gallery/Soc112_Brochure_2009a_Page_2.jpg height=\"200\"]][[image soc112:whole-course-diagram-gallery/soc112-course-ryan2.png height=\"200\"]][[image soc112:whole-course-diagram-gallery/SOC112-Diagram-Morrow.jpg height=\"200\"]][[/div]][[/div]]",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0453",
      "question": "<blockquote> [[[q:0337|Q337]]]. In \"Genesis and Development of a Scientific Fact\" Ludwik Fleck starts out with the bold statement that \"cognition is the most socially-conditioned activityâ€¦.\" Why is this a bold statement? What conventional assumption is he contradicting at the outset?</blockquote><blockquote></blockquote><blockquote> [[[q:0338|Q338]]]. \"As an entity [a thought collective] is even more stable and consistent than the so-called individual, who always consists of contradictory drives\" (57.8). Explain what Fleck means.</blockquote><blockquote></blockquote><blockquote> [[[q:0339|Q339]]]. Ludwik Fleck wrote: \"what actually thinks within a person is not the individual himself but his social community\" (Hechter & Horne 59.5). Explain wha</blockquote>",
      "soln": "<h3>SOLUTION</h3>See original questions.",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0454",
      "question": " Consider the essay you wrote for [[<a href=\"http://djjr-courses.wikidot.com/soc116:when-social-order-goes-away|the\" target=\"_blank\">warm-up assignment at the start of this course on a film or book in which social order \"disappeared.\"</a>]] How would you re-write it in a manner that would show off some of what you learned in this course?",
      "soln": "<h3>SOLUTION</h3>You could also use someone else's essay....",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0455",
      "question": " Think about the articles by Fehr & Gintis and Centola et al. Show what you take away from these articles by talking about how norms can support cooperation and social order and how they can support an order that might be high on coordination but low on the benefits of cooperation.  ",
      "soln": "<h3>SOLUTION</h3>Some ideas:One might start by briefly describing both pieces with a focus on where norms fit in each.Think about how both articles say, in part, \"if people were JUST rational, you'd expect one thing, but in practice you see another.\"Do you think Fehr and Gintis' \"strong reciprocators\" are just a personality type - they like to punish, want others to behave fairly? Or are they different because they have an inclination to enforce social norms?If norms are rules that reflect behavioral preferences of groups, what do we even mean by an \"unpopular\" norm?  Compare the dynamics of behavior, observation of others' behavior, reaction to others' behavior, signals sent by reactions in the public goods simulation and in the kinds of situations Centola et al. are describing.Can you imagine a game or experiment for investigating pluralistic ignorance?",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0456",
      "question": " Provide a high level comparison of shared meaning, hierarchy, markets, and groups as sources of social organization understood as coordination and cooperation.",
      "soln": "<h3>SOLUTION</h3>Is shared meaning on the same level as the others or more of a necessary but not sufficient prerequisite?",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0457",
      "question": " The overall logic of the final section of the course was that groups can promote social order through internalization of norms and provision of incentives. Explain how each of these work and what the difference is using at least one thinker to illustrate each.",
      "soln": "<h3>SOLUTION</h3>Ideas: re-read the introduction to the section.",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0458",
      "question": " If you are doing a thesis this year or have a general topic in mind for one in the future, pick two theorists, each from a different section of the course, and show what you have learned about their ideas by \"applying\" them to your research topic.",
      "soln": "<h3>SOLUTION</h3>Hint: think about how social order is relevant to your topic and think about how the ideas of the course might push you to think about the mechanisms of individual behavior/rationality that explain macro processes you might be interested in.",
      "tags": [
        "research methods"
      ]
    },
    {
      "number": "0459",
      "question": " What, to your mind, was the best article of the course - the one you really understood or that really clicked for you or that you've taken to explaining to friends and family it's so awesome.  Describe it in a manner that shows the depth of your understanding.",
      "soln": "<h3>SOLUTION</h3>Organize your thoughts. Keep your eye on the prize.  Important and insightful ideas, not a million details.",
      "tags": []
    },
    {
      "number": "0460",
      "question": " Modify this as you like so it refers to a trip project you might plan with family or friends.  We are proposing an inexpensive family trip from Charleston, South Carolina, to Des Moines, Iowa, to visit relatives during December school holidays. The seasonal trip we dream of taking from Charleston to Des Moines is the â€œprogram.â€ Basic assumptions about our trip â€œprogramâ€ are:<ul><li>We want to visit relatives between 12/10/00 and 1/5/01 while the children are out of school.</li><li>We will fly from South Carolina to Iowa because it takes less time than driving and because frequent flier (FF) miles are available.</li><li>Using frequent flier miles will reduce travel costs.</li></ul>*We have to determine the factors influencing our trip, including necessary resources, such as, the number of family members, scheduled vacation time, the number of frequent flier miles we have, round trip air reservations for each family member, and transportation to and from our home to the airport. The activities necessary to make this happen are the creation of our own family holiday schedule, securing our Iowa relativeâ€™s schedule, garnering air line information and reservations and planning for transportation to and from the airport.",
      "soln": "<h3>SOLUTION</h3>Here's the one they came up with in the reading.  YMMD.<br /><img src=\"https://djjr.us/images/qbank/logic-model-vacation.gif\"><br />",
      "tags": [
        "design"
      ]
    },
    {
      "number": "0461",
      "question": " Consider the task of building a logic model for a setting up an \"academic excellence center\" on campus.  Brainstorm about resources, activities, outputs, and outcomes.  For each category, give examples of too much detail, not enough detail, and just the right amount of detail for a straightforward logic model.",
      "soln": "<h3>SOLUTION</h3><br /><img src=\"https://djjr.us/images/qbank/logic-model-innonet.gif\"><br />",
      "tags": []
    },
    {
      "number": "0463",
      "question": " (1) Write the equation for value, FV, of principal, PV, saved at interest rate R for N years (compounded annually).(2) Suppose you know the future value in problem one and want to determine the present value. Solve the equation you wrote above for PV.(3) Suppose I have a project that will deliver A dollars in one year, B dollars the second year and C dollars in the third year under a prevailing interest/discount rate of R.  Write the equation for the present value of this project.",
      "soln": "<h3>SOLUTION</h3>\n$$PV = \frac {FV} {(1 + R)^N}$$\n$$FV = PV (1 + R)^N$$\n$$PV = \frac {A} {(1 + R)} +  \frac {B} {(1 + R)^2} +  \frac {C} {(1 + R)^3}$$",
      "tags": []
    },
    {
      "number": "0464",
      "question": " (a) Suppose a friend makes the following offer: \"I am willing to give you $10 right now, 25$ in 3 years or $200 in ten years.\"  Describe the logic you might use to see which of these is the best deal.  Calculate the present value of each opportunity and use the results to sketch a simple decision tree.  Assume a discount rate of 5%(b)If you have the choice between paying a cash price right now or spreading the payments out over 12 months with no interest, which would you choose and why?",
      "soln": "<h3>SOLUTION</h3>(a) <br /><img src=\"https://djjr.us/images/qbank/discount-prob-0464.gif\"><br />(b) Choose the payment plan because a future payment/cost is negative.  It's PV is smaller -- that is, represents a higher value to you.",
      "tags": [
        "policy modeling"
      ]
    },
    {
      "number": "0465",
      "question": " A used car costs 10,000.  A comparable new car costs 20,000.  Owners of new cars can expect to pay nothing per year in maintenance for ten years.  Owners of used cars pay $1000 per year in maintenance.  How do the costs compare over ten years?  Assume a 7% discount rate.",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": []
    },
    {
      "number": "0466",
      "question": " A state agency is considering a childcare subsidy that would facilitate single parents attainment of college degrees.  The benefit would cost $10k per recipient per year for four years.  The expectation is that individuals with a college degree will earn more than individuals without a college degree.  This means that they generate more revenue in the form of income tax.  They are also less likely to require government assistance of various kinds -- call this amount **A**.  Assume current rules limit us to a ten year time horizon.  Assume the average salary difference between non-college grads and college grads is **D** (but get the real info <a href=\"http://www.census.gov/prod/2002pubs/p23-210.pdf\" target=\"_blank\">here</a>) and that the marginal tax rate can be found <a href=\"http://www.bankrate.com/brm/itax/edit/state/profiles/state_tax_Cal.asp\" target=\"_blank\">here</a>.  Assume a 5% <a href=\"http://en.wikipedia.org/wiki/Social_discount_rate\" target=\"_blank\">discount rate</a>.  For the purposes of this problem, we will ignore inflation.",
      "soln": "<h3>SOLUTION</h3>See also Hedge, A. 2011. <a href=\"http://www.csub.edu/kej/documents/weekly_updates/2011-03-28.pdf\" target=\"_blank\">The DREAM Act 2010: A Cost-Benefit Analysis for California</a>",
      "tags": [
        "policy modeling"
      ]
    },
    {
      "number": "0467",
      "question": " (a) Provide an example that illustrates how the IRR criteria can give wrong answer. (b) Provide an example that illustrates how payback period criterion can give the wrong answer. (c) Describe how risk, safety and hedonism might enter into the calculations in discounting problems.",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": []
    },
    {
      "number": "0468",
      "question": " Describe how to set up the following problem.  There are many inefficient and dirty older cars still in use.  Future generations are harmed by the wasted fuel and added pollution these cars represent.  A proposal is in the works to pay people a bonus to trade them in.  How should we think about this?  In your preliminary thinking, ignore any economic stimulus effects.  You can bring that in later if you wish.",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": []
    },
    {
      "number": "0469",
      "question": " This is one of a series of problems ([[[q:0470|470]]], [[[q:0471|471]]], [[[q:0472|472]]], [[[q:0473|473]]], [[[q:0474|474]]], [[[q:0475|475]]], [[[q:0476|476]]], [[[q:0477|477]]], [[[q:0478|478]]]) relating to the same fictional case: The community of Ourville which is considering some options for creating parks to enhance the quality of life of local residents. The amounts are expressed in simple numbers â€“ e.g., $100 â€“ which you can assume to be referring to realistic amounts â€“ e.g., hundreds of thousands.(a) As a part of its considerations about the park project, Ourville needs to think about the opportunity costs associated with each tract of land being considered for the park. What is an opportunity cost? You are nominated to explain (BRIEFLY) in terms the public will understand what we mean by opportunity cost:(b) While discussing the value of the park options to residents the term \"willingness to pay\" comes up. Explain (BRIEFLY) to the public what this means.",
      "soln": "<h3>SOLUTION</h3>(a) Opportunity cost is the value we forgo by taking a particular course of action. What is the next best thing I could have done with the resources I use on this project. In this case, we are building parks and so we presume that the community has to have a conversation about what other uses there are for the land in question.(b) In cost benefit analysis, on way to \"put a price\" on something is to ask what people would be willing to pay for it. We don't just ask something like \"what is convenient parking worth to you?\"; instead we ask, \"Would you be willing to pay $25 for a parking permit? How about $50?\" etc.",
      "tags": [
        "policy modeling",
        "social theory"
      ]
    },
    {
      "number": "0470",
      "question": " This is one of a series of problems ([[[q:0469|469]]], [[[q:0471|471]]], [[[q:0472|472]]], [[[q:0473|473]]], [[[q:0474|474]]], [[[q:0475|475]]], [[[q:0476|476]]], [[[q:0477|477]]], [[[q:0478|478]]]) relating to the same fictional case: The community of Ourville which is considering some options for creating parks to enhance the quality of life of local residents. The amounts are expressed in simple numbers â€“ e.g., $100 â€“ which you can assume to be referring to realistic amounts â€“ e.g., hundreds of thousands.One part of the staff report talks about discounting. A resident asks \"where do discount rates come from?\" Your (BRIEF) answer:",
      "soln": "<h3>SOLUTION</h3>Short answer: we look them up.  In a given policy environment there will often be a conventional discount rate based on an agreed upon logic.  Discount rates depend on opportunity costs -- when we are talking about public expenditure we have to ask \"what would be the return on these resources in private investment?\" Thus, one convenient default is the long term average return of the stock market -- something like 7 or 8%.  Main points are two: 1) it is meant to reflect the economic conditions in which a decision is embedded; 2) it reflects a consensus within an analytical community.See also <ul><li>Wikipedia, <a href=\"http://en.wikipedia.org/wiki/Social_discount_rate\" target=\"_blank\">Social Discount Rate</a></li><li>Wikipedia, <a href=\"http://en.wikipedia.org/wiki/Net_present_value#The_discount_rate\" target=\"_blank\">Net Present Value article</a></li><li>Peakcock, B. 1995. <a href=\"http://training.fws.gov/EC/Resources/fwca/Evaluation%20Methodologies/Habitat%20Equivalency%20Analysis%20%28HEA%29/DOI%20rate.pdf\" target=\"_blank\">The Appropriate Discount Rate For Social Policy Analysis: Discussion and Estimation</a></li></ul>",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0471",
      "question": " This is one of a series of problems ([[[q:0469|469]]], [[[q:0470|470]]], [[[q:0472|472]]], [[[q:0473|473]]], [[[q:0474|474]]], [[[q:0475|475]]], [[[q:0476|476]]], [[[q:0477|477]]], [[[q:0478|478]]]) relating to the same fictional case: The community of Ourville which is considering some options for creating parks to enhance the quality of life of local residents. The amounts are expressed in simple numbers â€“ e.g., $100 â€“ which you can assume to be referring to realistic amounts â€“ e.g., hundreds of thousands. In your reports you mention Pareto and Kaldor-Hicks criteria.  Your supervisor says you can't just refer to these â€“ you need to explain  (BRIEFLY) what they mean in everyday terms:",
      "soln": "<h3>SOLUTION</h3>The Pareto criterion says a project is worth doing if it improves the welfare of at least some stakeholders without diminishing the welfare of any.  The [[[ppol225-glossary:kaldor-hicks-criteria| Kaldor-Hicks]]] criterion says a project is worth doing if it has a positive net benefit because even if that benefit is unevenly distributed, relative \"winners\" can, in theory, compensate others and still have something left over.",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0472",
      "question": " This is one of a series of problems ([[[q:0469|469]]], [[[q:0470|470]]], [[[q:0471|471]]], [[[q:0473|473]]], [[[q:0474|474]]], [[[q:0475|475]]], [[[q:0476|476]]], [[[q:0477|477]]], [[[q:0478|478]]]) relating to the same fictional case: The community of Ourville which is considering some options for creating parks to enhance the quality of life of local residents. The amounts are expressed in simple numbers â€“ e.g., $100 â€“ which you can assume to be referring to realistic amounts â€“ e.g., hundreds of thousands.One option on the table for the community of Ourville is to build a park on the west side of town.  Should we spend $100 to build a new park?  Studies have determined that the park will provide $132 of benefits to the community's residents.  What do you recommend and why?",
      "soln": "<h3>SOLUTION</h3>This is a simple go/no go on a single project problem (type 1).  The fundamental rule is \"adopt the proposal if the net benefits are greater than zero.\"  In this case, they are: \\(132-100=32\\).",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0473",
      "question": " This is one of a series of problems ([[[q:0469|469]]], [[[q:0470|470]]], [[[q:0471|471]]], [[[q:0472|472]]], [[[q:0474|474]]], [[[q:0475|475]]], [[[q:0476|476]]], [[[q:0477|477]]], [[[q:0478|478]]]) relating to the same fictional case: The community of Ourville which is considering some options for creating parks to enhance the quality of life of local residents. The amounts are expressed in simple numbers â€“ e.g., $100 â€“ which you can assume to be referring to realistic amounts â€“ e.g., hundreds of thousands.Two options are on the table for the community of Ourville.\tEither option will cost $100.  Option A  -- the West Park â€“ provides $80 of benefits (total) to families who live close to the west park location and $52 (total) to families who live farther away on the east side of town.  Option B â€“ the East Park â€“ provides $40 to the first group of families and $110 to the second group.  What do you recommend and why?<br /><img src=\"https://djjr.us/images/qbank/q0473-cba-01.jpg\"><br />",
      "soln": "<h3>SOLUTION</h3>This is a type 2A problem: choose one of several alternatives.  The fundamental rule is \"select the project with the highest net benefit.\" The net benefits are shown on the last line of the table.  Project B has the higher NB and so it should be selected.  The group 2 families can make a payment of 40 to the group 1 families and they will have the same benefit they would have had under project A and the group 2 families will still have 70 leftover.",
      "tags": [
        "GIS",
        "social theory"
      ]
    },
    {
      "number": "0474",
      "question": " This is one of a series of problems ([[[q:0469|469]]], [[[q:0470|470]]], [[[q:0471|471]]], [[[q:0472|472]]], [[[q:0473|473]]], [[[q:0475|475]]], [[[q:0476|476]]], [[[q:0477|477]]], [[[q:0478|478]]]) relating to the same fictional case: The community of Ourville which is considering some options for creating parks to enhance the quality of life of local residents. The amounts are expressed in simple numbers â€“ e.g., $100 â€“ which you can assume to be referring to realistic amounts â€“ e.g., hundreds of thousands.The mayor of Ourville wants a more detailed analysis on option A. Apparently, the park could range in size from the very small to the very large. Budget concerns are not an issue for now. Examine the information below. What do you recommend and why? For example: What type of problem is this? What is the fundamental rule? How big should the park be?<br /><img src=\"https://djjr.us/images/qbank/q0474-cba-01.jpg\"><br />",
      "soln": "<h3>SOLUTION</h3>This is a \"choose the appropriate scale of a single project\" (type 2b) problem.  The fundamental rule is \"expand the project until marginal cost equals marginal benefit.\" Here marginal benefit (MB) exceeds marginal cost until level 4.  Expanding from 2 to 3 (spending the next 25 after already having invested 50) yields MB=30.  But expanding from 3 to 4 (raising cost from 75 to 100) yields an additional benefit of only 12.  Since this MB is less than the MC (25) we don't make this investment.  The project should stop at level 3.",
      "tags": [
        "social theory",
        "computational thinking",
        "research methods"
      ]
    },
    {
      "number": "0475",
      "question": " This is one of a series of problems ([[[q:0469|469]]], [[[q:0470|470]]], [[[q:0471|471]]], [[[q:0472|472]]], [[[q:0473|473]]], [[[q:0474|474]]], [[[q:0476|476]]], [[[q:0477|477]]], [[[q:0478|478]]]) relating to the same fictional case: The community of Ourville which is considering some options for creating parks to enhance the quality of life of local residents. The amounts are expressed in simple numbers â€“ e.g., $100 â€“ which you can assume to be referring to realistic amounts â€“ e.g., hundreds of thousands.Activists in Ourville force the city not to think of this as an either/or proposition.  Experts are consulted and the following cost benefit information is obtained.  Council allocates $200 for the parks project.  How do you recommend they proceed and why?  What kind of problem is this? How big should each park be?<br /><img src=\"https://djjr.us/images/qbank/q0475-cba-01.jpg\"><br />",
      "soln": "<h3>SOLUTION</h3>This is multiple projects, scaleable, with budget constraint (type 4).  The fundamental rule is \"expand projects until the marginal net benefits are equal across all projects.\"  In practice this means starting from the marginal net benefit curves above and investing incrementally, each time selecting the next available investment with the largest MNB.<br /><img src=\"https://djjr.us/images/qbank/q0475-cba-02.jpg\"><br /> Here we assume that the given information implies that these projects can be scaled up in units costing 25.  Our first 25 takes project A to level 1.  Then project B goes to 1 because of the available \"next steps\" taking B from 0 to 1 has higher MNB (0.68) than taking A from 1 to 2 (0.6).  Now we are \"at\" 25 on both projects.  The best opportunity (highest MNB) we are looking at is 0.92 associated with moving project B from level 1 to level 2.  After this, it's the 0.6 of going from A1 to A2.  Then, the 5th and 6th investments go to both projects at level 3 (at a MNB of 0.2).  After this, we exhaust our budget with two more investments in project B.  The end result is expanding project A to level 3 and project B to level 5, both with a MNB of 0.2. Sequence of investments<ol><li>A1 (that is, take project A from level 0 to level 1)</li><li>B1</li><li>B2</li><li>A2</li><li>A3 B3</li><li>B4</li><li>B5</li></ol>",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0476",
      "question": " This is one of a series of problems ([[[q:0469|469]]], [[[q:0470|470]]], [[[q:0471|471]]], [[[q:0472|472]]], [[[q:0473|473]]], [[[q:0474|474]]], [[[q:0475|475]]], [[[q:0477|477]]], [[[q:0478|478]]]) relating to the same fictional case: The community of Ourville which is considering some options for creating parks to enhance the quality of life of local residents. The amounts are expressed in simple numbers â€“ e.g., $100 â€“ which you can assume to be referring to realistic amounts â€“ e.g., hundreds of thousands.The Ourville Alliance, a neighborhood group whose members include several MPPs, likes decision trees. And they think the benefits of the different park options are not certain. In fact, they think that Option A has a 75% chance of a net benefit of 60 and a 25% chance of being a bust and having a net benefit of only 20. By comparison, Option B has a 90% chance of having a net benefit of 50 and a 10% chance of a net benefit of only 10. Sketch in details, labels, etc. on this decision tree as necessary. What do you recommend and why?<br /><img src=\"https://djjr.us/images/qbank/q0476-cba-01.jpg\"><br />",
      "soln": "<h3>SOLUTION</h3><br /><img src=\"https://djjr.us/images/qbank/q0476-cba-02.jpg\"><br /> Since, subject to the described contingencies, the expected value of project A exceeds that of project B, that should be our choice.",
      "tags": [
        "policy modeling",
        "social theory"
      ]
    },
    {
      "number": "0477",
      "question": " This is one of a series of problems ([[[q:0469|469]]], [[[q:0470|470]]], [[[q:0471|471]]], [[[q:0472|472]]], [[[q:0473|473]]], [[[q:0474|474]]], [[[q:0475|475]]], [[[q:0476|476]]], [[[q:0478|478]]]) relating to the same fictional case: The community of Ourville which is considering some options for creating parks to enhance the quality of life of local residents. The amounts are expressed in simple numbers â€“ e.g., $100 â€“ which you can assume to be referring to realistic amounts â€“ e.g., hundreds of thousands.Earlier in the process, two options were on the table for the community of Ourville.  One proposal was for a <a href=\"http://en.wikipedia.org/wiki/Pocket_park\" target=\"_blank\">pocket park</a> that will cost only $10 and is projected to have $50 benefit -- a benefit to cost ratio of 5 to 1.  The other proposal is a more elaborate park that will cost $50 and have a benefit of $100 -- a benefit to cost ratio of 2 to 1.  The town budget could afford either project â€“ either one pocket park or one larger park,  but not both.  What would you recommend and why?",
      "soln": "<h3>SOLUTION</h3>Benefit/Cost ratios can mislead.  In this case, it is true that the pocket-park option delivers more \"bang for buck\" -- the rate is 5 to 1! -- than the other project (which is only 2 to 1).  But our job is to maximize NB.  Here the project that does that is the more elaborate park.  We are told that we can afford either (but not both) and so we should deliver the maximum net benefit.Note that in a fuller analysis we might inquire as to what other options were available for the remaining 40 if we were to choose the pocket park.  It could be that when other projects were added to the mix -- projects, for example that could return a benefit of 60 for the investment of that 40, then the NB of the package (it would now be 50+60) would exceed the 100 promised by the more elaborate park.  But that would be a different problem.",
      "tags": [
        "social theory"
      ]
    },
    {
      "number": "0478",
      "question": " This is one of a series of problems ([[[q:0469|469]]], [[[q:0470|470]]], [[[q:0471|471]]], [[[q:0472|472]]], [[[q:0473|473]]], [[[q:0474|474]]], [[[q:0475|475]]], [[[q:0476|476]]], [[[q:0477|477]]]) relating to the same fictional case: The community of Ourville which is considering some options for creating parks to enhance the quality of life of local residents. The amounts are expressed in simple numbers â€“ e.g., $100 â€“ which you can assume to be referring to realistic amounts â€“ e.g., hundreds of thousands.In comparing options for the park projects in Ourville, staff have noted that equipment choices will have an impact on maintenance costs down the line.  Two swing sets, in particular, are being considered.  One is very expensive up front, but has a very favorable maintenance outlook.  The other is less expensive, but might need repairs and even to be replaced during the expected lifetime of the sturdier set.  Data is below (based on a 7% discount rate).  We assume annual community benefits from using the park to be 2000 (except in the year where the cheaper swing set would have to be replaced).  The town budget could afford either project, but not both.  What do you recommend and why?  Explain to a public audience what is going on here.<br /><img src=\"https://djjr.us/images/qbank/q0478-cba-01.jpg\"><br />",
      "soln": "<h3>SOLUTION</h3>Both our options involve up-front costs and future costs and benefits. To properly compare the options we need to calculate the \"present value\" of these future streams of costs and benefits. These tables list the cost and benefit and then the net benefit â€” benefits minus costs â€” for each year over the next ten years.Each of these future net benefits is then \"discounted\" using a standard social discount rate that takes into account the fact that a payment 10 years from now is worth less than a payment today.Then, in the upper left of each table we see the net present value â€” the sum of the present values of each year's net benefits. What we see is that even though the sturdier swing set is initially more than twice as expensive, it's maintenance costs are significantly lower making it the better investment in the long run. The present value of this option is almost 20% higher than that of the \"more economical\" option.",
      "tags": [
        "policy modeling",
        "social theory",
        "computational thinking",
        "research methods"
      ]
    },
    {
      "number": "0479",
      "question": " Some old cars are being driven by people who take the attitude \"if it ain't broke, don't fix it\" and \"sure, it might not be efficient or clean, but I can't afford to buy a new car.\" These cars use too much fuel and they pollute the air causing health problems in the population.   Assume new cars are zero emission and so create zero health care costs. Each old car, on average, contributes to pollution and health care costs to the tune of $300 per year. We want to run a program to get 100 \"junkers\" off the road each year for the next three years by offering a $2000 rebate to people who swap a junker for a brand new zero emission vehicle.  Working with a ten year time horizon and an initial discount rate of 3.5%, compute the NPV of the project.  Then adjust the the subsidy to determine how large a subsidy we can give and still have the project worth doing. Then compute the IRR of the project at both the original amount and this new amount.",
      "soln": "<h3>SOLUTION</h3><br /><img src=\"https://djjr.us/images/qbank/problem0479.png\"><br />",
      "tags": [
        "computational thinking"
      ]
    },
    {
      "number": "0480",
      "question": " Convert the data recorded on the cards below into a cases by variables table.<br /><img src=\"https://djjr.us/images/qbank/ten-data-cards.jpg\"><br />",
      "soln": "<h3>SOLUTION</h3>solution",
      "tags": [
        "computational thinking",
        "research methods"
      ]
    }
  ];