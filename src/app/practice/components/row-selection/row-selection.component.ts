import { Component, OnInit } from '@angular/core';
import { Users } from '../../mock/user.json';

@Component({
  selector: 'app-row-selection',
  templateUrl: './row-selection.component.html',
  styleUrls: ['./row-selection.component.scss']
})
export class RowSelectionComponent implements OnInit {

  users = Users;

  selectAll = false;

  constructor() { }

  selection = [];

  ngOnInit(): void {
  }


  approve(item) {
    let items = [];

    items.push(item.id);
    console.log(this.selection);

    // get another selected id and push into items

    console.log('Item for approval', items.join(','));
  }

  reject(item) {
    let items = [];

    items.push(item.id);

    console.log(this.selection);
    // get another selected id and push into items

    console.log('Item for rejection', items.join(','));
  }


  toogle(type, item) {
    if(type == 'Y') {
      this.selection.push(item.id);
    } else {
      const elemIndex = this.selection.indexOf(item.id);
      this.selection.splice(elemIndex, 1);
    }

    const checkedCount = this.users.filter((item) => {
      return item['checked'] !== false;
    }).length;

    this.selectAll = (this.users.length === checkedCount)
    // console.log(checkedCount, 'dssd');
  }

  mastertoogle(type) {
    if(type == 'Y') {
      this.users.forEach(item => {
        this.selection.push(item.id);
        item['checked'] = true;
      });
    } else {
      this.users.forEach(item => {
        item['checked'] = false;
        this.selection = [];
      });
    }
  }

}
