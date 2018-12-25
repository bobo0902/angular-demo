import { Component, OnInit } from '@angular/core';

let that;

@Component({
  selector: 'form-tinymce-simple',
  templateUrl: './form-tinymce-simple.component.html',
  styleUrls: ['./form-tinymce-simple.component.less']
})
export class FormTinymceSimpleComponent implements OnInit {
  dataModel;
  public tinyMceSettings = {
    skin_url: './assets/tinymce/skins/lightgray',
    codesample_content_css: './assets/themes/prism.css',
    inline: false,
    height: 320,
    // tslint:disable-next-line:max-line-length
    plugins: 'print preview fullpage searchreplace autolink directionality code visualblocks visualchars fullscreen image media template table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount spellchecker imagetools media  link contextmenu colorpicker textpattern',
    // tslint:disable-next-line:max-line-length
    toolbar1: 'formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat | mybutton',
    image_advtab: true,
    templates: [
      { title: 'Test template 1', content: 'Test 1' },
      { title: 'Test template 2', content: 'Test 2' }
    ],
    setup: function (editor) {
      editor.addButton('mybutton', {
        text: '自定义按钮',
        icon: false,
        onclick: function (event) {
          editor.insertContent(`&nbsp;<b>查看控制台!</b>&nbsp;`);
          that.click(event);
        }
      });
    }
  };

  click(event) {
    console.log(event);
    console.log(this.dataModel);
  }
  constructor() { }

  ngOnInit() {
    that = this;
  }

}
