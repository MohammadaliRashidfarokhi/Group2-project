# Project structure

## Components

This directory contains all the REUSABLE components used in the application. Each component is a separate directory, which contains the component file and its styles.
In case if you create specific component for a page, it should be placed in the same directory as the page.

Examples of components that are reusable:
Text input
Header
Modal window

Examples of components that are specific for a page:
Login form
Profile avatar

## Config

This directory contains all the configuration files used in the application. It includes configuration for router, API and supabase client.

## Lib
Contains automatically generated files for example from Shadcn.

## Model

This directory contains all generic types used in the application. It includes types for API responses, user data and other types used in the application.
These types are then imported in the components and other files where they are used.

## Modules

This directory contains all the modules used in the application. Each module is a separate directory, which contains set of pages and their components.


## Static

This directory contains all the static files used in the application. It includes images, fonts, etc.

## Store

This directory contains all the global state management files used in the application. It includes store files for Zustand.
Example of this is for example user store, which contains information, whether user is logged in or not.

## Utils

This directory contains all the utility files used in the application. It can include files for date formatting, string manipulation, etc.
Also contains React specific utility functions (hooks).


