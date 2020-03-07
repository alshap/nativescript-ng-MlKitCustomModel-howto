# How to create object recognition on MlKit 

**!If something is working not such as expected, check app files**
Most common problems:
1. Custommodel path not added in webpack.config.js(line 275)
2. package.json versions incompatibility
3. firebase.nativescript.json config is wrong(mlkit settings is false)
4. google.services.json is not proper
5. In app.gradle should be options
```
android {
  defaultConfig {
        applicationId "qwerty" //replace with the package_name in google-services.json =
        minSdkVersion 17
        versionCode 7
        versionName "1.0"
        multiDexEnabled true
    }
  aaptOptions {
    additionalParameters "--no-version-vectors"
	noCompress "tflite"
  }
}
}
```

**How to create this application step by step

# 1. Create blank nativescript project
Firstly we should create a blank nativescript-angular project and create necessary pages.
```
tns create CustomModelRecognition --ng
```
