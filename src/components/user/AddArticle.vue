<style lang="scss">
  @import "./simplemde.css";

  a {
    outline:none;
  }

  .markdown_editor {
    padding: 20px;
  }

  .showhtml {
    padding: 50px;
  }



  .custom-block{
    padding: .1rem 1.5rem;
    border-left-width: .5rem;
    border-left-style: solid;
    margin: 1rem 0;
    font-size: 16px;

    .custom-block-title {
      font-weight: 600;
      margin-bottom: -.4rem;
      line-height: 1.7;
    }

    &.tip {
      background-color: #f3f5f7;
      border-color: #42b983;
    }
    &.warning {
      background-color: rgba(255,229,100,.3);
      border-color: #e7c000;
      color: #6b5900;
      .custom-block-title {
        color: #b29400;
      }
    }
    &.danger {
      background-color: #ffe6e6;
      border-color: #c00;
      color: #4d0000;
      .custom-block-title {
        color: #900;
      }
    }

    p{
      display: block;
      -webkit-margin-before: 1em;
      -webkit-margin-after: 1em;
      -webkit-margin-start: 0px;
      -webkit-margin-end: 0px;
    }


  }

</style>
<template>
  <div>
    <div class="markdown_editor markdown-body">
      <textarea id="markdown_editor" style="display:none;"></textarea>
    </div>

    <button @click="get">获取</button>
    <button @click="html">html</button>

    <div ref="showhtml" class="showhtml markdown-body"></div>

  </div>
</template>

<script>
  import SimpleMDE from 'simplemde'
  import markdown from '@/lib/markdown'

  export default {
    name: 'add-article',
    methods:{
      get(){
        let value = this.simplemde.value();
        // console.log(value)
      },
      html(){
        let value = this.simplemde.value();
        let result = md.render(value);
        // console.log(result)
        this.$refs.showhtml.innerHTML = result
      }
    },
    mounted() {
      this.simplemde = new SimpleMDE({
        element: document.getElementById('markdown_editor'),
        toolbar: [
          'bold', 'italic', 'strikethrough',
          'heading', 'heading-smaller', 'heading-bigger',
          'heading-1', 'heading-2', 'heading-3', '|',
          'code', 'quote', 'unordered-list', 'clean-block', '|',
          'link', 'image', 'table', 'horizontal-rule', '|',
          'preview', 'guide',
          {
            name: "custom",
            action: function customFunction(editor){
              // Add your own code
              var cm = editor.codemirror;

              var text;
              var start = ":::tip 提示\n";
              var end = ":::";

              var startPoint = cm.getCursor("start");
              var endPoint = cm.getCursor("end");


              text = cm.getSelection();
              if(text == '') text = 'This is a tip'
              text+="\n"

              cm.replaceSelection(start + text + end);

              // startPoint.ch += start.length;
              // endPoint.ch = startPoint.ch + text.length;

              // cm.setSelection('123', '456');
              cm.focus();
            },
            className: "fa fa-star",
            title: "Custom Button",
          }
        ],
        renderingConfig: {
          codeSyntaxHighlighting: true
        },
        // autoDownloadFontAwesome: false,
        status: ["autosave", "lines", "words", "cursor"],
        previewRender:function (md) {
          console.log(md)
          let result = markdown.render(md);
          return result;
        }
      });
    }
  }
</script>
