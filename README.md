#  smaignite
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)

* Standard compliant React Native App Utilizing [Ignite](https://github.com/infinitered/ignite)

## :arrow_up: How to Setup

**Step 1:** git clone this repo:

**Step 2:** cd to the cloned repo:

**Step 3:** Install the Application with `npm install`


## :arrow_forward: How to Run App

1. cd to the repo
2. Run Build for either OS
  * for iOS
    * run `react-native run-ios`
  * for Android
    * Run Genymotion
    * run `react-native run-android`

## :no_entry_sign: Standard Compliant

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
This project adheres to Standard.  Our CI enforces this, so we suggest you enable linting to keep your project compliant during development.

**To Lint on Commit**

This is implemented using [ghooks](https://github.com/gtramontina/ghooks). There is no additional setup needed.

**Bypass Lint**

If you have to bypass lint for a special commit that you will come back and clean (pushing something to a branch etc.) then you can bypass git hooks with adding `--no-verify` to your commit command.

**Understanding Linting Errors**

The linting rules are from JS Standard and React-Standard.  [Regular JS errors can be found with descriptions here](http://eslint.org/docs/rules/), while [React errors and descriptions can be found here](https://github.com/yannickcr/eslint-plugin-react).

## :closed_lock_with_key: Secrets

This project uses [react-native-config](https://github.com/luggit/react-native-config) to expose config variables to your javascript code in React Native. You can store API keys
and other sensitive information in a `.env` file:

```
API_URL=https://myapi.com
GOOGLE_MAPS_API_KEY=abcdefgh
```

and access them from React Native like so:

```
import Secrets from 'react-native-config'

Secrets.API_URL  // 'https://myapi.com'
Secrets.GOOGLE_MAPS_API_KEY  // 'abcdefgh'
```

The `.env` file is ignored by git keeping those secrets out of your repo.

## :open_file_folder: Related Articles
Ignite Documentation - [Ignite Wiki https://github.com/infinitered/ignite/wiki](https://github.com/infinitered/ignite/wiki)

## Config

**Facebook Login For iOS** - [React Native : Facebook SDK Login Button https://github.com/magus/react-native-facebook-login](https://github.com/magus/react-native-facebook-login)

- Run ```open node_modules/react-native-facebook-login```
- Have your react native xcode project open and drag `RCTFBLogin.xcodeproj` into your `Libraries` group.
- Select your main project in the navigator to bring up settings
- Under `Build Phases` expand the `Link Binary With Libraries` header
- Scroll down and click the `+` to add a library
- Find and add `libRCTFBLogin.a` under the `Workspace` group
- ⌘+B

Adding the Facebook SDK

- Run `open node_modules/react-native-facebook-login/FacebookSDK`
- Open your main project in xcode and right click on your project’s name in the left sidebar and select “New Group” and type in “Frameworks”.
- Select all the `.framework` files in the FacebookSDK folder and click drag them into the Frameworks folder/group you just created in xcode or highlight the Frameworks group in left sidebar and go to File > Add files to "yourProjectName" and select the `.framework` files.
- Select your main project in the navigator to bring up settings
- Under `Build Settings` scroll down to `Search Paths`
- Add the following path to your `Framework Search Paths`

```sh
$(SRCROOT)/../node_modules/react-native-facebook-login/FacebookSDK
```

<img src="https://raw.githubusercontent.com/magus/react-native-facebook-login/master/images/framework-search-paths.png" alt="framework-search-paths" />


