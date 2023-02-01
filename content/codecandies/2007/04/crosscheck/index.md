---
title: "Crosscheck"
date: "2007-04-05"
tags:
  - "Gefunden"
keywords:
  - "Javascript"
  - "TDD"
---

Möglicherweise sinnvolles Tool: [Crosscheck](http://thefrontside.net/crosscheck "Crosscheck Browserless Testing Framework").

> Crosscheck is an open source testing framework for verifying your in-browser javascript. It helps you ensure that your code will run in many different browsers such as Internet Explorer and Firefox, but without needing installations of those browsers. The only thing you need is a Java Virtual Machine.

Hüstel, über den reinen Testwert hinaus mag ich es aber eigentlich ganz gerne, meine Scripts in allen möglichen Browsern zu testen… solange sie funktionieren. ;) Aber:

> A difficult and unavoidable problem which plagues in-browser tests is that the host environment(window, document, etc...) is initialized only once, resulting in an implicit shared fixture, which, if care is not taken to propertly tear down after each test, can easily result in erratic tests. Crosscheck provides a fresh browser environment for each testcase, so that each test is isolated from every other.
