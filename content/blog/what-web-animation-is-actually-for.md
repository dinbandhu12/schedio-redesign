---
title: "What Web Animation Is Actually For"
excerpt: "Most websites animate the wrong things. Here's how to tell the difference between motion that communicates and motion that just moves."
date: "2024-03-10"
category: "Development"
coverImage: "/images/showcase/img-12.png"
author: "Schedio"
readTime: "5 min read"
featured: false
---

Animation on the web has never been easier to implement. Framer Motion, GSAP, CSS transitions — the tooling is excellent. And yet most animated websites feel worse than they would without any animation at all.

The problem is not execution. It is intent.

## Two types of motion

There is motion that communicates and motion that performs. The distinction sounds simple. In practice, the line is easy to cross without noticing.

**Communicative motion** tells the user something they could not have known without it: where an element came from, where it went, what state a UI is in, what the relationship between two things is. It reduces cognitive load by making the interface's logic visible.

**Performative motion** exists to demonstrate capability or create the impression of polish. It does not carry information — it carries affect. A hero section that takes 1.8 seconds to fully reveal itself before the user can read anything is performative. The animation is for the designer, not the user.

## The memory problem

Users notice motion the first time they encounter it. After that, it becomes invisible — part of the expected environment. This is useful when motion is communicative: the user internalises the system's logic. It is a problem when motion is performative: the user still waits through the same 1.8-second reveal on every subsequent visit, but receives no value from it.

Design for the twentieth use, not the first. The question is not "does this animation feel impressive?" but "will I still want to see this on the forty-seventh page load?"

## Principles that hold

A small set of animation principles consistently produce better results:

**Animate the transition, not the element.** Motion should describe a change of state, not draw attention to an element that is simply sitting there. Entrance animations for static content usually fail this test.

**Match duration to distance.** A small element moving a small distance should move quickly. A large layout shift warrants more time. Uniform durations across all animations feel robotic.

**Ease out almost always.** Elements that ease out — fast at the start, slow at the end — feel like they belong to the page. Elements that ease in feel like they're still arriving.

**Reduce on scroll.** Scroll-driven animations should enhance reading, not compete with it. If the user is aware of the animation while trying to read, the animation has failed.

## The right question

Before adding any animation to a page, ask one question: *what does the user know after seeing this that they did not know before?*

If the answer is "nothing — it just looks good," remove it. The page will be better without it.

If there is a real answer — the user now understands where the menu came from, what is selected, how the page is structured — keep it. Make it as efficient as possible. Then stop.

The best animated interfaces are ones where users, asked to describe the site afterwards, cannot name a single animation. They just say it felt smooth and easy to use. That is the goal.
