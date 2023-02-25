import React from "react";
import { RecordWebcam } from "react-record-webcam";
import Output from '../components/output/output.js';
  
const Record = () => {
  return (
    <div>
      <h1>Record your own video</h1>
      <RecordWebcam/>
      <Output/>
    </div>
  );
};
  
export default Record;