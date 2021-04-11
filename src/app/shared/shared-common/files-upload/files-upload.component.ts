import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'nicico-files-upload',
  templateUrl: './files-upload.component.html',
  styleUrls: ['./files-upload.component.scss']
})
export class FilesUploadComponent implements OnInit {

  @Input() files: FileList | any;

  constructor(
  ) {
  }

  ngOnInit(): void {
  }

  displayName(file: File): string {
    if (file) {
      const fileName = `${file.name.slice(0, file.name.lastIndexOf('.'))}`;
      return fileName.length < 15 ? fileName : `${fileName.slice(0, 10)} ... ${fileName.slice(-5)}`;
    }
    return '';
  }

  displaySize(file: File): string {
    if (file) {
      if (file.size > 1000000) {
        return `${file.size / 1000000} MB`;
      } else if (file.size > 1000) {
        return `${file.size / 1000} KB`;
      } else {
        return `${file.size} B`;
      }
    }
    return '';
  }

}
