---
layout: essay
type: essay
title: "My Journey with JavaScript and Athletic Software Engineering"
# All dates must be YYYY-MM-DD format!
date: 2023-08-30
published: true
labels:
  - Software Engineering
  - Learning
---

<img width="100px" class="rounded float-start pe-4" src="../img/java_journey/journey.jpg">


In the vibrant spectrum of coding, my journey with JavaScript began in 2007, somewhat serendipitously, as I fiddled with Myspace enhancements and dabbled in WordPress. Back then, JavaScript felt like an accessory; a scripting language I could conveniently copy-paste to give my HTML that dash of dynamism.

Fast forward to today, and the landscape has dramatically shifted. The introduction of ES6, with its array of features, has transformed JavaScript from that 'copy-paste' tool to a language that demands a deeper understanding. While ES6 opened doors to new possibilities, it also came with its own set of complexities. I often find myself in situations where, despite its syntax being reminiscent of C/C++, a piece of code just refuses to work. And more often than not, my refuge has been pasting it into chat platforms like ChatGPT, posing the perennial coder's question, "What's wrong with this?"

Here’s an example to highlight the syntactical differences between C++ and JavaScript:

// C++ Code
#include<iostream>
using namespace std;
int main() {
   cout << "Hello, World!";
   return 0;
}


// JavaScript Code
console.log("Hello, World!");


While at first glance, the syntax of C++ and JavaScript might appear somewhat analogous, the underlying semantics and the language's intrinsic behavior differ quite extensively. One of JavaScript's standout features is its first-class functions:

function greeting(name) {
    return "Hello, " + name + "!";
}

// Assigning a function to a variable
const greetJohn = greeting;
console.log(greetJohn("John"));  // Outputs: Hello, John!

This ability to treat functions as values, pass them as arguments, and return them from other functions brings about a degree of flexibility that's hard to match.

Moving on from the technicalities, the athletic software engineering approach introduced a different kind of challenge. The whole concept of WODs, while innovative, clashed with my personal style. I resonate better with the stillness of the night, surrounded by the familiar ambiance of my room, the comforting tap-tap of my mechanical keyboard, and a treasure trove of libraries and documentation at my fingertips. When transported from this environment to a classroom setting, anxiety becomes an unwelcome companion. Yet, outside that environment, I find the WODs appropriately challenging, a testament to their calibrated difficulty for someone starting in this realm.

In conclusion, my expedition with JavaScript and athletic software engineering has been a blend of rediscovery, challenges, and introspection. It's taught me that while tools and techniques evolve, it's the coder's adaptability and perseverance that truly matter.