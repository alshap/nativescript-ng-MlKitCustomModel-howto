# How to create object recognition on MlKit 

**!If something is working not such as expected, check app files**
Most common problems:
1. Custommodel path not added in webpack.config.js(line 275)
2. package.json versions incompatibility
3. firebase.nativescript.json config is wrong(mlkit settings is false)
4. google.services.json is not proper
5. In app.gradle should be options
6. If 
<<Unable to apply changes on device: R58MB2JGL0E. Error is: Socket connection timed out..>>
issue happens --tns run android --log trace and check versions compability..mostly problem in android app version or android sdk version
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
**Application run and debug**
1. Check if available connected devices/emulators on
```
tns device
```
2. App run, build and debug in real time
```
tns run android
```
3. If after plugin add vulnerabilities are found it is better to make audit
```
npm audit fix
```
**How to create this application step by step

## 1. Create Nativescript Angular project
Firstly we should create a blank nativescript-angular project and create necessary pages.
```
tns create CustomModelRecognition --ng
```
Add android platform
```
tns platform add android
```
Delete not necessary files(sample page)

Add definitions to prevent some errors
```
npm i @types/jest
npm i @types/mocha
```
## 2. Pages generation
Firstly we need to install Angular CLI for page generation. Doc about CLI [**Angular CLI**](https://docs.nativescript.org/angular/tooling/angular-cli)
```
npm i -g @angular/cli
npm i -g @nativescript/schematics
```
Then it is possible to generate components/services/routes/pipes easily using commands

Add two pages(main page and object recognition page)
```
ng generate component main
ng generate component recognition
```

## 3. Customization and routing
On main page we need a route to recognition page via button, so button is generated with page generation.
We need to add pages to app-routing.module.ts
```
import { MainComponent } from "./main/main.component";
import { RecognitionComponent } from "./recognition/recognition.component";

const routes: Routes = [
    { path: "", redirectTo: "/main", pathMatch: "full" },
    { path: "main", component: MainComponent },
    { path: "recognition", component: RecognitionComponent }
];
```

In main.component.html change button content and add routing
```
<Button text="Start recognition" [nsRouterLink]="['/recognition']" class="btn btn-primary"></Button>
```

## MlKit object recognition

# Configs

Firstly, we need to add library and set up some configs
```
nativescript plugin add nativescript-plugin-firebase
```
After installation appears config set up. We need following settings. These settings will be in **firebase.nativescript.json**
```
{
    "using_ios": false,
    "using_android": true,
    "analytics": false,
    "firestore": false,
    "realtimedb": false,
    "authentication": false,
    "remote_config": false,
    "performance_monitoring": false,
    "external_push_client_only": false,
    "messaging": false,
    "in_app_messaging": false,
    "crashlytics": false,
    "storage": false,
    "functions": false,
    "facebook_auth": false,
    "google_auth": false,
    "admob": false,
    "dynamic_links": false,
    "ml_kit": true,
    "ml_kit_text_recognition": false,
    "ml_kit_barcode_scanning": false,
    "ml_kit_face_detection": false,
    "ml_kit_image_labeling": false,
    "ml_kit_object_detection": true,
    "ml_kit_automl": true,
    "ml_kit_custom_model": true,
    "ml_kit_natural_language_identification": false,
    "ml_kit_natural_language_translation": false,
    "ml_kit_natural_language_smartreply": false
}
```

Change app.gradle settings (projectname\App_Resource\Android\app.gradle)

Should be as following
```
android {
  defaultConfig {
  	applicationId "CustomModelRecognition" //specify with your application name 
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
```

Also we need connect our project to Firebase using **google-services.json** file.
To generate this file create [**Firebase**](https://console.firebase.google.com/) project
Then add application to project on platform Android.
After that firebase generates google-services.json for project.

# Custommodel

