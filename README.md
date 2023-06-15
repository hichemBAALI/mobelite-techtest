# Techtest App

This is the Techtest app project.

## Architecture

This is a react native application is based on the feature development model.

The goal of this architecture is to have the least possible coupling between components, and being able to easily replace them when needed.

Actually, the code is with typescript
and mostly depends on the different libraries listed in the [package.json]

## Setup

- Clone the project
- run `npm install` or `yarn install`
- iOS: run `cd ios && pod install && cd ..`

### Build

- Android: `yarn run-android-[env]`
- iOS: `yarn run-ios-[env]`
- Ex: To build the app with the development env on Android just run:
  `yarn run-android-stg` for debug
  OR
  `run-android-dev-assemble` for release

## Git workflow

[A successful git branching model](http://nvie.com/posts/a-successful-git-branching-model/)

The different kinds of branches:

- main - production ready versions.
- develop - latest new design progression

## Code Style

We use the eslint-prettier + prettier config with a custom code style profile.

## Android Signing configuration for release

Copy the release keystore into the `android/app/` directory and rename it to `release.keystore`.

Create a file named `keystore-release.properties` in the `android/buildsystem/` directory, this file must contain the following properties :

```
storeFile=release.keystore
keyAlias=
keyPassword=
storePassword=
```

Ask your admin to have the real release file and credentials.

[Give Him A Fist Bump](https://github.com/hichemBAALI)
