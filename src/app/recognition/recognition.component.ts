import { Component, OnInit } from '@angular/core';
import { MLKitCustomModelResult } from "nativescript-plugin-firebase/mlkit/custommodel";

@Component({
  selector: 'ns-recognition',
  templateUrl: './recognition.component.html',
  styleUrls: ['./recognition.component.css']
})
export class RecognitionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onCustomModelResult(scanResult: any): void {
    const value: MLKitCustomModelResult = scanResult.value;
    //this.labels = value.result;
    console.log(value);
  }

}
