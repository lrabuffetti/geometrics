import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  public jobs = [];

  constructor() { }

  ngOnInit() {
    this.jobs = [
      {
        title: 'Droptek',
        position: 'Sr Frontend Developer',
        project: 'iMactics',
        start: 'Dec 2015',
        end: 'Feb 2017'
      },
      {
        title: 'Globant',
        position: 'Sr Frontend Developer',
        project: 'Disney World, South west Airlines',
        start: 'Feb 2013',
        end: 'Dec 2015'
      },
      {
        title: 'Clarika',
        position: 'SSr Frontend Developer',
        project: 'Lekons, Delfos, Lectus, CTD Communications',
        start: 'July 2012',
        end: 'Feb 2013'
      },
      {
        title: 'Clarika',
        position: 'SSr Frontend Developer',
        project: 'Lekons, Delfos, Lectus, CTD Communications',
        start: 'July 2012',
        end: 'Feb 2013'
      },
      {
        title: 'Excedesoft',
        position: 'C, C++, PHP, Js Developer',
        project: 'Heard About, Kaiser Quotes',
        start: 'Apr 2009',
        end: 'July 2012'
      }
    ]
  }

}
