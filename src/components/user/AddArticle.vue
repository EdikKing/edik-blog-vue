<style lang="scss">
  @import "./simplemde.css";

  a {
    outline: none;
  }

  .markdown_editor {
    /*padding: 20px;*/
  }

  .showhtml {
    padding: 50px;
  }

  .custom-block {
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
      background-color: rgba(255, 229, 100, .3);
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

    p {
      display: block;
      -webkit-margin-before: 1em;
      -webkit-margin-after: 1em;
      -webkit-margin-start: 0px;
      -webkit-margin-end: 0px;
    }

  }

  .CodeMirror, .CodeMirror-scroll {
    min-height: 400px;
    max-height: 800px;
  }

</style>
<template>
  <div>

    <form action="${U('/article/save')}" method="post" onsubmit="return checkSubmit()" class="am-form">
      <fieldset>
        <legend>新增文章</legend>

        <div class="am-form-group am-btn-group" data-am-button>
          <label class="am-btn am-btn-primary">
            <input type="radio" name="article.classify" value="1" id="option1" checked> 博客文章
          </label>
          <label class="am-btn am-btn-primary">
            <input type="radio" name="article.classify" value="2" id="option2"> 资源分享
          </label>

        </div>

        <div class="am-form-group">
          <label for="doc-ipt-email-1">标题</label>
          <input type="text" name="article.title" class="" id="doc-ipt-email-1" placeholder="文章标题">
        </div>

        <div class=" am-form-group">
          <label for="doc-ipt-email-1">文章封面</label>
          <div id="uploader-demo">
            <img src="https://dn-placeholder.qbox.me/260x170/4CD964/fff">
          </div>

        </div>


        <div class="am-form-group">
          <label for="doc-ta-1">摘要</label>
          <textarea name="article.description" rows="4" id="doc-ta-1"></textarea>
        </div>

        <div class="am-form-group">
          <label for="label">标签,多个用逗号分隔,最多五个</label>
          <input type="text" name="article.label" id="label" placeholder="文章标签" data-role="tagsinput">
        </div>

        <div class="am-form-group" v-cloak>
          <label for="articletype1">文章分类 <span class="am-icon-plus-circle" style="color: #0e90d2;cursor: pointer"></span> </label>

          <select id="articletype1" name="article.categoryid">
            <option value="a.id"></option>
          </select>
          <span class="am-form-caret"></span>
        </div>

        <div class="am-form-group">

          <label class="am-radio-inline">
            <input type="radio" name="radio1" value="1" data-am-ucheck checked>
            原创
          </label>
          <label class="am-radio-inline">
            <input type="radio" name="radio1" value="2" data-am-ucheck>
            转载
          </label>

        </div>

        <div id="radio1" class="am-form-group " style="display: none">
          <label for="doc-ipt-email-7">原文链接</label>
          <input type="text" name="article.link" class="" id="doc-ipt-email-7" placeholder="原文链接">
        </div>

        <div class="am-form-group">
          <label for="markdown_editor">内容</label>
          <div class="markdown_editor markdown-body">
            <textarea id="markdown_editor" style="display:none;"></textarea>
          </div>
        </div>

        <p>
          <button type="submit" class="am-btn am-btn-primary">提交</button>
        </p>
      </fieldset>
    </form>

  </div>
</template>

<script>
  import SimpleMDE from 'simplemde'
  import markdown from '@/lib/markdown'

  require('./inline-attachment.js')
  require('./codemirror-4.inline-attachment.js')

  export default {
    name: 'add-article',
    methods: {
      get() {
        let value = this.simplemde.value();
        // console.log(value)
      },
      html() {
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
            action: function customFunction(editor) {
              // Add your own code
              var cm = editor.codemirror;

              var text;
              var start = ":::tip 提示\n";
              var end = ":::";

              var startPoint = cm.getCursor("start");
              var endPoint = cm.getCursor("end");


              text = cm.getSelection();
              if (text == '') text = 'This is a tip'
              text += "\n"

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
        previewRender: function (md) {
          console.log(md)
          let result = markdown.render(md);
          return result;
        }
      });

      inlineAttachment.editors.codemirror4.attach(this.simplemde, {
        uploadUrl: 'http://127.0.0.1',
        progressText: '![uploading file...]()',
        urlText: '![]({filename})',
        errorText: 'Error uploading file',
        jsonFieldName: 'load',
        uploadFieldName: 'load',
        extraParams: {
          'referrer': referrer || 'default upload image',
        },
        extraHeaders: {
          'Authorization': 'Token ' + localStorage.getItem('authToken')
        },
        onFileUploadResponse: function (xhr) {
          console.log('1234')
          var result = JSON.parse(xhr.responseText),
            filename = result[this.settings.jsonFieldName];

          if (result && filename) {
            var newValue;
            if (typeof this.settings.urlText === 'function') {
              newValue = this.settings.urlText.call(this, filename, result);
            } else {
              newValue = this.settings.urlText.replace(this.filenameTag, filename);
            }
            var text = this.editor.getValue().replace(this.lastValue, newValue);
            this.editor.setValue(text);
            this.settings.onFileUploaded.call(this, filename);
          }
          return false;
        },
        onFileUploadError: function (data) {
          console.log('err', data);
        }
      });

    }
  }
</script>
