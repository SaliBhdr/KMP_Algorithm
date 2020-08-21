# KMP_Algorithm
The Knuth-Morris-Pratt algorithm implemented in JavaScript

# Usage 

Just open `index.html` and fill the form inputs with what ever value you want

# Description
The Knuth-Morris-Pratt string search algorithm is an algorithm for finding a substring within another string that uses information calculated about the substring to speed up the search process.

Before looking through the text to be searched, a table of jump lengths is calculated from the search string. Rather than iterating through the whole string, you can determine how many characters to skip over based on the structure of the word being searched for. As you scan through the search text and you find a mismatch, you can start comparing characters again from the last matching substring between the search term and the search text.

# Big O notation

Knuth, Morris and Pratt discovered first linear time string-matching algorithm by following a tight analysis of the naïve algorithm. Knuth-Morris-Pratt algorithm keeps the information that naïve approach wasted gathered during the scan of the text. By avoiding this waste of information, it achieves a running time of O(n + m), which is optimal in the worst case sense. That is, in the worst case Knuth-Morris-Pratt algorithm we have to examine all the characters in the text and pattern at least once.

# Analysis

The running time of Knuth-Morris-Pratt algorithm is proportional to the time needed to read the characters in text and pattern. In other words, the worst-case running time of the algorithm is O(m + n) and it requires O(m) extra space. It is important to note that these quantities are independent of the size of the underlying alphabet.

# Sudo code

KNUTH-MORRIS-PRATT (T, P)

````
Input:    Strings T[0 . . n] and P[0 . . m]
Output: Starting index of substring of T matching P

f ← compute failure function of Pattern P
i ← 0
j ← 0
while i < length[T] do
    if j ← m-1 then
        return i- m+1    // we have a match
i ← i +1
j ← j +1
else if j > 0
        j ← f(j -1)
    else
        i ← i +1
````

# salarbahador.github.io
پروژه درس الگوریتم های پیشرفته . سالار بهادر .

# فصل 32 تطبیق رشته ها
الگوریتم تطبیق رشته :
Knuth-Morris-Pratt

# آدرس مخزن الگوریتم:
https://github.com/SaliBhdr/KMP_Algorithm

## آدرس رزومه:
https://salibhdr.github.io/resume/

# منابع
https://www.geeksforgeeks.org/kmp-algorithm-for-pattern-searching/
https://www.computing.dcu.ie/~humphrys/Notes/String/kmp.html
https://stackoverflow.com/questions/13271856/understanding-knuth-morris-pratt-algorithm

# Videos
[Knuth-Morris-Pratt KMP String Matching Algorithm](https://www.youtube.com/watch?v=V5-7GzOfADQ)