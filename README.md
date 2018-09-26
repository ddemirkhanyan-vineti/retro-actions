# Fun Actions

An open platform to write down, manage and complete action items from retros.

- [Introduction](#introduction)
- [Running the app](#running-the-application)
- [Running the tests](#running-the-tests)
- [Issue management](#issue-management)

## Introduction

FunActions is an open platform for recording actions items from a retro followin up on them. It provides an integration with Slack to let people easily track their action items and mark done upon completion.

## Running the application

1. Install Yarn
2. Run ```yarn install```
2. Run ```yarn start``` (inside the project folder)
3. Point your browser to [http://localhost:3000/](http://localhost:3000/)

## Running the tests

1. Run ```yarn test```

## Issue management

We use GitHub to track all of our bugs and feature requests. Each issue we track has a variety of metadata:

- **Epic**. An epic represents a feature area. Epics are fairly broad in scope and are basically product-level things.
Each issue is ultimately part of an epic.

- **Milestone**. Each issue is assigned a milestone. This is 0.1, 0.2, ..., or 'Nebulous Future'. The milestone indicates when we
think the issue should get addressed.

- **Priority/Pipeline**. Each issue has a priority which is represented by the Pipeline field within GitHub. Priority can be one of
P0, P1, P2, or >P2. The priority indicates how important it is to address the issue within the milestone. P0 says that the
milestone cannot be considered achieved if the issue isn't resolved.