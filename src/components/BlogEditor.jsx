import React from 'react'
import { Controller } from 'react-hook-form'
import { Editor } from '@tinymce/tinymce-react'
function BlogEditor({control,name,defaultValue=""}) {
  console.log("Editor should mount");
  return (
    <Controller name={name||"content"}  control={control} render={({field:{onChange}})=>(
        <Editor apiKey='0epo2ifa1s6r78z7iapr84v3b2i2jatq4o25xhsmab7dcjh8' initialValue={defaultValue} init={{
        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography uploadcare | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
        }} onEditorChange={onChange}/>
    )}/>
  )
}

export default BlogEditor
