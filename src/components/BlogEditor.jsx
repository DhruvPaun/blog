import React from 'react'
import { Controller } from 'react-hook-form'
import { Editor } from '@tinymce/tinymce-react'
function BlogEditor({control,name,defaultValue=""}) {
  console.log("Editor should mount");
  return (
    <Controller name={name||"content"}  control={control} render={({field:{onChange}})=>(
        <Editor apiKey='yixy5vjnr2a6vrcmpu7gq18js35iy3510on16xjy9p9x7gkb' initialValue={defaultValue} init={{
            plugins: [
          'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
          'checklist', 'mediaembed', 'casechange', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'advtemplate', 'uploadcare', 'mentions', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown','importword', 'exportword', 'exportpdf'
        ],
        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography uploadcare | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
        }} onEditorChange={onChange}/>
    )}/>
  )
}

export default BlogEditor
