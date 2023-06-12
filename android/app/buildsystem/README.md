## Android Signing configuration for release

Copy the release keystore into the `android/src/` directory and rename it to `release.keystore`.
Inside `gradle.properties`. add:

Copy the release keystore into the `android/buildsystem/` directory and rename it to `release.keystore`.  
Create a file named `keystore-release.properties` in the `android/buildsystem/` directory, this file must contain the following properties :

```
storeFile=buildsystem/release.keystore
keyAlias=
keyPassword=
storePassword=
```
