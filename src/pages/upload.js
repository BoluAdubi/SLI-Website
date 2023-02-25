import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Output from '../components/output/output.js';



export default function Upload(props) {
    return (
      <>
        <UploadManager />
        <Output />
      </>
    );
  }

/**
 * Get video from form and call 'UploadToGCP'
 * @returns 
 */
function UploadManager() {
  // useForm will connect our html form to react using '@react-hook-form'
  const { register, handleSubmit, formState, reset, watch, formState: { errors } } = useForm({ mode: 'onChange' });
  const { isValid, isDirty } = formState;

  const UploadToGCP = async ({ video }) => {
    // await
    // upload to gcs
  }
  return (
    <main>
     
      <h1>UPLOAD PAGE</h1>
      <form onSubmit={handleSubmit(UploadToGCP)}>
        <label>
          <h2>Upload a video to be interpreted</h2>
          <input type="file" name="video" className='btn-logo'>
          </input>
        </label>
        <button type="submit" value="Submit" className='btn-green'>Upload</button>
      </form>
    </main>
  );
}