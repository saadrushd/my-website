---
title: compliant franco
githubrepo: https://github.com/saadnpq/compliant-franco
description: suckless, standardized, documented and eloquent Arabic writing system
date: 2019-03-01
tags: [writing systems, Arabic, linguistics]
---

# state of the project

personally i stopped using this system, now i use english to solve the problems discussed [here](/blog/franco). but it's usable for any one agrees more with my old position.
if you want to change something or you want to mantain the project i can help you, pull requests are welcome on the [github repository](https://github.com/saadnpq/compliant-franco).

# abstraction

this project is supposed to be an implementation of ideas introduced by
[this research article](/blog/franco).
to understand the rationale behind all of this, or to have a better
insight about the issue of the Arabic writing system, please refer to
the article.

# why?

  - to have a standardized, documented, eloquent, and community
    developed Franco flavor.  
  - to have a consistent, searchable and bidirectional friendly Arabic
    writing system.  
  - a reference for people with unreadable Franco  

# Boundary conditions

1.  Franco is a writing system for Arabic speakers, not a way to write
    Arabic to be pronounced by English speakers.  
2.  Franco constrains itself to ASCII characters not to English
    alphabet, however, it should not conflict with it (English
    alphabet).  
3.  as much as we can, there should be only **one** "right" way to write
    most word.

# abbreviations

those abbreviations and acronyms are used throughout the document :

  - TAWS  
    the Traditional Arabic Writing System  
  - CvC  
    consonant + short vowel + consonant

# consonants

this is not a transliteration system, but for your convenience i've
compared the symbols of Franco to those of TAWS which we are used to -
instead of IPA for example.

| TAWS | Franco |
| ---- | ------ |
| ا    | a      |
| ء    | 2      |
| ب    | b      |
| ت    | t      |
| ث    | $      |
| ج    | g,j    |
| ح    | 7      |
| خ    | 5      |
| د    | d      |
| ذ    | 6      |
| ر    | r      |
| ز    | z      |
| س    | s      |
| ش    | 4      |
| ع    | 3      |
| غ    | 8      |
| ف    | f      |
| ق    | 9      |
| ك    | k      |
| ل    | l      |
| م    | m      |
| ن    | n      |
| ه    | h      |
| و    | w      |
| ى    | y      |

## Digraphs

Digraphs are two letters that behaves as a unit and is not the sum of
its parts, e.g. "ch", "sh", "kh" and "th" in English.  
Digraphs are basically an ugly hack to the English writing system, when
used with other languages which uses them a lot, as in our case, it
makes words longer and harder to read, specially for repeated letters,
i.e. shadda.

| English     | Franco |
| ----------- | ------ |
| kh          | 5      |
| sh          | 4      |
| gh          | 8      |
| dh          | D      |
| th in throw | $      |
| th in the   | 6      |

## don't start with "2"

since in most Latin languages e,o,a in the beginning of words contain
the "2" in their pronounciation, we can borrow this property.

| example | should be |
| ------- | --------- |
| 2ana    | ana       |
| 2AMAR   | AMAR      |
| 2egry   | egry      |
| 2oddaam | oddaam    |
| 2e2laam | e2laam    |
| 2ul     | ul        |

# velarization

consonants in many languages can be **velarized**, velarization is a
property that gives a duller sound to the consonant which also affects
the neighboring vowels and consonants. in the egyptian language/dialect
we often prefer to have an entire veralized syllable, so for convenience
and readiability (but not necessarily phonetically accurate) we assume
that any vowel between velarized consonants is also veralized (the
nucleus of the syllable).

from wikipedia

> Velarization is a secondary articulation of consonants by which the
> back of the tongue is raised toward the velum during the articulation
> of the consonant.

in TAWS "ض ط ظ ص" are examples of veralized consonants that have a
character representation, but in reality other consonants such as
"l,r,b,m" can also be velarized. those consonants are assigned capital
letters in compliant Franco.

since Capital letters doesn't have any phonetic differences than lower
case letters in all alphabetic writing systems, it's perfect to
represent velarized consonants in compliant Franco (and long vowels
also).

one great thing about this representation is its backward compatibility,
by backward compatibility i mean if someone wrote ط as T instead of t,
it won't effect the interpretation of the word if the receiver doesn't
know this mapping. we basically lose nothing - *kinda* - but we gain
more clarification and disambiguation.

### importance of case sensitivity

without those we have no distinction between many words, for example:

  - fos7a and foS7a  
  - bass and baSS  
  - 7aZZ and 7azz  
  - GAARy(my neighbor) and gaary (current)  
  - garraa7 and gaRRAA7  
  - etrabbeet and eTRABBeet  
  - SAAB and saab  
  - mafRUD and mafrud  
  - enSef and ensef  
  - DALL and dall  
  - BA3D and ba3d  
  - TAAR and taar  
  - BAAT and baat  
  - DAHR and dahr

## what we lose

we obviously lose capitalization of names in Franco text, which is not
used already.

# diacritics and vowels

## short vowels

the table below shows the basic diacritics transliterations.

|             |        |              |
| ----------- | ------ | ------------ |
| traditional | Franco | Unicode name |
| َ           | a      | FATHA        |
| ُ           | o      | DAMMA        |
| ِ           | e      | KASRA        |

## long vowels

|             |        |              |
| ----------- | ------ | ------------ |
| traditional | Franco | Unicode name |
| ا + َ       | aa     | FATHA + ALEF |
| و + ُ       | u      | DAMMA + WAW  |
| ى + ِ       | i      | KASRA + YEH  |

there is also vowels that can't be expressed by TAWS, as traditional
Arabic has no such vowels in its inventory. for those we use "ee" and
"aa"

| diacritic | examples           |
| --------- | ------------------ |
| ee        | leeh (why), la2eet |
| oo        | moot (death), noom |

### importance of long vowels

again, without those we have no distinction between lots of words, for example:

  - zaman and zamaan  
  - men and min  
  - 7ARAM and 7ARAAM  
  - malak, malaak, maalak

### why we need new vowels not in TAWS

the traditional system has no way to resolve the difference between for
example:

  - moot and mut  
  - kun and koon  
  - ru7 and roo7  
  - TIR and TEER  
  - betu3 and betoo3  
  - din and deen  
  - fu2 and foo2

### more examples

for didactic purposes someone may want more examples.

1.  ee
    
      - yareet  
      - been el-beneen  
      - ee (what)  
      - leela  
      - 8eer  
      - 4ee2  
      - feen  
      - etneen, meteen, toffa7teen, etc.  
      - la2eet, 7abbeet, geet, etc.  
      - 3eneek, regleek, edeek, etc.  
      - 3eneeha, regleeha, edeeha, etc.

2.  oo
    
      - 4ook  
      - 4oo2  
      - dool  
      - loola  
      - Soom  
      - loon

# shadda

shadda in TAWS is a diacritic that is phonetically equivalent to a
repeated letter. in Franco it is represented by - yeah, you guessed it -
a repeated letter, e.g. YALLA, ba7ebbek, kollo.

people with poor Franco often omit the second letter causing one of the
biggest sources of ambiguity in mainstream Franco text, as omitting the
second letter normally yields a different word. try to convince your
wife that the message "hagElak bel-MaRa" she found on your phone is
supposed to be "hagElak bel-MaRRa" to know how important this is. i 
can't emphasize more that the second letter is not optional and text
compliant to this spec should always write the shadda appropriately
wherever it appears.

examples:

  - 4adda  
  - howwa  
  - heyya  
  - lessa  
  - 5omsomeyya  
  - 9essa  
  - mosta3edda

# The hyphen

the hyphen, i.e. "-", has three use cases:

  - after the definite article  
  - when we want to emphasize that two characters should not be
    interpreted as a digraph. this occurs a lot in the "sh" and "th"
    sequence. for example: sme3t *sot-ha*, byet-hayya2lak, as-hal,
    btet-haz  
  - to fit English words in Arabic grammer like: aa3ed *ba-chill*, 3reft
    a-configure el-btA3.

# the definite article

the definite article in compliant Franco is not as simple as "the" in
English or "-ال" in TAWS. generally it can appear as "el-…", "l-…",
"eX-X…" or "X-X…"(where X represents on of the sun letters discussed
*here*).

for programmers, this Emacs-style regular expression will match all
possible forms a definite article can take in compliant Franco:

``` example
e?\(?:l\|\([tT$6dDrzZnsS4kg]\)\)-\1?
```

## sun letters

some words start with letters called sun letters (shown below) that has
the effect of turning the "l" to a copy of itself, i.e. shadda. for
example *el naharda* should be written as *en-naharda* like how it's
actually pronounced

some examples:

| letter | example                |
| ------ | ---------------------- |
| t      | et-tegaah waa7ed       |
| T      | SOLTAN eT-TARAB        |
| $      | e$-$a9AFA el-3ARABEYYA |
| 6      | wa9t e6-6orwa          |
| d      | omm ed-donya           |
| D      | el-wa2t eD-DAAYE3      |
| r      | ya de7ket eR-ROMMAAn   |
| z      | ez-zaman TAWIl         |
| Z      | eZ-ZAAher keda         |
| n      | ER-Rakk 3an-neyya      |
| s      | zayy es-soKKAR         |
| S      | eS-SO7AB fe agaaza     |
| 4      | 3ala add e4-4oo2       |
| k      | fek-konaafa            |
| g      | eg-gee4 we4-4ORTA      |

## moon letters

moon letters are straight forward, they are not sun letters and they
don't touch the "el".

examples:

  - el-lo8a  
  - el-3ammeyya  
  - el-MASREYYA  
  - el-9AhERA  
  - el-ward  
  - el-balady  
  - w keda..

## to "e" or not to "e"

that is the question. the rule is similar to what's described later in
*shortening*. it depends on the preceding word, if it ends with "a" or
"o", the e is ommited. for example:

  - ana l-awwal wana l-aa5er  
  - 3ala l-maa4y  
  - lessa d-donya b 5eer  
  - yabo r-reggaala

# prepositions

| TAWS | Franco | example             |
| ---- | ------ | ------------------- |
| ب    | b/be   | b we44 reglak       |
| و    | w/we   | a7la w a7la         |
| \-ل  | l/le   | a4ky l min          |
| في   | f/fe   | kalaam fe kalaam    |
| على  | 3ala   | 3ala maagy          |
| من   | men    | 5o44 men hena       |
| ف    | fa     | konn fa yakun       |
| اللى | elly   | elly hnaak da       |
| ما   | ma     | 3omrena ma hanerga3 |

for description of the cases where the e is removed from be/we/le/fe,
see *shortening*.

## prepositions compound with definite article.

| traditional | Franco | example                   |
| ----------- | ------ | ------------------------- |
| من ال       | mel    | mek-ko4k                  |
| ما ال       | mal    | tamAm TOl mal-balad tamAm |
| عال         | 3al    | 3al-mA4y                  |
| وال         | wel    | bel-yoom wel-yoomeen      |
| لل          | lel    | Ray7a lel-banAt           |
| في ال       | fel    | fek-konAfa                |
| ب ال        | bel    | bel-habal                 |

those prepositions inherit the same rules of the definite article, by
that i mean for example "fel-konAfa" should be written "fek-konAfa".

## demonstrative pronouns

| traditional | Franco | example       |
| ----------- | ------ | ------------- |
| دي          | de     | el-betA3a de  |
| ده          | da     | el-betA3 da   |
| دول         | dool   | el-betO3 dool |

# shortening

in the Egyptian dialect/language, we tend to not pronounce the first
occurrence of short vowel in some words, for example sometimes we say
"kfaaya" and sometimes we say "kefaaya", in this section i will discuss
this phenomena. all the conditions in this section also applies to
prepositions be/we/le/fe.

## conditions for shortening

whether shortening will take place or not is governed by the ending of
the preceding word, that is, if the ending of the preceding word is one
of the following three cases, the vowel is deleted,

### ends with a vowel(e,o,a), w or y.

the most occuring case is if the preceding word ends with a vowel, for
example we say "kefAya keda" and we say also "keda kfAya".

examples :

  - ana ktir  
  - ta3aala hnaak  
  - ya 5SAARA  
  - ana ndemt  
  - mahma kbert  
  - alby m3aak  
  - ta3aalu nnaam

### ends with two consecutive consonants

another case where the vowel is deleted, is when the preceding word ends
with two consecutive consonants like "4oft", "", "esta7melt".. etc, for
example:

  - 4oft ktir  
  - ro7t l3ebt  
  - 4a3r TWIL  
  - 4e3r kwayyes  
  - la7m r5IS  
  - 3e4t snin  
  - 7elm kbir

you may have noticed that this case is reducible to the first case,
since we can't pronounce more than two consecutive consonants (the two
from the end of the word and the first of the following) we add a very
short vowel - called epenthetic vowel - at the end of the first word to
make it pronounceable, so it becomes "4ofte ktEr" which is exactly the
first case.

this topic is actually more complicated than that, but most of the time
it's clear for the Egyptian speaker which way to go, don't think about
it too much.

please note that in searching franco text we should take into
consideration both writings, for example this
[regex](https://duckduckgo.com/?q=what+is+regex&ia=web) "ke?tir" will
match every instance of the word regardless of whether shortening
happened or not.

# ending shadda

in compliant Franco some words must end with shadda for reasons
discussed *here*, this shadda appears in three cases (or two actually).

## CvC

for words that has the shape of (consonant + short vowel + consonant)
like "7OR" for instance, the last consonant is written as if there a
shadda at the end, "7ORR".

examples :

  - 7ORR  
  - 7add  
  - hezz  
  - bass  
  - zayy  
  - koll  
  - morr  
  - sett  
  - foll  
  - TOLL  
  - 3akk  
  - fann  
  - lakk  
  - 3amm

the middle vowel must be a short one, for example "kaan" is not
pronounced "kaann".

## something + stop + CvC

some words doesn't have the shape of CvC, but ends with it preceded by
brief stop, for example "haylef", those words are pronounced like
"hay.lef" where the dot represent the brief stop. this is practically
equivalent to pronouncing it as two separate words. here also the shadda
is added by the same means we added it to "leff".

examples:

  - a7ebb  
  - ye7ebb  
  - ma3le44  
  - ka2enn, akenn  
  - AMARR  
  - momell  
  - betmorr

note that the stop before the cvc is mandatory for the shadda to appear,
for example "la2et" ends with CvC but the stop isn't there and so the
shadda.

## (a,o,e) + consonant

if you remember from the *don't start with "2"* section, words that
start with "a","o" or "e", when pronounced they begin with a hidden "2",
so "omm" in reality has the shape of CvC, that is, the first consonant
is the hidden "2", the second vowel is "o" and the third consonant is
"m", which is exactly the first case.

examples:

  - omm  
  - ABB  
  - A55  
  - add (add ed-donya)  
  - OTT  
  - ayy  
  - all (el-waga3 all 4wayya)

## rationale behind the shadda at the end

you may ask the following: what's the problem with writing it without
the shadda like "7or" or "bas" since there is no ambiguity the shadda
resolves. for two reasons:

1.  the reality is that most people now write unreadable Franco, and
    most people are used to read unreadable Franco, this caused
    short/long vowel blindness. for example a word like "sab" will be
    interpreted by most people as "saab", but "sabb" will be easier for
    them to read  
2.  the shadda actually exists if there is a following word, for example
    "sabb din". when you pronounce it you will notice a very short "e"
    after "sabb", it will sound something like "sabbe din".  

3)consider this sentence - without the shadda at the end - "haylef ylef
w yerga3ly", if you pronounced it in Egyptian Arabic, you will observe
two things:

1.  you shorten "yelef" so that it becomes "ylef" and you shorten "we"
    becoming "w"  
2.  you pronounce a shadda in both "haylef" and "ylef"  

but by the rules of shortening the shortening in "yelef" and "we"
shouldn't be there, since the preceding words "haylef" and "ylef"
respectively doesn't end by a vowel nor a two consonants, but if we
wrote explicitly the shadda observed by pronunciation, the second rule
of shortening apply (the preceding word ends with two consonants), which
explains why the shortening happens. so writing the sentence like this
"hayleff yleff w yerga3ly" just solves every thing.

# Assimilation

Assimilation here is a term for sound changes that occur within a word
to ease pronunciation, for example "ganby" becomes "gamby".  
not all writing system reflect assimilation in its orthography, but
since this writing system relies heavily on phonetics, and wants to be
predictable and consistent, i choose to reflect it, so the "right" way
to write, e.g. "zanby" is "zamby", "anbuba" is "ambuba"

# general notes

## Arabic names

Arabic names should not be written in Franco, simply because no one has
the right to decide how a name is pronounced other than the name holder
himself, but it's ok to write a name in franco if you don't know how
it's pronounced.

for example: mohammed mounir not ma7ammad monir.

## e or y in the end

by specifications defined above, y and i in the end have no difference
and can be used interchangeably, for consistency we will use y. e.g.
"siby" not "sibi".

## no place for those

compliant Franco does not contain any of the following english
characters: \[q,c,x,u,p,v\], except in English words or human names.  
similarly the following sequences of characters doesn't appear in
compliant Franco: \[sh,kh,th,gh\], instead, those characters appear
hyphenated to prevent confusion, e.g. s-h,k-h,t-h. see *The hyphen*.

## additional shortening cases

in "we" the e is deleted when the following word is starts with "a,o,e"
- in addition to the normal conditions of shortening. for example in
"a4ky l'mEn w'a7ky l'mEn" the "we" is shortened despite the normal
conditions of shortening does not hold here, but it's because a7ky
starts with "a"  
examples:

  - haru7 w aagy b SOR3A  

# sample text

it's known that the beauty of a language comes from the beauty of text
it has been written in. below are different pieces of text written in
compliant Franco, that i think are beautiful.

"ek-kelma deen" by ahmed foad negm.
-----

morr ek-kalaam.. zayy el-7osaam  
YE2TA3 makaan.. maymorr  
amma el-madi7.. sahl w mori7  
ye5da3 SA7I7.. w y8orr  
wek-kelma dein.. men 8eir edeen  
bass el-wafa.. 3al-7orr

-----

## poems by mostafa ibrahem:

-----

9awaa3ed ed-dayra es-saba3a (5):

ezzaay te3raf..  
min saabe2 min gowwa ed-dayra..  
w min fiha ATA3 ATWAL ME4WAAR..  
me4 momken BARDO elly f DAHRAK..  
YETLA3 sab2ak..  
w enta elly 7MAAR ?!

-----

9awaa3ed ed-dayra es-saba3a (3):

far2 ES-SOR3AAT gowwa ed-dayra  
beenk we mabeen koll el-ma4yin  
howwa elly haye2dar YEDMANLAk  
en enta t2aabel naas tanyin

# corner cases and limitations

## searchability limiting case

due to the structure of the Egyptian dialect/language (and human
languages in general) some sentences can be pronounced in multiple ways
and the writing system can't force one way or the other.

examples:

  - "gondy f gonudek" or "gondy fe gnudek"  
  - "3aayez anaam" or "3ayz anaam"

## irregularity in the ending shadda

  - "lak" in "ana lak 3ala TOl", "lakk" is another word.  
  - "men" in "men hena", "menn" is a another word.

# FAQs

## what is the problem with the traditional system?

[this article](/blog/franco/) may answer this
question, and more.

## why this guideline written in English and not in Franco?

i agree this would be a cool idea, but this is an evolving guideline, if
it is written in Franco, every update in the specification means
rewriting every thing to be compliant with itself.

## are you working on Franco to replace TAWS?

Franco is just an alternative writing system that can coexist with any
other writing system. i think Franco is very capable and has more
potential than TAWS in many situations, like writing modern Arabic
dialects and bidirectional text(mixed Arabic and English), but compliant
Franco is not yet near ready for replacing TAWS in writings such as the
Quran for example. for now we just focus on making a superior system,
and maybe we can ask this question again later.

# miscellaneous

## independent map of consonants

<pre>
| manner          | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
| --------------- | - | - | - | - | - | - | - | - |
| Plosives:       |   |   |   |   |   |   |   |   |
| \-\> unvoiced   |   |   | t |   | k | 9 |   | 2 |
| \-\>\> emphatic |   |   | T |   |   |   |   |   |
| \-\> voiced     | b |   | d |   | g |   |   |   |
| \-\>\> emphatic | B |   | D |   |   |   |   |   |
|                 |   |   |   |   |   |   |   |   |
| Fricatives:     |   |   |   |   |   |   |   |   |
| \-\> unvoiced   |   | f | s | 4 | 5 |   | 7 | h |
| \-\>\> emphatic |   |   | S |   |   |   |   |   |
| \-\> voiced     |   | v | z | j | 8 |   | 3 |   |
| \-\>\> emphatic |   |   | Z |   |   |   |   |   |
|                 |   |   |   |   |   |   |   |   |
| the R-sound     |   |   | r |   |   |   |   |   |
| \-\>\> emphatic |   |   | R |   |   |   |   |   |
|                 |   |   |   |   |   |   |   |   |
| the L-sound     |   |   | l |   |   |   |   |   |
| \-\>\> emphatic |   |   | L |   |   |   |   |   |
|                 |   |   |   |   |   |   |   |   |
| Nasals          | m |   | n |   |   |   |   |   |
| \-\>\> emphatic | M |   |   |   |   |   |   |   |
|                 |   |   |   |   |   |   |   |   |
| Semi-vowels     | w |   |   | y |   |   |   |   |
</pre>

where the numbered columns represent the place of articulation:

  - 1= with both lips  
  - 2= with the lower lip against the upper teeth  
  - 3= with the tip of the tongue against the back of the teeth  
  - 4= with the back of the tongue against the hard palate  
  - 5= with the back of the tongue against the soft palate  
  - 6= with the back of the tongue against the uvula  
  - 7= in the pharynx  
  - 8= in the glottis (glottal)
